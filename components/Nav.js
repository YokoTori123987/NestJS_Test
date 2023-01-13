import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Nav() {
  return (
    <div>
      <Head>
        <title>Redwood</title>
      </Head>
      <nav>
        <Link href="/register">{/* <a>Register</a> */} Register</Link>
        {/* <a href="/register">dwdawd</a> */}
      </nav>
    </div>
  );
}
