import { RouterStore } from 'assets/stores/RouterStore/RouterStore';
import { observer } from 'mobx-react-lite';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

export const RoutesLayout = observer(() => {
    return (
        <StyledWrapper>
            <Switch>
                {RouterStore.routes.map((route) => {
                    const component =
                        route.available === false
                            ? NotAccessPage
                            : route.Component;

                    return (
                        <Route
                            key={route.key}
                            path={route.path}
                            exact={route.exact !== false}
                            component={component}
                        />
                    );
                })}

                <Route path="*" component={NotFound} />
            </Switch>
        </StyledWrapper>
    );
});

const NotFound = () => <div>Not found</div>;
const NotAccessPage = () => <div>Not access</div>;

const StyledWrapper = styled.div`
    position: relative;
    padding: 20px;
`;
