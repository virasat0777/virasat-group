import Head from "next/head";
import React from "react";
import Header from "../common/Header";
import Image from "next/image";
import Footer from "@/components/footer";

const MainLayout = ({
  children,
  title = "Virasat Group",
  description = "Virasat Group",
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon/virasatlogo.png" />
      </Head>
      <header>
        <Header />
      </header>
      <main className="min-h-screen">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
