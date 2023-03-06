import 'antd/dist/antd.css';
import { AppLayout } from 'assets/core/containers/AppLayout/AppLayout';
import 'assets/core/i18n';
import { BrowserRouterBehavior } from 'assets/core/router/BrowserRouterBehavior';
import { AppStore } from 'assets/stores/AppStore/AppStore';
import 'assets/styles/index.scss';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const App = observer(() => {
    useEffect(() => {
        AppStore.init();
    }, []);

    return (
        <BrowserRouter>
            <BrowserRouterBehavior />
            <AppLayout />
        </BrowserRouter>
    );
});
