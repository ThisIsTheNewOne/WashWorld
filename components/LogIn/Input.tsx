import React from "react";
import {
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
} from "native-base";
import { Container, View, Button, Text } from "native-base";
import { StyleSheet } from "react-native";

const InputExample = () => {
  return (
    <>
      <Box w="100%" maxWidth="300px">
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              defaultValue="12345"
              placeholder="password"
            />
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
      </Box>
    </>
  );
};

const InputExample2 = () => {
  return (
    <NativeBaseProvider>
      <View style={styles.conatiner}>
        {/* <Container>
          <Text>Header</Text>
          <Button>
            <Text>Click Me</Text>
          </Button>
        </Container> */}
      </View>
    </NativeBaseProvider>
  );
};

export default InputExample2;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: 60,
    height: 300,
    backgroundColor: "#ff0000",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  reactLogo: {
    height: 78,
    width: 190,
    marginBottom: "40%",
  },
});
