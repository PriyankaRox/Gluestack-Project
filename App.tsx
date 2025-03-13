import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "./components/ui/input";
import { Card } from "./components/ui/card";
import { Heading } from "./components/ui/heading";
import React from "react";
import { VStack } from "./components/ui/vstack";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText
} from "./components/ui/form-control";
import { AlertCircleIcon } from "./components/ui/icon";

export default function App() {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [inputUsername, setInputUsrename] = React.useState("");
  const [inputValue, setInputValue] = React.useState("12345");

  const handleSubmit = () => {
    if (inputValue.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
      alert("login successfull");
    }
  };
  return (
    <VStack
      className="w-full h-screen flex justify-center items-center max-w-[300px] rounded-md border border-background-200 p-4"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      {/* username */}
      <FormControl
        isInvalid={isInvalid}
        size="md"
        isDisabled={false}
        isReadOnly={false}
        isRequired={false}
        style={{
          padding: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <FormControlLabel>
          <FormControlLabelText>Username</FormControlLabelText>
        </FormControlLabel>
        <Input
          className="my-1"
          // size={props.size}
          style={{ padding: 10 }}
        >
          <InputField
            type="text"
            placeholder="Enter your username"
            value={inputUsername}
            onChangeText={(text) => setInputUsrename(text)}
          />
        </Input>

        {/* password */}

        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input
          className="my-1"
          style={{ padding: 10 }}
          // size={props.size}
        >
          <InputField
            type="password"
            placeholder="Enter your password"
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />
        </Input>
        <FormControlHelper>
          <FormControlHelperText>
            Must be atleast 6 characters.
          </FormControlHelperText>
        </FormControlHelper>
        <FormControlError>
          {/* <FormControlErrorIcon as={AlertCircleIcon} /> */}
          <FormControlErrorText>
            Atleast 6 characters are required.
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
      <Button
        className="w-fit self-end mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        size="sm"
        style={{ padding: 10 }}
        onPress={handleSubmit}
      >
        <ButtonText>Submit</ButtonText>
      </Button>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
