import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import MainListView from "../View/MainListView";

@inject("Store")
@observer
class MainPageContainer extends Component {
  render() {
    const { model } = this.props.Store;

    return <MainListView />;
  }
}

export default MainPageContainer;
