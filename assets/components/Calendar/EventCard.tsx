import { Typography } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';

type EventCardProps = {
    name: string;
    time: string;
    backgroundColor?: string;
};

export const EventCard = observer(
    ({ name, time, backgroundColor }: EventCardProps) => {
        return (
            <Card backgroundColor={backgroundColor}>
                <Time>{time}</Time>
                <Name>{name}</Name>
            </Card>
        );
    },
);

const Card = styled.div<{ backgroundColor?: string }>`
    display: flex;
    flex-direction: column;
    margin: 10px 10px 0;
    padding: 10px;
    border-radius: 15px;
    background-color: ${(props) => props?.backgroundColor || '#5856D619'};
`;

const Time = styled(Typography.Text)`
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #000000;
`;

const Name = styled(Typography.Text)`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`;
