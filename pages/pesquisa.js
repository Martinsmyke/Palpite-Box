import React from "react";
import PageTitle from "../Components/pagetitle";


const pesquisa = () => {
    return (
        <div>
            <div className='text-center pt-6 text-lg font-bold'>
            <PageTitle title='Pesquisa'/>
                <p1>Download realizado com sucesso!</p1>
            </div>
                <div className='text-center pt-6'>
                    <p2 className='pt-6'> Obrigado por baixar o E-book!!<br/> Deus te abençoe na sua jornada de aperfeiçoamento musical! <br/> <br/> </p2>
                    <div className="font-bold text-lg">Gostaria de deixar sua opinião? <br />
                    Registre aqui seu elogio ou sugestão de melhoria.</div>
                </div>
                    <div>
                    <div className=" text-center hover:underline hover:italic pt-8">
                </div>
                <div className=" text-center w-1/5 mx-auto font-bold">
                    <label> Digite aqui:</label>
                    </div>
                    <div className="text-center">
                    <input className=' p-4 bg-amber-200 mt-3 mb-12 hover:bg-amber-300 rounded-lg shadow-lg' type='text'></input>
                </div>
            </div>
        </div>
)
}

export default pesquisa