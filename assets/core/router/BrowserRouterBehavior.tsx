import { AppStore } from 'assets/stores/AppStore/AppStore';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const BrowserRouterBehavior = observer(() => {
    const history = useHistory();
    useEffect(() => {
        AppStore.setHistory(history);
    }, []);

    return null;
});
