import React from "react";

import { Container, Separator } from "./styles";
import ServerButton from "../ServerButton";

export default function ServerList() {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotification mentions={12} />
      <ServerButton mentions={7} />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotification />
      <ServerButton />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  );
}
