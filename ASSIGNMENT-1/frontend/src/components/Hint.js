import React, { Component } from "react";
// import { InlineInfoIcon } from "../assets/icons";
import { Tooltip } from "reactstrap";

class Hint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipOpen: false,
    };

    this.toggleTooltip = this.toggleTooltip.bind(this);
  }

  toggleTooltip = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  };

  render() {
    const { tooltipOpen } = this.state;
    const { id, tooltipText } = this.props;

    return (
      <div className="inline-tooltip-wrapper">
        <span
          id={`${id}-tooltip`}
          className="text-link d-flex align-items-start h7"
        >
          {/* <InlineInfoIcon /> {hintText} */}
        </span>
        {tooltipText ? (
          <Tooltip
            id={id || tooltipText}
            placement="left"
            isOpen={tooltipOpen}
            target={`${id}-tooltip`}
            toggle={this.toggleTooltip}
          >
            {tooltipText}
          </Tooltip>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Hint;