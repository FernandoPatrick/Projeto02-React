import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0, 0.2);
  position: fixed;
  top:0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Modal({ isOpen, onClose, children }) {
  return isOpen ? (
    <Background>
      <button onClick={onClose}>fechar modal</button>
    </Background>
  ) : null;
}

export default Modal;
