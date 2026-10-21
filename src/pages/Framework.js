import Content from "../component/Content";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from 'react-helmet-async';


export default function Framework() {
  return (
    <div>
      <Helmet>
        <title>Framework page</title>
        <meta
      name="description"
      content="Framework"
    />
      </Helmet>
      <Header/>
  <Content data="FrameWork"/>
  
  <Footer/>
    </div>
  )
}
