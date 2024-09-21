import { StyleSheet, View, Text } from "react-native";
import React from "react";
import CircularlIcon from "./CircularIcon";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const IconGroupBar = () => {
  return (
    <View style={styles.Iconbar}>
      <ButtonIcon
        BackgroundColor="#77E584"
        Icon={<Ionicons name="images" size={18} color="white" />}
        IconColor="green"
        Content="Gallery"
      />
      <ButtonIcon
        BackgroundColor="#95B7FF"
        Icon={<FontAwesome name="group" size={18} color="white" />}
        IconColor="#5058E6"
        Content="Gallery"
      />
      <ButtonIcon
        BackgroundColor="#FF9F9E"
        Icon={<FontAwesome name="video-camera" size={18} color="white" />}
        IconColor="#FA7373"
        Content="Gallery"
      />
    </View>
  );
};

const ButtonIcon = ({
  BackgroundColor,
  Icon,
  IconColor,
  Content,
}: {
  BackgroundColor: string;
  Icon: React.ReactNode;
  IconColor: string;
  Content: string;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: 120,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 8,
        backgroundColor: BackgroundColor,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 40,
      }}>
      <CircularlIcon
        BackgroundColor={IconColor}
        Icon={Icon}
        notification={false}
      />
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
        }}>
        {Content}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Iconbar: {
    flexDirection: "row",
    gap: 12,
  },
});

export default IconGroupBar;
