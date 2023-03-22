import { ContentSection } from 'assets/components/ContentSection/ContentSection';
import { t } from 'i18next';
import { observer } from 'mobx-react-lite';
import React from 'react';

export const CalendarSection = observer(() => {
    return (
        <ContentSection
            title={t('Page.Index.CalendarSection.Title', 'Календарь служений')}
        >
            тут будет календарь
        </ContentSection>
    );
});
