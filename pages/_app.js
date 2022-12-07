import React from "react";
import '../css/styles.css'
import Header from "../Components/Header"
import Footer from "../Components/footer"

const MyApp = ({ Component, pageProps}) => {
return (
    <div>
    <Header/>
    <div className="container mx-auto">
    <Component {...pageProps}/>
        </div>
        <Footer/>
        </div>)
}

export default MyApp