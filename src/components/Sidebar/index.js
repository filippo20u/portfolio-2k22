import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoF from '../../assets/images/logo-f.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
<div className='nav-bar'>
<Link Link className="logo" to='/'>
    <img src={LogoF} alt='logo' />
</Link>

<nav>
    <NavLink exact='true' activeclassname="active" to='/'>
        <FontAwesomeIcon icon={faHome} color="#4d4d4de" />
    </NavLink>

    <NavLink exact='true' activeclassname="active" className="about-link" to='/about'>
        <FontAwesomeIcon icon={faUser} color="#4d4d4de" />
    </NavLink>

    <NavLink exact='true' activeclassname="active" className="contact-link"  to='/contact'>
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4de" />
    </NavLink>
    

</nav>
</div>

)

export default Sidebar