import React from "react";
import Comment from "../../components/Comment";
import Detail from "../../components/Detail";
import ShowComment from "../../components/ShowComment";

const CommentPage = () => {
  return (
    <div>
      <Detail />
      <Comment />
      <ShowComment />
    </div>
  );
};

export default CommentPage;
