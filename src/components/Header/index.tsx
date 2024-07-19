import { useNavigation } from '@react-navigation/native';
import { Container, Logo, BackButton, BackIcon } from './styles';
import logoImg from '@assets/logo.png'

type Props = {
  ShowBackButton?: boolean;
}

export function Header({ ShowBackButton = false}: Props) {
  const navigation = useNavigation();
  
  function handleGoBack() {
    navigation.navigate('groups');
  }

  return (
    <Container>
      {ShowBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}