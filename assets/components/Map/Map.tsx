import { IFrame } from 'assets/components/IFrame/IFrame';
import i18n from 'assets/core/i18n';
import { observer } from 'mobx-react-lite';
import React from 'react';

const MAP_URL_EN =
    'https://yandex.com/map-widget/v1/?um=constructor%3Abc28d114e81dc7d5be2867d5275b1cf8c0e7f8c1437b0b999d8780984030d3d1&amp;source=constructor';
const MAP_URL_RU =
    'https://yandex.ru/map-widget/v1/?um=constructor%3Ae5db7dfdffba5ce33a3bd1aec37a019d21f8869156d379b8f913a328e9005bfc&amp;source=constructor';

export const Map = observer(() => {
    const mapUrl = i18n.language === 'ru' ? MAP_URL_RU : MAP_URL_EN;

    return <IFrame src={mapUrl} ratio="2/1" />;
});
