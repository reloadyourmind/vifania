import { Typography } from 'antd';
import { ContentContainer } from 'assets/core/containers/ContentContainer/ContentContainer';
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
                <ContentContainer>
                    {title && <StyledTitle>{title}</StyledTitle>}
                    {children}
                </ContentContainer>
            </StyledSection>
        );
    },
);

const StyledSection = styled.section<{ backgroundColor?: string }>`
    background-color: ${(props) => props?.backgroundColor || '#f2f2f2'};
    width: 100%;
    padding: 60px 0;
`;

const StyledTitle = styled(Typography.Title)`
    font-weight: 600;
    font-size: 40px;
    line-height: 120%;
    color: #000000;
    text-align: center;
    margin-bottom: 40px !important;
`;
