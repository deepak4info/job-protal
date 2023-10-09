import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, useLocation } from "react-router-dom";

import { faLock } from "@fortawesome/free-solid-svg-icons";

import {
  Col,
  Row,
  Form,
  Button,
  Container,
  InputGroup,
  Nav,
} from "@themesberg/react-bootstrap";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { sentOtpFunction, userVerify } from "../../services/Apis";
import { toast } from "react-toastify";

export default () => {
  const [otp, setOtp] = useState("");

  const location = useLocation();
  const storedToken = localStorage.getItem("accessEmail");

  console.log(storedToken);

  const navigate = useHistory();

  const LoginUser = async (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("accessEmail");
    console.log(storedToken);

    if (otp === "") {
      toast.error("Enter Your OTP !");
    } else if (!/[^a-zA-Z]/.test(otp)) {
      toast.error("Enter Valid OTP !");
    } else if (otp.length < 6) {
      toast.error("OTP Length minimum 6 digit !");
    } else {
      const data = {
        otp,
        email: storedToken,
      };

      const response = await userVerify(data);
      console.log(response);
      if (response.response.status === 400) {
        setTimeout(() => {
          toast.success("Login UnSuccessfully.");
          navigate.push("/dashboard/overview");
        }, 5000);
      } else {
        console.log(response.response.data.error);
      }
    }
  };

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row
            className="justify-content-center form-bg-image"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <img
                    src={require("../../assets/img/logo.png")}
                    width="80"
                    className="mb-3"
                  ></img>
                  <h3 className="mb-0">Welcome to Admin Area</h3>
                </div>
                <Form className="mt-4">
                  <Form.Group id="otp" className="mb-4">
                    <InputGroup id="" onChange={(e) => setOtp(e.target.value)}>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faLock} />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        type="email"
                        placeholder="Enter Your OTP"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Button
                    variant="primary"
                    // type="submit"
                    className="w-100"
                    onClick={LoginUser}
                  >
                    {/* <Nav.Link
                      href="/#/dashboard/overview"
                      className="text-white"
                    > */}
                    Sign in
                    {/* </Nav.Link> */}
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
