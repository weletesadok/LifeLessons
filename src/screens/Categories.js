import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { Card } from "react-native-elements";
import tw from "twrnc";

const categories = [
  { id: "1", name: "Today's Task List", screen: "ToDoScreen" },
  { id: "2", name: "Weekend Planning", screen: "WeekendScreen" },
  { id: "3", name: "Monthly Planning", screen: "MonthlyGoalsScreen" },
  { id: "4", name: "Annual Vision & Goals", screen: "YearlyGoalsScreen" },
  { id: "5", name: "Daily Habits Tracker", screen: "DailyHabitsScreen" },
  { id: "6", name: "Motivation Boost", screen: "MotivationScreen" },
  { id: "7", name: "Mindful Inspirations", screen: "InspirationScreen" },
  { id: "8", name: "Personal Growth Journey", screen: "PersonalGrowthScreen" },
  { id: "9", name: "Focus & Productivity", screen: "FocusScreen" },
  { id: "10", name: "Audio Books for Growth", screen: "AudioBooksScreen" },
  { id: "11", name: "Self-Care & Wellness", screen: "SelfCareScreen" },
  { id: "12", name: "Skills & Learning Hub", screen: "LearningHubScreen" },
];

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryCard = ({ item }) => {
    const randomImage = `https://picsum.photos/1200/700?random=${item.id}`;

    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
        <Card containerStyle={tw`bg-transparent p-0 rounded-xl shadow-lg`}>
          <ImageBackground
            source={{ uri: randomImage }}
            style={[
              tw`h-48  rounded-xl justify-end`,
              { backgroundSize: "cover" },
            ]}
            imageStyle={tw`rounded-xl`}
          >
            <Text
              style={tw`text-white text-xl font-bold p-4 bg-black bg-opacity-50 text-center`}
            >
              {item.name}
            </Text>
          </ImageBackground>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={tw`flex-1 bg-black p-4`}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryCard}
      />
    </View>
  );
};

export default CategoriesScreen;
