import { BasePage } from 'assets/components/BasePage/BasePage';
import { ContentSection } from 'assets/components/ContentSection/ContentSection';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

export const NewsPage = observer(() => {
    const { t } = useTranslation();

    return (
        <BasePage>
            <ContentSection title={t('Page.News.Title', 'Новости')} />
        </BasePage>
    );
});
