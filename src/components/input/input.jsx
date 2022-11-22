import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin: 14px 0;
`;
const Input = styled.input`
  height: 34px;
  border: 1px #a9a9a9 solid;
  border-radius: 4px;
  padding: 1px 12px;
  font-size: 15px;
  font-family: inherit;
  outline: none;
`;
const Label = styled.label`
  font-size: 15px;
  display: block;
  width: fit-content;
  position: relative;
  top: 11px;
  right: 17px;
  background: white;
  padding: 0 5px;
  font-size: 14px;
  border-radius: 16px;
`;

export default function App(props) {
  const {
    formControlProps,
    label,
    id,
    labelProps,
    inputProps,
    errors,
    success,
    value,
    setValue,
    onChange,
    type,
    name,
  } = props;

  function handleError(e) {
    // errors[name] &&  return the error text
    const err = errors[name];

    if (err[0] === `The ${name} field is required.`) {
      return "پر کردن این فیلد الزامیست";
    }
    if (err[0] === `The ${name} has already been taken.`) {
      return `${label} تکراری است.`;
    }
  }
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        classes={
          {
            // root: marginTop,
            // disabled: classes.disabled,
            // underline: underlineClasses
          }
        }
        id={id}
        {...inputProps}
      />

      <span style={{ fontSize: 13, color: "#d40909" }}>
        {errors[name] && handleError()}
      </span>
    </Container>
  );
}
