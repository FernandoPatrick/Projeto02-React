import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

function Form({ children, onSubmit, id }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(e);
  }

  return <StyledForm id={id} onSubmit={handleSubmit}>{children}</StyledForm>;
}

export default Form;
