import { Formik, Form } from "formik";

export default function FormikForm() {
  return (
    <>
      <h1>Formulário com Formik</h1>
      <Formik
        initialValues={{ nome: "", email: "", senha: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Formulário Formik");
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleSubmit, handleBlur, isSubmitting }) => (
          <Form className="form-testes" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome"
              name="nome"
              value={values.nome}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              type="email"
              placeholder="e-mail"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              type="password"
              placeholder="senha"
              name="senha"
              value={values.senha}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
