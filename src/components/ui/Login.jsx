import React, { useRef } from "react";

import CommonSection from "./Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
    const nameRef = useRef("");
    const passwordRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(nameRef.current.value!='admin' || passwordRef.current.value!='admin'){
            alert('Invalid credentials');
            return;
        }
        window.location.href = '/home';
    };

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" className="m-auto text-center">
                            <h2>Welcome Back to the World of Digital Possibilities!</h2>
                            <p>
                                Enter your details below to login to your account. If you are not
                                a member yet, please <Link to='/register'>register.</Link>
                            </p>
                            <div className="contact mt-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="form__input">
                                        <input
                                            type="text"
                                            placeholder="Enter your username"
                                            ref={nameRef}
                                        />
                                    </div>
                                    <div className="form__input">
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            ref={passwordRef}
                                        />
                                    </div>

                                    <button
                                        className="send__btn"
                                        style={{
                                            border: "none",
                                            padding: "7px 25px",
                                            borderRadius: "5px",
                                            marginTop: "20px",
                                        }}
                                    >
                                        Login
                                    </button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Login;
