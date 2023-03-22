import { BasePage } from 'assets/components/BasePage/BasePage';
import { ContentSection } from 'assets/components/ContentSection/ContentSection';
import { t } from 'i18next';
import { observer } from 'mobx-react-lite';

export const ServicesPage = observer(() => {
    return (
        <BasePage>
            <ContentSection title={t('Page.Services.Title', 'Служения')} />
        </BasePage>
    );
});
