import React, { useState, useEffect } from "react";
import {
  // Modal, Button,
  Table,
  Avatar,
} from "antd";
import { categoryList } from "routes";
import Fetch from "components/fetch/fetch";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";
import { mainColor } from "common";
const Container = styled.div`
  margin-top: 40px;
`;
const Select = styled.select`
  height: 34px;
  border: 1px #a9a9a9 solid;
  border-radius: 4px;
  padding: 1px 12px;
  font-size: 15px;
  font-family: inherit;
  outline: none;
  width: 61%;
  margin-bottom: 12px;
`;

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [category, setCategory] = useState("all");
  const [data, setData] = useState(null);
  useEffect(() => {
    Fetch.get("/users", (res) => {
      console.log(res);
      if (res) {
        setData(res);
      }
    });
  }, [category]);
  console.log(data);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "تصویر",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "نام کامل",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "پلاک",
      dataIndex: "plate",
      key: "plate",
    },

    {
      title: "تاریخ ثبت",
      dataIndex: "created_at",
      key: "created_at",
    },
  ];

  return (
    <Container>
      <label>دسته بندی</label>
      <Select
        name=""
        id=""
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">همه</option>
        {categoryList.map((e, key) => {
          return (
            <option value={e.name} key={key}>
              {e.rtlname}
            </option>
          );
        })}
      </Select>
      <Table
        bordered
        dataSource={
          data &&
          data.map((e, key) => ({
            key: key,
            image: (
              <Avatar
                shape={"square"}
                size={60}
                icon={<UserOutlined style={{ fontSize: 26 }} />}
              />
            ),
            name: e.name,
            plate: e.plate,
            created_at: new Date(e.created_at).toLocaleDateString("fa-IR"),
          }))
        }
        columns={columns}
      />
      ;
    </Container>
  );
}
