import { View, Text, Image, FlatList, FlatListComponent } from "react-native";
import React from "react";
import { ImageSlider } from "../Data/SilderData";
import SliderItem from "./SliderItem";
import CircularlIcon from "./CircularIcon";

const Storybar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-end",
      }}>
      <FlatList
        data={ImageSlider}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
      />
    </View>
  );
};

export default Storybar;
