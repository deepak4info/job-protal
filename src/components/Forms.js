import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {
  Col,
  Row,
  Card,
  Form,
  Button,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { BACKEND_URL } from "../services/helper";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
export const GeneralInfoForm = () => {
  const history = useHistory();
  const [emailid, setemailId] = useState("");
  const [companynameid, setcompanynameId] = useState("");
  const [webAddressid, setwebAddressidId] = useState("");
  const [streamid, setstreamId] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [aboutid, setaboutId] = useState("");
  const [employerid, setemployerId] = useState("");
  const [genderid, setgenderId] = useState("");
  const [whatsappNoid, setwhatsappNoId] = useState("");
  console.log(country);
  const submitHandler = (event) => {
    event.preventDefault();

    const email = emailid;
    const companyName = companynameid;
    const websiteAddress = webAddressid;
    const companyStream = streamid;
    const aboutCompany = aboutid;
    const whatsappNo = whatsappNoid;
    const employerName = employerid;
    const gender = genderid;
    const data = {
      email,
      companyName,
      websiteAddress,
      companyStream,
      employerName,
      aboutCompany,
      country,
      state,
      gender,
      whatsappNo,
    };
    axios
      .post(BACKEND_URL + "/employer/registeremployer", data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          history.push("/Employerlist");
          toast.success(response.data.message);
        }
      });
  };

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">About the Organization</h5>
        <Form action="">
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="companyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your Company Name"
                  id="companyName"
                  onChange={(e) => setcompanynameId(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="webAddress">
                <Form.Label>Website Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Also your Website Address"
                  id="webAddress"
                  onChange={(e) => setwebAddressidId(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={12} className="mb-3">
              <Form.Group id="companyStream">
                <Form.Label>Company Stream </Form.Label>
                <Form.Select
                  defaultValue="0"
                  id="companyStream"
                  onChange={(e) => setstreamId(e.target.value)}
                >
                  <option value="Company Stream">Company Stream</option>
                  <option value="IT Consultant">IT Consultant</option>
                  <option value="Travel">Travel </option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={12} className="mb-3">
              <Form.Group id="aboutCompany">
                <Form.Label>About Company</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  id="aboutCompany"
                  onChange={(e) => setaboutId(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <h5 className="my-4">Personal Information</h5>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="employerName">
                <Form.Label>Employer Name </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Employer Name"
                  id="employerName"
                  onChange={(e) => setemployerId(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="email">
                <Form.Label>Email Id</Form.Label>
                <Form.Control
                  required
                  type="text"
                  id="email"
                  onChange={(e) => setemailId(e.target.value)}
                  placeholder="Enter your Email Id"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="whatsappNo">
                <Form.Label>Whatsapp No.</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your Whatsapp No."
                  id="whatsappNo"
                  onChange={(e) => setwhatsappNoId(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  defaultValue="0"
                  id="gender"
                  onChange={(e) => setgenderId(e.target.value)}
                >
                  <option value="Gender">Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="country">
                <Form.Label>Country</Form.Label>
                <Form.Select
                  defaultValue="0"
                  id="country"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="China">China </option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="state">
                <Form.Label>State </Form.Label>
                <Form.Select
                  defaultValue="0"
                  id="state"
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="Hissar">Hissar</option>
                  <option value="Fatehabad">Fatehabad</option>
                  <option value="Painpat">Panipat </option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3">
            <Button variant="primary" onClick={submitHandler} type="button">
              Submit
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
