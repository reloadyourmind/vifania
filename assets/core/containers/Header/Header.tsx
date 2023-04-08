import { Button, Layout, Space } from 'antd';
import { AppMenu } from 'assets/core/containers/AppMenu/AppMenu';
import { ContentContainer } from 'assets/core/containers/ContentContainer/ContentContainer';
import { Logo } from 'assets/core/containers/Logo';
import { DonationDialog } from 'assets/pages/IndexPage/Dialogs/DonationDialog';
import { t } from 'i18next';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

export const Header = observer(() => {
    return (
        <StyledHeader>
            <ContentContainer>
                <StyledSpace size={10} direction="horizontal">
                    <Logo />
                    <AppMenu />
                    <Space direction="horizontal" size={30}>
                        {/* <LanguageSwitcher />*/}
                        <Button
                            type="default"
                            onClick={() => {
                                DonationDialog.render();
                            }}
                        >
                            {t('Component.Header.Btn.Donate', 'Пожертвовать')}
                        </Button>
                    </Space>
                </StyledSpace>
            </ContentContainer>
        </StyledHeader>
    );
});

const StyledHeader = styled(Layout.Header)`
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    line-height: 36px;
    padding: 0;
`;

const StyledSpace = styled(Space)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
