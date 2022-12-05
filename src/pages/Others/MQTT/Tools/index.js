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
                            <Button onClick={handleAdd}>连接</Button>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tag color="green">开到位</Tag>
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
        <Card>
            <Form
                layout="vertical"
                name="basic"
                initialValues={form}
                onValuesChange={onRecordChange}
            >
                <Row gutter={20}>
                    <Col>
                        <Form.Item label="阀号" name="host">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item label=" " name="password">
                            <Button onClick={handleAdd}>连接</Button>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Tag color="green">开到位</Tag>
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
                    <Col span={6} style={{textAlign: 'center'}}>
                        <Form.Item label=" " name="password">
                            <Progress percent={persent} />
                            <div>当前阀位 24% / 目标阀位 50%</div>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
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
        <Card>
            <Form
                layout="vertical"
                name="basic"
                initialValues={form}
                onValuesChange={onRecordChange}
            >
                <Row gutter={20}>
                    <Col>
                        <Form.Item label="阀号" name="host">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item label=" " name="password">
                            <Button onClick={handleAdd}>连接</Button>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Tag color="green">开到位</Tag>
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
                    <Col span={6} style={{textAlign: 'center'}}>
                        <Form.Item label=" " name="password">
                            <Progress percent={persent} />
                            <div>当前阀位 24% / 目标阀位 50%</div>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
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
        <Card>
            <Form
                layout="vertical"
                name="basic"
                initialValues={form}
                onValuesChange={onRecordChange}
            >
                <Row gutter={20}>
                    <Col>
                        <Form.Item label="阀号" name="host">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item label=" " name="password">
                            <Button onClick={handleAdd}>连接</Button>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Tag color="green">开到位</Tag>
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
                    <Col span={6} style={{textAlign: 'center'}}>
                        <Form.Item label=" " name="password">
                            <Progress percent={persent} />
                            <div>当前阀位 24% / 目标阀位 50%</div>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
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