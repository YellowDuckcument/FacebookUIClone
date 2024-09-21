import { View, Text } from "react-native";
import React from "react";
import Avatar from "./Avatar";

const ImageUri =
  "https://images.pexels.com/photos/28005837/pexels-photo-28005837/free-photo-of-man-on-bike-trip-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Avatarbar = ({ Title }: { Title: string }) => {
  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        gap: 12,
        alignItems: "center",
        overflow: "hidden",
      }}>
      <Avatar ImageUri={ImageUri} Border={true} BorderColor="green" />
      <View
        style={{
          backgroundColor: "#fff",
          padding: 8,
          flexDirection: "row",
          justifyContent: "flex-start",
          width: 320,
          height: 60,
          borderWidth: 1,
          borderRadius: 12,
          borderColor: "gray",
        }}>
        <Text style={{ color: "gray" }}>{Title}</Text>
      </View>
    </View>
  );
};

export default Avatarbar;
