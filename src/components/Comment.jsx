import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComments } from "../redux/actions/ClientAction";

const initComments = {
  comment: "",
  name: "",
};

const Comment = () => {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState(initComments);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComments(newComment));
    setNewComment(initComments);
  };

  return (
    <Container>
      <form className="comment-form" onSubmit={handleSubmit}>
        <h3 className="comment-h3">Добавьте комментарий</h3>

        <div>
          <TextField
            value={newComment.comment}
            onChange={(e) =>
              setNewComment({ ...newComment, comment: e.target.value })
            }
            label="Комментарий"
            variant="outlined"
            color="warning"
          />
        </div>
        <div>
          <TextField
            value={newComment.name}
            onChange={(e) =>
              setNewComment({ ...newComment, name: e.target.value })
            }
            label="Ваше Имя"
            variant="outlined"
            color="warning"
          />
        </div>
        <div>
          <Button
            color="warning"
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "orangered",
              marginLeft: "7%",
              // width: "270px",
              borderRadius: 5,
            }}
          >
            Добавить
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Comment;
