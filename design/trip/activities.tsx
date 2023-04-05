import { Skeleton, Typography } from "@mui/material";
import { FC } from "react";
import { ActivityDomain } from "../../model/domain/activity-domain";
import TPText from "../text";
import { TripDomain } from "../../model/domain/trip-domain";

interface TypeProps {
  trip: TripDomain;
}
const infoBlockStyle = { marginTop: "10px" };
const ActivitiesComp: FC<TypeProps> = ({ trip }) => {
  return (
    <div style={infoBlockStyle}>
      <Typography variant="h6" gutterBottom>
        Activities
      </Typography>
      {trip.activities &&
        trip.activities.map((activity: ActivityDomain) => {
          return (
            <TPText
              key={activity.desc}
              text={`${activity.desc}: INR ${activity.cost}`}
              color={"text.secondary"}
              fontSize={18}
            />
          );
        })}
    </div>
  );
};

export default ActivitiesComp;
