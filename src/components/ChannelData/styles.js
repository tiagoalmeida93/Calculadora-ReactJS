import styled from "styled-components";
import { MdSend } from "react-icons/md";

export const Container = styled.div`
  grid-area: CD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);
`;

export const Messages = styled.h1``;

export const InputWrapper = styled.div``;

export const Input = styled.h1``;

export const InputIcon = styled(MdSend)``;
