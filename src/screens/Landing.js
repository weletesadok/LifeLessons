import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Button } from "react-native-elements";
import tw from "twrnc";

const LandingScreen = ({ navigation }) => {
  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        source={{
          uri: "https://cdn.pixabay.com/photo/2022/12/09/00/47/autumn-7644257_640.jpg",
        }}
      />
      <View
        style={tw`flex-1 justify-center items-center px-6 bg-black bg-opacity-20`}
      >
        <Text style={tw`text-white text-4xl font-bold text-center mb-6`}>
          Shape Your Karma, Shape Your Future
        </Text>
        <Text style={tw`text-white text-lg text-center mb-10`}>
          Embrace mindful actions and positive change to create the life you
          deserve.
        </Text>
        <Button
          title="Begin Your Journey"
          buttonStyle={tw`bg-white rounded-full w-72 h-12`}
          titleStyle={tw`text-black text-lg font-semibold`}
          onPress={() => navigation.navigate("Categories")}
        />
      </View>
    </View>
  );
};

export default LandingScreen;
