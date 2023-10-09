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
function CandidateRegistration() {
  const [state, setState] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [Skills, setSkills] = useState("");
  const [perAddress, setPerAddress] = useState("");
  const [photo, setPhoto] = useState("");
  const [educational, setEducational] = useState("");
  const [educationTech, setEducationTech] = useState("");
  const [miscellaneous, setMiscellaneous] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [preferredJobCategory, setPreferredJobCategory] = useState("");
  const [languagesKnown, setLanguagesKnown] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [achievements, setAchievements] = useState("");
  const [designation, setDesignation] = useState("");
  const [certification, setCertification] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    const dateOfBirth = dob;
    const permanentAddress = perAddress;
    const educationTechnical = educationTech;
    const skillsTechnical = Skills;
    const data = {
      name,
      email,
      mobile,
      gender,
      dateOfBirth,
      country,
      state,
      photo,
      permanentAddress,
      educational,
      educationTechnical,
      skillsTechnical,
      miscellaneous,
      yearsOfExperience,
      fromDate,
      endDate,
      companyName,
      designation,
      startDate,
      preferredJobCategory,
      languagesKnown,
      hobbies,
      achievements,
      certification,
    };
    console.log(data);
    axios
      .post(BACKEND_URL + "/candidate/registercandidate", data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          toast.success(response.data.message);
        }
      });
  };
  return (
    <>
      <Card border="light" className="bg-white shadow-sm mb-4 mt-3">
        <Card.Body>
          {/* <h5 className="mb-4">Personal Information</h5> */}
          <Form action="" onSubmit={submitHandler}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="name">
                  <Form.Label>Name </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your Name"
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="companyStream">
                  <Form.Label>Email </Form.Label>
                  <Form.Control
                    required
                    type="email"
                    id="name"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="mobile">
                  <Form.Label>Mobile </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="name"
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter your Mobile"
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="companyStream">
                  <Form.Label>Gender </Form.Label>

                  <Form.Select
                    defaultValue="0"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Transgender </option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="name">
                  <Form.Label>Date of Birth </Form.Label>
                  <Form.Control
                    required
                    type="date"
                    id="name"
                    onChange={(e) => setDob(e.target.value)}
                    placeholder="Enter your DOB"
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="companyStream">
                  <Form.Label>Country </Form.Label>
                  <Form.Select
                    defaultValue="0"
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option>USA</option>
                    <option>India</option>
                    <option>SIngpur</option>
                    <option>India</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="companyStream">
                  <Form.Label>State </Form.Label>
                  <Form.Select
                    defaultValue="0"
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option>Punjab</option>
                    <option>Haryana</option>
                    <option>Gujrat</option>
                    {/* <option>India</option> */}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6} className="mb-3">
                <Form.Group id="name">
                  <Form.Label>Permanent Address </Form.Label>
                  <Form.Control
                    required
                    onChange={(e) => setPerAddress(e.target.value)}
                    type="address"
                    id="permanentAddress"
                    placeholder="Enter your Permanent Address"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="companyStream">
                  <Form.Label>Photo </Form.Label>
                  <Form.Control
                    required
                    type="file"
                    id="file"
                    onChange={(e) => setPhoto(e.target.value)}
                    placeholder="Upload Photo"
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="companyStream">
                  <Form.Label>Educational </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="name"
                    onChange={(e) => setEducational(e.target.value)}
                    placeholder="Enter your Educational"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="educationTechnical">
                  <Form.Label>Education Technical </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="educationTechnical"
                    onChange={(e) => setEducationTech(e.target.value)}
                    placeholder="Education Technical"
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="skillsTechnical">
                  <Form.Label>Skills Technical </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="name"
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="Enter your Skills Technical"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="miscellaneous">
                  <Form.Label>Miscellaneous </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="miscellaneous"
                    onChange={(e) => {
                      setMiscellaneous(e.target.value);
                    }}
                    placeholder="miscellaneous"
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="yearsOfExperience">
                  <Form.Label>Years Of Experience </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="yearsOfExperience"
                    onChange={(e) => {
                      setYearsOfExperience(e.target.value);
                    }}
                    placeholder="Enter your Years Of Experience"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="fromDate">
                  <Form.Label>From Date </Form.Label>
                  <Form.Control
                    required
                    type="date"
                    id="fromDate"
                    onChange={(e) => {
                      setFromDate(e.target.value);
                    }}

                    // placeholder="fromDate"
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="endDate">
                  <Form.Label>End Date </Form.Label>
                  <Form.Control
                    required
                    type="date"
                    id="endDate"
                    onChange={(e) => {
                      setEndDate(e.target.value);
                    }}

                    // placeholder="Enter your endDate"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="companyName">
                  <Form.Label>Company Name </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="companyName"
                    placeholder="Enter your Company Name"
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="designation">
                  <Form.Label>Designation</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(e) => {
                      setDesignation(e.target.value);
                    }}
                    id="designation"
                    placeholder="Enter your Designation"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="startDate">
                  <Form.Label>Start Date </Form.Label>
                  <Form.Control
                    required
                    type="date"
                    id="startDate"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="preferredJobCategory">
                  <Form.Label>Preferred Job Category</Form.Label>
                  <Form.Control
                    required
                    onChange={(e) => setPreferredJobCategory(e.target.value)}
                    type="text"
                    id="preferredJobCategory"
                    placeholder="Enter your Job"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="languagesKnown">
                  <Form.Label>Languages Known </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="languagesKnown"
                    onChange={(e) => setLanguagesKnown(e.target.value)}
                    placeholder="Enter your Languages Known"
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="hobbies">
                  <Form.Label>Hobbies</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="hobbies"
                    onChange={(e) => setHobbies(e.target.value)}
                    placeholder="Enter your Hobbies"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="achievements">
                  <Form.Label>Achievements </Form.Label>

                  <Form.Control
                    required
                    type="file"
                    id="achievements"
                    onChange={(e) => setAchievements(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="certification">
                  <Form.Label>Certification</Form.Label>
                  <Form.Control
                    required
                    type="file"
                    id="certification"
                    onChange={(e) => setCertification(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="mt-3">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default CandidateRegistration;
