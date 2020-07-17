import React from "react";

import { Container, Role, User, Avatar } from "./styles";

const UserRow = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

export default function UserList() {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Tiago Almeida" />

      <Role>Offline - 19</Role>
      <UserRow nickname="Kratos" isBot />
    </Container>
  );
}
