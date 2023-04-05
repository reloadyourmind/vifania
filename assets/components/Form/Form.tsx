import { Form as AntForm, FormProps as AntFormProps } from 'antd';
import { observer } from 'mobx-react-lite';

export type FormProps = AntFormProps;

export const Form = observer((props: FormProps) => {
    return <AntForm layout="vertical" {...props} />;
});
