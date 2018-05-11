import React, { Component } from "react";
import "./index.css";

import LoginForm from "../LoginForm";

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
          Lorem ipsum dolor sit amet, et nostrum appetere mel. Ex altera nostro
          philosophia per, no sed tollit denique. Ut soluta copiosae evertitur
          per, eu mea verear aliquam, eros falli indoctum in sit. Id decore
          labores duo. Eos altera offendit ad. Ex est quot prompta evertitur,
          sea te nobis munere, ex mutat vituperatoribus duo. His inani aeterno
          voluptaria ea, et mei habeo theophrastus. In assum perpetua has, vide
          omnes et nec, nulla vocibus an ius. Duo no referrentur definitionem,
          nec no nulla integre legimus, te volutpat scripserit quo. Nusquam
          noluisse pertinax sed ea, id rebum delicata suscipiantur pro. Sed ut
          mazim solet explicari. Simul primis fierent vis in, hinc aliquando per
          no. Quo in doctus alienum elaboraret, at mei molestie dissentias.
          Albucius maluisset cum in, te nihil dicam vivendum usu, te veri mucius
          phaedrum has. Ne dicant intellegam cum. Id vim error luptatum, audiam
          invenire referrentur nec te. Vim summo dicunt splendide ut, eam
          prompta diceret cotidieque et. At unum tation recteque usu. Tantas
          iudicabit in mel. His falli philosophia interpretaris et, ei nonumy
          vocibus scribentur nam, ex qui iudico prompta. Id sed admodum
          contentiones. Convenire salutandi ne mea, usu te etiam erant
          laboramus.
          <div className="accordion-segment__btn-container">
            <Button className="accordion-segment__btn" btnText="Save" />
            <Button className="accordion-segment__btn" btnText="Next" />
          </div>
        </div>
      </div>
    );
  }
}

export default AccordionSegment;
