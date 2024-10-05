import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

const ProfileScreen: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Sofia Rossi',
    email: 'sofia.rossi@example.com',
    phone: '+39 123 456 7890',
    favoriteClub: 'Armani Privé',
    attendedEvents: 15,
  });

  const handleSave = () => {
    // Here you would typically send the updated data to your backend
    setIsEditing(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView className="flex-1">
        <View className="items-center mt-8">
          <Image
            source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-pic-NQx5pWEHFUTWd8TXB0c1F6l9zLBHEQ.jpg' }}
            className="w-32 h-32 rounded-full"
          />
          <TouchableOpacity className="absolute bottom-0 right-1/3 bg-purple-600 rounded-full p-2">
            <Feather name="camera" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <View className="px-6 mt-6">
          <Text className="text-white text-2xl font-bold text-center mb-6">
            {isEditing ? 'Edit Profile' : userData.name}
          </Text>

          {Object.entries(userData).map(([key, value]) => (
            <View key={key} className="mb-4">
              <Text className="text-gray-400 text-sm mb-1 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </Text>
              {isEditing ? (
                <TextInput
                  value={value}
                  onChangeText={(text) => setUserData({ ...userData, [key]: text })}
                  className="bg-gray-800 text-white p-3 rounded-md"
                />
              ) : (
                <Text className="text-white text-lg">{value}</Text>
              )}
            </View>
          ))}

          <TouchableOpacity
            onPress={() => isEditing ? handleSave() : setIsEditing(true)}
            className="bg-purple-600 py-3 px-6 rounded-full mt-6"
          >
            <Text className="text-white text-center text-lg font-semibold">
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-8 px-6">
          <Text className="text-white text-xl font-semibold mb-4">Recent Activity</Text>
          {[
            { event: 'Attended Volt Club', date: '2 days ago' },
            { event: 'Purchased ticket for Just Cavalli', date: '1 week ago' },
            { event: 'Reviewed Armani Privé', date: '2 weeks ago' },
          ].map((activity, index) => (
            <View key={index} className="flex-row items-center mb-3">
              <View className="bg-purple-600 rounded-full p-2 mr-3">
                <Feather name="activity" size={16} color="white" />
              </View>
              <View>
                <Text className="text-white text-base">{activity.event}</Text>
                <Text className="text-gray-400 text-sm">{activity.date}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;