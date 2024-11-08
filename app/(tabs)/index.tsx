import React from "react";
import { Image, StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator,  NativeStackNavigationProp } from "@react-navigation/native-stack";

const logo = require("./laurea-pystylogo_RGB.png");

const Stack = createNativeStackNavigator();
type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

// Déclarer le type pour la navigation dans HomeScreen
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}
function HomeScreen({ navigation } : HomeScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        My name is Raphael MARQUES ARAUJO and this is my second application
      </Text>
      <Image
        source={logo}
        style={{
          width: 100,
          height: 100,
          position: "absolute",
          top: 6,
          left: 0,
        }}
      />
      <Button
        title="Go to second page"
        onPress={() => navigation.navigate("Second")}
      />
    </View>
  );
}

function SecondScreen() {
  return (
    <View>
      <Text style={styles.text}>This is the Second Page!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aqua",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
