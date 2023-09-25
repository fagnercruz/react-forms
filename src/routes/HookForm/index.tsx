export default function HookForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Formulário com react-hook-form:");
    //console.log(dadosForm);
  }
  return (
    <>
      <h1>Formulário com react-hook-form</h1>
      <form className="form-testes" onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" name="nome" />
        <input type="email" placeholder="e-mail" />
        <input type="password" placeholder="senha" />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
