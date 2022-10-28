import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
// import styles from '../styles/about.module.css'

const about = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <Navbar />
      {/* COMPONENT LEVEL CSS =>  <h1 className={styles.mainHeading}>This is the about page</h1> */}
      {/* INLINE CSS =>           <h1 style={{color: "Purple"}}>This is the about page</h1> */}
      <h1>This is the about page</h1>
      {/* STYLE JSX */}
      <style jsx>
        {`
          h1 {
            color: purple;
          }
        `}
      </style>
    </div>
  );
};

export default about;
