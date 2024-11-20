import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Button } from "react-native-elements";
import tw from "twrnc";

const LandingScreen = ({ navigation }) => {
  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1663954136833-2600d592d986?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwZ3JhZGllbnR8ZW58MHwxfDB8fHww",
        }}
        style={[tw`flex-1`, { backgroundColor: "black" }]}
      >
        <View style={tw`flex-1 justify-center items-center px-4`}>
          <Text style={tw`text-white text-5xl font-bold mb-4`}>
            Life Lessons
          </Text>

          <Text style={tw`text-white text-lg text-center mb-8`}>
            Empower yourself with daily wisdom and insights
          </Text>

          <Button
            title="Get Started"
            buttonStyle={tw`bg-green-600 rounded-full w-80 h-12`}
            titleStyle={tw`text-white text-lg font-semibold`}
            onPress={() => navigation.navigate("Categories")}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={tw`text-green-600 text-lg mt-4`}>
              Already have an account? Log In
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LandingScreen;
