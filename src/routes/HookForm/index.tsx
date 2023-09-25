import { useForm, SubmitHandler } from "react-hook-form";

type InputsFormulario = {
  nome: string;
  email: string;
  senha: string;
};

export default function HookForm() {
  const {
    register,
    handleSubmit,
    /*watch,
    formState: { errors },*/
  } = useForm<InputsFormulario>();
  const onSubmit: SubmitHandler<InputsFormulario> = (data) => {
    console.log("Formulário com react-hook-form");
    console.log(data);
  };

  return (
    <>
      <h1>Formulário com react-hook-form</h1>
      <form className="form-testes" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Nome" {...register("nome")} />
        <input
          type="email"
          placeholder="e-mail"
          {...register("email" /*, { required: true }*/)}
        />
        {/*errors.email && <span>Este campo é obrigatório</span>*/}
        <input type="password" placeholder="senha" {...register("senha")} />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
