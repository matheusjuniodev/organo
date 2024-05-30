import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");


  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          aoAlterado={valor => setNome(valor)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
        />
        <CampoTexto
          aoAlterado={valor => setCargo(valor)}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
        />
        <CampoTexto
          aoAlterado={valor => setImagem(valor)}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)}
        obrigatorio={true} label="Times" itens={times} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
