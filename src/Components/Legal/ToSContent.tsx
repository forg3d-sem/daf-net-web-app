import {Col, Container, Row} from "react-bootstrap";
import './legal.scss';

export const ToSContent = () => {
    return (
        <div className='legal-page'>
            <Container>
                <Row>
                    <Col className='legal-body'>
                        <h1>Terms of Service - DAF Network</h1>
                        <p className='last-updated'><i>Last updated: July 30, 2026</i></p>
                        <p>
                            By creating an account or using the DAF Network app or website (the "Service"), you agree
                            to these Terms of Service. If you do not agree, do not use the Service.
                        </p>
                        <h6>
                            Acceptance of terms
                        </h6>
                        <p>
                            By creating an account or using the DAF Network app or website (the "Service"), you agree
                            to these Terms of Service. If you do not agree, do not use the Service.
                        </p>
                        <h6>
                            Eligibility & accounts
                        </h6>
                        <p>
                            You must provide accurate information when registering by email, and you are responsible
                            for keeping your login credentials confidential and for all activity under your account.
                        </p>
                        <h6>
                            Acceptable use
                        </h6>
                        <p>
                            When using the Feed, News, Groups, Resources, or Organization features, you agree not to
                            post content that is illegal, harassing, defamatory, infringing, or spam, and not to
                            misuse Groups or Organizations you administer to violate these Terms.
                        </p>
                        <h6>
                            User content & license
                        </h6>
                        <p>
                            You retain ownership of content you post (posts, comments, resources, group and
                            organization descriptions, etc.). By posting, you grant DAF Network a non-exclusive,
                            worldwide license to host, display, and distribute that content within the Service for the
                            purpose of operating the platform.
                        </p>
                        <h6>
                            Groups & Organizations
                        </h6>
                        <p>
                            Group admins are responsible for their group's compliance with these Terms. Organization
                            listings are reviewed and must be approved by a DAF Network admin before becoming visible.
                        </p>
                        <h6>
                            Resources
                        </h6>
                        <p>
                            Admins may designate Resources as public, private, free, or paid. If paid Resources are
                            enabled at launch, specific payment, refund, and Play Billing terms must be added before
                            publishing.
                        </p>
                        <h6>
                            Moderation & termination
                        </h6>
                        <p>
                            We may remove content or suspend or terminate accounts that violate these Terms, at our
                            discretion, with or without notice.
                        </p>
                        <h6>
                            Disclaimers & limitation of liability
                        </h6>
                        <p>
                            The Service is provided "as is" without warranties of any kind. To the fullest extent
                            permitted by law, DAF Network is not liable for indirect, incidental, or consequential
                            damages arising from your use of the Service.
                        </p>
                        <h6>
                            Governing law
                        </h6>
                        <p>
                            These Terms are governed by the laws of Ghana, without regard to conflict-of-law
                            principles, unless mandatory local consumer-protection law in your country provides
                            otherwise.
                        </p>
                        <h6>
                            Changes
                        </h6>
                        <p>
                            We may update these Terms from time to time; continued use of the Service after changes
                            take effect constitutes acceptance.
                        </p>
                        <h6>
                            Contact
                        </h6>
                        <p>
                            Questions about these Terms: <a href="mailto:info@dynamicagroforestry.net"><strong>info@dynamicagroforestry.net</strong></a>
                        </p>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};
