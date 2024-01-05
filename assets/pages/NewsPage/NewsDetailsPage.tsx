import { Col, Row } from 'antd';
import { BasePage } from 'assets/components/BasePage/BasePage';
import { ContentSection } from 'assets/components/ContentSection/ContentSection';
import { useItemId } from 'assets/hooks/useItemId';
import { NewsStore } from 'assets/stores/NewsStore/NewsStore';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const store = NewsStore;

export const NewsDetailsPage = observer(() => {
    const { t } = useTranslation();
    const { itemId } = useItemId();

    useEffect(() => {
        store.loadItem(itemId);
    });

    const item = store.currentItem;

    return (
        <BasePage>
            <ContentSection title={item.title}>
                <Row gutter={[25, 25]}>
                    <Col xs={24}>
                        <StyledImage img={item.img} />
                    </Col>
                    <Col xs={24}>
                        <StyledText>{item.description}</StyledText>
                    </Col>
                    <Col xs={24}>
                        <StyledText>{item.date}</StyledText>
                    </Col>
                </Row>
            </ContentSection>
            <NewsSlider>ertwer</NewsSlider>
        </BasePage>
    );
});

const StyledImage = styled.div<{ img?: string }>`
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 25px;
    background: url(${(props) => props?.img}) no-repeat center;
    background-size: cover;
    overflow: hidden;
    padding: 15px;
`;

const StyledText = styled.span`
    display: block;
    padding: 10px 30px 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
`;

const NewsSlider = styled.div``;
