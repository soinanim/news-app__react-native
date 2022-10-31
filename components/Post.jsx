import styled from 'styled-components/native';

export const Post = ({ title, urlToImage, publishedAt }) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: urlToImage,
        }}
      />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{new Date(publishedAt).toLocaleDateString()}</PostDate>
      </PostDetails>
    </PostView>
  );
};

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostDetails = styled.View`
  justify-content: center;
  flex: 1;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;
