import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderBar from "./HeaderBar";
import Avatarbar from "./component/Avatarbar";
import IconGroupBar from "./component/IconGroupBar";
import Storybar from "./component/Storybar";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0 }}>
        <HeaderBar />
      </View>
      <View style={{ height: 60 }}>
        <Avatarbar Title="How your day?" />
      </View>
      <View>
        <IconGroupBar />
      </View>
      <Storybar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    paddingTop: 24,
    backgroundColor: "#fff",
    alignItems: "center",
    gap: 12,
    // justifyContent: "center",
  },
});
