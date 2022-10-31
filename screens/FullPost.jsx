import { useEffect } from 'react';
import { View, Text, Linking } from 'react-native';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const FullPostScreen = ({ route, navigation }) => {
  const { title, urlToImage, description, url } = route.params;

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <PostImage
        source={{
          uri: urlToImage,
        }}
      />
      <PostText>{description}</PostText>
      <TouchableOpacity onPress={() => Linking.openURL(url)}>
        <Text style={{ color: 'blue' }}>Read more...</Text>
      </TouchableOpacity>
    </View>
  );
};

const PostImage = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;
