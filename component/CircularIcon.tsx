import { View, Text } from "react-native";
import React from "react";

const CircularlIcon = ({
  BackgroundColor,
  Icon,
  notification,
}: {
  BackgroundColor: string;
  Icon: React.ReactNode;
  notification: boolean;
}) => {
  return (
    <View
      style={{
        backgroundColor: BackgroundColor,
        width: 32,
        height: 32,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}>
      {notification ? (
        <View
          style={{
            backgroundColor: "red",
            width: 12,
            height: 12,
            borderRadius: 22,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            right: 0,
            borderColor: "#FFFFFF",
            borderWidth: 2,
          }}></View>
      ) : null}
      {Icon}
    </View>
  );
};

export default CircularlIcon;
