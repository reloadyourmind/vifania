import {
    Button,
    Form as AntForm,
    FormInstance,
    FormProps,
    Modal as AntModal,
    ModalProps as AntModalProps,
} from 'antd';
import { Form } from 'assets/components/Form/Form';
import { CloseIcon } from 'assets/components/Icons/Icons';
import { Spinner } from 'assets/components/Spinner/Spinner';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export type ModalProps = AntModalProps & {
    formProps?: Omit<FormProps, 'onFinish' | 'initialValues'>;
    form?: FormInstance;
    onFinish?: FormProps['onFinish'];
    isLoading?: boolean;
    showOnlyLoading?: boolean;
    initialValues?: FormProps['initialValues'];
    headerExtra?: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
    formProps,
    form,
    onFinish,
    initialValues,
    isLoading,
    showOnlyLoading,
    children,
    onCancel,
    headerExtra,
    ...props
}: // eslint-disable-next-line sonarjs/cognitive-complexity
ModalProps) => {
    const { t } = useTranslation();

    const [innerForm] = AntForm.useForm();

    const targetForm = useMemo(() => {
        return form || innerForm;
    }, [form]);

    const okText = props.okText || t('Component.Modal.Btn.Ok');
    const cancelText = props.cancelText || t('Component.Modal.Btn.Cancel');

    const handleOnCancel = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (isLoading) {
            return;
        }

        onCancel?.(e);
    };

    return (
        <StyledAntModal
            onCancel={handleOnCancel}
            footer={[
                <Button
                    {...props.cancelButtonProps}
                    key="cancel"
                    disabled={isLoading}
                    onClick={handleOnCancel}
                >
                    {cancelText}
                </Button>,
                <Button
                    {...props.okButtonProps}
                    key="ok"
                    type="primary"
                    disabled={isLoading}
                    onClick={async (e) => {
                        await targetForm.submit();
                        await props.onOk?.(e);
                    }}
                >
                    {okText}
                </Button>,
            ]}
            closeIcon={<CloseIcon />}
            {...props}
        >
            {showOnlyLoading && isLoading ? (
                <StyledWrapper>
                    <Spinner />
                </StyledWrapper>
            ) : (
                <>
                    {headerExtra && (
                        <StyledHeaderExtra className="modal-header-extra">
                            {headerExtra}
                        </StyledHeaderExtra>
                    )}
                    <StyledForm
                        form={targetForm}
                        onFinish={async (values: any) => {
                            try {
                                await onFinish?.(values);
                                await onCancel?.(true as any);
                            } catch (error) {
                                console.warn(error);
                            }
                        }}
                        initialValues={initialValues}
                        {...formProps}
                    >
                        {isLoading && <StyledSpinner />}
                        {children}
                    </StyledForm>
                </>
            )}
        </StyledAntModal>
    );
};

const StyledForm = styled(Form)`
    position: relative;
`;

const StyledWrapper = styled.div`
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledSpinner = styled(Spinner)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 99;
    background-color: white;
    opacity: 0.7;
`;

const StyledAntModal = styled(AntModal)`
    .ant-modal-content {
        border: 1px solid #d7d7d7;
        border-radius: 35px;
        overflow: hidden;
        padding: 40px;
    }

    .ant-modal-header {
        border: none;
        padding: 0 0 30px 0;
    }

    .ant-modal-body {
        padding: 0;
    }

    .ant-modal-title {
        font-weight: 600;
        font-size: 30px;
        line-height: 22px;
        color: #000000;
        text-align: center;
    }

    .ant-modal-close-x svg {
        fill: #000000;
    }

    .ant-modal-close:hover .ant-modal-close-x svg {
        fill: #485668;
    }

    .ant-modal-footer {
        display: flex;
        padding: 20px 0 0;
        justify-content: end;
    }
`;

const StyledHeaderExtra = styled.div`
    margin-bottom: 20px;
`;
