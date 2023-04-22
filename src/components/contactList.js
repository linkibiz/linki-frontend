import Image from "next/image";
import Link from "next/link";
import React from "react";
const aseguradorasArray = [
  {
    name: "Mapfre Panamá S.A",
    numero1: "+507 390-9090 ",
    numero2: "+507 800-9090",
    imageUrl: "https://pbs.twimg.com/profile_images/806196596513718272/6lHvitBt_400x400.jpg",
  },
  {
    name: "Assa ",
    numero1: "+507 300-2424 ",
    numero2: "+507 6601-2772",

    imageUrl: "https://pbs.twimg.com/profile_images/1069660493231599617/gcXr4si1_400x400.jpg",
  },
  {
    name: "Internacional de Seguros",
    numero1: "+507 265-2881 ",
    numero2: "+507 6666-2881",
    imageUrl: "https://pbs.twimg.com/profile_images/684029818351017984/PJ0odp-U_400x400.png",
  },
  {
    name: "Aseguradora Ancón",
    numero1: "+507 6666-2881",
    numero2: "+507 265-2881",
    imageUrl: "https://pbs.twimg.com/profile_images/1620858852940840961/De4H--pF_400x400.jpg",
  },
  {
    name: "Banesco Seguro",
    numero1: "+507 366-8555",
    imageUrl: "https://pbs.twimg.com/profile_images/1614131489397948416/_v87LMON_400x400.jpg",
  },
  {
    name: "Óptima Cía. de Seguros",
    numero1: "+507 269-5000",
    numero2: "+507 6288-7452",
    imageUrl: "https://pbs.twimg.com/profile_images/773943840675889152/KoPbY99q_400x400.jpg",
  },
  {
    name: "Nacional de Seguros S.A.",
    numero1: "+507 297-5900",
    imageUrl: "https://pbs.twimg.com/profile_images/1586095333154619392/3Z3LxmNX_400x400.jpg",
  },
  {
    name: "Fedpa Seguros S.A.",
    numero1: "+507 303-2466",
    numero2: "+507 6320-8722",
    imageUrl: "https://pbs.twimg.com/profile_images/1121917453443973125/dlVWDYFq_400x400.jpg",
  },
  {
    name: "Acerta Seguros S.A.",
    numero1: "307-3000",
    imageUrl: "https://acertaseguros.com/wp-content/uploads/2020/10/Logo.png",
  },
  {
    name: "BMI",
    numero1: "307-3000",
    imageUrl: "/logos/logo BMI.png",
  },
  {
    name: "Palig",
    numero1: "+507 208-8000",
    imageUrl: "https://pbs.twimg.com/profile_images/877331939891466242/yqnEehEJ_400x400.jpg",
  },
  {
    name: "BUPA",
    numero1: "+507 321-6200",
    imageUrl: "https://pbs.twimg.com/profile_images/1572238309983764487/KGIz-L7C_400x400.jpg",
  },
  {
    name: "CHUBB",
    numero1: "+507 321-6200",
    imageUrl: "/logos/Chubb-logo.png",
  },
  {
    name: "World Wide Medical",
    numero1: "+507 366-8300",
    imageUrl: "/logos/wwm.png",
  },
  {
    name: "Aliado Seguros",
    numero1: "+507 366-8300",
    imageUrl: "/logos/aliado.png",
  },
  {
    name: "IFS",
    numero1: "+507 309-0000",
    imageUrl: "https://ifs.com.pa/wp-content/uploads/2020/07/logo-ifs.png",
  },
  {
    name: "Seguros Suramerica",
    numero1: "+507 309-0000",
    imageUrl: "https://ifs.com.pa/wp-content/uploads/2020/07/logo-ifs.png",
  },
  // More people...
];

const ContactList = ({ seguros }) => {
  const filteredAseguradoras = aseguradorasArray.filter((aseguradora) =>
    seguros.some((seguro) => aseguradora.name.includes(seguro.aseguradora))
  );
  console.log(filteredAseguradoras);
  return (
    <div>
      <ul role="list" className="flex flex-col justify-center gap-4">
        {filteredAseguradoras.map((aseguradora) => {
          const { name, numero1, numero2 } = aseguradora;
          const url = aseguradora.imageUrl;
          return (
            <li key={name}>
              <div className="flex items-center gap-x-6">
                <Image className="h-12 bg-white w-12 rounded-full object-contain" loader={() => url} src={url} alt={url.alt} width={100} height={100} />
                <div className="flex flex-col justify-center">
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{aseguradora.name}</h3>
                  <Link target="_blank" href={`tel:${numero1}`} className="hover:underline text-sm font-semibold leading-6 text-white">
                    {numero1}
                  </Link>
                  <Link target="_blank" href={`tel:${numero2}`} className="hover:underline text-sm font-semibold leading-6 text-white">
                    {numero2}
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
