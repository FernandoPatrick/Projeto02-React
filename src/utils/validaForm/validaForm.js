function validaForm(values, errorFn) {
  let errorMsg = "";

  if (values.hasOwnProperty("nome")) {
    if ((errorMsg = validaCampoSimples(values.nome, "Nome"))) {
      errorFn("nome", errorMsg);
    }
  }

  if (values.hasOwnProperty("sobrenome")) {
    if ((errorMsg = validaCampoSimples(values.sobrenome, "Sobrenome"))) {
      errorFn("sobrenome", errorMsg);
    }
  }

  if (values.hasOwnProperty("email")) {
    if ((errorMsg = validaCampoSimples(values.email, "E-mail"))) {
      errorFn("email", errorMsg);
    } else if ((errorMsg = validaEmail(values.email))) {
      errorFn("email", errorMsg);
    }
  }

  if (values.hasOwnProperty("telefone")) {
    if ((errorMsg = validaCampoSimples(values.telefone, "Telefone"))) {
      errorFn("telefone", errorMsg);
    }
  }

  if (values.hasOwnProperty("cep")) {
    if ((errorMsg = validaCampoSimples(values.cep, "Cep"))) {
      errorFn("cep", errorMsg);
    }
  }

  if (values.hasOwnProperty("endereco1")) {
    if ((errorMsg = validaCampoSimples(values.endereco1, "Enderço"))) {
      errorFn("endereco1", errorMsg);
    }
  }

  if (values.hasOwnProperty("endereco2")) {
    if ((errorMsg = validaCampoSimples(values.endereco2, "Endereço"))) {
      errorFn("endereco2", errorMsg);
    }
  }

  if (values.hasOwnProperty("dataNascimento")) {
    if (
      (errorMsg = validaCampoSimples(
        values.dataNascimento,
        "Data de nascimento"
      ))
    ) {
      errorFn("dataNascimento", errorMsg);
    }
  }

  if (values.hasOwnProperty("cpf")) {
    if ((errorMsg = validaCampoSimples(values.cpf, "Cpf"))) {
      errorFn("cpf", errorMsg);
    }
  }

  if (values.hasOwnProperty("rendaMensal")) {
    if ((errorMsg = validaCampoSimples(values.rendaMensal, "Renda mensal"))) {
      errorFn("rendaMensal", errorMsg);
    }
  }
}

function validaCampoSimples(value, text) {
  return !value ? `${text} é obrigatório!` : "";
}

function validaEmail(email) {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  if (!regex.test(email)) {
    return "E-mail inválido!";
  }

  return "";
}

export default validaForm;
