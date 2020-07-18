import React from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

export default function ChannelData() {
  return (
    <Container>
      <Messages />

      <InputWrapper>
        <Input />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}
