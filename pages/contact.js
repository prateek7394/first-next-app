import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import Head from "next/head";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Page</title>
      </Head>
      <Navbar />
      <div  style={{textAlign: "center" }}>
      <h1 className={styles.mainHeading}>This is the contact page</h1>
      {/* <Image src="/contact.jpg" width={500} height={300}></Image> */}

      {/* NOTE: An image specified in public folder must have pathname with leading / followed by file name */}

      <Image
        src="https://images.pexels.com/photos/263564/pexels-photo-263564.jpeg?auto=compress&cs=tinysrgb&w=600"
        width="500"
        height="300"
        alt="Contact image"
      ></Image>
      </div>
    </div>
  );
};

export default contact;
