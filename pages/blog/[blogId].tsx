import Head from "next/head";
import styles from "./blog.module.css";
import { Typography } from "@mui/material";
import TripSkeletonComp from "../../design/trip/skeleton";
import { BlogDTO } from "../../model/blog";
import { getBlogData } from "../../service/blog-service";

interface TypeProps {
  blog: BlogDTO;
}

export default function BlogPage({ blog }: TypeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{blog ? blog.text : "Blog"}</title>
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
        {blog ? (
          <>
            <img
              width={"100%"}
              src={blog.imgUrl ? blog.imgUrl : ""}
              alt={blog.text}
            />
            <Typography
              sx={{ fontSize: 18 }}
              margin={"10px"}
              whiteSpace={"pre-wrap"}
              color="text.primary"
              paddingBottom={20}
              gutterBottom
            >
              {blog.text}
            </Typography>
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
    paths: [{ params: { blogId: "wYVQlEE8K2RsT0hsv8ef" } }],
    fallback: true,
  };
}
export async function getStaticProps(context: any) {
  const { blogId } = context.params;
  const postData = await getBlogData(blogId);

  return {
    props: {
      blog: postData,
    },
  };
}
