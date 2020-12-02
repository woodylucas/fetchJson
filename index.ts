import axios from "axios";

// Fetch json data, and print the result.
const url = "https://jsonplaceholder.typicode.com/todos/1";
// interface is used to describe the structure of the object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then((resp) => {
  const todo = resp.data as Todo;

  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  // Extract console.log to a helper function
  console.log(`
    The Todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
});
