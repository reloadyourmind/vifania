import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';
import { SettingsStore } from 'assets/stores/SettingsStore/SettingsStore';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export const LanguageSwitcher = observer(() => {
    const [visible, setVisible] = useState(false);
    const { t, i18n } = useTranslation();
    const closeMenu = () => {
        setVisible(false);
    };

    if (!SettingsStore.hasFewLocales) {
        return null;
    }

    return (
        <Dropdown
            overlay={<Locales closeMenu={closeMenu} />}
            onVisibleChange={(isVisible) => setVisible(isVisible)}
            visible={visible}
        >
            <StyledButton>
                <span>
                    {t(
                        `Component.LanguageSwitcher.Locale.Short.${i18n.language}`,
                    )}
                    <StyledDownOutlinedIcon />
                </span>
            </StyledButton>
        </Dropdown>
    );
});

type LocalesProps = { closeMenu: () => void };
const Locales = observer(({ closeMenu }: LocalesProps) => {
    const { t } = useTranslation();

    return (
        <StyledMenu
            activeKey={SettingsStore.currentLocale}
            onClick={(e: any) => {
                e.domEvent.preventDefault();
                closeMenu();
            }}
        >
            {SettingsStore.supportedLocales.map((locale: string) => {
                return (
                    <Menu.Item
                        key={locale}
                        onClick={async () => {
                            await SettingsStore.setLocale(locale);
                        }}
                    >
                        {t(`Component.LanguageSwitcher.Locale.Long.${locale}`)}
                    </Menu.Item>
                );
            })}
        </StyledMenu>
    );
});

const StyledDownOutlinedIcon = styled(DownOutlined)`
    margin-left: 5px !important;
`;

const StyledButton = styled(Button)`
    padding-right: 0;
    min-width: 60px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #2e3e5c;
    box-shadow: none;
    margin-right: 5px;
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

    * {
        margin-right: 0;
    }
`;
const StyledMenu = styled(Menu as any)`
    flex: 1;
    border-right: none;
    box-shadow: 0px 4px 4px rgb(222 222 222 / 25%) !important;

    .ant-menu-item {
        color: #8b959e;
        &:after {
            display: none;
        }

        + .ant-menu-item {
            margin-left: 1px;
        }

        &:hover {
            color: black;
        }

        &.ant-menu-item-selected,
        &:active {
            background-color: transparent;
        }
    }
`;
