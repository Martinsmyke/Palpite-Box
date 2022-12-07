import React from "react";
import Link from "next/link";
import PageTitle from "../Components/pagetitle";


const sobre = () => {
    return (
        <div>
        <div>
        <PageTitle title='Sobre'/>
            <h1>Sobre</h1>
            </div>
                <div className="hover:underline">
                    <Link href='/'>
                        <a>Início</a>
                    </Link>
                </div>
        </div> )}


    export default sobre