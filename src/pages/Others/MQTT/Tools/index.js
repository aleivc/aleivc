import {Button, Card, Col, Form, Input, Progress, Row, Table, Tag} from "antd";
import {useEffect, useState} from "react";
const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];

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

const Tools = ({persent}) => {
    const [form, setForm] = useState({
        host: "58.34.98.117",
        port: 8083,
        username: "ui_client",
        password: "123456",
        id: "JSLF002-20221129001",
        publish: "/valave/JSLF002-20221129001/properties/report",
        subscribe: "/valve/JSLF002-20221129001/function/invoke",
        payload: JSON.stringify(
            {
                deviceId: "JSFL002-20221111002",
                properties: { all_open: 0 },
            },
            null,
            4
        ),
        receive: "",
    });

    const [tags, setTags] = useState(tags_map);

    const onRecordChange = () => {
        console.log("record change");
    };

    const handleAdd = () => {
        console.log('Add')
    }

    return <div className="flex flex-wrap gap-3">
        <Card>
            <Form
                name="basic"
                initialValues={form}
                onValuesChange={onRecordChange}
            >
                <Row>
                    <Col>
                        <Form.Item label="阀号" name="host">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item label=" " name="password">
                            <Button onClick={handleAdd}>订阅</Button>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tag color={tags["op_open"] === 0 ? 'green' : ''}>开到位</Tag>
                        <Tag color="green">关到位</Tag>
                        <Tag color="green">故障</Tag>
                        <Tag color="green">控制模式</Tag>
                        <Tag color="green">开阀</Tag>
                        <Tag color="green">关阀</Tag>
                        <Tag color="green">设定开度</Tag>
                        <Tag color="green">查询</Tag>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: 'center'}}>
                        <Form.Item label=" " name="password">
                            <Progress percent={persent} />
                            <div>当前阀位 24% / 目标阀位 50%</div>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Item label=" " name="password">
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Button onClick={handleAdd}>开阀</Button>
                                <Button onClick={handleAdd}>关阀</Button>
                                <Button onClick={handleAdd}>停止</Button>
                            </div>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Card>
    </div>
}

export default Tools;