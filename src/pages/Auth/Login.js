import React from "react";
import { Form, Button } from "antd";
import styled from "styled-components";
import { regexp } from "../../helpers/patterns";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
const Input = styled.input`
  background-color: #f1f1f1;
  border-color: #f1f1f1;
  &:focus {
    background-color: #f1f1f1;
  }
`;

export const Login = () => {
  const history = useNavigate();

  const onFinish = async (values) => {
    const endpoint = "auth";
    console.log(values);
    const response = await axios.post(endpoint, JSON.stringify(values), {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    if (response.data.ok) {
      history("/home");
    }
    console.log(response);
  };

  return (
    <Form
      onFinish={onFinish}
      initialValues={{
        correo: "",
        password: "",
      }}
    >
      <h3>Iniciar sesión</h3>
      <hr />
      <div className="mb-3">
        <label>Correo electrónico</label>
        <Form.Item
          name="correo"
          rules={[
            {
              required: true,
              message: "Correo electrónico obligatorio.",
            },
            {
              pattern: regexp.CORREO,
              message: "Correo electrónico inválido.",
            },
          ]}
        >
          <Input type="email" className="form-control" />
        </Form.Item>
      </div>
      <div className="mb-3">
        <label>Contraseña</label>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Contraseña obligatoria.",
            },
          ]}
        >
          <Input type="password" className="form-control" />
        </Form.Item>
      </div>
      <div className="d-grid">
        <Button size="large" type="primary" htmlType="submit" className="mt-3">
          Entrar
        </Button>
      </div>
      <div className="d-grid">
        <Button type="link" className="mt-3">
          Recuperar contraseña
        </Button>
      </div>
      {/* <p className="forgot-password text-center">
          <a href="#">Recuperar contraseña</a>
        </p> */}
      <p className="forgot-password text-rigth mt-3">
        ¿No tienes una cuenta? <a href="/sign-up">regístrate aquí.</a>
      </p>
    </Form>
  );
};
