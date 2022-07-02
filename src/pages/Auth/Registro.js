import { Form, Button } from "antd";
import React from "react";
import styled from "styled-components";
import axios from "../../api/axios";
import { regexp } from "../../helpers/patterns";

const Input = styled.input`
  background-color: #f1f1f1;
  border-color: #f1f1f1;
  &:focus {
    background-color: #f1f1f1;
  }
`;

const formatoContraseña = () => {
  return (
    <p className="lh-sm">
      - 3 a 24 carácteres.
      <br />- Al menos una mayúscula y una minúscula.
      <br />- Al menos un caracter especial (!@#$%.).
      <br />- Al menos un número.
    </p>
  );
};

export const Registro = () => {
  const onFinish = async (values) => {
    const endpoint = "auth/new";
    console.log(values);
    const response = await axios.post(endpoint, JSON.stringify(values), {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    console.log(response);
  };

  return (
    <Form
      onFinish={onFinish}
      initialValues={{
        nombre: "",
        apellido: "",
        correo: "",
        password: "",
        check_password: "",
      }}
    >
      <h3>Registrate aquí</h3>
      <hr></hr>
      <div className="mb-3">
        <label>Nombre</label>
        <Form.Item
          name="nombre"
          rules={[
            {
              required: true,
              message: "Nombre obligatorio.",
            },
            {
              pattern: regexp.LETRAS_NUMEROS,
              message: "Ingresar un nombre válido.",
            },
          ]}
        >
          <Input type="text" className="form-control" />
        </Form.Item>
      </div>
      <div className="mb-3">
        <label>Apellido</label>
        <Form.Item
          name="apellido"
          rules={[
            {
              required: true,
              message: "Apellido obligatorio.",
            },
            {
              pattern: regexp.LETRAS_NUMEROS,
              message: "Ingresar un nombre válido.",
            },
          ]}
        >
          <Input type="text" className="form-control" />
        </Form.Item>
      </div>
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
              pattern: regexp.CORREO_REGEX,
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
            {
              pattern: regexp.PWD_REGEX,
              message: formatoContraseña(),
            },
          ]}
        >
          <Input type="password" className="form-control" />
        </Form.Item>
      </div>
      <div className="mb-3">
        <label>Confirmar contraseña</label>
        <Form.Item
          name="check_password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Confirmar contraseña obligatoria.",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Las contraseñas no coinciden.")
                );
              },
            }),
          ]}
        >
          <Input type="password" className="form-control" />
        </Form.Item>
      </div>
      <div className="d-grid">
        <Button size="large" type="primary" htmlType="submit" className="mt-3">
          Registrarse
        </Button>
      </div>
      <p className="forgot-password text-right mt-3">
        ¿Ya estás registrado? <a href="/sign-in">inicia sesión.</a>
      </p>
    </Form>
  );
};
