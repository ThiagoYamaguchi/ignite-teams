import { Container, Logo, BackButton, BackIcon } from './styles';
import logoImg from '@assets/logo.png'

type Props = {
  ShowBackButton?: boolean;
}

export function Header({ ShowBackButton = false}: Props) {
  return (
    <Container>
      {ShowBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}