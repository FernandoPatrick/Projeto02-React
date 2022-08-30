import styled from "styled-components";

const StyledFormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: ${({ errorText }) => (!!errorText ? "#ff0000" : "#9b9b9b")};
`;

const StyledInput = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: ${({ errorText }) =>
    !!errorText ? "2px solid #ff0000" : " 2px solid #9b9b9b"};
  outline: 0;
  font-size: 1.3rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  margin-bottom: 5px;

  &:required,
  &:invalid {
    box-shadow: none;
  }

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${StyledLabel} {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    padding-bottom: 6px;
    border-width: 3px;
    border-image: ${({ errorText }) =>
      !!errorText
        ? "linear-gradient(to right, #ff0000, #ff0000)"
        : "linear-gradient(to right, #11998e, #38ef7d)"};
    border-image-slice: 1;
  }

  &:focus ~ ${StyledLabel} {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: ${({ errorText }) => (!!errorText ? "#ff0000" : "#11998e")};;
    font-weight: 700;
  }
`;

const StyledError = styled.span`
  color: #ff0000;
`

function Input({ label, name, value, type = 'input', disabled = false, errorText, onChange }) {
  return (
    <StyledFormGroup>
      <StyledInput
        type={type}
        placeholder={label}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        errorText={errorText}
        disabled={disabled}
      />
      <StyledLabel htmlFor={name} errorText={errorText}>{label}</StyledLabel>
      {!!errorText && <StyledError>{errorText}</StyledError>}
    </StyledFormGroup>
  );
}

export default Input;
