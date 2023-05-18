import { Col, Row } from 'antd';
import { DataView } from 'assets/components/DataView/DataView';
import { Modal } from 'assets/components/Modal/Modal';
import {
    addModalRenderer,
    ModalRendererProps,
} from 'assets/utils/ModalRenderer';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const DonationDialogFn = observer(({ ...props }: ModalRendererProps) => {
    const { t } = useTranslation();

    return (
        <Modal
            title={t(
                'Dialog.DonationDialog.Title',
                'Реквизиты для пожертвования:',
            )}
            footer={false}
            width={800}
            {...props}
        >
            <Row gutter={[16, 16]}>
                <Col xs={24}>
                    <DataView
                        label={t(
                            'Dialog.DonationDialog.PaymentReceiver',
                            'Получатель платежа:',
                        )}
                        value={t(
                            'Dialog.DonationDialog.PaymentReceiverValue',
                            'Религиозная община христиан веры евангельской «Церковь Вифания»',
                        )}
                    />
                </Col>
                <Col xs={24}>
                    <DataView
                        label={t(
                            'Dialog.DonationDialog.BankDetails',
                            'Банковские реквизиты:',
                        )}
                        value={t(
                            'Dialog.DonationDialog.BankDetailsValue',
                            'р/с BY97ALFA30152765780010270000 в ЗАО «Альфа-Банк» г. Минск, ул. Сурганова, 43-47',
                        )}
                    />
                </Col>
                <Col xs={24}>
                    <DataView
                        label={t('Dialog.DonationDialog.Code', 'Код:')}
                        value={t('Dialog.DonationDialog.CodeValue', 'ALFABY2X')}
                        align="horizontal"
                    />
                </Col>
                <Col xs={24}>
                    <DataView
                        label={t('Dialog.DonationDialog.Ynp', 'УНН:')}
                        value={t('Dialog.DonationDialog.YnpValue', '100736846')}
                        align="horizontal"
                    />
                </Col>
                <Col xs={24}>
                    <DataView
                        label={t('Dialog.DonationDialog.Okpo', 'ОКПО:')}
                        value={t('Dialog.DonationDialog.OkpoValue', '37355726')}
                        align="horizontal"
                    />
                </Col>
                <Col xs={24}>
                    <DataView
                        label={t(
                            'Dialog.DonationDialog.PaymentPurpose',
                            'Назначение платежа:',
                        )}
                        value={t(
                            'Dialog.DonationDialog.PaymentPurposeValue',
                            'Добровольные пожертвования для ведения уставной деятельности',
                        )}
                    />
                </Col>
            </Row>
        </Modal>
    );
});

export const DonationDialog = addModalRenderer(DonationDialogFn);
