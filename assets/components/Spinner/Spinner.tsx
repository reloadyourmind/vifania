import { LoadingOutlined } from '@ant-design/icons';
import { Spin, SpinProps } from 'antd';
import styled from 'styled-components';

export const Spinner = (props: SpinProps) => {
    return <Spin {...props} indicator={<StyledIndicator />} />;
};

const StyledIndicator = styled(LoadingOutlined).attrs((props) => ({
    ...props,
    spin: true,
}))`
    font-size: 36px;

    & svg {
        font-size: 36px;
        color: #0d0f1c;
    }
`;
