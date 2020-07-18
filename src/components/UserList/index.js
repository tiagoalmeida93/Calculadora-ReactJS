import React from "react";

import { Container, Role, User, Avatar } from "./styles";

const UserRow = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

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
      <UserRow nickname="Android" />
      <UserRow nickname="Iron Main" />
      <UserRow nickname="Mario" />
      <UserRow nickname="Stiff" />
      <UserRow nickname="Yosh" />
      <UserRow nickname="Kratos" isBot />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" isBot />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" isBot />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" isBot />
      <UserRow nickname="unknown" isBot />
      <UserRow nickname="unknown" isBot />
      <UserRow nickname="unknown" isBot />
      <UserRow nickname="unknown" isBot />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" isBot />
      <UserRow nickname="unknown" isBot />
      <UserRow nickname="unknown" isBot />
      <UserRow nickname="unknown" isBot />
      <UserRow nickname="unknown" />
      <UserRow nickname="unknown" isBot />
    </Container>
  );
}
