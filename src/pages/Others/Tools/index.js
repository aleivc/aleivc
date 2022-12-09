import {
    Badge, Button, Card, Input, message, Progress, Skeleton, Spin, Tag, Typography,
} from "antd";
import {useEffect, useState} from "react";
import Meta from "antd/es/card/Meta";
import mqtt from "mqtt/dist/mqtt";

const {Text, Paragraph} = Typography;

const tags_map = {
    all_close: 1,
    all_open: 1,
    control_mode: 2,
    op_close: 1,
    op_get: 1,
    op_open: 1,
    op_pos: 1,
    value_trouble: 1,
    cur_pos: 0
}

const deviceId = 'JSLF002-20221129002';

const tempPubUrl = '/valve';
const tempSubUrl = '/valve';

const record = {
    deviceId,
    properties: {...tags_map},
}

const options = {
    keepalive: 30,
    protocolId: "MQTT",
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: {
        topic: "WillMsg", payload: "Connection Closed abnormally..!", qos: 0, retain: false,
    },
    rejectUnauthorized: false,
};

const conf = {
    host: "58.34.98.117",
    port: 8083,
    username: "ui_client",
    password: "123456",
}

const Tools = () => {
    // 连接
    const [connect, setConnect] = useState({
        client: null,
    })
    // 序列号输入框
    const [value, setValue] = useState({
        deviceId: '',
        op_pos: 0
    });

    // 设备列表
    const [list, setList] = useState([])

    // message
    const [payload, setPayload] = useState({});

    const updateFunc = (payload) => {
        try {
            const message = JSON.parse(payload.data.toString());

            console.log(message)
            if (message.properties && payload.topic) {
                const temp = list.map(f => {
                    return f.deviceId === message.deviceId ? {
                        ...message,
                        loading: false,
                        initLoading: false,
                        action: ''
                    } : {...f};
                })
                console.log(temp)
                // 设置对应的 record
                setList(() => [...temp])
            }
        } catch (err) {
            throw err
        }
    }

    useEffect(() => {
        const {host, port, username, password} = conf;

        const url = `ws://${host}:${port}/mqtt`;

        options.username = username;
        options.password = password;
        setConnect({
            client: mqtt.connect(url, options)
        });

        return () => {
            if (connect.client) {
                connect.client.end();
                message.success('mqtt closed')
            }
        }
    }, [])

    useEffect(() => {
        if (connect.client) {
            connect.client.on("connect", () => {
                message.success('connected');
                setConnect({
                    ...connect, connectStatus: "connected",
                });
            });

            connect.client.on("error", () => {
                message.error('error');
                setConnect({
                    ...connect, connectStatus: "error",
                });
                connect.client.end();
            });

            connect.client.on("reconnect", () => {
                message.warning('Reconnecting');
                setConnect({
                    ...connect, connectStatus: "Reconnecting",
                });
            });

            // 这样挂载了太多的监听函数，这样不对，它只能挂载一次
            connect.client.on("message", (topic, data) => {
                setPayload({topic, data})
            });
        }
    }, [connect])

    useEffect(() => {
        if(payload.topic){
            updateFunc(payload)
        }
    }, [payload])

    const handleAdd = () => {
        const flag = list.filter(f => f.deviceId === value.deviceId);
        if (flag.length > 0) {
            message.error('设备已存在')
            return;
        }
        // 订阅此设备 组装topic
        const subUrl = `/valve/${value.deviceId}/properties/report`;
        const pubUrl = `/valve/${value}/function/invoke`;
        // const subUrl = tempSubUrl;
        // const pubUrl = tempPubUrl
        connect.client.subscribe(subUrl, {qos: 0}, (err) => {
            if (err) return;
            // 更新 list
            setList([...list, {
                ...record, deviceId: value.deviceId, loading: true, initLoading: true
            }])
            connect.client.publish(
                pubUrl,
                '{"deviceId":"' + value.deviceId + '","inputs":{"name":"op_get","value":"1"}}',
                (err) => {
                    if (err) return;
                })
        })
    }

    // 序列号变更
    const onChange = (e, act) => {
        console.log(e.target.value, act);
        setValue({
            ...value,
            [act]: e.target.value
        });
    }

    const handleAction = (action, item, index) => {
        const subUrl = `/valve/${item.deviceId}/properties/report`;
        const pubUrl = `/valve/${item.deviceId}/function/invoke`;
        // const subUrl = tempSubUrl;
        // const pubUrl = tempPubUrl;
        const temp = list.map(f => {
            return f.deviceId === item.deviceId ? {...item, loading: true, action} : {...f};
        })
        // 设置对应的 record
        setList( [...temp])

        switch (action) {
            case 'open':
                // 发送消息
                connect.client.publish(
                    pubUrl,
                    '{"deviceId":"' + item.deviceId + '","inputs":{"name":"op_open","value":"0"}}',
                    (err) => {
                        if (err) return;
                    })
                break;
            case 'close':
                // 发送消息
                connect.client.publish(
                    pubUrl,
                    '{"deviceId":"' + item.deviceId + '","inputs":{"name":"op_close","value":"0"}}',
                    (err) => {
                        if (err) return;
                    })
                break;
            case 'stop':
                // 发送消息
                connect.client.publish(
                    pubUrl,
                    '{"deviceId":"' + item.deviceId + '","inputs":{"name":"op_close","value":"0"}}',
                    (err) => {
                        if (err) return;
                    })
                break;
            case 'delete':
                // 取消订阅设备，根据id 拼装 topic
                connect.client.unsubscribe(subUrl, {}, (err) => {
                    if (err) return;
                    // 更新列表
                    setList( [...list.filter(f => f.deviceId !== item.deviceId)])
                })
                break;
            case 'set_pos':
                connect.client.publish(
                    pubUrl,
                    '{"deviceId":"' + item.deviceId + '","inputs":{"name":"op_pos","value":"' + value.op_pos + '"}}',
                    (err) => {
                        if (err) return;
                    })
                break;
            default:
                break;
        }
    }

    return (<div>
        <br/>
        <div className="flex gap-1" style={{width: 320}}>
            <Input placeholder="序列号" value={value.deviceId} onChange={(e) => onChange(e, 'deviceId')}/>
            <Button onClick={handleAdd}>添加设备</Button>
        </div>
        <br/>
        <div className="flex flex-wrap gap-2">
            {list.map((item, index) => {
                return (<Badge.Ribbon text={index + 1} placement="start" key={index}>
                    <Card
                        style={{
                            width: 320,
                        }}
                        actions={[<div className="flex justify-center items-center"
                                       onClick={() => handleAction('open', item, index)}>
                            <Spin spinning={item.loading && item.action === 'open'}><Text>开阀</Text></Spin></div>,
                            <div onClick={() => handleAction('close', item, index)}>
                                <Spin spinning={item.loading && item.action === 'close'}><Text>关阀</Text></Spin>
                            </div>,
                            <div onClick={() => handleAction('stop', item, index)}>
                                <Spin spinning={item.loading && item.action === 'stop'}><Text>停止</Text></Spin>
                            </div>,
                            <div onClick={() => handleAction('delete', item, index)}>
                                <Text
                                    type="danger">删除</Text>
                            </div>,]}
                    >
                        <Meta
                            description={<div className="flex"><Badge status="processing"/>
                                <Paragraph
                                    copyable
                                >
                                    {item.deviceId}
                                </Paragraph>
                            </div>}
                        />
                        <br/>

                        <Spin spinning={item.initLoading}>
                            <Progress percent={item.properties['cur_pos']} size="small"/>
                            <div className="text-center">当前阀位 {item.properties['cur_pos']}% / 目标阀位 - %</div>
                            <br/>
                            <div className="flex flex-wrap gap-1">
                                <Tag color={item.properties['all_close'] === 0 ? 'green' : ''}>关到位</Tag>
                                <Tag color={item.properties['all_open'] === 0 ? 'green' : ''}>开到位</Tag>
                                <Tag
                                    color={item.properties['control_mode'] === 2 ? '' : 'green'}>{item.properties['control_mode'] === 0 ? '就地' : '远程'}</Tag>
                                <Tag color={item.properties['op_close'] === 0 ? 'green' : ''}>关阀</Tag>
                                <Tag color={item.properties['value_trouble'] === 0 ? 'warning' : ''}>故障</Tag>
                                <Tag color={item.properties['op_open'] === 0 ? 'green' : ''}>开阀</Tag>
                            </div>
                            <br/>
                            <div className="flex">
                                <Input value={value.op_pos} onChange={(e) => onChange(e, 'op_pos')}/>
                                <Button onClick={() => handleAction('set_pos', item, index)}>设定开度</Button>
                            </div>
                        </Spin>
                    </Card>
                </Badge.Ribbon>)
            })}
        </div>
    </div>)
}

export default Tools;