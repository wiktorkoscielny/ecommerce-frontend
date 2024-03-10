/*
 * @category  React-Ecommerce
 * @author    Wiktor Koscielny | <wiktorkoscielny@gmail.com>
 */

import { Component } from "react";
import { connect } from "react-redux";
import HomepageComponent from "./Homepage.component";
import { AppDispatch, RootState } from "../../store";

/** @namespace Routes/Homepage/Container/mapStateToProps */
function mapStateToProps(state: RootState) {
  return {};
}

/** @namespace Routes/Homepage/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: AppDispatch) {
  return {};
}

/**
 * HomepageContainer container class for Homepage route
 */
class HomepageContainer extends Component {
  containerProps() {
    return {};
  }

  render() {
    return <HomepageComponent {...this.containerProps()} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomepageComponent);
