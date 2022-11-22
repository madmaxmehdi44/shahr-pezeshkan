import React from "react";
import { Statistic, Row, Col, Button, Progress } from "antd";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <div>
      <h4>صفحه داشبورد</h4>
      <p>
        برای دسترسی به بخش های مختلف می توانید از منو سمت راست صفحه، انتخاب
        کنید.
      </p>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="میزان بدهی شما" value={1540000} precision={2} />
          <Button style={{ marginTop: 16 }} type="primary">
            پرداخت
          </Button>
        </Col>
        <Col span={12}>
          <Statistic
            title=" هزینه های کلی شهرک"
            value={5684000000}
            precision={2}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <div style={{ marginTop: 16 }}>وضعیت کلی پروژه ها</div>{" "}
          <Progress percent={68} success={{ percent: 30 }} type="circle" />
          <Statistic title="پروژه های تکمیل شده امسال" value={0} />
          <Statistic title="پروژه های شروع شده امسال" value={2} />
          <Button style={{ marginTop: 16 }} type="primary">
            <Link to="/dashboard/projects-progress">مشاهده</Link>
          </Button>
        </Col>
        <Col span={12}>
          <h3></h3>
        </Col>
      </Row>
    </div>
  );
};
