import { fetchTripByIdUrl } from "../api/fetchTripById/[tripId]";
import Image from "next/image";
import Head from "next/head";
import styles from "./trip.module.css";
import { Typography } from "@mui/material";
import { ActivityDomain } from "../../model/domain/activity-domain";
import Link from "next/link";
import CommentsComp from "../../design/trip/comments";
import { TripDTO } from "../../model/dto/trip-dto";

interface TypeProps {
  trip: TripDTO;
}

export default function TripPage({ trip }: TypeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{trip.cityTo}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Image
          src={trip.cityImgUrl!}
          alt={`${trip.cityFrom} to ${trip.cityTo}`}
          width={500}
          height={500}
        />
        <div className={styles.tripDetails}>
          <Typography sx={{ fontSize: 22 }} color="text.primary" gutterBottom>
            {`${trip.cityFrom} to ${trip.cityTo}`}
          </Typography>
          <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
            {`Budget per person: INR ${trip.totalBudget}`}
          </Typography>
          <div className={styles.infoBlock}>
            <Typography variant="h6" gutterBottom>
              Inter-city travel cost
            </Typography>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              {`INR ${trip.interCityTravelCost}`}
            </Typography>
          </div>
          <div className={styles.infoBlock}>
            <Typography variant="h6" gutterBottom>
              Within place commute cost
            </Typography>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              {`INR ${trip.withinPlaceCommuteCost}`}
            </Typography>
          </div>
          <div className={styles.infoBlock}>
            <Typography variant="h6" gutterBottom>
              Activities
            </Typography>
            {trip.activities &&
              trip.activities.map((activity: ActivityDomain) => {
                return (
                  <Typography
                    sx={{ fontSize: 18 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {`${activity.desc}: INR ${activity.cost}`}
                  </Typography>
                );
              })}
          </div>
          <Link href={`/blog/${trip.blogId}`} className={styles.blogLink}>
            Read about this place
          </Link>
          <CommentsComp comments={trip.comments!} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { tripId } = context.query;

  const postData = await fetch(`${fetchTripByIdUrl}${tripId}`);
  const jsonData = await postData.json();
  return {
    props: {
      trip: jsonData,
    },
  };
}
