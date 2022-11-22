import { Statistic, Row, Col, Button } from "antd";

export default (params) => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Statistic title="میزان بدهی شما" value={1540000} precision={2} />
        <Button style={{ marginTop: 16 }} type="primary">
          پرداخت
        </Button>
      </Col>
    </Row>
  );
};
