import React, { Component } from 'react';
import { withAuthorization, AuthUserContext, } from '../Session/Session';

import { withFirebase } from '../Firebase';


const ExpenditureList = ({ authUser, expenditures, onRemoveExpenditure, onEditExpenditure }) => (
    <div className="budgetLists">
        <ul>
            {expenditures.map(expenditure => (
                <ExpenditureItem
                    authUser={authUser}
                    key={expenditure.uid}
                    expenditure={expenditure}
                    onRemoveExpenditure={onRemoveExpenditure}
                    onEditExpenditure={onEditExpenditure} />
            ))}
        </ul>
    </div>
);


class ExpenditureItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            editNumber: this.props.expenditure.number,
        };
    }

    onToggleEditMode = () => {
        this.setState(state => ({
            editMode: !state.editMode,
            editNumber: this.props.expenditure.number,
        }));
    };

    onChangeEditNumber = event => {
        this.setState({editNumber: event.target.value});
    };

    onSaveEditNumber = () => {
        this.props.onEditExpenditure(this.props.expenditure, this.state.editNumber);
        this.setState({editMode: false});
    };

    render() {

        const { authUser, expenditure, onRemoveExpenditure } = this.props;
        const {editMode, editNumber} = this.state;

        return (
            <li>
                {authUser.uid === expenditure.userId && (
                    <span>

                        {editMode ? (
                            <input
                                type="number"
                                value={editNumber}
                                onChange={this.onChangeEditNumber} />
                        ) : (
                            <span>
                                {expenditure.userId}<strong>{expenditure.number} zł</strong>
                                {expenditure.editedAt && <span>(edytowano {expenditure.editedAt} )</span>}
                            </span>
                        )}

                        {editMode ? (
                            <span>
                                <button onClick={this.onSaveEditNumber} className="smallButton">zapisz</button>
                                <button onClick={this.onToggleEditMode} className="smallButton">reset</button>
                            </span>
                        ) : (
                            <button onClick={this.onToggleEditMode} className="smallButton__edit">edycja</button>
                        )}

                    </span>
                )}

                {!editMode && (<button type="button" onClick={() => onRemoveExpenditure(expenditure.uid) } className="smallButton__delete">usuń</button>)}
            </li>
        )
    }
}


class ExpendituresBase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            expenditures: [],
            number: '',
            limit: 5,
        };
    }

    onChangeNumber = event => {
        this.setState({ number: event.target.value });
    };

    onCreateExpenditure = (event, authUser)=> {
        this.props.firebase.expenditures().push({
            number: this.state.number,
            userId: authUser.uid,
            createdAt: this.props.firebase.serverValue.TIMESTAMP,
        });
        this.setState({ number: '' });
        event.preventDefault();
    };

    onRemoveExpenditure = uid => {
        this.props.firebase.expenditure(uid).remove();
    };

    onEditExpenditure = (expenditure, number) => {
        const { uid, ...expenditureSnapshot } = expenditure;
        this.props.firebase.expenditure(expenditure.uid).set({
            ...expenditureSnapshot,
            number,
            editedAt: this.props.firebase.serverValue.TIMESTAMP,
        });
    };

    componentDidMount() {
        this.onListenForExpenditures();
    }

    onListenForExpenditures() {
        this.setState({ loading: true });

        this.props.firebase
            .expenditures()
            .orderByChild('createdAt')
            .limitToLast(this.state.limit)
            .on('value', snapshot => {

                // convert expenditures list from snapshot
                const expenditureObject = snapshot.val();
                if (expenditureObject) {
                    const expenditureList = Object.keys(expenditureObject).map(key => ({
                        ...expenditureObject[key],
                        uid: key,
                    }));
                    this.setState({
                        expenditures: expenditureList,
                        loading: false });
                } else {
                    this.setState({ expenditures: null, loading: false });
                }
            });
    }

    componentWillUnmount() {
        this.props.firebase.expenditures().off();
    }

    onNextPage = () => {
        this.setState(
            state => ({ limit: state.limit + 5 }),
            this.onListenForExpenditures,
        );
    };


    render() {
        const { number, expenditures, loading } = this.state;
        return (
            <AuthUserContext.Consumer>
                {authUser => (
                    <>
                        <h2>wydatki</h2>
                        <div>
                            {loading && <div>Loading ...</div>}
                            {expenditures ? (
                                <ExpenditureList
                                    authUser={authUser}
                                    expenditures={expenditures}
                                    onEditExpenditure={this.onEditExpenditure}
                                    onRemoveExpenditure={this.onRemoveExpenditure}/>
                            ) : (
                                <div>Nie wpisałeś jeszcze żadnych wydatków ...</div>
                            )}
                        </div>
                        {!loading && expenditures && (<button type="button" onClick={this.onNextPage} className="smallButton">załaduj więcej</button>)}
                        <div className="signForms--container">
                            <form onSubmit={event => this.onCreateExpenditure(event, authUser)} className="signForms">
                                <input
                                    type="number"
                                    value={number}
                                    onChange={this.onChangeNumber}
                                />
                                <button type="submit" className="submitButton">dodaj wydatek</button>
                            </form>

                        </div>
                    </>
                )}
            </AuthUserContext.Consumer>
        );
    }
}


const Expenditures = withFirebase(ExpendituresBase);


const condition = authUser => !!authUser;

export default withAuthorization(condition)(Expenditures);