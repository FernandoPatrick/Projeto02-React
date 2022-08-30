import { useState } from "react";
import styled from "styled-components";
import { Button, Form, Input, Table } from "./components";
import Modal from "./components/modal/Modal";
import { validaForm } from "./utils";

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

const GroupInput = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 600px) {
    display: block;
  }
`;

const ContentTable = styled.div`
  padding: 0 20px;
  overflow-x: auto;
`;

const data = new Date();
const defaulMes = data.getMonth() + 1;
const month = defaulMes < 10 ? `0${defaulMes}` : defaulMes;
const dataAtual = `${data.getFullYear()}-${month}-${data.getDate()}`;

const initialValue = {
  id: 0,
  nome: "",
  sobrenome: "",
  email: "",
  telefone: "",
  cep: "",
  endereco1: "",
  endereco2: "",
  dataNascimento: dataAtual,
  cpf: "",
  rendaMensal: "",
};

function App() {
  const formId = "form-user";
  const [isOpen, setIsOpen] = useState(false);
  const [disabledForm, setDisabledForm] = useState(false);
  const [userForm, setUserForm] = useState(initialValue);
  const [userError, setUserError] = useState({
    ...initialValue,
    dataNascimento: "",
  });
  const [listUsers, setListUsers] = useState([]);

  function handleChange(event) {
    setUserForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit() {
    const errors = {};

    validaForm(userForm, (campo, errorMsg) => (errors[campo] = errorMsg));

    if (Object.keys(errors).length !== 0) {
      setUserError(errors);
      return;
    }

    const id = Math.floor(new Date().valueOf() * Math.random());
    const usersUpdated = [...listUsers, { ...userForm, id }];

    const listLocalStorage = [
      { ...userForm, id },
      ...(JSON.parse(localStorage.getItem("list-users")) || [])
    ];

    localStorage.setItem("list-users", JSON.stringify(listLocalStorage));

    setListUsers(usersUpdated);

    closeModal();
  }

  function closeModal() {
    setUserForm(initialValue);
    setDisabledForm(false);
    setIsOpen(false);
    setUserError({});
  }

  function handleClickView(user) {
    setUserForm(user);
    setDisabledForm(true);
    setIsOpen(true);
  }

  function handleClickPesquisar() {
    setListUsers(JSON.parse(localStorage.getItem("list-users")) || []);
  }

  return (
    <>
      <Header>
        <Heading>Cadastro de usuário</Heading>
      </Header>
      <ContainerButtons>
        <Button onClick={handleClickPesquisar} text="Pesquisar" />
        <Button onClick={() => setIsOpen(true)} text="Cadastrar" />
      </ContainerButtons>
      <Modal
        title={disabledForm ? "Visualizar cadastro" : "Cadastrar usuário"}
        form={formId}
        isOpen={isOpen}
        onClose={closeModal}
        disabledBtnEnviar={disabledForm}
      >
        <Form id={formId} onSubmit={handleSubmit}>
          <GroupInput>
            <Input
              label="Nome"
              name="nome"
              disabled={disabledForm}
              value={userForm.nome}
              onChange={handleChange}
              errorText={userError.nome}
            />
            <Input
              label="Sobrenome"
              name="sobrenome"
              disabled={disabledForm}
              value={userForm.sobrenome}
              onChange={handleChange}
              errorText={userError.sobrenome}
            />
          </GroupInput>
          <Input
            label="E-mail"
            name="email"
            disabled={disabledForm}
            value={userForm.email}
            onChange={handleChange}
            errorText={userError.email}
          />
          <GroupInput>
            <Input
              label="Telefone"
              type="number"
              name="telefone"
              disabled={disabledForm}
              value={userForm.telefone}
              onChange={handleChange}
              errorText={userError.telefone}
            />
            <Input
              label="Cep"
              type="number"
              name="cep"
              disabled={disabledForm}
              value={userForm.cep}
              onChange={handleChange}
              errorText={userError.cep}
            />
          </GroupInput>
          <GroupInput>
            <Input
              label="Endereço 1"
              name="endereco1"
              disabled={disabledForm}
              value={userForm.endereco1}
              onChange={handleChange}
              errorText={userError.endereco1}
            />
            <Input
              label="Endereço 2"
              name="endereco2"
              disabled={disabledForm}
              value={userForm.endereco2}
              onChange={handleChange}
              errorText={userError.endereco2}
            />
          </GroupInput>
          <GroupInput>
            <Input
              label="Data Nacimento"
              name="dataNascimento"
              disabled={disabledForm}
              type="date"
              value={userForm.dataNascimento}
              onChange={handleChange}
              errorText={userError.dataNascimento}
            />
            <Input
              label="Cpf"
              name="cpf"
              disabled={disabledForm}
              type="number"
              value={userForm.cpf}
              onChange={handleChange}
              errorText={userError.cpf}
            />
            <Input
              label="Renda mensal"
              name="rendaMensal"
              disabled={disabledForm}
              type="number"
              value={userForm.rendaMensal}
              onChange={handleChange}
              errorText={userError.rendaMensal}
            />
          </GroupInput>
        </Form>
      </Modal>
      <ContentTable>
        <Table
          onClickView={handleClickView}
          columns={[
            "Editar",
            "Nome",
            "Sobrenome",
            "E-mail",
            "Telefone",
            "Cep",
            "Endereço 1",
            "Endereço 2",
            "Data nascimento",
            "Cpf",
            "Renda mensal",
          ]}
          data={listUsers}
        />
      </ContentTable>
    </>
  );
}

export default App;
