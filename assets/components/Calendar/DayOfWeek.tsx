import { Col } from 'antd';
import { EventDefinition } from 'assets/components/Calendar/CalendarTypes';
import { EventCard } from 'assets/components/Calendar/EventCard';
import { CalendarStore } from 'assets/stores/CalendarStore/CalendarStore';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';

type DayOfWeekProps = {
    name: string;
    number: string;
    events?: EventDefinition[];
};

const store = CalendarStore;

export const DayOfWeek = observer(
    ({ name, number, events }: DayOfWeekProps) => {
        const isToday = store.isToday(number);
        const isSunday = store.isSunday(number);

        return (
            <StyledCol flex={1}>
                <Header>
                    <Number isToday={isToday} isSunday={isSunday}>
                        {number}
                    </Number>
                    <Name isToday={isToday}>
                        {name?.toString().toLowerCase()}
                    </Name>
                </Header>
                {events?.map((data, index) => {
                    // eslint-disable-next-line react/no-array-index-key
                    return <EventCard key={index} {...data} />;
                })}
            </StyledCol>
        );
    },
);

const StyledCol = styled(Col)`
    border-left: solid 1px #d9d9d9;
    padding-bottom: 10px;
    &:first-child {
        border-left: none;
    }
    min-width: 120px;
    width: 100%;
`;

const Header = styled.div`
    height: 75px;
    border-bottom: solid 1px #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Number = styled.span<{ isToday?: boolean; isSunday?: boolean }>`
    font-weight: ${(props) => (props?.isToday ? 600 : 500)};
    font-size: 24px;
    line-height: 29px;
    color: ${(props) => {
        if (props?.isToday) {
            return '#008DD2';
        }
        if (props?.isSunday) {
            return '#FF3B30';
        }

        return '#1c1c1e';
    }};
    text-align: center;
`;

const Name = styled.span<{ isToday?: boolean }>`
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: ${(props) => (props?.isToday ? '#008DD2' : '#3C3C4399')};
    text-align: center;
`;
