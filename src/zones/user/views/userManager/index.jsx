import React, { useState, useEffect } from "react";
import { Modal, Button, Table, Avatar } from "antd";
import Fetch from "components/fetch/fetch";
import styled from "styled-components";
import { PlusCircleFilled, UserOutlined } from "@ant-design/icons";
import { mainColor } from "common";
import NewUser from "./newUser";
import ModalButton from "components/buttons/modalBotton";
import UpdateUser from "./updateUser";
const Container = styled.div`
  margin-top: 40px;
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
    {
      title: "عملیات",
      dataIndex: "actions",
      key: "actions",
    },
  ];

  return (
    <Container>
      <PlusCircleFilled
        style={{
          fontSize: "42px",
          color: mainColor,
          position: "relative",
          bottom: "28px",
          cursor: "pointer",
        }}
        onClick={showModal}
      />
      <Modal
        title="اضافه کردن پست"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <NewUser />
      </Modal>
      <label>دسته بندی</label>
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
            actions: (
              <div>
                <ModalButton
                  buttonText="آپدیت"
                  modalTitles="اصلاح اطلاعات کاربر"
                  buttonProps={{ style: { color: "#1890ff" }, type: "text" }}
                >
                  <UpdateUser data={e} />
                </ModalButton>
                <Button type="text" danger>
                  تعلیق
                </Button>
              </div>
            ),
          }))
        }
        columns={columns}
      />
      ;
    </Container>
  );
}
