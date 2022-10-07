/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import {
  FormGroup,
  Input,
  FormFeedback,
  // InputGroup,
  // InputGroupAddon,
  // InputGroupText
} from "reactstrap";
import {
  InputGroup
} from "reactstrap";
import Label from "./Label";
import RenderInputGroup from "./RenderInputGroup";
import Hint from "./Hint";
// import UR from 'first'

class URL extends React.Component {
  validate(value) {
    const { label, placeholder, required, error } = this.props;
    const inputLabel = label || placeholder;
    const errorMessageLabel = error;

    let errorMessage;
    if ((!value || !value.trim()) && required) {
      errorMessage = errorMessageLabel
        ? `${errorMessageLabel}`
        : `${inputLabel} is required`;

    } else {
      if (value && !this.isUrlValid(value)) {
        errorMessage = "Insert a valid URL";
      } else {
        errorMessage = "";
      }
    }
    return errorMessage;
  }

  isUrlValid = userInput => {
    const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    const res = userInput.match(regexp);

    if (res == null) return false;

    else return true;

  };A

  renderInput({ field, form: { touched, errors } }) {
    const {
      name,
      id,
      label,
      placeholder,
      required,
      onChange,
      addonText,
      addonType,
      fontBolded,
      hintText
    } = this.props;

    const errorMessage = touched[name] && errors[name] ? errors[name] : null;
    const inputId = id || name;

    return (
      <FormGroup
        style={{ position: "relative" }}
        className={!!errorMessage && "is-invalid"}
      >
        {label && (
          <Label
            className={`${fontBolded ? "font-weight-bold" : ""}`}
            id={inputId}
            required={required}
          >
            {label}
          </Label>
        )}
        <RenderInputGroup
          condition={addonText !== null && addonText !== undefined}
          wrapper={children => <InputGroup>{children}</InputGroup>}
        >
          {addonText && (
            <InputGroupAddon addonType={addonType}>
              <InputGroupText>{addonText}</InputGroupText>
            </InputGroupAddon>
          )}
          <Input
            id={inputId}
            {...field}
            type="text"
            placeholder={placeholder || label}
            invalid={!!errorMessage}
            style={{
              background: "#F3F3F4",
              border: "none",
              borderRadius: "5px",
              fontSize: "14px",
              height: "40px"
            }}
            onKeyUp={onChange}
          />
        </RenderInputGroup>

        {hintText && (
          <div style={{ position: "absolute", marginTop: "6px" }}>
            <Hint hintText={hintText} />
          </div>
        )}

        {errorMessage && (
          <FormFeedback style={{ position: "absolute", marginTop: 1 }}>
            {errorMessage}
          </FormFeedback>
        )}
      </FormGroup>
    );
  }

  render() {
    const { name, id } = this.props;

    return (
      <Field
        id={id || name}
        validate={this.validate.bind(this)}
        name={name}
        render={this.renderInput.bind(this)}
      />
    );
  }
}

URL.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};

export default URL;

