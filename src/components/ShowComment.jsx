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
    <form style={{ marginLeft: "12%", marginBottom: "5px" }}>
      <TableBody>
        {comment.map((item) => (
          <TableRow
            style={{
              backgroundColor: "ThreeDHighlight",
              marginBottom: "5px",
            }}
          >
            <div>
              <TableCell>{item.comment}</TableCell>
            </div>
            <div>
              <TableCell>коммент от {item.name}</TableCell>
            </div>
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
