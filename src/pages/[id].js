// import React from "react";
import { useState, useEffect } from "react";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { Avatar, Accordion, AccordionActions, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
// import useSWR from "swr";
// import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
// import ContactList from "@/components/contactlist";
import Pin from "@/components/pin";
// import { useBearStore } from "../store/bearstore.js";
import Layout from "@/components/Layout.js";
// // import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import


export default function Home({data}) {
  const router = useRouter();
  console.log(data)


  // const authstate = useBearStore((state) => state.auth);
  // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  return (
    <Layout pageName="Home">
      
    </Layout>
  );
}

export async function getServerSideProps({query: {id}}) {
  // api/asegurados/?filters[RandomID][$eq]=${id}&populate[1]=Seguros.PDF&populate=*
  const url = `http://localhost:1337/api/asegurados?filters[RandomID][$eq]=${id}&populate=deep`
  const req = await fetch(url)
  const res = await req.json()
  const data = res.data
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
