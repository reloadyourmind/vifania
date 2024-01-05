import { Button } from 'antd';
import { RightArrowIcon } from 'assets/components/Icons/Icons';
import { EntityLinks } from 'assets/core/router/EntityLinks';
import { News } from 'assets/stores/NewsStore/NewsStore';
import { UrlHelper } from 'assets/utils/UrlHelper';
import { observer } from 'mobx-react-lite';
import moment from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type NewsCardProps = {
    news: News;
};

export const NewsCard = observer(({ news }: NewsCardProps) => {
    const { t } = useTranslation();

    const getPublishedDate = (date: string) => {
        const publishedDate = moment(date, 'DD/MM/YYYY');

        const publishedDateString = [
            t(`Component.NewsCard.Publishing`, 'Опубликовано'),
            publishedDate.format('D'),
            t(`Calendar.Month.${publishedDate.format('MMMM')}`),
            publishedDate.format('YYYY'),
            t(`Component.NewsCard.Year.Short`, 'г.'),
        ];

        return publishedDateString.join(' ');
    };

    return (
        <StyledCard>
            <StyledImage img={news.img}>
                <StyledImagTitle>{getPublishedDate(news.date)}</StyledImagTitle>
            </StyledImage>
            <StyledTitle>{news.title}</StyledTitle>
            <StyledText>{news.description}</StyledText>
            <Button type="link">
                <StyledSpace>
                    <Link to={EntityLinks.news.itemDetails(news.id)}>
                        {t(
                            'Component.NewsCard.OpenFullNews.Btn',
                            'Читать новость целиком',
                        )}
                    </Link>
                    <RightArrowIcon />
                </StyledSpace>
            </Button>
        </StyledCard>
    );
});

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    padding: 15px 15px 20px;
    background: #ffffff;
    border: 1px solid #f2f2f7;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
    border-radius: 35px;
`;

const StyledImage = styled.div<{ img?: string }>`
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 25px;
    background: url(${(props) => props?.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    padding: 15px 15px;
`;

const StyledImagTitle = styled.div`
    width: fit-content;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(15px);
    border-radius: 8px;
    padding: 4px 12px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
`;

const StyledTitle = styled.span`
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
    color: #000000;
    overflow: hidden;
    height: 44px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const StyledText = styled.span`
    display: block;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    height: 100px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    color: #000000;
`;

const StyledSpace = styled.div`
    gap: 10px;
    display: flex;
    align-items: center;
`;
