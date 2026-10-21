import Content from "../component/Content";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from 'react-helmet-async';


export default function Tips() {
  return (
    <div>
      <Helmet>
        <title>Tips page</title>
        <meta
      name="description"
      content="Tips"
    />
    <style>{`
    body{
        background-color:#888;
      }
    `}
      
      
    </style>
      </Helmet>
      <Header/>
  <Content data="Tips"/>
  
  <Footer/>
    </div>
  )
}
