import React from "react";
import Fetch from "components/fetch/fetch";
import Post from "components/main/post";
// import styled from "styled-components"
import Grid from "components/containers/grid";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { data: [] };
  }

  componentDidMount() {
    Fetch.get(`/posts/category/${this.props.title}`, (res) => {
      console.log(res);
      if (res) {
        this.setState({ data: res });
      }
    });
  }

  render() {
    return (
      <Grid>
        {this.state.data
          ? this.state.data.map((e, key) => {
              return <Post data={e} key={key} />;
            })
          : "در حال بارگیری..."}
      </Grid>
    );
  }
}
