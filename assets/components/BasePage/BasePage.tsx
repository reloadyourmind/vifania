import { Layout, Typography } from 'antd';
import { BasicProps } from 'antd/lib/layout/layout';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';

export type BasePageProps = Omit<React.HTMLAttributes<any>, 'title'> & {
    title?: React.ReactNode;
    header?: React.ReactNode;
};

export const BasePage: React.FC<BasePageProps> = observer(
    ({ children, title, header, ...props }) => {
        return (
            <StyledContent {...props}>
                {title && <StyledPageTitle>{title}</StyledPageTitle>}
                {header && <StyledPageHeader>{header}</StyledPageHeader>}
                {children}
            </StyledContent>
        );
    },
);

export const StyledContent = styled<React.FC<BasicProps>>(Layout.Content)`
    max-width: 100%;
    margin: 0 auto;
    position: relative;
    padding-top: 20px;
    min-height: 200px;
    background: transparent;
`;

const StyledPageTitle = styled(Typography.Title)`
    &.ant-typography {
        margin-bottom: 20px;
    }

    &.ant-typography > .ant-row > .ant-col {
        font-size: 40px;
        line-height: 105%;
        color: #0d0f1c;
    }
`;

const StyledPageHeader = styled.div`
    position: relative;
    margin-bottom: 30px;
`;
