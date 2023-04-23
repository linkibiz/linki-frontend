import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Pin from "@/components/pin";
import Layout from "@/components/Layout.js";


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
