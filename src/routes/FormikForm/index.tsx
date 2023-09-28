import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  nome: Yup.string(),
  email: Yup.string().email("Formato de e-mail inválido"),
  senha: Yup.string()
    .min(3, "Limite mínimo de 3 caracteres")
    .max(8, "Limite máximo de 8 caracteres")
    .required("Campo obrigatório"),
});

export default function FormikForm() {
  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ nome: "", email: "", senha: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Formulário Formik - Sem boilerplate");
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form className="form-testes">
            <h1>Formik</h1>
            <Field type="text" name="nome" /> {errors.nome}
            <Field type="email" name="email" /> {errors.email}
            <Field type="password" name="senha" /> {errors.senha}
            <button type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
