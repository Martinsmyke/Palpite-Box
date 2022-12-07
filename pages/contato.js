import Link from "next/link"
import PageTitle from "../Components/pagetitle"

const Contato = () => {
    return (
        <div>
            <PageTitle title='Contato'/>
            <h1>Contato</h1>
            <div>
                <Link href='https://api.whatsapp.com/send?phone=5541987903332'>
                <a>
                    <div className='mt-8 font-bold hover:underline'>
                        (41)9 9780-3332 {' '} - (Myke)
                    </div>
                <img src='whats.png' className=' bg-emerald-500  mb-8 hover:shadow-lg'></img></a>
                </Link>
                <div className='hover:underline'>
                <Link href="/">
                    <a>Início</a>
                </Link>
                </div>
            </div>
            </div>
    )
}

export default Contato