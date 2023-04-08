import { Layout } from 'antd';
import { SplashScreen } from 'assets/components/SplashScreen/SplashScreen';
import { Footer } from 'assets/core/containers/Footer/Footer';
import { Header } from 'assets/core/containers/Header/Header';
import { RoutesLayout } from 'assets/core/containers/RoutesLayout/RoutesLayout';
import { AppStore } from 'assets/stores/AppStore/AppStore';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

export const AppLayout = observer(() => {
    if (!AppStore.started) {
        return <SplashScreen />;
    }

    return (
        <StyledLayout>
            <Header />
            <StyledContent>
                <RoutesLayout />
            </StyledContent>
            <Footer />
        </StyledLayout>
    );
});

const StyledContent = styled(Layout.Content)`
    background-color: #f2f2f7;
    overflow-y: auto;
`;

const StyledLayout = styled(Layout)`
    height: fit-content;
    min-height: calc(100vh);
    width: 100%;
`;
