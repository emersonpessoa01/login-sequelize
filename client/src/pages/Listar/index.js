import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Menu from "../../components/Menu";

import api from "../../config/configApi";

import {
  Container,
  ConteudoTitulo,
  Titulo,
  BotaoAcao,
  ButtonSuccess,
  Table,
  AlertDanger,
  AlertSuccess,
  ButtonPrimary,
  ButtonWarning,
  ButtonDanger,
} from "../../styles/custom_adm";

export const Listar = () => {
  const [data, setData] = useState({});
  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const getUsuarios = async () => {
    await api
      .get("/usuarios")
      .then((response) => {
        console.log(response.data);
        if (response.data.error) {
          setStatus({
            type: "error",
            mensagem: response.data.message,
          });
        } else {
          setData(response.data.usuarios);
        }
      })
      .catch(() => {
        setStatus({
          type: "error",
          mensagem: "Erro: Tente mais tarde!",
        });
      });
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  const apagarUsuario = async (idUsuario) => {
    const headers = {
      "Content-Type": "application/json",
    };

    await api
      .delete("/usuario/" + idUsuario, { headers })
      .then((response) => {
        if (response.data.error) {
          setStatus({
            type: "error",
            mensagem: response.data.message,
          });
        } else {
          setStatus({
            type: "success",
            mensagem: response.data.message,
          });
          getUsuarios();
        }
      })
      .catch(() => {
        setStatus({
          type: "error",
          mensagem: "Erro: Tente mais tarde!",
        });
      });
  };

  return (
    <Container>
      <Menu />
      <ConteudoTitulo>
        <Titulo>Listar Usuários</Titulo>
        <BotaoAcao>
          <Link to="/cadastrar">
            <ButtonSuccess>Cadastrar</ButtonSuccess>
          </Link>
        </BotaoAcao>
      </ConteudoTitulo>
      {status.type === "error" ? (
        <AlertDanger>{status.mensagem}</AlertDanger>
      ) : (
        ""
      )}
      {status.type === "success" ? (
        <AlertSuccess>{status.mensagem}</AlertSuccess>
      ) : (
        ""
      )}
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td>
                  <Link to={"/visualizar/" + usuario.id}>
                    <ButtonPrimary>Visualizar</ButtonPrimary>
                  </Link>{" "}
                  <Link to={"/editar/" + usuario.id}>
                    <ButtonWarning>Editar</ButtonWarning>
                  </Link>{" "}
                  <Link to={"#"}>
                    <ButtonDanger onClick={() => apagarUsuario(usuario.id)}>
                      Apagar
                    </ButtonDanger>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};