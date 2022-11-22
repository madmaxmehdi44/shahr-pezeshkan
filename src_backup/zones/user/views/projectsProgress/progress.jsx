import * as React from "react";
import { Line, Circle } from "rc-progress";
import { mainColor } from "common";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
    };
    this.increase = this.increase.bind(this);
    this.restart = this.restart.bind(this);
  }

  number;

  componentDidMount() {
    this.increase();
  }

  increase() {
    const { percent } = this.state;
    const newPercent = percent + 1;
    if (newPercent >= this.props.data.value) {
      clearTimeout(this.tm);
      return;
    }
    this.setState({ percent: newPercent });
    this.tm = setTimeout(this.increase, 10);
  }

  restart() {
    clearTimeout(this.tm);
    this.setState({ percent: 0 }, () => {
      this.increase();
    });
  }

  render() {
    const { title, content, value, created_at } = this.props.data;
    const { percent } = this.state;
    return (
      <div className="row" style={{ justifyContent: "space-between" }}>
        <div style={{ margin: 10, minWidth: 120 }}>
          <h4 style={{ textAlign: "center" }}>{title}</h4>

          <Circle
            strokeWidth={2}
            strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
            percent={percent}
          />

          {/* <Line strokeWidth={2} strokeColor={mainColor} percent={percent} /> */}
        </div>
        <p style={{ width: "calc(100% - 120px)", padding: "30px 10px 10px" }}>
          {content}
        </p>
      </div>
    );
  }
}

export default App;
