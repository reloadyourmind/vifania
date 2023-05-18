import { GlobalOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Dropdown } from 'assets/components/Dropdown/Dropdown';
import { SettingsStore } from 'assets/stores/SettingsStore/SettingsStore';
import { ActionDefinition } from 'assets/utils/UserActionsHelper';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export const LanguageSwitcher = observer(() => {
    const { t, i18n } = useTranslation();

    if (!SettingsStore.hasFewLocales) {
        return null;
    }

    const locales = SettingsStore.supportedLocales.map((locale: string) => {
        return {
            key: locale,
            label: t(`Component.LanguageSwitcher.Locale.Long.${locale}`),
            onClick: async () => {
                await SettingsStore.setLocale(locale);
            },
        } as ActionDefinition;
    });

    return (
        <Dropdown items={locales}>
            <StyledButton icon={<GlobalOutlined />}>
                {t(`Component.LanguageSwitcher.Locale.Short.${i18n.language}`)}
            </StyledButton>
        </Dropdown>
    );
});

const StyledButton = styled(Button)`
    height: 26px;
    min-width: 60px;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #2e3e5c;
    box-shadow: none;
    border: none;
    background: transparent;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset;
    background-clip: unset;
    text-fill-color: unset;
    flex-direction: row;

    &:active,
    &:focus,
    &:hover {
        box-shadow: none;
        background: transparent;
        -webkit-background-clip: unset;
        -webkit-text-fill-color: unset;
        background-clip: unset;
        text-fill-color: unset;
        color: #2e3e5c;
    }
`;
