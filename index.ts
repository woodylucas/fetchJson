import axios from "axios";

// Fetch json data, and print the result.
const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((resp) => {
  console.log(resp.data);
});
