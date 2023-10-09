import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Button,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { LoginFunction } from "../../services/Apis";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default () => {
  const [formData, setFormData] = useState("");
  const history = useHistory();
  const LoginUser = async (e) => {
    e.preventDefault();
    const data = {
      email: formData,
    };
    const response = await LoginFunction(data);
    if (response.status === 200) {
      toast.success("OTP Sent Successfully |");
      localStorage.setItem("accessEmail", response.data.email);
      console.log(response);
      alert(response.data.otp);
      history.push("/EmployerOTPverify");
    } else {
      console.log(response.response.data.error);
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
                  <h3 className="mb-0">Welcome to Employer Area</h3>
                </div>
                <Form className="mt-4" onSubmit={LoginUser}>
                  <Form.Group id="email" className="mb-4">
                    <InputGroup id="">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        type="email"
                        onChange={(e) => setFormData(e.target.value)}
                        placeholder="Enter Email / Mobile Number "
                      />
                    </InputGroup>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Sign in{" "}
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
