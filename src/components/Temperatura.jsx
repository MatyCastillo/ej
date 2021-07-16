import React,{useState} from 'react'

const Temperatura = () => {

    const [temperatura, setTemperatura] = useState (19)

    const subir = () => {
        setTemperatura(temperatura + 1)
    }

    const bajar = () => {
        setTemperatura(temperatura - 1)
    }
    
    return (
        <div className="container">
            <h2>La Temperatura es: {temperatura}</h2>
            <p>
               {
                   temperatura > 21 ? 'Hace calor' : 'Hace Frio'
               } 
            </p>
            <button className='btn btn-info m-2' onClick={bajar} >Reducir temperatura</button>
            
            <button className='btn btn-danger m-2' onClick={subir} >Aumentar temperatura</button>
        </div>
    )
}

export default Temperatura
