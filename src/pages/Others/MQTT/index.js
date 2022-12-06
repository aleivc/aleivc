import { Button, Col, Form, Input, Row, Tabs } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import mqtt from "mqtt/dist/mqtt";
import Tools from "./Tools";
const { TextArea } = Input;

const options = {
  keepalive: 30,
  protocolId: "MQTT",
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: "WillMsg",
    payload: "Connection Closed abnormally..!",
    qos: 0,
    retain: false,
  },
  rejectUnauthorized: false,
};

const MQTTPage = () => {
  const [connect, setConnect] = useState({
    client: null,
    connectStatus: "connect",
    isSubed: false,
    messages: [],
  });
  const [persent, setPersent] = useState(0);

  const [form, setForm] = useState({
    host: "58.34.98.117",
    port: 8083,
    username: "ui_client",
    password: "123456",
    id: "JSLF002-20221129001",
    publish: "/valave/JSLF002-20221129001/properties/report",
    // subscribe: "/valve/JSLF002-20221129001/function/invoke",
    subscribe: "/valave/JSLF002-20221129001/properties/report",
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

  useEffect(() => {
    if (connect.client) {
      connect.client.on("connect", () => {
        setConnect({
          ...connect,
          connectStatus: "connected",
        });
      });

      connect.client.on("error", () => {
        setConnect({
          ...connect,
          connectStatus: "Reconnecting",
        });
        connect.client.end();
      });

      connect.client.on("reconnect", () => {
        setConnect({
          ...connect,
          connectStatus: "Reconnecting",
        });
      });

      connect.client.on("message", (topic, message) => {
        console.log(topic, message.toString());
        setPersent(persent => persent + 1)
        if (topic) {
          setForm({
            ...form,
            receive: JSON.stringify(message.toString(), null, 4),
          });
        }
      });
    }
  }, [connect]);

  const onRecordChange = () => {
    console.log("record change");
  };

  const handleConnect = () => {
    const { host, port, username, password } = form;
    // test for wss
    // test for wss version 3.0
    const url = `wss://${host}:${port}/mqtt`;

    options.username = username;
    options.password = password;
    setConnect({
      ...connect,
      client: mqtt.connect(url, options),
      connectStatus: "connecting",
    });
  };

  const handleSubscribe = () => {
    connect.client.subscribe(form.subscribe, { qos: 0 }, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      setConnect({
        ...connect,
        isSubed: true,
      });
    });
  };

  const handlePublish = () => {
    connect.client.publish(form.publish, form.payload, { qos: 0 }, (error) => {
      if (error) {
        console.log("Publish error: ", error);
      }
    });
  };

  return (
    <div className="p-3">
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="设置" key="1">
          <Form
            layout="vertical"
            name="basic"
            initialValues={form}
            onValuesChange={onRecordChange}
          >
            <Row gutter={20}>
              <Col>
                <Form.Item label="Host" name="host">
                  <Input />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Port" name="port">
                  <Input />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Username" name="username">
                  <Input />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Password" name="password">
                  <Input />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  label={
                    connect.connectStatus === "connected" ? (
                      <CheckCircleOutlined style={{ color: "green" }} />
                    ) : (
                      <CloseCircleOutlined style={{ color: "red" }} />
                    )
                  }
                  name=""
                >
                  <Button onClick={handleConnect}>连接</Button>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={6}>
                <Form.Item label="topic" name="subscribe">
                  <Input />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  label={
                    connect.isSubed ? (
                      <CheckCircleOutlined style={{ color: "green" }} />
                    ) : (
                      <CloseCircleOutlined style={{ color: "red" }} />
                    )
                  }
                  name="password"
                >
                  <Button onClick={handleSubscribe}>订阅</Button>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={6}>
                <Form.Item label="payload" name="payload">
                  <TextArea
                    rows={10}
                    placeholder="maxLength is 6"
                    maxLength={6}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="topic" name="publish">
                  <Input />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item label=" " name="password">
                  <Button onClick={handlePublish}>发布</Button>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={14}>
                <Form.Item label="receiver" name="receive">
                  <TextArea
                    size="large"
                    rows={10}
                    placeholder="maxLength is 6"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Tabs.TabPane>
        <Tabs.TabPane tab="设备" key="2">
          <Tools persent={80} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default MQTTPage;
