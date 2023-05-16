import { RoutePaths } from 'assets/core/router/RoutePaths';
import logoImg from 'assets/images/logo.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = () => {
    const { t } = useTranslation();

    return (
        <LogoWrapper>
            <Link to={RoutePaths.index}>
                <StyledLogo>
                    <img src={logoImg} alt="logo" />
                    <StyledLogoText>
                        {t('Component.Logo.Title', 'Вифания')}
                    </StyledLogoText>
                </StyledLogo>
            </Link>
        </LogoWrapper>
    );
};

const LogoWrapper = styled.div`
    img {
        width: 100%;
    }
`;

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
`;

const StyledLogoText = styled.span`
    font-weight: 600;
    font-size: 20px;
    margin: 0 12px;
    color: #008dd2;
`;
