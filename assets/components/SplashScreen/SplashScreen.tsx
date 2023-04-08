import { Spinner } from 'assets/components/Spinner/Spinner';
import logoImg from 'assets/images/logo.svg';
import styled from 'styled-components';

export const SplashScreen = () => {
    return (
        <StyledAppSplashScreen>
            <StyledWrapper>
                <img src={logoImg} alt="logo" />
                <StyledLogo>Вифания</StyledLogo>
                <StyledTradeMark>®</StyledTradeMark>
            </StyledWrapper>
            <Spinner />
        </StyledAppSplashScreen>
    );
};

const StyledAppSplashScreen = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledLogo = styled.span`
    margin-left: 10px;
    font-weight: 600;
    font-size: 26px;
`;

const StyledWrapper = styled.div`
    color: #008dd2;
    display: flex;
    margin-bottom: 30px;

    &:hover {
        text-decoration: none;
        color: #008dd2;
    }
`;
const StyledTradeMark = styled.span`
    transform: translate(3px, -3px);
`;
