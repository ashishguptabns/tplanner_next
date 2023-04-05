import { Grid, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import TripCardComp from "./trip-card";
import { TripDTO } from "../../model/dto/trip-dto";
import { fetchTripsByTypeUseCase } from "../../service/trip-service";

interface TypeProps {
  type: string;
}
const cardStyle = {
  minHeight: "300px",
  padding: "10px",
};
const TripsByTypeComp: FC<TypeProps> = ({ type }) => {
  const [trips, setTrips] = useState<TripDTO[]>(Array(3).fill({}));

  useEffect(() => {
    if (!trips[0].cityImgUrl) {
      fetchTripsByTypeUseCase(type, success, error);
    }
  }, []);
  const success = (data: TripDTO[]) => {
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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {trips.map((trip) => {
          return (
            <Grid xs={6} key={trip.id}>
              <TripCardComp trip={trip!} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default TripsByTypeComp;
