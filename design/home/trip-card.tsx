import { Link, Skeleton, Typography } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import { TripDomain } from "../../model/trip";

interface TypeProps {
  trip: TripDomain;
}
const tripCardImgStyle = {
  width: "100%",
  height: "160px",
  borderRadius: "4px",
  marginRight: "2px",
};
const tripCardStyle = { marginTop: "10px", height: "190px", width: "100%" };
const TripCardComp: FC<TypeProps> = ({ trip }) => {
  return (
    <div style={tripCardStyle}>
      {trip.cityImgUrl == null ? (
        <>
          <Skeleton variant="rectangular" height={"160px"} />
          <br />
          <Skeleton variant="rectangular" height={"20px"} />
        </>
      ) : (
        <Link href={`/trip/${trip.id}`} style={{ textDecoration: "none" }}>
          <Image
            style={tripCardImgStyle}
            src={trip.cityImgUrl}
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {trip.cityTo}
          </Typography>
        </Link>
      )}
    </div>
  );
};

export default TripCardComp;
