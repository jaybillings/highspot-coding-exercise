import React from "react";
import { FaChevronUp } from "react-icons/fa";
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

    // Accessibility -- if something (ex. TAB) triggers focus/blur, show/hide scrollTop
    const scrollTop = document.querySelector(".scroll-top");
    scrollTop.addEventListener("focus", (e) => {
      this.toggleVisibility(true);
    });
    scrollTop.addEventListener("blur", (e) => {
      this.toggleVisibility(false);
    });
  }

  toggleVisibility(isVisible) {
    if (typeof isVisible !== 'undefined') this.setState({isVisible});
    else if (window.pageYOffset > 300) this.setState({isVisible: true});
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
