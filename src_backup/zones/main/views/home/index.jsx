import React from "react";
import styled from "styled-components";
import image1 from "assets/image1.jpg";
import image2 from "assets/image2.jpg";
import image3 from "assets/image3.jpg";
import photo1 from "assets/slider/i1.png";
import photo2 from "assets/slider/i2.png";
import photo3 from "assets/slider/i3.png";
import photo4 from "assets/slider/i4.png";
import photo5 from "assets/slider/i5.png";
import photo6 from "assets/slider/i6.png";
import photo7 from "assets/slider/i7.png";
import photo8 from "assets/slider/i8.png";
import { mainColor } from "common";
import Loading from "components/main/loading";
import { Link } from "react-router-dom";
import Fetch from "components/fetch/fetch";
// import video from 'assets/video.gif'
import ImageSlider from "ac-react-simple-image-slider";

import { ReactComponent as NewspaperIcon } from "assets/icons/newspaper.svg";

const imglist = [
  { src: photo1, title: "photo1" },
  { src: photo2, title: "photo2" },
  { src: photo3, title: "photo3" },
  { src: photo4, title: "photo4" },
  { src: photo5, title: "photo5" },
  { src: photo6, title: "photo6" },
  { src: photo7, title: "photo7" },
  { src: photo8, title: "photo8" },
];
const HeaderImage = styled.img`
  height: 280px;
  width: 100%;
  object-fit: cover;
  filter: contrast(0.5);
`;
const MainHead = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 120px;
  text-decoration: none;
  color: black;
`;
const News = styled.section`
  background: #eeeeee;
  display: flex;
  justify-content: space-around;
  padding: 9px 0;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Aside = styled.aside`
  background: #ffffff;
  width: 20%;
  padding: 0 18px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 900px) {
    width: 70%;
  }
`;
const AsideItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 5px 0;
  text-decoration: none;
  color: black;
`;
const Post = styled.div`
  width: 300px;
  background: white;
  display: flex;
  flex-direction: column;
  margin: 0 8px;
`;
const PostBottom = styled.div`
  display: flex;
  justify-content: space-between;
  height: 42px;
  align-items: center;
`;
const PostLink = styled(Link)`
  padding: 0 12px;
  background: ${mainColor};
  color: white;
  text-decoration: none;
  height: 100%;
  align-items: center;
  display: flex;
`;
const LatestPosts = styled.div`
  width: 68%;
  background: white;
  padding: 18px;
  border-radius: 3px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const Img = styled.img`
  height: 200px;
  object-fit: cover;
`;

export default (props) => {
  const [data, setData] = React.useState([]);

  const latestPosts = [
    {
      text: "زیبا سازی فضای سبز ...",
      image: image1,
      slug: "زیبا-سازی-فضای-سبز",
    },
    { text: "رنگ آمیزی جدول...", image: image2, slug: "رنگ-آمیزی-جدول" },
    { text: "نقشه گوگل شهرک...", image: image3, slug: "نقشه-گوگل-شهرک" },
  ];

  React.useEffect(() => {
    Fetch.get(`/posts`, (res) => {
      console.log(res);
      if (res) {
        let reversed = res.reverse();
        setData(reversed);
        console.log(res);
      }
    });
  }, ["input"]);

  const Latest = () => (
    <LatestPosts>
      {latestPosts.map((e, key) => {
        return (
          <Post key={key}>
            <Img src={e.image} alt="" />
            <PostBottom>
              <p>{e.text}</p>
              <PostLink to={`post/${e.slug}`}>ادامه خبر</PostLink>
            </PostBottom>
          </Post>
        );
      })}
    </LatestPosts>
  );

  if (data.length < 1) {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ImageSlider
          showArrows={false}
          infinite={true}
          dir="ltr"
          duration="8"
          data={imglist}
          height={"270px"}
        />
        <MainHead>
          <Loading />
        </MainHead>
        <News>
          <Aside>
            <Loading />
          </Aside>
          <Latest />
        </News>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ImageSlider
        showArrows={false}
        infinite={true}
        dir="ltr"
        duration="8"
        data={imglist}
        height={"270px"}
        //TODO : delete this styles and change the build
        itemStyles={{ objectPosition: "center" }}
      />
      <MainHead to={`/post/${data && data[data.length - 1].slug}`}>
        {data && data[data.length - 1].title}
      </MainHead>
      <News>
        <Aside>
          {data.length &&
            data.map((e, key) => {
              if (key < 6) {
                return (
                  <AsideItem to={`/post/${e.slug}`}>
                    <NewspaperIcon
                      className="icon"
                      style={{ width: 22, height: 22, padding: "0 6px" }}
                      key={key}
                    />
                    <span style={{ fontSize: 13 }}>{e.title}</span>
                  </AsideItem>
                );
              }
            })}
        </Aside>
        <Latest />
      </News>
    </div>
  );
};
