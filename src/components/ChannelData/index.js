import React, { useRef, useEffect } from "react";

import { Container, Messages, InputWrapper, Input } from "./styles";

import ChannelMessage, { Mention } from "../ChannelMessage";

export default function ChannelData() {
  const messageRef = useRef();

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        {Array.from(Array(25).keys()).map((item) => (
          <ChannelMessage
            key={item}
            author="Tiago Almeida"
            date={new Intl.DateTimeFormat("pt-BR").format(Date.now())}
            content="Hoje é dia de estudar"
          />
        ))}
        <ChannelMessage
          author="Kratos"
          date={new Intl.DateTimeFormat("pt-BR").format(Date.now())}
          isBot
          content={
            <>
              <Mention>@Tiago Almeida</Mention>, React ou Inglês?
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
      </InputWrapper>
    </Container>
  );
}
