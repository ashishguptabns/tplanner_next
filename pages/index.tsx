import Head from "next/head";
import styles from "../pages/index.module.css";
import TripsByTypeComp from "../design/home/trips-layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plan your travel</title>
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
        <TripsByTypeComp type={"Nearby Trips"} />
        <TripsByTypeComp type={"Popular Trips"} />
      </div>
    </div>
  );
}
