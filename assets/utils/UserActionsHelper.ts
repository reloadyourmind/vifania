import React from 'react';

type ActionTypeDefinitionOnClick = (() => void) | (() => Promise<void>);

export type ActionDefinition = {
    key: string;
    label?: React.ReactNode;
    onClick?: ActionTypeDefinitionOnClick;
    disabled?: boolean;
    hidden?: boolean;
    primary?: boolean;
};
