import { Link, Skeleton, Typography } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import { CommentDomain } from "../../model/domain/comment-domain";

interface TypeProps {
  comments: CommentDomain[];
}
const commentsStyle = { marginTop: "10px" };
const commentCardStyle = { marginTop: "16px", display: "flex" };
const commentImgStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "25px",
  marginRight: "10px",
};
const CommentsComp: FC<TypeProps> = ({ comments }) => {
  return (
    <div style={commentsStyle}>
      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>
      {comments.map((comment: CommentDomain) => {
        return (
          <div style={commentCardStyle}>
            <Image
              width={50}
              height={50}
              style={commentImgStyle}
              src={comment.postedByPhotoUrl}
              alt={comment.postedByName}
            />
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              {comment.postedByName}
            </Typography>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              {comment.commentText}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsComp;
