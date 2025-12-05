import {Offcanvas} from "react-bootstrap";
import logo from "../assets/daf_header_logo.png";
import {useState} from "react";
import {Link, useNavigate} from "@tanstack/react-router";
import logoutIcon from "../assets/logout.svg";


const BurgerMenu = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);

    const handleLogout = () => {
        localStorage.clear();
        navigate({to: '/login'})
    }

    return (
        <>
            <button
                className='burger d-block d-lg-none'
                onClick={() => setShowMenu(!showMenu)}
            >
                <div className={showMenu ? 'menu-icon active' : 'menu-icon'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <Offcanvas show={showMenu} placement='end' onHide={() => setShowMenu(!showMenu)}>
                <Offcanvas.Header>
                    <img src={logo} alt="DafNet logo"/>
                    <button onClick={() => setShowMenu(!showMenu)}>
                        <div className={showMenu ? 'menu-icon active' : 'menu-icon'}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <nav>
                        <ul>
                            <li>
                                <Link onClick={() => setShowMenu(!showMenu)} to='/'>Forum</Link>
                            </li>
                            <li>
                                <Link onClick={() => setShowMenu(!showMenu)} to='/resources'>Resources</Link>
                            </li>
                            <li>
                                <Link onClick={() => setShowMenu(!showMenu)} to='/news'>News</Link>
                            </li>
                            <li>
                                <Link onClick={() => setShowMenu(!showMenu)} to='/settings/profile'>Profile</Link>
                            </li>
                            {/*<li>*/}
                            {/*    <Link onClick={() => setShowMenu(!showMenu)} to='/settings/organisations'>Organisations</Link>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <Link onClick={() => setShowMenu(!showMenu)} to='/settings/groups'>Groups</Link>*/}
                            {/*</li>*/}
                            <li>
                                <Link onClick={() => setShowMenu(!showMenu)} to='/settings/password-reset'>Password</Link>
                            </li>

                        </ul>
                    </nav>
                    <div className="logout-wrapper">
                        <button
                            onClick={handleLogout}
                        >
                            <img src={logoutIcon} alt="log out icon"/>
                            <span>Log Out</span>
                        </button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default BurgerMenu;