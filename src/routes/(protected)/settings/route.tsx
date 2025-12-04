import {createFileRoute, Link, Outlet, useNavigate} from '@tanstack/react-router'
import {Col, Container, Row} from "react-bootstrap";
import ContentCol from "../../../Components/SettingsComponents/ContentCol.tsx";
import '../../../Components/SettingsComponents/settingsStyles.scss';
import logoutIcon from '../../../assets/logout.svg';
import ProfileIcon from "../../../Components/IconComponents/ProfileIcon.tsx";
// import GroupIcon from "../../../Components/IconComponents/GroupIcon.tsx";
// import OrganisationIcon from "../../../Components/IconComponents/OrganisationIcon.tsx";
import PasswordIcon from "../../../Components/IconComponents/PasswordIcon.tsx";

export const Route = createFileRoute('/(protected)/settings')({
    component: RouteComponent,
})

function RouteComponent() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate({to: '/login'})
    }

    return <Container className='settings-container'>
        <Row>
            <Col className='d-none d-lg-block side-nav' lg={3}>
                <h2>Settings</h2>
                <ul>
                    <li>
                        <Link
                            to='/settings/profile'
                            activeProps={{className:'setting-selected'}}
                        >
                            <ProfileIcon
                                width={'20'}
                                height={'20'}
                            />
                            <span>Profile</span>
                        </Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link*/}
                    {/*        to='/settings/organisations'*/}
                    {/*        activeProps={{className:'setting-selected'}}*/}
                    {/*    >*/}
                    {/*        <OrganisationIcon*/}
                    {/*            width={'20'}*/}
                    {/*            height={'20'}*/}
                    {/*        />*/}
                    {/*        <span>Organisations</span>*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <Link*/}
                    {/*        to='/settings/groups'*/}
                    {/*        activeProps={{className:'setting-selected'}}*/}
                    {/*    >*/}
                    {/*        <GroupIcon*/}
                    {/*            height={'20'}*/}
                    {/*            width={'20'}*/}
                    {/*        />*/}
                    {/*        <span>Groups</span>*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    <li>
                        <Link
                            to='/settings/password-reset'
                            activeProps={{className:'setting-selected'}}
                        >
                            <PasswordIcon
                                width={'20'}
                                height={'20'}
                            />
                            <span>Password</span>
                        </Link>
                    </li>
                </ul>
                <button
                    onClick={handleLogout}
                >
                    <img src={logoutIcon} alt="log out icon"/>
                    <span>Log Out</span>
                </button>
            </Col>
            <ContentCol>
                <Outlet/>
            </ContentCol>
        </Row>
    </Container>
}
