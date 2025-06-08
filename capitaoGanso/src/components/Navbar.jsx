import './Navbar.css'
import { GiGoose } from "react-icons/gi";
import { GiCaptainHatProfile } from "react-icons/gi";

function Navbar() {
    return (
        <div className='container-navbar'>

            <GiCaptainHatProfile className='icon-nav'/>
            <h1 className='titulo'>Provisões do Capitão Ganso</h1>
            <GiGoose className='icon-nav'/>

        </div>
    )
}

export default Navbar