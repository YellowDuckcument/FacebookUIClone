import { View, Text, Image, FlatList, FlatListComponent } from "react-native";
import React from "react";

const Storybar = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 180,
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
      }}>
      <FlatList
        data={ImageSlider}
        renderItem={({ item, index }) => (
          <Slideritem item={item} index={index} />
        )}
      />
    </View>
  );
};

export default Storybar;
