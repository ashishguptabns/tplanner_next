import Head from "next/head";
import styles from "./trip.module.css";
import { Typography } from "@mui/material";
import Link from "next/link";
import CommentsComp from "../../design/trip/comments";
import { TripDTO } from "../../model/dto/trip-dto";
import TripSkeletonComp from "../../design/trip/skeleton";
import TPText from "../../design/text";
import ActivitiesComp from "../../design/trip/activities";
import { getTripData } from "../api/fetchTripById/[tripId]";

interface TypeProps {
  trip: TripDTO;
}

export default function TripPage({ trip }: TypeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{trip ? trip.cityTo : "Trip"}</title>
        <meta property="og:title" content="Plan your travel" />
        <meta
          property="og:description"
          content="Use TPlanner app to easily plan your travels!"
        />
        <meta property="og:image" content="public/favicon.png" />
        <meta
          name="description"
          content="Use TPlanner app to easily plan your travels!"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.main}>
        {trip ? (
          <>
            <img
              width={"100%"}
              src={trip.cityImgUrl ? trip.cityImgUrl : ""}
              alt={`${trip.cityFrom} to ${trip.cityTo}`}
            />
            <div className={styles.tripDetails}>
              <TPText
                text={`${trip.cityFrom} to ${trip.cityTo}`}
                color={"text.primary"}
                fontSize={22}
              />
              <TPText
                text={`Budget per person: INR ${trip.totalBudget}`}
                color={"text.primary"}
                fontSize={18}
              />

              <div className={styles.infoBlock}>
                <Typography variant="h6" gutterBottom>
                  Inter-city travel cost
                </Typography>
                <TPText
                  text={`INR ${trip.interCityTravelCost}`}
                  color={"text.secondary"}
                  fontSize={18}
                />
              </div>
              <div className={styles.infoBlock}>
                <Typography variant="h6" gutterBottom>
                  Within place commute cost
                </Typography>
                <TPText
                  text={`INR ${trip.withinPlaceCommuteCost}`}
                  color={"text.secondary"}
                  fontSize={18}
                />
              </div>
              <ActivitiesComp trip={trip} />
              <p className={styles.blogLink}>
                <Link href={`/blog/${trip.blogId}`}>Read about this place</Link>
              </p>
              <CommentsComp comments={trip.comments!} />
            </div>
          </>
        ) : (
          <TripSkeletonComp />
        )}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { tripId: "1axfjWU3Qo6QR30ppaiA" } }],
    fallback: true,
  };
}
export async function getStaticProps(context: any) {
  const { tripId } = context.params;
  const postData = await getTripData(tripId as string);

  return {
    props: {
      trip: postData,
    },
  };
}
