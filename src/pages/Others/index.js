import {
  Table,
  Space,
  Progress,
  Badge,
  Radio,
  Descriptions,
  Button,
} from "antd";
import * as mqtt from "mqtt/dist/mqtt";
import { useEffect, useState } from "react";

const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
    online: false,
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    online: true,
    address: "西湖区湖底公园1号",
  },
];

const columns = [
  {
    title: "设备",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "状态",
    dataIndex: "age",
    key: "age",
    render: (_, record) =>
      record.online ? (
        <div className="flex">
          <Progress percent={30} />
        </div>
      ) : (
        <div>
          {" "}
          <Badge status="error" /> 离线
        </div>
      ),
  },
  {
    title: "电池电压(0.1 v)",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "电池电量(100%)",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "当前压力(0.1MPa)",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "开阀次数",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "关阀次数",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "操作",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>开阀</a>
        <a>关阀</a>
        <a>停止</a>
      </Space>
    ),
  },
];
const Others = () => {
  const [connectionStatus, setConnectionStatus] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const client = mqtt.connect("broker.emqx.io:8083/mqtt");
    client.on("connect", () => setConnectionStatus(true));
    client.on("message", (topic, payload, packet) => {
      setMessages(messages.concat(payload.toString()));
    });
  }, []);

  return (
    <div className="h-screen">
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <div>
              <Descriptions bordered>
                <Descriptions.Item label="Product">
                  Cloud Database
                </Descriptions.Item>
                <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
                <Descriptions.Item label="time">18:00:00</Descriptions.Item>
                <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
                <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                <Descriptions.Item label="Official">$60.00</Descriptions.Item>
                <Descriptions.Item label="Config Info">
                  Data disk type: MongoDB
                  <br />
                  Database version: 3.4
                  <br />
                  Package: dds.mongo.mid
                  <br />
                  Storage space: 10 GB
                  <br />
                  Replication factor: 3
                  <br />
                  Region: East China 1
                  <br />
                </Descriptions.Item>
              </Descriptions>
            </div>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={dataSource}
      />
    </div>
  );
};

export default Others;
