import Head from 'next/head'
// import Header from './Header'
// import Footer from './Footer'

const Layout = ({pageName, children}) => {
  const title = `${pageName} - MMG`
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {/* <Header/> */}
      <main className="bg-[#BEBEBE] h-full min-h-screen flex justify-center">
        <div className="bg-white w-[395px] flex flex-col min-h-screen h-full rounded-xl">
          {children}    
        </div>
      </main>
      {/* <Footer/> */}
    </div>
  )
}

export default Layout