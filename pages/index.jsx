import Layout from '../components/layout'
import Head from "next/head";
import Hero from '/components/ui/hero';
import About from '/components/ui/about';
import Skill from '/components/ui/skill';
import Portfolio from '/components/ui/portfolio';
// import { useState } from "react";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <About />
        <Skill />
        <Portfolio />
      </Layout>
    </>
  )
}