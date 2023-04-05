import { fetchTripByIdUrl } from "../api/fetchTripById/[tripId]";
import Image from "next/image";
import Head from "next/head";
import styles from "./trip.module.css";
import { Skeleton, Typography } from "@mui/material";
import { ActivityDomain } from "../../model/domain/activity-domain";
import Link from "next/link";
import CommentsComp from "../../design/trip/comments";
import { TripDTO } from "../../model/dto/trip-dto";
import TripSkeletonComp from "../../design/trip/skeleton";

interface TypeProps {
  trip: TripDTO;
}

export default function TripPage({ trip }: TypeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{trip ? trip.cityTo : "Trip"}</title>
        <link rel="icon" href="/favicon.ico" />
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
              <Typography
                sx={{ fontSize: 22 }}
                color="text.primary"
                gutterBottom
              >
                {`${trip.cityFrom} to ${trip.cityTo}`}
              </Typography>
              <Typography
                sx={{ fontSize: 18 }}
                color="text.primary"
                gutterBottom
              >
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
                  trip.activities.map((activity: ActivityDomain, index) => {
                    return (
                      <Typography
                        key={index}
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
  const postData = await fetch(`${fetchTripByIdUrl}${tripId}`, {
    next: { revalidate: 60 * 60 },
  });
  console.log(postData);
  const jsonData = await postData.json();

  return {
    props: {
      trip: jsonData,
    },
  };
}

// export async function getServerSideProps(context: any) {
//   const { tripId } = context.query;

//   const postData = await fetch(`${fetchTripByIdUrl}${tripId}`, {
//     next: { revalidate: 60 * 60 },
//   });
//   const jsonData = await postData.json();
//   return {
//     props: {
//       trip: jsonData,
//     },
//   };
// }
