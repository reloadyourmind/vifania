import { Col, Row } from 'antd';
import { BasePage } from 'assets/components/BasePage/BasePage';
import { ContentSection } from 'assets/components/ContentSection/ContentSection';
import { NewsCard } from 'assets/components/NewsCard/NewsCard';
import { News, NewsStore } from 'assets/stores/NewsStore/NewsStore';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const store = NewsStore;

export const NewsPage = observer(() => {
    const { t } = useTranslation();

    useEffect(() => {
        store.loadList();
    });

    const news = store.list;

    return (
        <BasePage>
            <ContentSection title={t('Page.News.Title', 'Новости')}>
                <Row gutter={[25, 25]}>
                    {news.map((item: News) => {
                        return (
                            <Col sm={24} md={12} xl={8} key={item.url}>
                                <NewsCard news={item} />
                            </Col>
                        );
                    })}
                </Row>
            </ContentSection>
        </BasePage>
    );
});
