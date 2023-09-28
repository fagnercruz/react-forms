import { useState } from "react";
import { EventType } from "react-hook-form";

type DadosForm = {
  nome: string;
  email: string;
  senha: string;
};

export default function RawForm() {
  const [dadosForm, setDadosForm] = useState<DadosForm>({
    nome: "",
    email: "",
    senha: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Formulário Raíz");
    console.log(dadosForm);
  }

  const handleChange = (event, campo: string) => {
    setDadosForm({ ...dadosForm, [campo]: event.target?.value });
  };
  return (
    <form className="form-testes" onSubmit={handleSubmit}>
      <h1>Formulário Raíz</h1>
      <input
        type="text"
        placeholder="Nome"
        name="nome"
        value={dadosForm.nome}
        onChange={(event) => handleChange(event, "nome")}
      />
      <input
        type="email"
        placeholder="e-mail"
        value={dadosForm.email}
        onChange={(event) => handleChange(event, "email")}
      />
      <input
        type="password"
        placeholder="senha"
        value={dadosForm.senha}
        onChange={(event) => handleChange(event, "senha")}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
