import { ContentSection } from 'assets/components/ContentSection/ContentSection';
import { t } from 'i18next';
import { observer } from 'mobx-react-lite';
import React from 'react';

export const NewsSection = observer(() => {
    return (
        <ContentSection
            title={t('Page.Index.NewsSection.Title', 'Последние новости')}
            backgroundColor="#FFFFFF"
        >
            тут будет слайдер с новостями
        </ContentSection>
    );
});
