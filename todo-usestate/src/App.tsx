import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

import { Todo, useTodos } from "./store";

export function App() {
  const [todos, todosSet] = useTodos([]);

  const onLoad = () => {
    fetch(
      "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"
    )
      .then((resp) => resp.json())
      .then((tds: Todo[]) => todosSet(tds));
  };

  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TopBar onLoad={onLoad} />
        <TodoList todos={todos} todosSet={todosSet} />
        <TodoAdd todosSet={todosSet} />
      </Box>
    </ChakraProvider>
  );
}
