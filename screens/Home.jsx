import {
  RefreshControl,
  TouchableOpacity,
  Alert,
  FlatList,
  View,
} from 'react-native';
import { Post } from '../components/Post';
import { Loading } from '../components/Loading';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState();

  const fetchPosts = () => {
    setIsLoading(true);

    const yesterday = new Date().setDate(new Date().getDate() - 1);

    const date = new Date(yesterday).toLocaleDateString('fr-CA');

    const newsUrl = `https://newsapi.org/v2/everything?q=Apple&from=${date}&sortBy=popularity&apiKey=aee38078e8654d9aa02a96487cce7944`;

    axios
      .get(newsUrl)
      .then(({ data }) => {
        setItems(data.articles);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить статьи');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(fetchPosts, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <FlatList
        data={items}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('FullPost', {
                title: item.title,
                urlToImage: item.urlToImage,
                description: item.description,
                url: item.url,
              })
            }>
            <Post
              title={item.title}
              urlToImage={item.urlToImage}
              publishedAt={item.publishedAt}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
