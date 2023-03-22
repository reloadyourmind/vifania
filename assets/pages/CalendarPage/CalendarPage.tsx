import { BasePage } from 'assets/components/BasePage/BasePage';
import { ContentSection } from 'assets/components/ContentSection/ContentSection';
import { t } from 'i18next';
import { observer } from 'mobx-react-lite';

export const CalendarPage = observer(() => {
    return (
        <BasePage>
            <ContentSection title={t('Page.Calendar.Title', 'Календарь')} />
        </BasePage>
    );
});
