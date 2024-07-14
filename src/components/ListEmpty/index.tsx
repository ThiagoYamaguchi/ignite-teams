import { Container, Message } from "./styles";

type Props = {
  message: String;
}

export function ListEmpty({ message }: Props) {
  return (
    <Container>
      <Message>
        {message}
      </Message>
    </Container>
  )
}