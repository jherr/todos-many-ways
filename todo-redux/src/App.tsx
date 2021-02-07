import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { Provider } from "react-redux";

import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

import store from "./store/store";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Box maxWidth="8xl" margin="auto" p={5}>
          <TopBar />
          <TodoList />
          <TodoAdd />
        </Box>
      </Provider>
    </ChakraProvider>
  );
}
