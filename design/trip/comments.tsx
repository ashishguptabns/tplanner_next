import { Snackbar, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import Image from "next/image";
import { CommentDomain } from "../../model/comment";
import { SNACK_TIMEOUT } from "../../utils/constants";
import TPButton from "../button";

interface TypeProps {
  comments: CommentDomain[];
}
const commentsStyle = { marginTop: "10px", paddingBottom: "16px" };
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
const postCommentStyle = {};
const postCommentBtnStyle = {
  width: "100px",
  height: "40px",
  marginTop: "-30px",
  marginRight: "6px",
  right: "0",
  float: "right" as const,
};
const CommentsComp: FC<TypeProps> = ({ comments }) => {
  const [commentText, setCommentText] = useState<string>();
  const [snackBarMsg, setSnackBarMsg] = useState<string>("");

  const handleSnackClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBarMsg("");
  };
  const handlePostComment = () => {
    if (commentText == null || commentText.length == 0) {
      setSnackBarMsg("Please write your comment");
    }
  };
  return (
    <div style={commentsStyle}>
      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>
      <div style={postCommentStyle}>
        <Snackbar
          open={snackBarMsg !== ""}
          onClose={handleSnackClose}
          autoHideDuration={SNACK_TIMEOUT}
          message={snackBarMsg}
        />
        <TextField
          fullWidth={true}
          multiline={true}
          onChange={(event) => {
            setCommentText(event.target.value);
          }}
          margin="dense"
          label="Write your comment"
          variant="outlined"
        />
        <TPButton
          style={postCommentBtnStyle}
          variant="contained"
          text="Post"
          onClick={handlePostComment}
        />
      </div>

      {comments.map((comment: CommentDomain) => {
        return (
          <div style={commentCardStyle} key={comment.commentText}>
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
