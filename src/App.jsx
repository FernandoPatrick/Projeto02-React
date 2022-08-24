import { useState } from "react";
import styled from "styled-components";
import Modal from "./components/modal/Modal";

const Header = styled.header`
  padding: 40px 20px;
  background-color: #ffffff;
  box-shadow: 0px 1px 15px -11px #000000;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  color: #2a2a2a;
`;

const ContainerButtons = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
`;

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header>
        <Heading>Cadastro de usuário</Heading>
      </Header>
      <ContainerButtons>
        <button>Pesquisar</button>
        <button onClick={() => setIsOpen(true)}>Cadastrar</button>
      </ContainerButtons>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default App;
