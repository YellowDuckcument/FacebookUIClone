import { View, Text, Image } from "react-native";
import React from "react";

const Avatar = ({
  ImageUri,
  Border,
  BorderColor,
}: {
  ImageUri: string;
  Border: boolean;
  BorderColor: string;
}) => (
  <View>
    <Image
      source={{ uri: ImageUri }}
      style={{
        width: 50,
        height: 50,
        borderRadius: 50,
        borderColor: BorderColor ? BorderColor : "white",
        borderWidth: Border ? 1.5 : 0,
      }}
    />
  </View>
);

export default Avatar;
