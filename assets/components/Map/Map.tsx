import { IFrame } from 'assets/components/IFrame/IFrame';
import { observer } from 'mobx-react-lite';
import React from 'react';

const MAP_URL =
    'https://yandex.ru/map-widget/v1/?um=constructor%3Ae5db7dfdffba5ce33a3bd1aec37a019d21f8869156d379b8f913a328e9005bfc&amp;source=constructor';
export const Map = observer(() => {
    return <IFrame src={MAP_URL} ratio="2/1" />;
});
