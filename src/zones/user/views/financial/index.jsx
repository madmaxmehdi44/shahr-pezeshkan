import React, { useState, useEffect } from "react";
import {
  // Modal, Button,
  Table,
  Avatar,
  Select,
  Tabs,
} from "antd";
import Payment from "./payment";
import { categoryList } from "routes";
import Fetch from "components/fetch/fetch";
import styled from "styled-components";
import {
  //   PlusCircleFilled,
  // CloseOutlined,
  // CheckOutlined,
  PictureOutlined,
} from "@ant-design/icons";
// import { mainColor } from "common";
const Container = styled.div`
  margin-top: 40px;
`;

const values = [
  {
    plate: "247",
    owner: "بزرگزاد",
    amount: " 70,000,000 ",
  },
  {
    plate: "215",
    owner: "بينايي",
    amount: " 100,000,000 ",
  },
  {
    plate: "36",
    owner: "36",
    amount: " 80,000,000 ",
  },
  {
    plate: "57",
    owner: "پيروانه",
    amount: " 70,000,000 ",
  },
  {
    plate: "51",
    owner: "موسوي",
    amount: " 50,000,000 ",
  },
  {
    plate: "32",
    owner: "هاديان",
    amount: " 100,000,000 ",
  },
  {
    plate: "89",
    owner: "ترخان",
    amount: " 100,000,000 ",
  },
  {
    plate: "110",
    owner: "خدابخش",
    amount: " 70,000,000 ",
  },
  {
    plate: "9",
    owner: "9جعفري",
    amount: " 100,000,000 ",
  },
  {
    plate: "222",
    owner: "برهان",
    amount: " 100,000,000 ",
  },
  {
    plate: "10",
    owner: "زاد",
    amount: " 100,000,000 ",
  },
  {
    plate: "79",
    owner: "خاتمي",
    amount: " 25,000,000 ",
  },
  {
    plate: "1",
    owner: "ميرمهدي",
    amount: " 100,000,000 ",
  },
  {
    plate: "206",
    owner: "مطهري",
    amount: " 100,000,000 ",
  },
  {
    plate: "26",
    owner: "محسنيان",
    amount: " 100,000,000 ",
  },
  {
    plate: "224",
    owner: "برهان",
    amount: " 100,000,000 ",
  },
  {
    plate: "87",
    owner: "خسروشاهي",
    amount: " 100,000,000 ",
  },
  {
    plate: "56",
    owner: "اشرف پور",
    amount: " 50,000,000 ",
  },
  {
    plate: "66",
    owner: "چشمه",
    amount: " 100,000,000 ",
  },
  {
    plate: "76",
    owner: "باراني",
    amount: " 25,000,000 ",
  },
  {
    plate: "106",
    owner: "تحويلداري",
    amount: " 50,000,000 ",
  },
  {
    plate: "118",
    owner: "اميري",
    amount: " 100,000,000 ",
  },
  {
    plate: "46",
    owner: "نقي زاده",
    amount: " 100,000,000 ",
  },
  {
    plate: "182",
    owner: "زاهدي",
    amount: " 50,000,000 ",
  },
  {
    plate: "6",
    owner: "عسكريان",
    amount: " 100,000,000 ",
  },
  {
    plate: "238",
    owner: "وفايي",
    amount: " 50,000,000 ",
  },
  {
    plate: "62",
    owner: "سررشته داري",
    amount: " 25,000,000 ",
  },
  {
    plate: "41",
    owner: "زهتاب",
    amount: " 100,000,000 ",
  },
  {
    plate: "42",
    owner: "زهتاب",
    amount: " 100,000,000 ",
  },
  {
    plate: "51",
    owner: "موسوي",
    amount: " 50,000,000 ",
  },
  {
    plate: "203",
    owner: "اسماعيل زادگان",
    amount: " 100,000,000 ",
  },
  {
    plate: "30",
    owner: "مقدسي",
    amount: " 80,000,000 ",
  },
  {
    plate: "155",
    owner: "ممشخاني",
    amount: " 25,000,000 ",
  },
  {
    plate: "156",
    owner: "ممشخاني",
    amount: " 25,000,000 ",
  },
  {
    plate: "129",
    owner: "ممشخاني",
    amount: " 25,000,000 ",
  },
  {
    plate: "246",
    owner: "فرزانگان",
    amount: " 50,000,000 ",
  },
  {
    plate: "122",
    owner: "پرنده",
    amount: " 100,000,000 ",
  },
  {
    plate: "103",
    owner: "شمشيري",
    amount: " 50,000,000 ",
  },
  {
    plate: "254",
    owner: "رضايي",
    amount: " 100,000,000 ",
  },
  {
    plate: "100",
    owner: "حسيني",
    amount: " 100,000,000 ",
  },
  {
    plate: "39",
    owner: "فلاحي",
    amount: " 25,000,000 ",
  },
  {
    plate: "158",
    owner: "فرجي",
    amount: " 50,000,000 ",
  },
  {
    plate: "159",
    owner: "فرجي",
    amount: " 50,000,000 ",
  },
  {
    plate: "3",
    owner: "نوري",
    amount: " 100,000,000 ",
  },
  {
    plate: "74",
    owner: "سلماني",
    amount: " 100,000,000 ",
  },
  {
    plate: "4",
    owner: "جماليان",
    amount: " 100,000,000 ",
  },
  {
    plate: "52",
    owner: "حكمت آرا",
    amount: " 100,000,000 ",
  },
  {
    plate: "198",
    owner: "قنبري",
    amount: " 100,000,000 ",
  },
  {
    plate: "221",
    owner: "طلوعي",
    amount: " 25,000,000 ",
  },
  {
    plate: "ر210",
    owner: "رحمتي پور",
    amount: " 50,000,000 ",
  },
  {
    plate: "197",
    owner: "رحمتي پور",
    amount: " 50,000,000 ",
  },
  {
    plate: "84",
    owner: "شهيري",
    amount: " 100,000,000 ",
  },
  {
    plate: "96",
    owner: "داداشي",
    amount: " 100,000,000 ",
  },
  {
    plate: "28",
    owner: "آقايي",
    amount: " 100,000,000 ",
  },
  {
    plate: "217",
    owner: "شاكري",
    amount: " 20,000,000 ",
  },
  {
    plate: "5",
    owner: "شفيعي",
    amount: " 100,000,000 ",
  },
  {
    plate: "136",
    owner: "توحيدخواه",
    amount: " 100,000,000 ",
  },
  {
    plate: "178",
    owner: "حفيظي",
    amount: " 100,000,000 ",
  },
  {
    plate: "84",
    owner: "نجاتيان",
    amount: " 50,000,000 ",
  },
  {
    plate: "77",
    owner: "توكلي",
    amount: " 20,000,000 ",
  },
  {
    plate: "112",
    owner: "رشيدي",
    amount: " 20,000,000 ",
  },
  {
    plate: "110",
    owner: "خدابخش",
    amount: " 100,000,000 ",
  },
  {
    plate: "145",
    owner: "پورآذرنگ",
    amount: " 100,000,000 ",
  },
  {
    plate: "250",
    owner: "خاكپور",
    amount: " 100,000,000 ",
  },
  {
    plate: "48",
    owner: "باباپور",
    amount: " 50,000,000 ",
  },
  {
    plate: "81",
    owner: "باباپور",
    amount: " 50,000,000 ",
  },
  {
    plate: "233",
    owner: "عالمي",
    amount: " 100,000,000 ",
  },
  {
    plate: "172",
    owner: "ابراهيمي",
    amount: " 25,000,000 ",
  },
  {
    plate: "22",
    owner: "جاهد",
    amount: " 25,000,000 ",
  },
  {
    plate: "120",
    owner: "جاهد",
    amount: " 25,000,000 ",
  },
  {
    plate: "101",
    owner: "حميدي",
    amount: " 100,000,000 ",
  },
  {
    plate: "236",
    owner: "زهرايي",
    amount: " 100,000,000 ",
  },
  {
    plate: "95",
    owner: "مرشدزاده",
    amount: " 100,000,000 ",
  },
  {
    plate: "249",
    owner: "ملكي",
    amount: " 50,000,000 ",
  },
  {
    plate: "215",
    owner: "آهاردي",
    amount: " 100,000,000 ",
  },
  {
    plate: "26",
    owner: "سديفي",
    amount: " 100,000,000 ",
  },
  {
    plate: "235",
    owner: "كرمي نژاد",
    amount: " 100,000,000 ",
  },
  {
    plate: "149",
    owner: "خدابخش",
    amount: " 100,000,000 ",
  },
  {
    plate: "124",
    owner: "توكلي",
    amount: " 100,000,000 ",
  },
  {
    plate: "80",
    owner: "كلانكي",
    amount: " 50,000,000 ",
  },
  {
    plate: "111",
    owner: "كلانكي",
    amount: " 50,000,000 ",
  },
  {
    plate: "237",
    owner: "خاوران",
    amount: " 100,000,000 ",
  },
  {
    plate: "191",
    owner: "خاوران",
    amount: " 50,000,000 ",
  },
  {
    plate: "105",
    owner: "موسوي",
    amount: " 50,000,000 ",
  },
  {
    plate: "99",
    owner: "توكلي",
    amount: " 32,000,000 ",
  },
  {
    plate: "144",
    owner: "صابري",
    amount: " 100,000,000 ",
  },
  {
    plate: "70",
    owner: "مرشدزاده",
    amount: " 100,000,000 ",
  },
  {
    plate: "227",
    owner: "ناصري",
    amount: " 50,000,000 ",
  },
  {
    plate: "76",
    owner: "ميرمحمدي",
    amount: " 100,000,000 ",
  },
  {
    plate: "79",
    owner: "خاتمي",
    amount: " 25,000,000 ",
  },
  {
    plate: "45،47،162و137",
    owner: "گلابي",
    amount: " 400,000,000 ",
  },
  {
    plate: "76",
    owner: "باراني",
    amount: " 25,000,000 ",
  },
  {
    plate: "19",
    owner: "تكتاز",
    amount: " 80,000,000 ",
  },
  {
    plate: "71",
    owner: "يوسف زاده",
    amount: " 100,000,000 ",
  },
  {
    plate: "17",
    owner: "عرب زاده",
    amount: " 25,000,000 ",
  },
  {
    plate: "173",
    owner: "هاشمي",
    amount: " 80,000,000 ",
  },
  {
    plate: "39",
    owner: "فلاحي",
    amount: " 25,000,000 ",
  },
  {
    plate: "2",
    owner: "عيسي پور",
    amount: " 50,000,000 ",
  },
  {
    plate: "244",
    owner: "پورمحمدي",
    amount: " 100,000,000 ",
  },
  {
    plate: "61",
    owner: "سليماني",
    amount: " 100,000,000 ",
  },
  {
    plate: "11",
    owner: "احتياطي",
    amount: " 100,000,000 ",
  },
  {
    plate: "97",
    owner: "عياني",
    amount: " 200,000,000 ",
  },
  {
    plate: "62",
    owner: "سررشته داري",
    amount: " 25,000,000 ",
  },
  {
    plate: "48",
    owner: "تسليمي",
    amount: " 13,500,000 ",
  },
  {
    plate: "",
    owner: "باباپور",
    amount: " 80,000,000 ",
  },
  {
    plate: "94",
    owner: "علوياني",
    amount: " 30,000,000 ",
  },
  {
    plate: "199",
    owner: "معين",
    amount: " 2,000,000 ",
  },
  {
    plate: "10",
    owner: "زاد",
    amount: " 80,000,000 ",
  },
  {
    plate: "238",
    owner: "وفايي",
    amount: " 30,000,000 ",
  },
  {
    plate: "62",
    owner: "سررشته داري",
    amount: " 80,000,000 ",
  },
  {
    plate: "30",
    owner: "مقدسي",
    amount: " 40,000,000 ",
  },
  {
    plate: "246",
    owner: "فرزانگان",
    amount: " 50,000,000 ",
  },
  {
    plate: "254",
    owner: "رضايي",
    amount: " 30,000,000 ",
  },
  {
    plate: "216",
    owner: "دري",
    amount: " 30,000,000 ",
  },
  {
    plate: "84",
    owner: "شهيري",
    amount: " 30,000,000 ",
  },
  {
    plate: "5",
    owner: "شفيعي",
    amount: " 30,000,000 ",
  },
  {
    plate: "136",
    owner: "توحيدخواه",
    amount: " 30,000,000 ",
  },
  {
    plate: "178",
    owner: "حفيظي",
    amount: " 30,000,000 ",
  },
  {
    plate: "84",
    owner: "نجاتيان",
    amount: " 60,000,000 ",
  },
  {
    plate: "77",
    owner: "توكلي",
    amount: " 30,000,000 ",
  },
  {
    plate: "93",
    owner: "مرشدزاده",
    amount: " 50,000,000 ",
  },
  {
    plate: "160",
    owner: "بهرامي",
    amount: " 30,000,000 ",
  },
  {
    plate: "93",
    owner: "مرشدزاده",
    amount: " 25,000,000 ",
  },
  {
    plate: "160",
    owner: "بهرامي",
    amount: " 30,000,000 ",
  },
  {
    plate: "112",
    owner: "رشيدي",
    amount: " 30,000,000 ",
  },
  {
    plate: "91",
    owner: "حقار",
    amount: " 30,000,000 ",
  },
  {
    plate: "124",
    owner: "توكلي",
    amount: " 20,000,000 ",
  },
  {
    plate: "145",
    owner: "پورآذرنگ",
    amount: " 42,000,000 ",
  },
  {
    plate: "177",
    owner: "فخرالديني",
    amount: " 80,000,000 ",
  },
  {
    plate: "76",
    owner: "باراني",
    amount: " 5,000,000 ",
  },
  {
    plate: "11",
    owner: "احتياطي",
    amount: " 30,000,000 ",
  },
];
const soorat = [
  {
    code: 71010008,
    name: "انواع گل و گياه و چمن",
    amount: "31,900,000",
  },
  {
    code: 71010010,
    name: "پرداختي هاي تعمير و نگهداري  ماشين آلات و تاسيسات",
    amount: "11,700,000",
  },
  {
    code: 71010012,
    name: "پرداختي هاي بانكي-كارمزد",
    amount: "147,000",
  },
  {
    code: 71010013,
    name: "پرداختي هاي متفرقه",
    amount: "6,860,000",
  },
  {
    code: 71010014,
    name: "پرداختي هاي البسه كاركنان",
    amount: "1,480,000",
  },
  {
    code: 71010015,
    name: "پرداختي هاي اياب وزهاب",
    amount: "25,000,000",
  },
  {
    code: 71010016,
    name: "پرداختي هاي حقوقي و ثبتي",
    amount: "33,514,527",
  },
  {
    code: 71010017,
    name: "پرداختي هاي لوازم  برقي",
    amount: "269,500,000",
  },
  {
    code: 71010018,
    name: "پرداختي هاي برگزاري مجمع عمومي",
    amount: "133,056,550",
  },
  {
    code: 71010021,
    name: "پرداختي هاي  پذيرايي",
    amount: "22,944,000",
  },
  {
    code: 71010022,
    name: "پرداختي هاي مطبوعات و لوازم التحرير",
    amount: "10,905,000",
  },
  {
    code: 71010023,
    name: "پرداختي هاي مراسلات پستي",
    amount: "1,008,238",
  },
  {
    code: 71010024,
    name: "پرداختي هاي حمل زباله شهرداري",
    amount: "1,100,000",
  },
  {
    code: 71010025,
    name: "طرح دريا",
    amount: "70,000,000",
  },
  {
    code: 71010028,
    name: "پرداختي هاي محوطه سازي شهرك",
    amount: "25,950,000",
  },
  {
    code: 71010033,
    name: "پرداختي هاي حسابرسي",
    amount: "100,000,000",
  },
  {
    code: 71010036,
    name: "ابطال تمبر ،حق مشاوره و حق وكاله",
    amount: "15,000,000",
  },
  {
    code: 71010037,
    name: "پرداختي هاي سوخت",
    amount: "2,150,600",
  },
  {
    code: 71010038,
    name: "پرداختي هاي اينترنتي",
    amount: "21,582,000",
  },
  {
    code: 71010040,
    name: "پرداختي هاي نظافت",
    amount: "1,769,500",
  },
  {
    code: 71010042,
    name: "پرداختي هاي گرمايشي",
    amount: "1,300,000",
  },
  {
    code: 71010043,
    name: "پرداختي هاي فتوكپي ، چاپ و تكثير",
    amount: "46,540,000",
  },
  {
    code: 71010044,
    name: "پاداش غيرنقدي پرسنل",
    amount: "60,000,000",
  },
  {
    code: 71010049,
    name: "انواع سموم و لوازم باغباني",
    amount: "1,800,000",
  },
  {
    code: 71010066,
    name: "کمک بلا عوض",
    amount: "6,000,000",
  },
  {
    code: 71010067,
    name: "آزمايشگاه خاك",
    amount: "28,614,115",
  },
  {
    code: 71010073,
    name: "حمل و نقل",
    amount: "3,700,000",
  },
  {
    code: 71010076,
    name: "جوشكاري",
    amount: "4,000,000",
  },
  {
    code: 71010093,
    name: "پرداختي هاي رفاهي شهرك",
    amount: "27,590,000",
  },
  {
    code: 71020001,
    name: "حقوق پايه كاركنان دائمي",
    amount: "1,459,555,783",
  },
  {
    code: 71020002,
    name: "حق بن كارگري كاركنان دائمي",
    amount: "120,000,000",
  },
  {
    code: 71020004,
    name: "مسكن كاركنان دائمي",
    amount: "75,000,000",
  },
  {
    code: 71020005,
    name: "اولاد كاركنان دائمي",
    amount: "95,597,820",
  },
  {
    code: 71020006,
    name: "23%حق بيمه سهم كارفرما كاركنان دائمي",
    amount: "542,377,798",
  },
  {
    code: 71020007,
    name: "15% نوبت كاري كاركنا ن دائمي",
    amount: "83,389,340",
  },
  {
    code: 71020008,
    name: "جمعه كاري كاركنان دائمي",
    amount: "141,955,135",
  },
  {
    code: 71020009,
    name: "تعطيلات كاري كاركنان دائمي",
    amount: "153,757,630",
  },
  {
    code: 71020010,
    name: "فوق العاده شغل كاركنان دائمي",
    amount: "2,000,000",
  },
  {
    code: 71030001,
    name: "حقوق پايه كاركنان موقت",
    amount: "1,903,132,741",
  },
  {
    code: 71030002,
    name: "بن كارگري كاركنان موقت",
    amount: "152,709,677",
  },
  {
    code: 71030004,
    name: "مسكن كاركنان موقت",
    amount: "95,032,258",
  },
  {
    code: 71030005,
    name: "اولاد كاركنان موقت",
    amount: "43,687,104",
  },
  {
    code: 71030006,
    name: "23% حق بيمه سهم كارفرما كاركنان موقت",
    amount: "247,086,188",
  },
  {
    code: 71030007,
    name: "15% نوبت كاري كاركنان موقت",
    amount: "85,558,360",
  },
  {
    code: 71030008,
    name: "جمعه كاري كاركنان موقت",
    amount: "135,053,563",
  },
  {
    code: 71030009,
    name: "تعطيلات عمومي كاركنان موقت",
    amount: "164,579,121",
  },
  {
    code: 71030012,
    name: "عيدي و پاداش",
    amount: "20,000,000",
  },
  {
    code: 71030013,
    name: "پرداخت حقوق متفرقه",
    amount: "2,000,000",
  },
  {
    code: 71030015,
    name: "اضافه کاري و تشويقي پرسنل",
    amount: "15,463,866",
  },
  {
    code: 71050001,
    name: "برق بدنه 30528068",
    amount: "1,808,000",
  },
  {
    code: 71050007,
    name: "برق بدنه 21284258",
    amount: "21,437,000",
  },
  {
    code: 71050009,
    name: "برق بدنه 30506709",
    amount: "576,000",
  },
  {
    code: 71050010,
    name: "برق بدنه 12101293",
    amount: "14,771,000",
  },
  {
    code: 71050013,
    name: "گاز كنتور0346992844",
    amount: "885,000",
  },
  {
    code: 71050014,
    name: "گاز كنتور 0046452280",
    amount: "2,280,000",
  },
  {
    code: 71050015,
    name: "تلفن4013",
    amount: "558,000",
  },
  {
    code: 71050016,
    name: "تلفن 6050",
    amount: "40,000",
  },
  {
    code: 71050017,
    name: "تلفن 6055",
    amount: "270,000",
  },
  {
    code: 71050018,
    name: "تلفن 6051",
    amount: "629,000",
  },
  {
    code: 71050021,
    name: "برق بدنه 1119501499249",
    amount: "493,000",
  },
  {
    code: 71050022,
    name: "برق بدنه 1119501803759",
    amount: "496,000",
  },
  {
    code: 71050023,
    name: "برق بدنه 1219600046613",
    amount: "575,000",
  },
  {
    code: 71050024,
    name: "برق بدنه 1219600046612",
    amount: "7,934,000",
  },
  {
    code: 71050025,
    name: "برق بدنه 1839614043886",
    amount: "24,140,000",
  },
  {
    code: 71050026,
    name: "کنتور برق 12049644016589",
    amount: "16,075,000",
  },
  {
    code: 71050027,
    name: "برق بدنه 8336367359",
    amount: "465,000",
  },
  {
    code: 71050029,
    name: "برق بدنه 41411628",
    amount: "6,672,000",
  },
  {
    code: "",
    name: "هزينه هاي پرداخت شده از محل تنخواه آقاي حسين زاده",
    amount: "139,198,550",
  },
  {
    code: "",
    name: "ميله بابت طرح دريا و اجرت ساخت نردبان",
    amount: "-",
  },
];

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [category, setCategory] = useState("all");
  const [data, setData] = useState(null);
  // console.log(`/posts/${category}`);
  //   useEffect(() => {
  //     Fetch.get(
  //       category === "all" ? "/posts" : `/posts/category/${category}`,
  //       (res) => {
  //         console.log(res);
  //         if (res) {
  //           setData(
  //             res.reverse().map((e) => {
  //               return {
  //                 ...e,
  //                 data: JSON.parse(e.data),
  //               };
  //             })
  //           );
  //         }
  //       }
  //     );
  //   }, [category]);
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
      title: "پلاک",
      dataIndex: "plate",
      key: "plate",
      align: "center",
    },
    {
      title: "مالک",
      dataIndex: "owner",
      key: "owner",
      align: "center",
    },
    {
      title: "مبلغ واریزی",
      dataIndex: "amount",
      key: "amount",
      align: "center",
    },
  ];
  const sooratCl = [
    {
      title: "کد",
      dataIndex: "code",
      key: "code",
      align: "center",
    },
    {
      title: "نام",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "مبلغ هزینه",
      dataIndex: "amount",
      key: "amount",
      align: "center",
    },
  ];

  return (
    <>
      <Payment />

      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="گزارش پرداخت ها" key="1">
          <Container>
            <h4>
              ريز وجوه دريافتي از مالكين محترم از تاريخ 1400/01/01 لغايت
              1400/04/09
            </h4>
            <Table
              bordered
              dataSource={
                values &&
                values.map((e, key) => ({
                  key: key,
                  plate: e.plate,
                  owner: e.owner,
                  amount: e.amount,
                }))
              }
              columns={columns}
            />
            ;
          </Container>
        </Tabs.TabPane>
        <Tabs.TabPane tab="صورت مالی" key="2">
          <Container>
            <h4>صورت مالی </h4>
            <Table
              bordered
              dataSource={
                soorat &&
                soorat.map((e, key) => ({
                  key: key,
                  code: e.code,
                  name: e.name,
                  amount: e.amount,
                }))
              }
              columns={sooratCl}
            />
            ;
          </Container>{" "}
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}
