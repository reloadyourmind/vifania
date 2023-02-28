import React from 'react';
import {Button, Col, Row, Space, Typography} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import styled from "styled-components";
import {DataView} from "./DataView";

export default function App()
{

    const user = {
        name: "Alexey",
        // @ts-ignore
        age: undefined,
    }

    return <Row gutter={16}>
        <Col xs={24}>
            <Title level={3}>Vifania церковь</Title>
        </Col>
        <Col xs={24}>
            <Space direction="horizontal">
                <DataView value={user.name} label="Name"/>
                <DataView value={user.age} label="Age"/>
            </Space>

        </Col>
        <Col xs={24}>
            <StyledButton type="primary" icon={<PlusOutlined/>}>Пожертвовать</StyledButton>
        </Col>
    </Row>
}

const Title = styled(Typography.Title)`
    text-align: center;
   
`;

const StyledButton = styled(Button)`
    width: 140px;
    
    & :hover {
        color: black;
    }
   
`;
