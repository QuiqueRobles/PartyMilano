import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface Club {
  id: string;
  name: string;
  rating: number;
  attendees: number;
  image: string;
  price: number;
  category: string;
}

const clubs: Club[] = [
  {
    id: '1',
    name: 'Armani Privé',
    rating: 4.8,
    attendees: 250,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/armani-prive-Hy5Ue5Aw5Ue5Aw.jpg',
    price: 30,
    category: 'Luxury',
  },
  {
    id: '2',
    name: 'Just Cavalli',
    rating: 4.6,
    attendees: 200,
    image: require('../../assets/images/just_cavalli_photo.jpg'),
    price: 25,
    category: 'Fashion',
  },
  {
    id: '3',
    name: 'Hollywood',
    rating: 4.5,
    attendees: 180,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hollywood-Hy5Ue5Aw5Ue5Aw.jpg',
    price: 20,
    category: 'Nightclub',
  },
  {
    id: '4',
    name: 'Loolapaloosa',
    rating: 4.3,
    attendees: 220,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/loolapaloosa-Hy5Ue5Aw5Ue5Aw.jpg',
    price: 15,
    category: 'Dance',
  },
  {
    id: '5',
    name: 'Volt Club',
    rating: 4.7,
    attendees: 190,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/volt-club-Hy5Ue5Aw5Ue5Aw.jpg',
    price: 22,
    category: 'Electronic',
  },
];

const { width } = Dimensions.get('window');

const ClubCard: React.FC<{ club: Club; onPress: () => void }> = ({ club, onPress }) => (
  <TouchableOpacity onPress={onPress} className="mb-6">
    <View className="relative">
      <Image
        source={{ uri: club.image }}
        style={{ width: width - 48, height: 200 }}
        className="rounded-xl"
      />
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
        className="absolute bottom-0 left-0 right-0 h-24 rounded-b-xl"
      />
      <View className="absolute bottom-0 left-0 right-0 p-4">
        <Text className="text-white text-xl font-bold">{club.name}</Text>
        <View className="flex-row justify-between items-center mt-2">
          <View className="flex-row items-center">
            <Feather name="star" size={16} color="#FFD700" />
            <Text className="text-yellow-400 ml-1">{club.rating}</Text>
          </View>
          <View className="flex-row items-center">
            <Feather name="users" size={16} color="#A78BFA" />
            <Text className="text-purple-400 ml-1">{club.attendees}</Text>
          </View>
          <Text className="text-green-400 font-semibold">€{club.price}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const CategoryButton: React.FC<{ category: string; isSelected: boolean; onPress: () => void }> = ({ category, isSelected, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    className={`px-4 py-2 rounded-full mr-2 ${isSelected ? 'bg-purple-600' : 'bg-gray-800'}`}
  >
    <Text className={`${isSelected ? 'text-white' : 'text-gray-400'} font-semibold`}>{category}</Text>
  </TouchableOpacity>
);

const HomeScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['All', ...new Set(clubs.map(club => club.category))];

  const filteredClubs = selectedCategory && selectedCategory !== 'All'
    ? clubs.filter(club => club.category === selectedCategory)
    : clubs;

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar style="light" />
      <View className="px-6 pt-6 pb-4">
        <Text className="text-white text-3xl font-bold">PartyMilano</Text>
        <Text className="text-gray-400 text-lg">Discover Milan's Hottest Clubs</Text>
      </View>
      <View className="px-6 mb-4">
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryButton
              category={item}
              isSelected={selectedCategory === item}
              onPress={() => setSelectedCategory(item)}
            />
          )}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        data={filteredClubs}
        renderItem={({ item }) => (
          <ClubCard
            club={item}
            onPress={() => console.log(`Pressed ${item.name}`)}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;