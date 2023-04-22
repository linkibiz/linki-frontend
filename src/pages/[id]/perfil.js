import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import Profile from "@/components/Profile";
import ContactButtons from "@/components/ContactButtons";
import About from "@/components/About";
import SocialLinks from "@/components/SocialLinks";
import Links from "@/components/Links";
import Poliza from "@/components/Poliza";


const Perfil = ({data, socialLinks, description}) => {

  console.log(data)

  return (
    <Layout pageName="Perfil">
      <Banner />
      <div className="p-4 flex flex-col gap-4">
        <Profile data={data} />
        <ContactButtons />
        <About description={description} />
        <SocialLinks socialLinks={socialLinks} />
        <Links />
        <Poliza />
      </div>
    </Layout>
  );
};


export async function getServerSideProps() {

  const url = 'http://localhost:1337/api/asegurados/4?populate=deep'
  const req = await fetch(url)
  const res = await req.json()
  const data = res.data.attributes
  const socialLinks = data.perfil.data.attributes.redes_sociales
  const description = data.perfil.data.attributes.description
  return {
    props: {
      data,
      socialLinks,
      description
    }, // will be passed to the page component as props
  }
}

export default Perfil;
