import Content from "../component/Content";
import Footer from "../component/Footer";
import Header from "../component/Header";

export default function Basic() {
  return (
    <div>
      <Header/>
  {/* <main className="page-content">
    Basic page
  </main> */}
  <Content data="Basic"/>
  
  <Footer/>
    </div>
  )
}
