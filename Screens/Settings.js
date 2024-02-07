/** @format */

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors, Icons } from "../Constants/Const";
import Ripple from "react-native-material-ripple";

const Settings = () => {
  const data = [
    {
      name: "Account",
      heading: "Free plan",
      content: "View your plan",
    },
    {
      name: "Data Saver",
      heading: "Save Data",
      content:
        "Set audio quality to low,and hides canvases as well as audio & video previews on home.",
    },
    {
      name: "Video Podacasts",
      heading: "Download audio only",
      content: "Save Video podcats as audio only when not on WI-FI.",
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.bgcolor,
        paddingHorizontal: 20,
      }}
    >
      {/* settings header */}
      <View
        style={{
          height: 60,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity>
          <Image
            source={{ uri: Icons.arrow }}
            style={{ width: 30, height: 25 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: Colors.primary,
            fontSize: 23,
            textAlign: "center",
            flex: 2,
          }}
        >
          Settings
        </Text>
      </View>
      {/* account type */}
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          rowGap: 20,
          height: 200,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "600", color: Colors.white }}>
          Free Account
        </Text>
        <Ripple
          style={{
            backgroundColor: "#1a1a1a",
            padding: 10,
            paddingHorizontal: 40,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              color: Colors.primary,
              textAlign: "center",
              fontWeight: "600",
              letterSpacing: 1,
            }}
          >
            Go Premium
          </Text>
        </Ripple>
      </View>
      {/* setting oprtions */}
      <View style={{ flexDirection: "column", rowGap: 30 }}>
        {data.map((items) => (
          <View style={{ flexDirection: "column", rowGap: 10 }}>
            <Text
              style={{ fontSize: 20, color: Colors.white, fontWeight: "600" }}
            >
              {items.name}
            </Text>
            <View>
              <Text style={{ fontSize: 18, color: Colors.primary ,fontWeight: '600'}}>
                {items.heading}
              </Text>
              <Text
                style={{ fontSize: 14, color: Colors.grey, fontWeight: "600" }}
              >
                {items.content}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
