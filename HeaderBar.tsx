import { StyleSheet, View, Text } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import CircularlIcon from "./component/CircularIcon";
import { styles } from "./styles/HeaderStyle";

const HeaderBar = () => {
  return (
    <View id="HeaderbarContainer" style={styles.container}>
      <View id="RightSection" style={styles.left_container}>
        <Text style={{ fontWeight: "bold", color: "#0866FF", fontSize: 24 }}>
          facebook
        </Text>
      </View>
      <View id="LeftSection" style={styles.right_container}>
        <CircularlIcon
          BackgroundColor={"#BEBEBE"}
          Icon={<Feather name="search" size={18} color="white" />}
          notification={false}
        />
        <CircularlIcon
          BackgroundColor={"#FA7373"}
          Icon={<FontAwesome name="bell" size={18} color="white" />}
          notification={false}
        />
        <CircularlIcon
          BackgroundColor={"#84B6FB"}
          Icon={<FontAwesome name="group" size={18} color="white" />}
          notification={true}
        />
        <CircularlIcon
          BackgroundColor={"#218EFF"}
          Icon={
            <FontAwesome6 name="facebook-messenger" size={18} color="white" />
          }
          notification={true}
        />
      </View>
    </View>
  );
};

export default HeaderBar;
