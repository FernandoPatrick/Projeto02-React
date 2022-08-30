import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: #cfcfcf;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: transparent;
  }
`;

function Button({ text, onClick, type = "button", disabled = false, form }) {
  return (
    <StyledButton form={form} disabled={disabled} type={type} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

export default Button;
