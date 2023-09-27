export default function FormikForm() {
  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    console.log("Formulário com Formik:");
    //console.log(dadosForm);
  }
  return (
    <>
      <h1>Formulário com Formik</h1>
      <form className="form-testes" onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" name="nome" />
        <input type="email" placeholder="e-mail" />
        <input type="password" placeholder="senha" />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
