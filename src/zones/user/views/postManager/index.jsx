import React, { useState, useEffect } from "react";
import { Modal, Button, Table, Avatar, Select } from "antd";
import { categoryList } from "routes";
import Fetch from "components/fetch/fetch";
import styled from "styled-components";
import {
  PlusCircleFilled,
  // CloseOutlined,
  // CheckOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { mainColor } from "common";
import NewPost from "./newPost";
import ModalButton from "components/buttons/modalBotton";
import UpdatePost from "./updatePost";
const Container = styled.div`
  margin-top: 40px;
`;
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [category, setCategory] = useState("all");
  const [data, setData] = useState(null);
  // console.log(`/posts/${category}`);
  useEffect(() => {
    Fetch.get(
      category === "all" ? "/posts" : `/posts/category/${category}`,
      (res) => {
        console.log(res);
        if (res) {
          setData(
            res.reverse().map((e) => {
              return {
                ...e,
                data: JSON.parse(e.data),
              };
            })
          );
        }
      }
    );
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
      align: "center",
    },
    {
      title: "عنوان",
      dataIndex: "title",
      key: "title",
      align: "center",
    },
    {
      title: "نویسنده",
      dataIndex: "author",
      key: "author",
      align: "center",
    },
    {
      title: "دسته بندی",
      dataIndex: "category",
      key: "category",
      align: "center",
    },
    {
      title: "عملیات",
      dataIndex: "actions",
      key: "actions",
      align: "center",
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
        <NewPost />
      </Modal>
      <div style={{ marginBottom: 18 }}>
        {" "}
        <label> دسته بندی : </label>{" "}
        <Select
          style={{ width: 280 }}
          defaultValue={category}
          onChange={(e) => setCategory(e)}
        >
          <Select.Option value="all">همه</Select.Option>
          {categoryList.map((e, key) => {
            return (
              <Select.Option value={e.name} key={key}>
                {e.rtlname}
              </Select.Option>
            );
          })}{" "}
        </Select>
      </div>
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
            author: e.author,
            category: categoryList.find((item) => e.category === item.name)
              .rtlname,
            actions: (
              <div>
                <ModalButton
                  buttonText="آپدیت"
                  modalTitle="اصلاح پست"
                  buttonProps={{ style: { color: "#1890ff" }, type: "text" }}
                >
                  <UpdatePost data={e} />
                </ModalButton>
                <Button type="text" danger>
                  بایگانی
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
