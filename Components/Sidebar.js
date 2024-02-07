/** @format */

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../Constants/Const";
import {
  faGear,
  faThunderstorm,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Ripple from "react-native-material-ripple";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Sidebar = (props) => {
  const data = [
    {
      name: "What's new",
      icon: faThunderstorm,
    },
    {
      name: "Listening history",
      icon: faClock,
    },
    {
      name: "Settings and privacy",
      icon: faGear,
    },
  ];
  // get user datas from async storage
  const [username, setUsername] = useState("");
  // useEffect(() => {
  //
  //   setUsername(uname);
  // },[]);
  const getItem = async () => {
    const uname = await AsyncStorage.getItem("useremail");
    setUsername(uname);
  };
  getItem();
  // get user first name
  const [firstletter, setFirstletter] = useState("");
  useEffect(() => {
    setFirstletter(username[0]);
  }, [username]);
  return (
    <View
      style={{
        height: "100%",
        position: "absolute",
        backgroundColor: "#1a1a1a",
        width: "80%",
        padding: 20,
        display: props.menu ? "flex" : "none",
      }}
    >
      {/* user name */}
      <View
        style={{
          height: 100,
          borderWidth: 0,
          flexDirection: "row",
          alignItems: "center",
          columnGap: 15,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 25,
            backgroundColor: "red",
            width: 50,
            height: 50,
            textAlign: "center",
            textAlignVertical: "center",
            borderRadius: 50,
          }}
        >
          {firstletter}
        </Text>
        <View>
          <Text
            style={{ fontWeight: "600", fontSize: 23, color: Colors.primary }}
          >
            {username}
          </Text>
          <Text style={{ fontSize: 15, color: Colors.grey }}>View Profile</Text>
        </View>
      </View>
      {/* options */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              columnGap: 15,
              marginTop: 30,
            }}
          >
            <FontAwesomeIcon
              icon={item.icon}
              size={25}
              color={Colors.primary}
            />
            <Text style={{ fontSize: 20, color: Colors.white }}>
              {item.name}
            </Text>
          </View>
        )}
      />
      <Ripple
        onPress={() => props.setMenu(false)}
        style={{
          width: "100%",
          borderWidth: 0,
          backgroundColor: Colors.grey,
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          borderRadius: 50,
        }}
      >
        <FontAwesomeIcon icon={faTimes} size={25} />
      </Ripple>
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({});
