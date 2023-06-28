import { useState } from "react";
import ListaSuspensa from "../../ListaSuspensa";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import "./Formulario.css";

const Formulario = (props) => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Moblile",
    "Inovação e Gestão",
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("")

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    }) 
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  };

  return (
    <section className="formulario">
      <h2>Preencha os dados para criar o card do colaborador.</h2>
      <form onSubmit={aoSalvar}>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu Cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
         obrigatorio={true} 
         itens={props.times}
         valor={time}
         aoAlterado={valor => setTime(valor)}
         />
        <Botao>Criar botao</Botao>
      </form>
    </section>
  );
};

export default Formulario;
