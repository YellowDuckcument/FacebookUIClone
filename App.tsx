import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderBar from "./HeaderBar";
import Avatar from "./component/Avatar";
import Avatarbar from "./component/Avatarbar";
import IconGroupBar from "./component/IconGroupBar";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderBar />
      <Avatarbar Title="How your day?" />
      <StatusBar style="auto" />
      <IconGroupBar />
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
    // justifyContent: "center",
  },
});
