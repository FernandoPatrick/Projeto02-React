import styled, { createGlobalStyle } from "styled-components";
import Button from "../button/button/Button";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledModal = styled.div`
  max-width: 90%;
  max-height: 90%;
  border-radius: 20px;
  background-color: #fff;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    border-radius: 0;
  }
`;
const StyledHeaderModal = styled.div`
  text-align: center;
  padding: 20px;
  border-bottom: 1px solid #cfcfcf;
  & > h2 {
    font-size: 1rem;
  }
`;

const ContentModal = styled.div`
  max-height: calc(100vh - 147px);
  overflow-y: auto;
`;

const StyledFooterModal = styled.div`
  display: flex;
  justify-content: end;
  border-top: 1px solid #cfcfcf;
  padding: 20px;
  gap: 10px;
`;

const DibledScroll = createGlobalStyle`
body {
  overflow-y: hidden;
}
`;

function Modal({ isOpen, onClose, title, form, disabledBtnEnviar = false, children }) {
  return isOpen ? (
    <>
      <Background>
        <StyledModal>
          <StyledHeaderModal>{title}</StyledHeaderModal>
          <ContentModal>{children}</ContentModal>
          <StyledFooterModal>
            <Button onClick={onClose} text="Fechar" />
            <Button type="submit" disabled={disabledBtnEnviar} form={form} text="Enviar" />
          </StyledFooterModal>
        </StyledModal>
      </Background>
      <DibledScroll />
    </>
  ) : null;
}

export default Modal;
