import './CalculoProvisoes.css'
import { GiShipWheel } from "react-icons/gi";
import { GiSpearfishing } from "react-icons/gi";

function CalculoProvisoes() {
  return (

    <div className='icons-pesca'>
      <GiShipWheel className='pesca-icons'/>

      <div className='CalculoProvisoes'>
        <h2 className='titulo2'>Controle de Provisões</h2>
      </div>

      <GiSpearfishing className='pesca-icons'/>
    </div>
  )
}

export default CalculoProvisoes