import React from "react";

import { Container, Avatar, Message, Header, Content } from "./styles";

import PropTypes from "prop-types";
export { Mention } from "./styles";

ChannelMessage.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired | React.ReactElement | React.ReactNode,
  hasMention: PropTypes.number,
  isBot: PropTypes.bool,
};

export default function ChannelMessage({
  author,
  date,
  content,
  hasMention,
  isBot,
}) {
  return (
    <Container className={hasMention ? "mention" : ""}>
      <Avatar className={isBot ? "bot" : ""} />

      <Message>
        <Header>
          <strong>{author}</strong>

          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>

        <Content>{content}</Content>
      </Message>
    </Container>
  );
}
