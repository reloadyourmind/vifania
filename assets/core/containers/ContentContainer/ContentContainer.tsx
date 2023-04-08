import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';

export const ContentContainer: React.FC = observer(({ children }) => {
    return <StyledContent>{children}</StyledContent>;
});

const StyledContent = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;

    @media (max-width: 576px) {
        padding: 0 15px;
        max-width: 576px;
    }

    @media (min-width: 576px) {
        padding: 0 25px;
        max-width: 576px;
    }

    @media (min-width: 768px) {
        padding: 0 30px;
        max-width: 768px;
    }

    @media (min-width: 992px) {
        padding: 0 40px;
        max-width: 992px;
    }

    @media (min-width: 1200px) {
        padding: 0 60px;
        max-width: 1200px;
    }
`;
