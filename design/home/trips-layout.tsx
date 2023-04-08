import { Grid, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import TripCardComp from "./trip-card";
import { fetchTripsByTypeUseCase } from "../../service/trip-service";
import { TripDomain } from "../../model/trip";

interface TypeProps {
  type: string;
}
const gridStyle = {
  display: "inline-grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: "10px",
};
const cardStyle = {
  minHeight: "300px",
  padding: "10px",
};
const TripsByTypeComp: FC<TypeProps> = ({ type }) => {
  const [trips, setTrips] = useState<TripDomain[]>(Array(3).fill({}));

  useEffect(() => {
    if (!trips[0].cityImgUrl) {
      fetchTripsByTypeUseCase(type, success, error);
    }
  }, []);
  const success = (data: TripDomain[]) => {
    setTrips(data);
  };
  const error = (msg: string) => {
    console.log(msg);
  };
  return (
    <div style={cardStyle}>
      <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
        {type}
      </Typography>
      <div style={gridStyle}>
        {trips.map((trip) => {
          return <TripCardComp trip={trip!} key={trip.id} />;
        })}
      </div>
    </div>
  );
};

export default TripsByTypeComp;
