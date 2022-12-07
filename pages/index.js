import React from 'react'
import Link from 'next/link'
import PageTitle from '../Components/pagetitle'

const index =() => {
return (
    <div className='text-center mt-6'>
        <PageTitle title='Página Inicial'/>
        <h1>Olá, seja bem vindo!</h1>
        <p className='text-center mt-6'> Aqui você tem acesso a todo o material sobre Campo Harmônico. <br />
        Clique no botão abaixo para ter acesso ao E-book!</p>
        <div className='text-center my-12'>
            <Link href='/pesquisa'>
            <a className='bg-amber-500 hover:bg-amber-600 hover:underline hover:shadow px-6 py-4 font-bold rounded-lg shadow-lg'>Quero meu E-book!!</a>
            </Link>
            <p className='text-center mt-12'> "Cantem-lhe uma nova canção; toquem com habilidade ao aclamá-lo."
        </p>
            <p className='italic font-bold'>"Salmos 33:3"</p>
        </div>
    </div>
)}

export default index