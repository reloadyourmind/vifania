import { Typography } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';

export type ContentSectionProps = {
    title?: React.ReactNode;
    backgroundColor?: string;
};

export const ContentSection: React.FC<ContentSectionProps> = observer(
    ({ children, title, backgroundColor }) => {
        return (
            <StyledSection backgroundColor={backgroundColor}>
                <StyledContent>
                    {title && <StyledTitle>{title}</StyledTitle>}
                    {children}
                </StyledContent>
            </StyledSection>
        );
    },
);

const StyledSection = styled.section<{ backgroundColor?: string }>`
    background-color: ${(props) => props?.backgroundColor || '#f2f2f2'};
    width: 100%;
`;

const StyledContent = styled.div`
    padding: 60px 0;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
`;

const StyledTitle = styled(Typography.Title)`
    font-weight: 600;
    font-size: 40px;
    line-height: 120%;
    color: #000000;
    text-align: center;
`;
