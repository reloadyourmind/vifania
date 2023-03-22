import { observer } from 'mobx-react-lite';
import React from 'react';

export const Map = observer(() => {
    const iframeSource =
        '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae5db7dfdffba5ce33a3bd1aec37a019d21f8869156d379b8f913a328e9005bfc&amp;source=constructor" ' +
        'frameBorder="0" marginheight="0" marginwidth="0" width="100%" height="100%"  seamless="seamless"></iframe>';

    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                borderRadius: '35px',
                overflow: 'hidden',
            }}
            dangerouslySetInnerHTML={{ __html: iframeSource }}
        />
    );
});
