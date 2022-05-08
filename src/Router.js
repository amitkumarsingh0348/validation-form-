import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from './component/Form';
import Dashboard from './component/Dasboard';
import constant from './constant';


const Router = () => {
    return (
        <Routes>
             <Route exact={true} path={constant.url.home} element={<Dashboard />} />
            <Route exact={true} path={constant.url.register} element={<Form />} />
        </Routes>

    );
}

export default Router;
