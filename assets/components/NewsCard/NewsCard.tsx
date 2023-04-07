import { Button } from 'antd';
import { RightArrowIcon } from 'assets/components/Icons/Icons';
import { News } from 'assets/stores/NewsStore/NewsStore';
import { UrlHelper } from 'assets/utils/UrlHelper';
import { t } from 'i18next';
import { observer } from 'mobx-react-lite';
import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

type NewsCardProps = {
    news: News;
};

export const NewsCard = observer(({ news }: NewsCardProps) => {
    return (
        <StyledCard>
            <StyledImage img={news.img}>
                <StyledImagTitle>{getPublishedDate(news.date)}</StyledImagTitle>
            </StyledImage>
            <StyledTitle>{news.title}</StyledTitle>
            <StyledText>{news.description}</StyledText>
            <Button
                type="link"
                onClick={() => {
                    UrlHelper.openLinkInNewTab(news.url);
                }}
            >
                <StyledSpace>
                    <StyledLink>
                        {t(
                            'Component.NewsCard.OpenFullNews.Btn',
                            'Читать новость целиком',
                        )}
                    </StyledLink>
                    <RightArrowIcon />
                </StyledSpace>
            </Button>
        </StyledCard>
    );
});

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

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 22px;
    padding: 25px 25px 30px;
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
    padding: 20px 25px;
`;

const StyledImagTitle = styled.div`
    width: fit-content;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(15px);
    border-radius: 8px;
    padding: 5px 15px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #ffffff;
`;

const StyledTitle = styled.span`
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
`;

const StyledText = styled.span`
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
`;

const StyledSpace = styled.div`
    gap: 10px;
    display: flex;
    align-items: center;
`;

const StyledLink = styled.span`
    height: 16px;
    font-size: 16px !important;
    line-height: 16px !important;
`;
