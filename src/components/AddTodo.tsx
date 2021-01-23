import React, { useState, ChangeEvent } from "react";
import { Button, TextField } from "@material-ui/core";

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [val, setVal] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value.trim());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target, val);
    if (val.trim() !== "") {
      setMessage("");
      addTodo({ text: val, complete: false });
    } else {
      setMessage("Field can not be empty!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          value={val}
          onChange={handleChange}
          placeholder="Tell me what to do..."
        /> */}
        <TextField
          id="standard-basic"
          label="Tell me what to do..."
          value={val}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          + Add
        </Button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
};

export default AddTodo;
