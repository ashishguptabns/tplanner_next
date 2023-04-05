import { Typography } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import { CommentDomain } from "../../model/domain/comment-domain";

interface TypeProps {
  comments: CommentDomain[];
}
const commentsStyle = { marginTop: "10px" };
const commentCardStyle = {
  marginTop: "16px",
  display: "flex",
  alignItems: "center",
};
const commentImgStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "25px",
  marginRight: "12px",
};
const CommentsComp: FC<TypeProps> = ({ comments }) => {
  return (
    <div style={commentsStyle}>
      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>
      {comments.map((comment: CommentDomain, index) => {
        return (
          <div style={commentCardStyle} key={index}>
            <img
              width={50}
              height={50}
              style={commentImgStyle}
              src={comment.postedByPhotoUrl}
              alt={comment.postedByName}
            />
            <div>
              <Typography
                sx={{ fontSize: 16 }}
                marginBottom={"-2px"}
                color="text.primary"
                gutterBottom
              >
                {comment.postedByName}
              </Typography>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                {comment.commentText}
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsComp;
