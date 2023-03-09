import { RoutePaths } from 'assets/core/router/RoutePaths';
import logoImg from 'assets/images/logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = () => {
    return (
        <LogoWrapper>
            <Link to={RoutePaths.index}>
                <img src={logoImg} alt="logo" />
            </Link>
        </LogoWrapper>
    );
};

const LogoWrapper = styled.div`
    width: 36px;
    margin: 0 16px;

    img {
        width: 100%;
    }
`;
