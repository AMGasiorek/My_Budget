import React, {Component} from 'react';
import {withAuthorization, AuthUserContext,} from '../Session/Session';

import {withFirebase} from '../Firebase';


const IncomeList = ({authUser, incomes, onRemoveIncome, onEditIncome}) => (
    <div className="budgetLists">
        <ul>
            {incomes.map(income => (
                <IncomeItem
                    authUser={authUser}
                    key={income.uid}
                    income={income}
                    onRemoveIncome={onRemoveIncome}
                    onEditIncome={onEditIncome}/>
            ))}
        </ul>
    </div>
);


class IncomeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            editNumber: this.props.income.number,
        };
    }

    onToggleEditMode = () => {
        this.setState(state => ({
            editMode: !state.editMode,
            editNumber: this.props.income.number,
        }));
    };

    onChangeEditNumber = event => {
        this.setState({editNumber: event.target.value});
    };

    onSaveEditNumber = () => {
        this.props.onEditIncome(this.props.income, this.state.editNumber);
        this.setState({editMode: false});
    };

    render() {

        const {authUser, income, onRemoveIncome} = this.props;
        const {editMode, editNumber} = this.state;

        return (
            <li>
                {authUser.uid === income.userId && (
                    <span>

                        {editMode ? (
                            <input
                                type="number"
                                value={editNumber}
                                onChange={this.onChangeEditNumber}/>
                        ) : (
                            <span>
                                {income.userId}<strong>{income.number} zł</strong>
                                {income.editedAt && <span>(edytowano {income.editedAt} )</span>}
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

                {!editMode && (<button type="button" onClick={() => onRemoveIncome(income.uid)}
                                       className="smallButton__delete">usuń</button>)}
            </li>
        )
    }
}


class IncomesBase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            incomes: [],
            number: '',
            limit: 5,
        };
    }

    onChangeNumber = event => {
        this.setState({number: event.target.value});
    };

    onCreateIncome = (event, authUser) => {
        this.props.firebase.incomes().push({
            number: this.state.number,
            userId: authUser.uid,
            createdAt: this.props.firebase.serverValue.TIMESTAMP,
        });
        this.setState({number: ''});
        event.preventDefault();
    };

    onRemoveIncome = uid => {
        this.props.firebase.income(uid).remove();
    };

    onEditIncome = (income, number) => {
        const {uid, ...incomeSnapshot} = income;
        this.props.firebase.income(income.uid).set({
            ...incomeSnapshot,
            number,
            editedAt: this.props.firebase.serverValue.TIMESTAMP,
        });
    };

    componentDidMount() {
        this.onListenForIncomes();
    }

    onListenForIncomes() {
        this.setState({loading: true});

        this.props.firebase
            .incomes()
            .orderByChild('createdAt')
            .limitToLast(this.state.limit)
            .on('value', snapshot => {

                // convert incomes list from snapshot
                const incomeObject = snapshot.val();
                if (incomeObject) {
                    const incomeList = Object.keys(incomeObject).map(key => ({
                        ...incomeObject[key],
                        uid: key,
                    }));
                    this.setState({
                        incomes: incomeList,
                        loading: false
                    });
                } else {
                    this.setState({incomes: null, loading: false});
                }
            });
    }

    componentWillUnmount() {
        this.props.firebase.incomes().off();
    }

    onNextPage = () => {
        this.setState(
            state => ({limit: state.limit + 5}),
            this.onListenForIncomes,
        );
    };


    render() {
        const {number, incomes, loading} = this.state;
        return (
            <AuthUserContext.Consumer>
                {authUser => (
                    <>
                        <h2>wpływy</h2>
                        <div>
                            {loading && <div>Loading ...</div>}
                            {incomes ? (
                                <IncomeList
                                    authUser={authUser}
                                    incomes={incomes}
                                    onEditIncome={this.onEditIncome}
                                    onRemoveIncome={this.onRemoveIncome}/>
                            ) : (
                                <div>Nie wpisałeś jeszcze żadnych wpływów ...</div>
                            )}
                        </div>
                        {!loading && incomes && (
                            <button type="button" onClick={this.onNextPage} className="smallButton">załaduj
                                więcej</button>)}
                        <div className="signForms--container">
                            <form onSubmit={event => this.onCreateIncome(event, authUser)} className="signForms">
                                <input
                                    type="number"
                                    value={number}
                                    onChange={this.onChangeNumber}
                                />
                                <button type="submit" className="submitButton">dodaj wpływ</button>
                            </form>

                        </div>
                    </>
                )}
            </AuthUserContext.Consumer>
        );
    }
}


const Incomes = withFirebase(IncomesBase);


const condition = authUser => !!authUser;

export default withAuthorization(condition)(Incomes);