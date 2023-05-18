import { Calendar } from 'assets/components/Calendar/Calendar';
import { ContentSection } from 'assets/components/ContentSection/ContentSection';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const CalendarSection = observer(() => {
    const { t } = useTranslation();

    return (
        <ContentSection
            title={t('Page.Index.CalendarSection.Title', 'Календарь служений')}
        >
            <Calendar />
        </ContentSection>
    );
});
