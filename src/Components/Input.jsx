import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  TextField,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
function Input() {
  const [values, setValues] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleAdd = () => {
    if (values.trim() !== "") {
      setTasks([...tasks, values]);
      setValues(""); // clear input
    }
  };
  // delete the task
  const handleDelete = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete); //updatedtask is a new array
    setTasks(updatedTasks);
  };
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <h1>Todo list</h1>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="40%"
          marginLeft="10vw"
        >
          <TextField
            label="Add a task"
            variant="outlined"
            fullWidth
            value={values}
            onChange={(e) => setValues(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            sx={{ marginLeft: "2vw", width: "10vw", height: "7vh" }}
            onClick={handleAdd}
          >
            Add
          </Button>
        </Box>
      </Box>
      <Box>
        {/* Task List */}
        <Box display="flex" justifyContent="center" mt={4}>
          <List sx={{ width: "50%" }}>
            {tasks.map((task, index) => {
              return (
                <ListItem key={index} sx={{ borderBottom: "1px solid #ccc" }}>
                  <ListItemText>{task}</ListItemText>
                  <IconButton
                    onClick={() => handleDelete(index)}
                    edge="end"
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </div>
  );
}

export default Input;
