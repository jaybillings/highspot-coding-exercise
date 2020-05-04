import React from "react";
import "../styles/scroll-top.scss";

export default class ScrollTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isVisible: false};
  }

  componentDidMount() {
    document.addEventListener("scroll", (e) => {
      this.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) this.setState({isVisible: true});
    else this.setState({isVisible: false});
  }

  scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  render() {
    if (!this.state.isVisible) return null;

    return <button className={'scroll-top'} onClick={this.scrollToTop}><span>^</span><span>To top</span></button>
  }
}
