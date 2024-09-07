import Nav from "../components/Nav";
import Submenu from "../components/Submenu";
import Topbar from "../components/Topbar";
import ContentSend from "../components/ContentSend";
import Footer from "../components/Footer";

export default function Send(){
    return <>
        <div style={{position:'fixed',width:'100%',zIndex:'1000'}}>
            <Topbar />
            <Nav />
            <Submenu />
        </div>
        <div style={{width:'100%',height:'100%',paddingTop:'12%'}}>
            <ContentSend />
            <Footer />
        </div>
    </>
}