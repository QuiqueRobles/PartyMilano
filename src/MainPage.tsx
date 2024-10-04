import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const MainPage = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-3xl font-bold">Welcome to PartyMilano</Text>
        <Text className="text-purple-500 text-xl mt-4">Your ultimate party guide in Milan</Text>
      </View>
    </SafeAreaView>
  );
};

export default MainPage;