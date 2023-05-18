import { BasePage } from 'assets/components/BasePage/BasePage';
import { Calendar } from 'assets/components/Calendar/Calendar';
import { ContentSection } from 'assets/components/ContentSection/ContentSection';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

export const CalendarPage = observer(() => {
    const { t } = useTranslation();

    return (
        <BasePage>
            <ContentSection title={t('Page.Calendar.Title', 'Календарь')}>
                <Calendar />
            </ContentSection>
        </BasePage>
    );
});
