import React from 'react';
import {observer} from "mobx-react-lite";
import {Space} from "antd";

type DataViewProps = {
    value: React.ReactNode;
    label?: string;
}

export const DataView = observer(({value, label}: DataViewProps) => {

    const targetValue = value || "-";
    return (
        <div>
            <Space direction="vertical">
                <span>{label}</span>
                <span>{targetValue}</span>
            </Space>

        </div>
    );
});
