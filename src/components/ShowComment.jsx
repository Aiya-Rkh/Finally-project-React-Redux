import { DeleteForeverRounded } from "@mui/icons-material";
import { Button, TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComments, getComments } from "../redux/actions/ClientAction";

const ShowComment = () => {
  const dispatch = useDispatch();
  const { comment } = useSelector((state) => state.clothesClientReducer);

  React.useEffect(() => {
    dispatch(getComments());
  }, []);

  if (!comment) {
    return <h3>Loading</h3>;
  }

  return (
    <form>
      <TableBody>
        {comment.map((item) => (
          <TableRow>
            <TableCell>{item.comment}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <Button
                color="error"
                //   variant="outlined"
                onClick={() => dispatch(deleteComments(item.id))}
              >
                <DeleteForeverRounded />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </form>
  );
};

export default ShowComment;
