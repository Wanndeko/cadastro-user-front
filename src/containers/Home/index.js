import React, { useRef, useState, }
  from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import People from '../../assets/people.svg';

import Arrow from '../../assets/arrow.svg';

import H1 from "../../components/title";

import Container_itens from "../../components/Container_itens";

import Button from "../../components/Button";

import {
  Container,
  Image,
  Inpunt_label,
  Input,
} from "./styles";



// JSX


const App = () => {

  const [users, setUsers] = useState([]);

  const history = useHistory()

  const input_name = useRef()

  const input_age = useRef()


  async function add_new_user() {

    const { data: new_user } = await axios.post('https://cadastro-user-back-end.vercel.app/users',
      {
        name: input_name.current.value,
        age: input_age.current.value
      })

    setUsers([...users, new_user]);

    history.push('/users')
}



  return (<Container>
    <Image alt="logo-imagem" src={People} />

    <Container_itens>

      <H1>Olá!</H1>

      <Inpunt_label>Nome</Inpunt_label>
      <Input ref={input_name} placeholder="Nome" />

      <Inpunt_label>Idade</Inpunt_label>
      <Input ref={input_age} type='number' placeholder="Idade" />

      <Button onClick={add_new_user}>
        Cadastrar <img alt="righ-arrow" src={Arrow} />
      </Button>

    </Container_itens>


  </Container>)


}

export default App