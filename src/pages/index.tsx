import Head from "next/head";
import styles from "@/styles/home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Set a delay of 1000 milliseconds (1 second)
    const delay = 0;

    // After the delay, update the state to show the image
    const timeoutId = setTimeout(() => {
      setShowImage(true);
    }, delay);

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          est laudantium dolor quod corporis voluptatum tempore optio, eveniet
          reprehenderit eius consequatur quidem eaque aliquam illum perspiciatis
          hic omnis voluptatibus alias!
        </p>
        {showImage && <img width='1280' height='833' src='/images/lion-3372720_1280.jpg'/>}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          est laudantium dolor quod corporis voluptatum tempore optio, eveniet
          reprehenderit eius consequatur quidem eaque aliquam illum perspiciatis
          hic omnis voluptatibus alias!
        </p>
      </main>
    </>
  );
}
