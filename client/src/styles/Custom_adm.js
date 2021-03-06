import styled from "styled-components";

export const Container = styled.section`
  margin: 0px auto;
  width: 960px;
  max-width: 960px;
`;

export const ConteudoTitulo = styled.section`
  display: flex;
  justify-content: space-between;


`;

export const Titulo = styled.h1`
  font-size: 23px;
  font-family: sans-serif;
  margin: 10px 15px;
  color: #1d1e1e;
  text-align: center;


`;

export const BotaoAcao = styled.section`
  margin: 5px;
  text-align: right;
`;

export const ButtonSuccess = styled.button`
  width: 100%;
  max-width: 96px;
  background-color: #fff;
  color: #198754;
  padding: 5px 8px;
  border: 1px solid #198754;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background-color: #198754;
    color: #fff;
    transition: 0.9s;
  }
  :disabled,[disabled]{
    border: 1px solid #198754;
    background-color: #fff;
    color: #198754;
  }
`;

export const ButtonPrimary = styled.button`
  background-color: #fff;
  color: #0d6efd;
  padding: 5px 8px;
  border: 1px solid #0d6efd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background-color: #0d6efd;
    color: #fff;
    transition: 0.9s;
  }
`;

export const ButtonWarning = styled.button`
  /* width: 100%;
  max-width: 96px; */
  background-color: #fff;
  color: #ffc107;
  padding: 5px 8px;
  border: 1px solid #ffc107;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background-color: #ffc107;
    color: #fff;
    transition: 0.9s;
  }
  :disabled,
  [disabled] {
    border: 1px solid #ffc107;
    background-color: #fff;
    color: #ffc107;
  }
`;

export const ButtonDanger = styled.button`
  /* width: 100%;
  max-width: 96px; */
  background-color: #fff;
  color: #dc3545;
  padding: 5px 8px;
  border: 1px solid #dc3545;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background-color: #dc3545;
    color: #fff;
    transition: 0.9s;
  }
`;

export const ButtonInfo = styled.button`
  background-color: #fff;
  color: #0dcaf0;
  padding: 5px 8px;
  border: 1px solid #0dcaf0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background-color: #0dcaf0;
    color: #fff;
    transition: 0.9s;
  }
`;

export const Table = styled.table`
  width: 100%;
  th {
    background-color: #e5e5e5;
    color: #3e3e3e;
    padding: 10px;
  }
  td {
    background-color: #f6f6f6;
    color: #3e3e3e;
    padding: 8px;
  }
`;

export const AlertDanger = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8d7da;
  color: #842029;
  margin: 20px 0;
  /* border: 1px solid #f5c2c7; */
  border-left: 4px solid #f01742;
  border-radius: 4px;
  padding: 7px;
`;

export const AlertSuccess = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #d1e7dd; */
  color: #0f5132;
  background-color: #e9fae9;
  /* color: #a0d7a0; */
  margin: 20px 0;
  border-left: 4px solid #75c375;
  border-radius: 4px;
  padding: 14px;
`;

export const Conteudo = styled.section`
  padding: 15px;
`;

export const Form = styled.form`
  margin: 0px auto;
`;

export const Label = styled.label`
  width: 100%;
  /* padding: 12px; */
  margin-top: 6px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  /* padding: 12px; */
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
`;
