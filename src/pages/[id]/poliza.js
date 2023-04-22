import React from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import Fondo from "../../../public/img/fondo.png";
import BusinessAvatar from "../../../public/img/mmgprofile.jpg";
import Link from "next/link";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Accordion, AccordionActions, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ContactList from "@/components/contactList";

const Poliza = ({ data }) => {
  const router = useRouter();

  const {
    attributes: { id, nombre, apellido, correo, fecha_de_nacimiento, seguros },
  } = data;
  console.log(data);
  const fullName = `${nombre} ${apellido}`;
  return (
    <Layout pageName="Poliza">
      <div className=" w-full">
        <Image src={Fondo} alt={Fondo.alt} className="w-full h-[300px] object-cover" />
      </div>
      {/* Avatar */}
      <div className="flex justify-center ">
        <Image src={BusinessAvatar} alt={BusinessAvatar.alt} className=" -mt-32 h-[200px] w-[200px] rounded-lg" />
      </div>
      {/* Nombre */}
      <div className="flex flex-col items-center ">
        <h1 className=" text-[36px] text-center px-2 leading-9  font-light">{fullName}</h1>
      </div>

      {/* Botones */}
      <div className="flex flex-col items-center mt-4">
        {seguros.length > 0 ? (
          seguros.map(
            ({
              aseguradora,
              tipoDeSeguro,
              seguro,
              id,
              pdf: {
                data: {
                  attributes: { url },
                },
              },
            }) => (
              <Link
                href={`http://localhost:1337${url}`}
                key={id}
                target="_blank"
                className="bg-[#1180C2] mt-3 h-[40px] text-white w-[300px] text-center rounded-lg pt-2 "
              >
                {seguro}
              </Link>
            )
          )
        ) : (
          <div className="bg-[#1180C2] mt-3 p-1 text-white w-[300px] text-center rounded-lg pt-2 ">
            <Link href="#">No tienes seguros asociados a tu cuenta.</Link>
          </div>
        )}
        {/* {data.data[0].attributes.Seguros.map((seguro, index) => {
          return (
            <>
              <a
                target="_blank"
                href={seguro.PDF.data == null ? "javascript:void(0)" : seguro.PDF.data[0].attributes.url}
                className="bg-[#1180C2] mt-3 h-[40px] text-white w-[300px] text-center rounded-full pt-2 "
              >
                {seguro.Seguro}
              </a>
            </>
          );
        })} */}

          <Accordion className="w-[300px] !bg-[#1180C2]  !my-4">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="!pl-10 !text-white "
            >
              <Typography>Numeros de Atención</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ContactList seguros={data.attributes.seguros}/>
            </AccordionDetails>
          </Accordion> 
      </div>

      {/* <div className=" flex justify-center"></div> */}
    </Layout>
  );
};

export default Poliza;

export async function getServerSideProps({ query: { id } }) {
  const url = `http://localhost:1337/api/asegurados?filters[RandomID][$eq]=${id}&populate=deep`;
  const req = await fetch(url);
  const res = await req.json();
  const data = res.data[0];
  return {
    props: {
      data,
    },
  };
}
