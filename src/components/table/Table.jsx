import styled from "styled-components";
import IconButton from "../button/iconButton/IconButton";

const StyledTable = styled.table`
  width: 100%;
  min-width: 800px;
  border-collapse: collapse;
  text-align: left;
`;

const StyledTableHead = styled.thead`
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #454646;
  color: white;
`;

const StyledTableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: #d9d9d9;
  }
`;

function Table({ columns, data, onClickView }) {
  return (
    <StyledTable>
      <StyledTableHead>
        <tr>
          {columns.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </StyledTableHead>
      <StyledTableBody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>
              <IconButton onClick={() => onClickView(user)}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </IconButton>
            </td>
            <td>{user.nome}</td>
            <td>{user.sobrenome}</td>
            <td>{user.email}</td>
            <td>{user.telefone}</td>
            <td>{user.cep}</td>
            <td>{user.endereco1}</td>
            <td>{user.endereco2}</td>
            <td>{user.dataNascimento}</td>
            <td>{user.cpf}</td>
            <td>{user.rendaMensal}</td>
          </tr>
        ))}
      </StyledTableBody>
    </StyledTable>
  );
}

export default Table;
