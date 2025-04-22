import { useState } from "react"; 
import Head from "next/head";
import HomePage from "./HomePage";

export default function Index() {
  const [category, setCategory] = useState("Drinks"); 
  
  return (
    <>
      <Head>
        <title>Restaurant</title>
        <link rel="icon" href="/Mask.svg" />
      </Head>
      <div className ="max-w-screen-xl mx-auto">
        <HomePage category={category} setCategory={setCategory} />
      </div>
    </>
  );
}
