/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Login from "./Login";
import Layouts from "./Layouts";
import { Usedata } from "./Providers";

const RenderApp = () => {
  const { islogin } = Usedata();
  return (
    <View style={styles.container}>{islogin ? <Layouts /> : <Login />}</View>
  );
};

export default RenderApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
