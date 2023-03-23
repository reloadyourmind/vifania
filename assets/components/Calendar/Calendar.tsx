import { Row, Typography } from 'antd';
import { DayDefinition } from 'assets/components/Calendar/CalendarTypes';
import { DayOfWeek } from 'assets/components/Calendar/DayOfWeek';
import { CalendarStore } from 'assets/stores/CalendarStore/CalendarStore';
import { t } from 'i18next';
import React from 'react';
import styled from 'styled-components';

const store = CalendarStore;

export const Calendar = () => {
    const days: DayDefinition[] = [
        {
            name: t('Calendar.Day.Monday'),
            number: store.startWeek.format('D'),
            events: [
                {
                    name: 'Молитвенное служение',
                    time: '19:00',
                    backgroundColor: '#5856D619',
                },
            ],
        },
        {
            name: t('Calendar.Day.Tuesday'),
            number: store.startWeek.add(1, 'd').format('D'),
            events: [
                {
                    name: 'Служение для зависимых',
                    time: '19:00',
                    backgroundColor: '#FF950019',
                },
                {
                    name: 'Молодежное домашнее общение',
                    time: '19:00',
                    backgroundColor: '#8E8E9319',
                },
            ],
        },
        {
            name: t('Calendar.Day.Wednesday'),
            number: store.startWeek.add(2, 'd').format('D'),
            events: [
                {
                    name: 'Общее богослужение',
                    time: '19:00',
                    backgroundColor: '#008DD219',
                },
            ],
        },
        {
            name: t('Calendar.Day.Thursday'),
            number: store.startWeek.add(3, 'd').format('D'),
            events: [
                {
                    name: 'Молодежное домашнее общение',
                    time: '19:00',
                    backgroundColor: '#8E8E9319',
                },
            ],
        },
        {
            name: t('Calendar.Day.Friday'),
            number: store.startWeek.add(4, 'd').format('D'),
            events: [
                {
                    name: 'Молитвенное служение',
                    time: '19:00',
                    backgroundColor: '#5856D619',
                },
            ],
        },
        {
            name: t('Calendar.Day.Saturday'),
            number: store.startWeek.add(5, 'd').format('D'),
            events: [
                {
                    name: 'Подростковое служение',
                    time: '15:00',
                    backgroundColor: '#FFCC0019',
                },
            ],
        },
        {
            name: t('Calendar.Day.Sunday'),
            number: store.startWeek.add(6, 'd').format('D'),
            events: [
                {
                    name: 'Общее богослужение',
                    time: '10:00',
                    backgroundColor: '#008DD219',
                },
                {
                    name: 'Английский клуб (в церковном кафе)',
                    time: '13:00',
                    backgroundColor: '#FF3B3019',
                },
                {
                    name: 'Молодежное служение',
                    time: '17:00',
                    backgroundColor: '#34C75919',
                },
            ],
        },
    ];

    return (
        <StyledWrapper>
            <StyledHeader>
                <StyledTitle>{store.weekInterval}</StyledTitle>
            </StyledHeader>
            <Row wrap={false}>
                {days.map((day) => {
                    return <DayOfWeek key={day.number} {...day} />;
                })}
            </Row>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    background-color: #ffffff;
    border-radius: 25px;
    overflow: hidden;
`;

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    height: 75px;
    padding: 0 40px;
    border-bottom: solid 1px #d9d9d9;
`;

const StyledTitle = styled(Typography.Title)`
    font-weight: 500;
    font-size: 20px !important;
    line-height: 24px;
    color: #000000;
    margin: 0 !important;
`;
