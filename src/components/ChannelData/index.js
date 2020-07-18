import React from "react";

import { Container, Messages, InputWrapper, Input } from "./styles";

export default function ChannelData() {
  return (
    <Container>
      <Messages />

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
      </InputWrapper>
    </Container>
  );
}
