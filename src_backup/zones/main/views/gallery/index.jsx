import React from "react";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import styled from "styled-components";

import pic1 from "assets/1.png";
import pic2 from "assets/2.png";
import pic3 from "assets/3.png";
import pic4 from "assets/4.png";
import pic5 from "assets/5.png";
import pic6 from "assets/6.png";
import pic7 from "assets/slider/i1.png";
import pic8 from "assets/slider/i2.png";
import pic9 from "assets/slider/i3.png";
import pic10 from "assets/slider/i4.png";
import pic11 from "assets/slider/i5.png";
import pic12 from "assets/slider/i6.png";
import pic13 from "assets/slider/i7.png";
import pic14 from "assets/slider/i8.png";

const Img = styled.img`
  height: 500px;
  object-fit: cover;
`;

const MyGallery = () => (
  <Gallery>
    <Item original={pic1} thumbnail={pic1} width="560" height="420">
      {({ ref, open }) => <Img ref={ref} onClick={open} src={pic1} />}
    </Item>
    <Item original={pic2} thumbnail={pic2} width="560" height="420">
      {({ ref, open }) => <Img ref={ref} onClick={open} src={pic2} />}
    </Item>
    <Item
      original={pic3}
      thumbnail={pic3}
      width="560"
      height="420"
      style={{ objectFit: "cover" }}
    >
      {({ ref, open }) => <Img ref={ref} onClick={open} src={pic3} />}
    </Item>
    <Item original={pic4} thumbnail={pic4} width="560" height="420">
      {({ ref, open }) => <Img ref={ref} onClick={open} src={pic4} />}
    </Item>
    <Item
      original={pic5}
      thumbnail={pic5}
      width="560"
      height="420"
      style={{ objectFit: "contain" }}
    >
      {({ ref, open }) => <Img ref={ref} onClick={open} src={pic5} />}
    </Item>
    <Item
      original={pic6}
      thumbnail={pic6}
      width="560"
      height="420"
      style={{ objectFit: "contain" }}
    >
      {({ ref, open }) => <Img ref={ref} onClick={open} src={pic6} />}
    </Item>
    <Item
      original={pic7}
      thumbnail={pic7}
      width="560"
      height="420"
      style={{ objectFit: "contain" }}
    >
      {({ ref, open }) => <Img ref={ref} onClick={open} src={pic7} />}
    </Item>
    <Item
      original={pic8}
      thumbnail={pic8}
      width="560"
      height="420"
      style={{ objectFit: "contain" }}
    >
      {({ ref, open }) => <Img ref={ref} onClick={open} src={pic8} />}
    </Item>
    <Item
      original={pic9}
      thumbnail={pic9}
      width="560"
      height="420"
      style={{ objectFit: "contain" }}
    >
      {({ ref, open }) => <Img ref={ref} onClick={open} src={pic9} />}
    </Item>
    <Item
      original={pic10}
      thumbnail={pic10}
      width="560"
      height="420"
      style={{ objectFit: "contain" }}
    >
      {({ ref, open }) => <Img ref={ref} onClick={open} src={pic10} />}
    </Item>
    <Item
      original={pic11}
      thumbnail={pic11}
      width="560"
      height="420"
      style={{ objectFit: "contain" }}
    >
      {({ ref, open }) => <Img ref={ref} onClick={open} src={pic11} />}
    </Item>
    <Item
      original={pic12}
      thumbnail={pic12}
      width="560"
      height="420"
      style={{ objectFit: "contain" }}
    >
      {({ ref, open }) => <Img ref={ref} onClick={open} src={pic12} />}
    </Item>
    <Item
      original={pic13}
      thumbnail={pic13}
      width="560"
      height="420"
      style={{ objectFit: "contain" }}
    >
      {({ ref, open }) => <Img ref={ref} onClick={open} src={pic13} />}
    </Item>
    <Item
      original={pic14}
      thumbnail={pic14}
      width="560"
      height="420"
      style={{ objectFit: "contain" }}
    >
      {({ ref, open }) => <Img ref={ref} onClick={open} src={pic14} />}
    </Item>
  </Gallery>
);
export default MyGallery;
