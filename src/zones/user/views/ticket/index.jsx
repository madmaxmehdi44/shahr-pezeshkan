import React, { useState, useEffect } from "react";
import {
  Modal,
  // Button,
  Table,
  Avatar,
} from "antd";
import Fetch from "components/fetch/fetch";
import styled from "styled-components";
import {
  PlusCircleFilled,
  // CloseOutlined,
  // CheckOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { mainColor } from "common";
import NewTicket from "./send";
import ModalButton from "components/buttons/modalBotton";
// import UpdatePost from "./updatePost";
const Container = styled.div`
  margin-top: 40px;
`;

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [category, setCategory] = useState("all");
  const [data, setData] = useState(null);
  // console.log(`/posts/${category}`);
  useEffect(() => {
    Fetch.get("/ticket", (res) => {
      console.log(res);
      if (res) {
        setData(
          res.map((e) => {
            return {
              ...e,
              data: JSON.parse(e.data),
            };
          })
        );
      }
    });
  }, [category]);
  console.log("data", data);
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
      title: "عنوان",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "محتوا",
      dataIndex: "content",
      key: "content",
      align: "center",
    },
    {
      title: "دسته بندی",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "وضعیت",
      dataIndex: "state",
      key: "state",
    },
    // {
    //   title: "عملیات",
    //   dataIndex: "actions",
    //   key: "actions",
    // },
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
        <NewTicket />
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
                icon={<PictureOutlined style={{ fontSize: 26 }} />}
              />
            ),
            title: e.title,
            content: (
              <div
                style={{ textAlign: "start" }}
                dangerouslySetInnerHTML={{ __html: e.content }}
              ></div>
            ),
            category: e.category,
            state: e.state,
            // actions: (
            //   <div>
            //     <ModalButton
            //       buttonText="آپدیت"
            //       modalTitle="اصلاح پست"
            //       buttonProps={{ style: { color: "#1890ff" }, type: "text" }}
            //     >
            //       <UpdatePost data={e} />
            //     </ModalButton>
            //     <Button type="text" danger>
            //       بایگانی
            //     </Button>
            //   </div>
            // ),
          }))
        }
        columns={columns}
      />
      ;
    </Container>
  );
}
