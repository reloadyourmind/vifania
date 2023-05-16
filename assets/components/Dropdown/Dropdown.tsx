import {
    Button,
    Dropdown as AntDropdown,
    DropdownProps as AntDropdownProps,
    Menu,
} from 'antd';
import { ArrowDownIcon } from 'assets/components/Icons/Icons';
import { ActionDefinition } from 'assets/utils/UserActionsHelper';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';

export type DropdownProps = Omit<AntDropdownProps, 'overlay'> & {
    items: ActionDefinition[];
};

export const Dropdown: React.FC<DropdownProps> = observer(
    ({ children, items, ...props }) => {
        const { t } = useTranslation();
        // todo add popup container

        return (
            <AntDropdown
                overlay={<Menu items={items} />}
                placement="bottomRight"
                trigger={['click']}
                getPopupContainer={() =>
                    document.querySelector('#layout-content') || document.body
                }
                {...props}
            >
                {children || (
                    <Button type="primary" icon={<ArrowDownIcon />}>
                        {t('Component.Dropdown.Trigger')}
                    </Button>
                )}
            </AntDropdown>
        );
    },
);
