import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Button } from "react-native-elements";
import tw from "twrnc"; // Tailwind for React Native
import { SafeAreaProvider } from "react-native-safe-area-context";

const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <View style={tw`flex-1`}>
        {/* Background Image or Solid Color */}
        <ImageBackground
          source={{
            uri: "https://i.pinimg.com/736x/19/9b/ea/199bea3a2a543587e77b30919fd47c9d.jpg",
          }} // Optional: background image
          style={[tw`flex-1`, { backgroundColor: "black" }]} // fallback to black if no image
        >
          <View style={tw`flex-1 justify-center items-center px-4`}>
            {/* App Title */}
            <Text style={tw`text-white text-5xl font-bold mb-4`}>
              Life Lessons
            </Text>

            {/* Tagline or Description */}
            <Text style={tw`text-white text-lg text-center mb-8`}>
              Empower yourself with daily wisdom and insights
            </Text>

            {/* Main CTA Button */}
            <Button
              title="Get Started"
              buttonStyle={tw`bg-green-600 rounded-full w-80 h-12`}
              titleStyle={tw`text-white text-lg font-semibold`}
              onPress={() => navigation.navigate("Home")}
            />

            {/* Secondary CTA: Login or Learn More */}
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={tw`text-green-600 text-lg mt-4`}>
                Already have an account? Log In
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaProvider>
  );
};

export default LandingScreen;
