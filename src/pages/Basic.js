import Content from "../component/Content";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from 'react-helmet-async';

export default function Basic() {
  return (
    <div>
      <Helmet>
        <title>Basic page</title>
        <meta
      name="description"
      content="Basic"
    />
      </Helmet>
      <Header/>
  {/* <main className="page-content">
    Basic page
  </main> */}
  <Content data="Basic"/>
  
  <Footer/>
    </div>
  )
}
