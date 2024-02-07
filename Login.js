/** @format */

import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "./Constants/Const";
import Ripple from "react-native-material-ripple";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMobile, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Usedata } from "./Providers";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  // fetch data from contenxt
  const { setislogin, login, setLogin } = Usedata();
  // set user datas from signup page
  const [signupUserEmail, setsignupUserEmail] = useState("");
  const [SignupuserPassword, setsignupUserPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  // set input values to variables
  const setUserEmailfun = (text) => {
    setsignupUserEmail(text);
  };
  const setUserPasswordfun = (text) => {
    setsignupUserPassword(text);
  };
  const confirmPasswordfun = (text) => {
    setconfirmPassword(text);
  };
  // set the above datas store to async storge
  const setStorage = async () => {
    try {
      await AsyncStorage.setItem("useremail", signupUserEmail);
      if (SignupuserPassword === confirmPassword) {
        await AsyncStorage.setItem("userpassword", SignupuserPassword);
      }
    } catch (error) {
      console.log("error");
    }
  };
  // set user datas from signin
  const [signinemail, setsigninemail] = useState("");
  const [signinpassword, setsigninpassword] = useState("");
  // set input values to variables
  const setSigninEmailfun = (text) => {
    setsigninemail(text);
  };
  const setSigninPasswordfun = (text) => {
    setsigninpassword(text);
  };
  //
  // get user datas from async storage
  // set data from async storage
  const [emailAsyncstorage, setemailAsyncstorage] = useState();
  const [passwordAstyncstorage, setpasswordAstyncstorage] = useState();
  const getStorage = async () => {
    try {
      const usereamil = await AsyncStorage.getItem("useremail");
      const userpassword = await AsyncStorage.getItem("userpassword");
      setemailAsyncstorage(usereamil);
      setpasswordAstyncstorage(userpassword);
    } catch (error) {
      console.error("error at get data");
    }
  };
  // handle signup and signin
  const [signuperrorMessage, setsignuperrorMessage] = useState("");
  const HandleSignup = () => {
    if (
      signupUserEmail &&
      signupUserEmail.length > 3 &&
      signupUserEmail.includes("@") &&
      SignupuserPassword === confirmPassword
    ) {
      setStorage();
      setLogin("signin");
    }
    if (!signupUserEmail) {
      setsignuperrorMessage("Fill The Field");
      if (signupEmailInput) {
        signupEmailInput.current.setNativeProps({
          style: {
            borderColor: "red",
          },
        });
      }
    }
    if (!SignupuserPassword) {
      setsignuperrorMessage("Fill The Field");
      if (signinpasswordInput) {
        signupPasswordInput.current.setNativeProps({
          style: {
            borderColor: "red",
          },
        });
      }
    }
    if (!confirmPassword) {
      if (confirmInput) {
        confirmInput.current.setNativeProps({
          style: {
            borderColor: "red",
          },
        });
      }
    }

    if (SignupuserPassword !== confirmPassword) {
      setsignuperrorMessage("password do not matched");
      if (confirmInput) {
        confirmInput.current.setNativeProps({
          style: {
            borderColor: "red",
          },
        });
      }
    }
  };
  getStorage();
  const [errorMessage, seterrorMessage] = useState("");
  const HandleSignin = async () => {
    if (
      signinemail === emailAsyncstorage &&
      signinpassword === passwordAstyncstorage
    ) {
      setislogin(true);
      seterrorMessage("");
    } else {
      seterrorMessage("Incorrect email or password.");
    }
    if (!signinemail) {
      seterrorMessage("Complete Fields.");
      if (signinemailInput) {
        signinemailInput.current.setNativeProps({
          style: {
            borderWidth: 1,
            borderColor: "red",
          },
        });
      }
    }
    if (!signinpassword) {
      seterrorMessage("Complete Fields.");
      if (signinpasswordInput) {
        signinpasswordInput.current.setNativeProps({
          style: {
            borderWidth: 1,
            borderColor: "red",
          },
        });
      }
    }
  };
  // chaeck validation styles
  const signinemailInput = useRef(null);
  const signinpasswordInput = useRef(null);
  const signupEmailInput = useRef(null);
  const signupPasswordInput = useRef(null);
  const confirmInput = useRef(null);
  //
  // pages component -------------------------
  // signup page
  const SignUP = () => {
    return (
      <LinearGradient
        colors={["#243427", "#101011", "#1d2231"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 35,
            rowGap: 30,
          }}
        >
          <Text
            style={{ fontWeight: "600", fontSize: 35, color: Colors.primary }}
          >
            Sign up
          </Text>
          {/* form */}

          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              rowGap: 15,
            }}
          >
            <TextInput
              placeholder="Email"
              placeholderTextColor={Colors.grey}
              onChangeText={(text) => setUserEmailfun(text)}
              value={signupUserEmail}
              ref={signupEmailInput}
              // autoFocus={true}
              style={{
                borderWidth: 1,
                borderColor: "#629351",
                width: "95%",
                padding: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                color: "white",
              }}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={Colors.grey}
              onChangeText={(text) => setUserPasswordfun(text)}
              value={SignupuserPassword}
              ref={signupPasswordInput}
              // autoFocus={true}
              style={{
                borderWidth: 1,
                borderColor: "#629351",
                width: "95%",
                padding: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                color: "white",
              }}
            />
            {/* confirm passwword */}
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={Colors.grey}
              value={confirmPassword}
              onChangeText={(text) => confirmPasswordfun(text)}
              ref={confirmInput}
              style={{
                borderWidth: 1,
                borderColor: "#629351",
                width: "95%",
                padding: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                color: "white",
              }}
            />
            {/* error message */}
            <Text
              style={{
                color: "red",
                fontSize: 18,
                position: "absolute",
                fontSize: 15,
                bottom: -25,
              }}
            >
              {signuperrorMessage}
            </Text>
          </View>
          {/* create account */}
          <Ripple style={{ width: "95%" }} onPress={HandleSignup}>
            <LinearGradient
              colors={["#a2ff83", "#84ffbf", "#79ffd6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ padding: 10, borderRadius: 13 }}
            >
              <Text style={{ fontSize: 18, textAlign: "center" }}>Sign up</Text>
            </LinearGradient>
          </Ripple>
          {/* already account */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: Colors.primary,
                textAlign: "right",
                fontSize: 17,
                alignItems: "center",
              }}
            >
              Already have an account?{" "}
            </Text>
            <Pressable
              onPress={() => {
                setLogin("signin");
              }}
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 18,
                  textDecorationLine: "underline",
                  color: Colors.primary,
                }}
              >
                Sign In
              </Text>
            </Pressable>
          </View>

          {/* icons */}
          <View
            style={{
              flexDirection: "row",
              width: "95%",
              justifyContent: "center",
              alignItems: "center",
              columnGap: 20,
            }}
          >
            <FontAwesomeIcon icon={faGoogle} size={25} color={Colors.primary} />
            <FontAwesomeIcon
              icon={faFacebook}
              size={25}
              color={Colors.primary}
            />
            <FontAwesomeIcon icon={faMobile} size={25} color={Colors.primary} />
            <FontAwesomeIcon
              icon={faTwitter}
              size={25}
              color={Colors.primary}
            />
          </View>
        </View>
      </LinearGradient>
    );
  };
  // sign in page
  const SignIn = () => {
    return (
      <LinearGradient
        colors={["#243427", "#101011", "#1d2231"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 35,
            rowGap: 30,
          }}
        >
          <Text
            style={{ fontWeight: "600", fontSize: 35, color: Colors.primary }}
          >
            Sign in
          </Text>
          {/* form */}

          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              rowGap: 15,
            }}
          >
            <TextInput
              placeholder="Email or Username"
              onChangeText={(text) => setSigninEmailfun(text)}
              placeholderTextColor={Colors.grey}
              value={signinemail}
              autoFocus={true}
              ref={signinemailInput}
              style={{
                borderWidth: 1,
                borderColor: "#629351",
                width: "95%",
                padding: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                color: "white",
              }}
            />
            <TextInput
              placeholder="Password"
              onChangeText={(text) => setSigninPasswordfun(text)}
              value={signinpassword}
              placeholderTextColor={Colors.grey}
              ref={signinpasswordInput}
              style={{
                borderWidth: 1,
                borderColor: "#629351",
                width: "95%",
                padding: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                color: "white",
              }}
            />
            <Text
              style={{
                color: "red",
                fontSize: 15,
                position: "absolute",
                bottom: -24,
              }}
            >
              {errorMessage}
            </Text>
            {/* confirm passwword */}
            {/* <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={Colors.grey}
              style={{
                borderWidth: 1,
                borderColor: "#629351",
                width: "95%",
                padding: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                color: "white",
              }}
            /> */}
          </View>
          {/* create account */}
          <Ripple style={{ width: "95%" }} onPress={HandleSignin}>
            <LinearGradient
              colors={["#a2ff83", "#84ffbf", "#79ffd6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ padding: 10, borderRadius: 13 }}
            >
              <Text style={{ fontSize: 18, textAlign: "center" }}>Sign In</Text>
            </LinearGradient>
          </Ripple>
          {/* create new account */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: Colors.primary,
                textAlign: "right",
                fontSize: 17,
                alignItems: "center",
              }}
            >
              Create an account? {""}
            </Text>
            <Pressable onPress={() => setLogin("signup")}>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 18,
                  textDecorationLine: "underline",
                  color: Colors.primary,
                }}
              >
                Sign up
              </Text>
            </Pressable>
          </View>
          {/* icons */}
          {/* <View
            style={{
              flexDirection: "row",
              width: "95%",
              justifyContent: "center",
              alignItems: "center",
              columnGap: 20,
            }}
          >
            <FontAwesomeIcon icon={faGoogle} size={25} color={Colors.primary} />
            <FontAwesomeIcon
              icon={faFacebook}
              size={25}
              color={Colors.primary}
            />
            <FontAwesomeIcon icon={faMobile} size={25} color={Colors.primary} />
            <FontAwesomeIcon
              icon={faTwitter}
              size={25}
              color={Colors.primary}
            />
          </View> */}
        </View>
      </LinearGradient>
    );
  };
  // main page
  const MainPage = () => {
    return (
      <LinearGradient
        colors={["#243427", "#101011", "#1d2231"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 25,
            flexDirection: "column",
            rowGap: 50,
          }}
        >
          <Image
            source={{ uri: "https://i.ibb.co/DVBx07g/headhone.png" }}
            style={{ width: 100, height: 100 }}
          />
          <Text
            style={{
              color: Colors.primary,
              fontSize: 27,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Your ultimate music destination with millions of songs available for
            free.
          </Text>
          {/* sign options buttons */}
          <View style={{ width: "100%", flexDirection: "column", rowGap: 20 }}>
            <Ripple onPress={() => setLogin("signup")}>
              <LinearGradient
                colors={["#a2ff83", "#84ffbf", "#79ffd6"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ padding: 10, borderRadius: 13 }}
              >
                <Text style={{ fontSize: 18, textAlign: "center" }}>
                  Sign up
                </Text>
              </LinearGradient>
            </Ripple>
            <Ripple
              onPress={() => setLogin("signin")}
              style={{
                padding: 10,
                borderRadius: 13,
                borderWidth: 1,
                borderColor: "#629351",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  color: Colors.primary,
                  fontWeight: "600",
                  letterSpacing: 1,
                }}
              >
                Sign in
              </Text>
            </Ripple>
          </View>
          {/* other options */}
          <View style={{ width: "100%", flexDirection: "column", rowGap: 20 }}>
            <Text
              style={{ fontSize: 17, color: Colors.grey, textAlign: "center" }}
            >
              These options will coming soon!
            </Text>
            <Ripple
              style={{
                padding: 10,
                borderRadius: 13,
                borderWidth: 1,
                borderColor: "#629351",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  color: Colors.primary,
                  // fontWeight: "600",
                  letterSpacing: 1,
                }}
              >
                Continue with phone number
              </Text>
            </Ripple>
            <Ripple
              style={{
                padding: 10,
                borderRadius: 13,
                borderWidth: 1,
                borderColor: "#629351",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  color: Colors.primary,
                  // fontWeight: "600",
                  letterSpacing: 1,
                }}
              >
                Continue with Google
              </Text>
            </Ripple>
          </View>
        </View>
      </LinearGradient>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      {login === "main" ? (
        <MainPage />
      ) : login === "signin" ? (
        <SignIn />
      ) : login === "signup" ? (
        <SignUP />
      ) : (
        <Text>page not found</Text>
      )}
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({});
