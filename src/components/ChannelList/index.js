import React from "react";

import { Container, Category, AddCategoryIcon } from "./styles";

export default function ChannelList() {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
      </Category>
      <AddCategoryIcon />

      {/* <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="estudo" />
      <ChannelButton channelName="games" /> */}
    </Container>
  );
}
