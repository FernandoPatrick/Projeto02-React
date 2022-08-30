import styled from "styled-components";

const StyledIconButton = styled.button`
  display: inline-flex;
  padding: 15px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: transparent;
  transition: all 400ms ease;
  &:hover {
    background-color: #cfcfcf;
  }
`;

function IconButton({ children, onClick }) {
  return <StyledIconButton onClick={onClick}>{children}</StyledIconButton>;
}

export default IconButton;
