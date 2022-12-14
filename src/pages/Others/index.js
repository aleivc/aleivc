import Tools from "./Tools";
import Doc from './Doc';
import {Tabs} from "antd";

const Others = () => {
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div className="p-3 h-screen overflow-scroll">
            <Tabs
                defaultActiveKey="1"
                onChange={onChange}
                items={[
                    {
                        label: `启闭机`,
                        key: '1',
                        children: <Tools />,
                    },
                    {
                        label: `协议预览`,
                        key: '2',
                        children: <Doc />,
                    },
                ]}
            />
        </div>
    );
};

export default Others;
