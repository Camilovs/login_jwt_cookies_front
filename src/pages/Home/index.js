import React from "react";
import styled from "styled-components";
const HomeBox = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Home = () => {
  return (
    <HomeBox>
      <h3>Logeo exitoso!</h3>
      <a className="text-right" href="/sign-in">
        Cerrar sesión
      </a>
    </HomeBox>
  );
};
