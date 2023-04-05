import { Skeleton } from "@mui/material";
import { FC } from "react";

interface TypeProps {}
const TripSkeletonComp: FC<TypeProps> = ({}) => {
  return (
    <>
      <Skeleton variant="rectangular" height={"260px"} />
      <br />
      <Skeleton variant="rectangular" height={"40px"} />
      <br />
      <Skeleton variant="rectangular" height={"40px"} />
      <br />
      <Skeleton variant="rectangular" height={"260px"} />
      <br />
      <Skeleton variant="rectangular" height={"40px"} />
    </>
  );
};

export default TripSkeletonComp;
