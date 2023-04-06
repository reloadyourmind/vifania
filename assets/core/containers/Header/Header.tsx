import { Button, Layout, Space } from 'antd';
import { AppMenu } from 'assets/core/containers/AppMenu/AppMenu';
import { Logo } from 'assets/core/containers/Logo';
import { DonationDialog } from 'assets/pages/IndexPage/Dialogs/DonationDialog';
import { t } from 'i18next';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

export const Header = observer(() => {
    return (
        <StyledHeader>
            <StyledSpace size={10} direction="horizontal">
                <StyledLogo>
                    <Logo />
                    <StyledLogoText>
                        {t('Component.Header.Title', 'Вифания')}
                    </StyledLogoText>
                </StyledLogo>
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
`;

const StyledSpace = styled(Space)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
`;

const StyledLogoText = styled.span`
    font-weight: 600;
    font-size: 20px;
    margin-bottom: -6px;
    color: #008dd2;
`;
