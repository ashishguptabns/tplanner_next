import Head from "next/head";
import styles from "../pages/index.module.css";
import { useState } from "react";
import { Snackbar } from "@mui/material";
import { SNACK_TIMEOUT } from "../utils/constants";
import TripsByTypeComp from "../design/home/trips-layout";

export default function Home() {
  const [snackBarMsg, setSnackBarMsg] = useState<string>("");

  const handleSnackClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBarMsg("");
  };

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Plan your travel</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.main}>
          <Snackbar
            open={snackBarMsg !== ""}
            onClose={handleSnackClose}
            autoHideDuration={SNACK_TIMEOUT}
            message={snackBarMsg}
          />
          <TripsByTypeComp type={"Nearby Trips"} />
          <TripsByTypeComp type={"Popular Trips"} />
        </div>
      </div>
    </>
  );
}
