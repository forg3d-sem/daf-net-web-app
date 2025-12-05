import {createFileRoute, Link, redirect, Outlet} from '@tanstack/react-router'
import {Col, Container, Row} from "react-bootstrap";
import logo from '../../assets/daf_header_logo.png';
import ProfileIconComponent from "../../Components/SettingsComponents/ProfileComponents/ProfileIconComponent.tsx";
import BurgerMenu from "../../Components/BurgerMenu.tsx";
import useFetchProfile from "../../Hooks/Profile/useFetchProfile.ts";

export const Route = createFileRoute('/(protected)')({
    beforeLoad: () => {
        const token = localStorage.getItem('token');
        if (!token) {
            throw redirect({
                to: '/login',
                replace: true,
                search: {
                    redirect: location.href,
                },
            })
        }
    },
    component: RouteComponent,
})

function RouteComponent() {

    const id = localStorage.getItem('id');

    const {data} = useFetchProfile(id ?? '');

    return (
        <>
            <header>
                <Container>
                    <Row>
                        <Col className='d-flex justify-content-between align-items-center'>
                            {/*extend with link if needed*/}
                            <Link to={'/'}>
                                <img src={logo} alt="DafNet logo"/>
                            </Link>

                            <nav className='d-lg-block d-none'>
                                <ul className='d-flex'>
                                    <li className='nav-item'>
                                        <Link to={'/'}>
                                            Forum
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to={'/resources'}>
                                            Resources
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to={'/news'}>
                                            News
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <Link className='header-profile-link d-lg-block d-none' to={'/settings/profile'}>
                                <ProfileIconComponent
                                    url={data?.data?.data?.imageUrl ?? ''}
                                    name={data?.data?.data?.firstName ?? ''}
                                    lastName={data?.data?.data?.lastName ?? ''}
                                    maxSize={65}
                                />
                            </Link>
                            <BurgerMenu/>
                        </Col>
                    </Row>
                </Container>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    );
}
