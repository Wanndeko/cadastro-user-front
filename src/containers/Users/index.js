import React, { useState, useEffect }
  from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import Avatar from '../../assets/avatar.svg';

import Arrow from '../../assets/arrow.svg';

import Trash from '../../assets/trash.svg';

import  H1  from "../../components/title";

import Container_itens from "../../components/Container_itens";

import Button from "../../components/Button";

import {
  Container,
  Image,
  User
} from "./styles";



// JSX


const User_sg = () => {

  const [users, setUsers] = useState([]);
  const history = useHistory()


  useEffect(() => {

    async function fetch_users() {

      const { data: response_users } = await axios.get('http://localhost:3001/users');

      setUsers(response_users)
    }

    fetch_users()

  }, [])


  async function delete_user(user_id) {
    await axios.delete(`http://localhost:3001/users/${user_id}`)

    const new_users = users.filter(user => user.id !== user_id)
    setUsers(new_users);
  }

  function go_back_page() {
    history.push('/')
  }


  return (<Container>
    <Image alt="logo-imagem" src={Avatar} />

    <Container_itens is_blur={true}>

      <H1>Usuários</H1>

      <ul>
        {users.map((users => (
          <User key={users.id}>
            <p>{users.name} </p> <p>{users.age}</p>

            <button onClick={() => delete_user(users.id)}>
              <img alt="trash icon" src={Trash} />
            </button>
          </User>

        )))}

      </ul>


      <Button is_back={true}  onClick={go_back_page}>
        <img alt="righ-arrow" src={Arrow} /> Voltar
      </Button>

    </Container_itens>


  </Container>)


}

export default User_sg