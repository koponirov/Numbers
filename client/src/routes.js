import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import { TablePage } from './components/TablePage';

export const useRoutes = () => {
    return (
    <Switch>
        <Route path='/table' exact>
            <TablePage/>
        </Route>
        <Redirect to='/table' />
    </Switch>
    )
}

