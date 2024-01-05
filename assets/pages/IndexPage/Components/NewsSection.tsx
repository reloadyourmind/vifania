import { Button, Col, Row } from 'antd';
import { ContentSection } from 'assets/components/ContentSection/ContentSection';
import { NewsCard } from 'assets/components/NewsCard/NewsCard';
import { RoutePaths } from 'assets/core/router/RoutePaths';
import { Router } from 'assets/core/router/Router';
import { News, NewsStore } from 'assets/stores/NewsStore/NewsStore';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const store = NewsStore;

export const NewsSection = observer(() => {
    const { t } = useTranslation();

    useEffect(() => {
        store.loadList();
    });

    const news: Array<News> = store.list.slice(0, 2);

    return (
        <ContentSection
            title={t('Page.Index.NewsSection.Title', 'Последние новости')}
            backgroundColor="#FFFFFF"
        >
            <Row gutter={[30, 50]}>
                {news.map((item: News) => {
                    return (
                        <Col xs={24} sm={12} key={item.id}>
                            <NewsCard news={item} />
                        </Col>
                    );
                })}
                <ButtonWrapper xs={24}>
                    <Button
                        onClick={() => {
                            Router.navigate(RoutePaths.news);
                        }}
                    >
                        {t(
                            'Page.Index.NewsSection.AllNews.Btn',
                            'Смотреть все публикации',
                        )}
                    </Button>
                </ButtonWrapper>
            </Row>
        </ContentSection>
    );
});

const ButtonWrapper = styled(Col)`
    display: flex;
    justify-content: center;
`;
