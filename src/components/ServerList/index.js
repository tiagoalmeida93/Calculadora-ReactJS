import React from "react";

import { Container, Separator } from "./styles";

export default function ServerList() {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={7} />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  );
}
