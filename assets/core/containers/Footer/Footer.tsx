import { Button, Layout, Space } from 'antd';
import { UpArrowCircledIcon } from 'assets/components/Icons/Icons';
import { AppMenu } from 'assets/core/containers/AppMenu/AppMenu';
import { ContentContainer } from 'assets/core/containers/ContentContainer/ContentContainer';
import { t } from 'i18next';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

export const Footer = observer(() => {
    return (
        <StyledFooter>
            <ContentContainer>
                <StyledSpace size={10} direction="vertical">
                    <AppMenu theme="dark" />
                    <StyledLogoText>
                        {t(
                            'Component.Footer.Policy',
                            '© 2023 Copyright. Церковь «Вифания», г. Минск',
                        )}
                    </StyledLogoText>
                </StyledSpace>
                <StyledWrapper>
                    <Button
                        type="text"
                        icon={<UpArrowCircledIcon />}
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            });
                        }}
                    />
                </StyledWrapper>
            </ContentContainer>
        </StyledFooter>
    );
});

const StyledFooter = styled(Layout.Footer)`
    padding: 40px 0;
    height: 160px;
    background-color: #1f1f1f;
    width: 100%;
`;

const StyledSpace = styled(Space)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLogoText = styled.span`
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: rgba(255, 255, 255, 0.25);
`;

const StyledWrapper = styled.div`
    position: absolute;
    top: 25px;
    right: 0;

    @media (max-width: 576px) {
        display: none;
    }
`;
