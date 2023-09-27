import { Formik, Form, Field } from "formik";

export default function FormikForm() {
  return (
    <>
      <h1>Formulário com Formik</h1>

      <Formik
        initialValues={{ nome: "", email: "", senha: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Formulário Formik - Sem boilerplate");
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form-testes">
            <Field type="text" name="nome" />
            <Field type="email" name="email" />
            <Field type="password" name="senha" />
            <button type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
