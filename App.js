import axios from "axios";
import "./App.css";
import {
  Box,
  Button,
  Typography,
  dividerClasses,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ResetTvRounded } from "@mui/icons-material";

function App() {
  // const handleSubmit = (input) => {
    
  //   const name = input.target.value;
  //   const email = input.target.value;
  //   const password = input.target.value;

  //   axios
  //     .post("https://jsonplaceholder.typicode.com/comments", {
  //       name,
  //       email,
  //       password,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       input.target.reset();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // return (
  //   <div>
  //     <h1>Post Api</h1>

  //     <input id="standard-basic" label="Name" variant="standard" type="text" />

  //     <input id="standard-basic" label="Email" variant="standard" type="text" />

  //     <input id="standard-basic" label="Password" variant="standard" type="text" />

  //     <Button onClick={handleSubmit} variant="contained" color="success"  >
  //       Success
  //     </Button>
  //   </div>
  // );

  // const updatePost = () => {
  //   axios
  //     .put(`${baseApi}/${params.id}`, model)
  //     .then((res) => {
  //       console.log("Post Updated Successfully ==>", res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const deletePost = (id) => {
  //   axios
  //     .delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
  //     .then(() => {
  //       console.log("Deleted Successfully");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const [listData, setListData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       console.log(res.data);
  //       setListData([...res.data]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // let getData = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/post")
  //     .then((res) => {
  //       console.log(res.data);
  //       setListData([...res.data]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  //   return (
  //     <div>
  //       <h1>Project</h1>

  //       {listData.map((x, i) => (
  //         <div key={i}>
  //           <Typography>{x.title}</Typography>
  //           <Typography>{x.id}</Typography>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

  // <Box>
  //   <Typography>Post</Typography>
  //   <button onClick={getData} variant="contained">
  //     Get Post
  //   </button>
  //   {listData.map((x, i) => (
  //     <div key={i}>
  //       <Typography>{x.category}</Typography>
  //       <Typography>{x.price}</Typography>
  //     </div>
  //   ))}
  // </Box>
}
export default App;
