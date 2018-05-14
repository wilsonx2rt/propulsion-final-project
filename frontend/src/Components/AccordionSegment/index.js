import React, { Component } from "react";
import "./index.css";

// import LoginForm from "../LoginForm";

import arrows from "../../assets/dropdown-arrows.png";
import Button from "../Button";

class AccordionSegment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: "accordion-segment__inner-container-hidden"
    };
  }

  toggleClass = event => {
    let visible = { ...this.state.visible };
    if (this.state.visible === "accordion-segment__inner-container-hidden") {
      visible = "accordion-segment__inner-container";
      this.setState({ visible });
    } else {
      visible = "accordion-segment__inner-container-hidden";
      this.setState({ visible });
    }
  };

  render() {
    return (
      <div className="accordion-segment">
        <div className="accordion-segment__header" onClick={this.toggleClass}>
          <h1 className="accordion-segment__title">
            {this.props.AccordionSegmentTitle}
          </h1>
          <img
            className="accordion-segment__dropdown-icon"
            src={arrows}
            alt="dropdwon icon"
          />
        </div>

        <div className={this.state.visible}>
          {
            this.props.children
          }
          {/* <div className="accordion-segment__btn-container">
            <Button className="accordion-segment__btn" btnText="Save" />
            <Button className="accordion-segment__btn" btnText="Next" />
          </div> */}
        </div>
      </div>
    );
  }
}

export default AccordionSegment;
