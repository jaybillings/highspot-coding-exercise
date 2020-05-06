import React from "react";
import "../styles/scroll-top.scss";
import { FaChevronUp } from "react-icons/fa";

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
    return (
      <button className={`scroll-top${this.state.isVisible ? ' visible' : ''}`} title={'Scroll to top of page'}
              onClick={this.scrollToTop}>
        <FaChevronUp />
      </button>
    );
  }
}
