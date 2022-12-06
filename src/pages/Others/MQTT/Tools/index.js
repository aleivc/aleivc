import {
    Badge,
    Button,
    Card,
    Input,
    Progress,
    Tag, Typography,
} from "antd";
import {useState} from "react";
import Meta from "antd/es/card/Meta";

const {Text} = Typography;


const tags_map = {
    all_open: 1,
    all_close: 0,
    value_trouble: 0,
    control_mode: 0,
    op_open: 1,
    op_close: 0,
    op_pos: 0,
    op_get: 0
}

const record = {
    id: "JSFL002-20221111002",
    tags: {...tags_map},
    percent: 0
}

const Tools = ({}) => {
    const [value, setValue] = useState('');

    const [list, setList] = useState([
        {
            ...record
        }
    ])

    const handleAdd = () => {
        setList([
            ...list,
            {
                ...record,
                id: value
            }
        ])
    }

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const handleAction = (action, item) => {
        switch (action) {
            case 'open':
                // 根据id 找到那个，更新 percent
                setList([
                    ...list.map(f => {
                        return f.id === item.id ? {...item, percent: item.percent += 1} : {...f};
                    })
                ])
                break;
            case 'close':
                setList([
                    ...list.map(f => {
                        return f.id === item.id ? {...item, percent: item.percent -= 1} : {...f};
                    })
                ])
                break;
            case 'stop':
                break;
            case 'delete':
                setList([
                    ...list.filter(f => f.id !== item.id)
                ])
                break;
            default:
                break;
        }
    }

    return <div className="">
        <div className="flex gap-1" style={{width: 320}}>
            <Input placeholder="序列号" value={value} onChange={onChange}/>
            <Button onClick={handleAdd}>添加设备</Button>
        </div>
        <br/>
        <div className="flex flex-wrap items-center gap-2">
            {
                list.map((item, index) => {
                    return (
                        <Badge.Ribbon text={list.length - index} placement="start" key={index}>
                            <Card
                                style={{
                                    width: 320,
                                }}
                                actions={[
                                    <div onClick={() => handleAction('open', item)}><Text>开阀</Text></div>,
                                    <div onClick={() => handleAction('close', item)}><Text>关阀</Text></div>,
                                    <div onClick={() => handleAction('stop', item)}><Text>停止</Text></div>,
                                    <div onClick={() => handleAction('delete', item)}><Text type="danger">删除</Text>
                                    </div>,
                                ]}
                            >
                                <Meta
                                    description={<div><Badge status="processing"/> {item.id}</div>}
                                />
                                <br/>

                                <Progress percent={item.percent} size="small"/>
                                <div className="text-center">当前阀位 {item.percent}% / 目标阀位 50%</div>
                                <br/>
                                <div className="flex flex-wrap gap-1">
                                    <Tag color={item.tags['all_open'] === 0 ? 'green' : ''}>开到位</Tag>
                                    <Tag color={item.tags['all_close'] === 0 ? 'green' : ''}>关到位</Tag>
                                    <Tag color={item.tags['value_trouble'] === 0 ? 'warning' : ''}>故障</Tag>
                                    <Tag
                                        color={item.tags['control_mode'] === 0 ? 'green' : ''}>{item.tags['control_mode'] === 0 ? '就地' : '远程'}</Tag>
                                    <Tag color={item.tags['op_open'] === 0 ? 'green' : ''}>开阀</Tag>
                                    <Tag color={item.tags['op_close'] === 0 ? 'green' : ''}>关阀</Tag>
                                </div>
                                {/*<Divider/>*/}
                                <div>
                                    {/*<div>some</div>*/}
                                </div>
                            </Card>
                        </Badge.Ribbon>
                    )
                })
            }

        </div>
    </div>
}

export default Tools;