import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { ImageSliderType } from "../Data/SilderData";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {
  item: ImageSliderType;
  index: number;
};

const { width } = Dimensions.get("screen");
const SliderItem = ({ item, index }: Props) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={{ width: 150, height: 250 }} />
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.8)", "transparent"]}
        style={styles.gradientOverlay}>
        <Text
          style={{
            paddingTop: 12,
            position: "absolute",
            fontWeight: "bold",
            color: "rgba(255, 255, 255, 0.6)",
          }}>
          {item.title}
        </Text>
      </LinearGradient>
      {index === 0 && (
        <View
          style={{
            position: "absolute",
            padding: 12,
            bottom: 0,
          }}>
          <AntDesign
            name="pluscircle"
            size={44}
            color="rgba(255, 255, 255, 0.8)"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    overflow: "hidden",
    borderRadius: 20,
    // width: width,
  },
  gradientOverlay: {
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 80, // Chiều cao gradient
  },
});

export default SliderItem;
