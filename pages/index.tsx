import Head from "next/head";
import styles from "../pages/index.module.css";
import { useState } from "react";
import { Snackbar } from "@mui/material";
import { SNACK_TIMEOUT } from "../utils/constants";
import TripsByTypeComp from "../design/home/trips-layout";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Plan your travel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        
        <TripsByTypeComp type={"Nearby Trips"} />
        <TripsByTypeComp type={"Popular Trips"} />
      </div>
    </div>
  );
}
