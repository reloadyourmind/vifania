/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ModalProps } from 'antd/lib/modal';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export type ModalRendererProps<T = any> = Pick<
    ModalProps,
    'visible' | 'afterClose' | 'destroyOnClose'
> & {
    onCancel(): void;
} & T;

type AdditionalProps<P> = Omit<P, keyof ModalRendererProps>;

const renderModal = <P extends ModalRendererProps>(
    Modal: React.ComponentType<P>,
    additionalProps: AdditionalProps<P> = {} as any,
) => {
    const appContainer = document.createElement('div');
    const modalContainer = document.createElement('div');
    document.body.appendChild(appContainer);
    document.body.appendChild(modalContainer);
    document.body.classList.remove('no-modal');
    ReactDOM.render(
        <ModalWrapper
            Modal={Modal}
            container={modalContainer}
            afterClose={() => {
                setTimeout(() => {
                    document.body.classList.add('no-modal');

                    removeElementsFromDom([modalContainer, appContainer]);

                    ReactDOM.unmountComponentAtNode(appContainer);
                }, 0);
            }}
            additionalProps={additionalProps}
        />,
        appContainer,
    );
};

function removeElementsFromDom<ElementType extends HTMLElement = HTMLElement>(
    elements: ElementType[],
) {
    elements.forEach((item) => {
        if (item.parentNode) {
            item.parentNode.removeChild(item);
        }
    });
}

const ModalWrapper = <P extends ModalRendererProps>({
    Modal,
    afterClose,
    container,
    additionalProps,
}: {
    Modal: React.ComponentType<P>;
    afterClose(): void;
    container: HTMLElement;
    additionalProps: AdditionalProps<P>;
    // eslint-disable-next-line react/require-default-props, react/no-unused-prop-types
    destroyOnRouteChange?: boolean;
}) => {
    const [visible, setVisibility] = useState(true);

    const closeModal = () => {
        setVisibility(false);
        setTimeout(() => {
            afterClose();
        }, 0);
    };

    // useEffect(() => {
    //     if (!destroyOnRouteChange) {
    //         return;
    //     }

    //     return globalHistory.listen(closeModal);
    // });

    // @ts-ignore
    // eslint-disable-next-line newline-before-return
    return React.createElement(Modal, {
        visible,
        onCancel: closeModal,
        getContainer: () => container,
        destroyOnClose: true,
        ...additionalProps,
    });
};

const makeModalRenderer = <P extends ModalRendererProps>(
    Modal: React.ComponentType<P>,
) => {
    return (additionalProps: AdditionalProps<P> = {} as any) =>
        renderModal(Modal, additionalProps);
};

export const addModalRenderer = <P extends ModalRendererProps>(
    Modal: React.ComponentType<P>,
) => {
    return Object.assign(Modal, { render: makeModalRenderer(Modal) });
};
