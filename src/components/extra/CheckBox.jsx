import {Form, Radio,} from 'antd';
import { useState } from 'react';
const FormDisabledDemo = () => {
    const [componentDisabled, setComponentDisabled] = useState(false);
    return (
        <>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                disabled={componentDisabled}
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item label="Giới tính:">
                    <Radio.Group style={{display:'flex', margin:'0 30px'}}>
                        <Radio value="Nam"> Nam </Radio>
                        <Radio value="Nữ"> Nữ </Radio>
                        <Radio value="Khác"> khác </Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </>
    );
};
export default () => <FormDisabledDemo />;