/** @format */
import { View, StyleSheet, SafeAreaView } from "react-native";
import Layouts from "./Layouts";
import { Provider_Context } from "./Providers";
import RenderApp from "./RenderApp";
//
export default function App() {
  return (
    <Provider_Context>
      <SafeAreaView style={styles.container}>
        <RenderApp />
      </SafeAreaView>
    </Provider_Context>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 30,
    // borderColor: "red",
    // borderWidth: 1
  },
});
