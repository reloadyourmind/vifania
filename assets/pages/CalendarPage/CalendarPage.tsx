import { BasePage } from 'assets/components/BasePage/BasePage';
import { t } from 'i18next';
import { observer } from 'mobx-react-lite';

export const CalendarPage = observer(() => {
    return <BasePage title={t('Page.Calendar.Title', 'Календарь')} />;
});
