import {Col, Container, Row} from "react-bootstrap";
import './legal.scss';

export const PrivacyPolicyContent = () => {
    return (
        <div className='legal-page'>
            <Container>
                <Row>
                    <Col className='legal-body'>
                        <h1>Privacy Policy - DAF Network</h1>
                        <p className='last-updated'><i>Last updated: July 30, 2026</i></p>
                        <p>
                            Dynamic Agroforestry Network ("DAF Network," "we," "us") operates the DAF Network app and
                            website (the "Service"), a community platform connecting agroforestry practitioners,
                            researchers, and organizations. This Privacy Policy explains what information we collect
                            through the Service, how we use it, and the choices you have.
                        </p>
                        <h6>
                            Who we are
                        </h6>
                        <p>
                            Dynamic Agroforestry Network, OPC Road, Busua, Ahanta West, WR, Ghana. Contact:
                            info@dynamicagroforestry.net.
                        </p>
                        <h6>
                            Information we collect
                        </h6>
                        <p>
                            Account & profile information: name, email address, password (stored hashed), profile photo,
                            and profile description you provide when you register or edit your profile.
                            <br/>
                            Content you create: posts and titles in the Feed, discussion threads, comments, likes,
                            polls, Groups you create or join, Group posts, News items (staff/admin), Resources you
                            upload (title, description, attachment/link), and Organization listings (name, logo,
                            description, website link) you submit for admin approval.
                            <br/>
                            Usage & activity data: counts and records tied to your account such as number of discussions
                            created, connections, likes given/received, comments, and group or organization memberships,
                            used to power the Feed and profile.
                            <br/>
                            Technical & diagnostic data: when the app crashes or errors, we automatically collect device
                            model, operating system version, app version, and crash/stack-trace logs through our
                            crash-reporting provider, Sentry (sentry.io), to diagnose and fix issues.
                            <br/>
                            We do not currently collect precise or approximate location data. If this changes in a
                            future version, this policy and Google's Data Safety disclosure will be updated before
                            release.
                        </p>
                        <h6>
                            How we use this information
                        </h6>
                        <p>
                            <ul>
                                <li>
                                    To create and secure your account, and authenticate you when you sign in.
                                </li>
                                <li>
                                    To operate core features: the Feed, News, Groups, Resources, Organizations, and
                                    Admin moderation tools.
                                </li>
                                <li>
                                    To send account and activity notifications (e.g. group invites, admin approvals) by
                                    email and in-app notification.
                                </li>
                                <li>
                                    To moderate content and enforce our Terms of Service.
                                </li>
                                <li>
                                    To diagnose crashes and improve app stability and performance (via Sentry).
                                </li>
                            </ul>
                        </p>
                        <h6>
                            Who we share information with
                        </h6>
                        <p>
                            We do not sell personal information. We share limited data with the following service
                            providers, who process it on our behalf:
                            <ul>
                                <li>
                                    Sentry (Functional Software, Inc.) — crash and performance diagnostics; may involve
                                    international data transfer outside your country of residence.
                                </li>
                            </ul>
                            Content you post to public areas of the app (e.g. the Feed, public Groups, public Resources)
                            is visible to other users and, where applicable, to the public, by design.
                        </p>
                        <h6>
                            Data retention
                        </h6>
                        <p>
                            We retain your account and content while your account remains active. If you delete your
                            account, we delete or anonymize your personal data within a reasonable period, except where
                            we are required to retain records by law.
                        </p>
                        <h6>
                            Your rights
                        </h6>
                        <p>
                            Depending on where you live, you may have the right to access, correct, export, or delete your personal data, and to object to certain processing. To exercise these rights, contact info@dynamicagroforestry.net.
                        </p>
                        <h6>
                            Children
                        </h6>
                        <p>
                            The Service is not directed to children under 16. We do not knowingly collect personal information from children under 16; if you believe a child has provided us information, contact us and we will remove it.
                        </p>
                        <h6>
                            Security
                        </h6>
                        <p>
                            We use industry-standard measures, including encrypted (HTTPS/TLS) transmission and password hashing, to protect your information. No method of transmission or storage is 100% secure.
                        </p>
                        <h6>
                            Changes to this policy
                        </h6>
                        <p>
                            We may update this Privacy Policy from time to time. We will post the updated version at this same URL with a new "Last updated" date.
                        </p>
                        <h6>
                            Contact
                        </h6>
                        <p>
                            Questions about this policy: <a href="mailto:info@dynamicagroforestry.net"><strong>info@dynamicagroforestry.net</strong></a>
                        </p>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};
