import React from "react";
import styled from "styled-components";
import Social from "components/header/soical";
import st from "assets/Statute.pdf";
import Send from "zones/user/views/ticket/send";
import ModalButton from "components/buttons/modalBotton";
import { Modal, Button, Avatar, Card } from "antd";
import {
  PlusCircleFilled,
  // CloseOutlined,
  // CheckOutlined,
  PictureOutlined,
} from "@ant-design/icons";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;
const Item = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.62);
  margin: 8px;
  border-radius: 3px;
  padding: 14px;
`;

export default (props) => {
  return (
    <Container>
      <ItemContainer>
        <Item>
          <h5>آدرس</h5>
          <address>آدرس: مازندران، ایزدشهر، شهرک پزشکان</address>
        </Item>
        <Item>
          <h4>تلفن</h4>
          <phone>+98xxxxxxx</phone>
        </Item>
        <Item>
          <h4>ایمیل</h4>
          <email>info@pzkn.com</email>
        </Item>
      </ItemContainer>
      <h5 style={{ marginTop: 48 }}>شبکه های اجتماعی :</h5>
      <Social />
      <ModalButton
        buttonText="ارسال تیکت به مدیریت"
        modalTitle="ارسال تیکت به مدیریت"
        buttonProps={{
          style: { color: "#1890ff", marginTop: 8 },
          type: "button",
        }}
      >
        <Send />
      </ModalButton>
      <h2 style={{ margin: "12px 0" }}>اعضاء هیئت مدیره :</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: 18,
        }}
      >
        {list.map((e, key) => (
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <Avatar
                style={{ margin: 5 }}
                shape={"square"}
                size={200}
                src={e.image}
                icon={<PictureOutlined style={{ fontSize: 26 }} />}
              />
            }
          >
            <Card.Meta title={e.name} description={e.title} />
          </Card>
          // <div style={{ padding: 18, width: 440 }} className="center">
          //   <Avatar
          //     style={{ margin: 5 }}
          //     shape={"square"}
          //     size={60}
          //     src={e.image}
          //     icon={<PictureOutlined style={{ fontSize: 26 }} />}
          //   />
          //   <p>{e.name}</p>
          //   <p style={{ fontWeight: "bold", padding: "0 5px" }}>{e.title}</p>
          // </div>
        ))}
      </div>
      <a href={st} download style={{ marginTop: 48, fontVariant: "italic" }}>
        اساسنامه شهرک پزشکان
      </a>
    </Container>
  );
};

const list = [
  {
    name: "اقای دکتر تسلیمی ",
    title: "رییس",

    image: "https://pezeshkantown.ir/taslimi.jpeg",
  },
  {
    name: "اقای دکتر هادیان ",
    title: "نایب رییس",
    image: "https://pezeshkantown.ir/hadian.jpeg",
  },
  {
    name: "علی تصدیقیان",
    title: "مدیر عامل",
    image: "https://pezeshkantown.ir/tasdighiyan.jpg",
  },
  {
    name: "اقایزعلی حسینی   ",
    title: "خزانه دار",
    image: "https://pezeshkantown.ir/hosein-zadeh.jpg",
  },
  {
    name: "خانم  مالکی",
    title: "عضو",
    image: "",
  },
];
