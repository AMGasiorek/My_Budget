import React from 'react';
import { withAuthorization } from '../Session/Session';

import Expenditures from '../Expenditures/Expenditures';
import Incomes from '../Income/Income';

const HomePage = () => (
    <>
        <div className="row">
            <div className="col-12">
                <h1>Widok główny aplikacji</h1>
                <p>Tutaj będzie widok główny aplikacji. Do strony mogą się zalogować tylko zarejstrowani użytkownicy.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <Incomes/>
            </div>
            <div className="col-6">
                <Expenditures />
            </div>
        </div>
    </>
);


const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);