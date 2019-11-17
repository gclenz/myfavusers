import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  border-bottom-color: #eee;
  border-bottom-width: 3px;
  flex-direction: row;
  padding-bottom: 20px;
`;

export const Input = styled.TextInput`
  background-color: #eee;
  border: 1px solid #eee;
  border-radius: 5px;
  flex: 1;
  padding: 5px 10px;
`;

export const SubmitButton = styled(RectButton)`
  background-color: #a283e5;
  border-radius: 5px;
  justify-content: center;
  margin-left: 10px;
  padding: 0 10px;
  opacity: ${props => (props.loading ? 0.6 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0px 20px 30px;
`;

export const Avatar = styled.Image`
  background-color: #eee;
  border-radius: 32px;
  height: 64px;
  width: 64px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #999;
  font-size: 13px;
  line-height: 18px;
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const ProfileButton = styled(RectButton)`
  align-items: center;
  align-self: stretch;
  background-color: #a283e5;
  border-radius: 5px;
  flex: 1;
  height: 36px;
  justify-content: center;
`;

export const ProfileButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const DeleteButton = styled(RectButton)`
  align-items: center;
  align-self: stretch;
  background-color: #ff0000;
  border-radius: 5px;
  height: 36px;
  justify-content: center;
  margin-left: 10px;
  padding: 0 10px;
`;
