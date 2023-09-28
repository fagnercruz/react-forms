import { useForm, SubmitHandler } from "react-hook-form";

type InputsFormulario = {
  nome: string;
  email: string;
  senha: string;
};

export default function HookForm() {
  /* 
  -- useForm completo como seria:
  const {register, handleSubmit, watch, formState:{errors},} = useForm<InputsFormulario>(); 
  */
  const { register, handleSubmit } = useForm<InputsFormulario>();
  const onSubmit: SubmitHandler<InputsFormulario> = (data) => {
    console.log("Formulário com react-hook-form");
    console.log(data);
  };

  return (
    <>
      <form className="form-testes" onSubmit={handleSubmit(onSubmit)}>
        <h1>React Hook Form</h1>
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
