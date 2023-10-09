import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAngleDown,
  faAngleUp,
  faArrowDown,
  faArrowUp,
  faEdit,
  faEllipsisH,
  faExternalLinkAlt,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Nav,
  Card,
  Image,
  Button,
  Table,
  Dropdown,
  ProgressBar,
  Pagination,
  ButtonGroup,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";

import { Routes } from "../routes";
import {
  pageVisits,
  pageTraffic,
  pageRanking,
  pageEmpolyer,
} from "../data/tables";
import { FcApproval, FcDisapprove } from "react-icons/fc";
import transactions from "../data/transactions";
import commands from "../data/commands";
import { useState } from "react";
import { BACKEND_URL } from "../services/helper";
const ValueChange = ({ value, suffix }) => {
  const valueIcon = value < 0 ? faAngleDown : faAngleUp;
  const valueTxtColor = value < 0 ? "text-danger" : "text-success";

  return value ? (
    <span className={valueTxtColor}>
      <FontAwesomeIcon icon={valueIcon} />
      <span className="fw-bold ms-1">
        {Math.abs(value)}
        {suffix}
      </span>
    </span>
  ) : (
    "--"
  );
};

export const PageVisitsTable = () => {
  const TableRow = (props) => {
    const { pageName, views, returnValue, bounceRate } = props;
    const bounceIcon = bounceRate < 0 ? faArrowDown : faArrowUp;
    const bounceTxtColor = bounceRate < 0 ? "text-danger" : "text-success";

    return (
      <tr>
        <th scope="row">{pageName}</th>
        <td>{views}</td>
        <td>${returnValue}</td>
        <td>
          <FontAwesomeIcon
            icon={bounceIcon}
            className={`${bounceTxtColor} me-3`}
          />
          {Math.abs(bounceRate)}%
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h5>Page visits</h5>
          </Col>
          <Col className="text-end">
            <Button variant="secondary" size="sm">
              See all
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <Table responsive className="align-items-center table-flush">
        <thead className="thead-light">
          <tr>
            <th scope="col">Page name</th>
            <th scope="col">Page Views</th>
            <th scope="col">Page Value</th>
            <th scope="col">Bounce rate</th>
          </tr>
        </thead>
        <tbody>
          {pageVisits.map((pv) => (
            <TableRow key={`page-visit-${pv.id}`} {...pv} />
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export const PageTrafficTable = (props) => {
  const [pageIndex, setPageIndex] = React.useState("0");
  const [pageLimit, setPageLimit] = React.useState("10000");
  const [status, setStatus] = React.useState("");
  const [data, setData] = React.useState([]);

  const url =
    BACKEND_URL +
    `/employer/getallemployers?page=${pageIndex}&pageLimit=${pageLimit}&status=${status}`;
  const fetchTodos = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.data.rows);
      setData(data.data.rows);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTodos(pageIndex, pageLimit, status);
  }, [pageIndex, pageLimit, status]);

  return (
    <Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0"> S.No. </th>
              <th className="border-0">Company Name</th>
              <th className="border-0">Employer Name</th>
              <th className="border-0">Whatsapp No</th>
              <th className="border-0">Status</th>
              <th className="border-0">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{row.companyName}</td>
                <td>{row.employerName}</td>
                <td>{row.whatsappNo}</td>
                <td>
                  {row.status === "APPROVED" ? (
                    <FcApproval />
                  ) : (
                    <FcDisapprove />
                  )}
                </td>

                <td>
                  <Link to={`/EmployerView/${row._id}`}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
export const PageTrafficTable2 = (props) => {
  const [pageIndex, setPageIndex] = React.useState("0");
  const [pageLimit, setPageLimit] = React.useState("10");
  const [status, setStatus] = React.useState("");
  const [data, setData] = React.useState([]);

  const url =
    BACKEND_URL +
    `/candidate/getallcandidates?page=${pageIndex}&pageLimit=${pageLimit}`;
  const fetchTodos = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.data.rows);
      setData(data.data.rows);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTodos(pageIndex, pageLimit, status);
  }, [pageIndex, pageLimit, status]);

  return (
    <Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0"> S.No. </th>
              <th className="border-0">Photo</th>
              <th className="border-0">Candidate Name</th>
              <th className="border-0">Preferred Job Category</th>
              <th className="border-0">Mobile No</th>
              <th className="border-0">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={require("../assets/img/profile.png")}
                    width="50px"
                  ></img>
                </td>
                <td>{row.name}</td>
                <td>{row.preferredJobCategory}</td>
                <td>{row.mobile}</td>

                <td>
                  <Link to={`/CandidateView/${row._id}`}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
export const PageTrafficTable3 = (props) => {
  const [pageIndex, setPageIndex] = React.useState("0");
  const [pageLimit, setPageLimit] = React.useState("10");
  const [status, setStatus] = React.useState("");
  const [data, setData] = React.useState([]);

  const url =
    BACKEND_URL +
    `/candidate/getallcandidates?page=${pageIndex}&pageLimit=${pageLimit}`;
  const fetchTodos = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.data.rows);
      setData(data.data.rows);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTodos(pageIndex, pageLimit, status);
  }, [pageIndex, pageLimit, status]);

  return (
    <Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0"> S.No. </th>
              <th className="border-0">Photo</th>
              <th className="border-0">Candidate Name</th>
              <th className="border-0">Preferred Job Category</th>
              <th className="border-0">Mobile No</th>
              <th className="border-0">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={require("../assets/img/profile.png")}
                    width="50px"
                  ></img>
                </td>
                <td>{row.name}</td>
                <td>{row.preferredJobCategory}</td>
                <td>{row.mobile}</td>

                <td>
                  <Link to="/Employer/Candidate/List">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
export const RankingTable = () => {
  const TableRow = (props) => {
    const {
      country,
      countryImage,
      overallRank,
      overallRankChange,
      travelRank,
      travelRankChange,
      widgetsRank,
      widgetsRankChange,
    } = props;

    return (
      <tr>
        <td className="border-0">
          <Card.Link href="#" className="d-flex align-items-center">
            <Image
              src={countryImage}
              className="image-small rounded-circle me-2"
            />
            <div>
              <span className="h6">{country}</span>
            </div>
          </Card.Link>
        </td>
        <td className="fw-bold border-0">{overallRank ? overallRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={overallRankChange} />
        </td>
        <td className="fw-bold border-0">{travelRank ? travelRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={travelRankChange} />
        </td>
        <td className="fw-bold border-0">{widgetsRank ? widgetsRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={widgetsRankChange} />
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">Country</th>
              <th className="border-0">All</th>
              <th className="border-0">All Change</th>
              <th className="border-0">Travel & Local</th>
              <th className="border-0">Travel & Local Change</th>
              <th className="border-0">Widgets</th>
              <th className="border-0">Widgets Change</th>
            </tr>
          </thead>
          <tbody>
            {pageRanking.map((r) => (
              <TableRow key={`ranking-${r.id}`} {...r} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const TransactionsTable = () => {
  const totalTransactions = transactions.length;

  const TableRow = (props) => {
    const { invoiceNumber, subscription, price, issueDate, dueDate, status } =
      props;
    const statusVariant =
      status === "Paid"
        ? "success"
        : status === "Due"
        ? "warning"
        : status === "Canceled"
        ? "danger"
        : "primary";

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
            {invoiceNumber}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">{subscription}</span>
        </td>
        <td>
          <span className="fw-normal">{issueDate}</span>
        </td>
        <td>
          <span className="fw-normal">{dueDate}</span>
        </td>
        <td>
          <span className="fw-normal">${parseFloat(price).toFixed(2)}</span>
        </td>
        <td>
          <span className={`fw-normal text-${statusVariant}`}>{status}</span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle
              as={Button}
              split
              variant="link"
              className="text-dark m-0 p-0"
            >
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
              </Dropdown.Item>
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Table hover className="user-table align-items-center">
        <thead>
          <tr>
            <th className="border-bottom">Employer -ID </th>
            <th className="border-bottom">Name </th>
            <th className="border-bottom">Mobile </th>
            <th className="border-bottom">E-Mail </th>
            <th className="border-bottom">Quantity</th>
            <th className="border-bottom">Traffic Share</th>
            <th className="border-bottom">Change</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <TableRow key={`transaction-${t.invoiceNumber}`} {...t} />
          ))}
        </tbody>
      </Table>
      <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
        <Nav>
          <Pagination className="mb-2 mb-lg-0">
            <Pagination.Prev>Previous</Pagination.Prev>
            <Pagination.Item active>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Item>4</Pagination.Item>
            <Pagination.Item>5</Pagination.Item>
            <Pagination.Next>Next</Pagination.Next>
          </Pagination>
        </Nav>
        <small className="fw-bold">
          Showing <b>{totalTransactions}</b> out of <b>25</b> entries
        </small>
      </Card.Footer>
    </Card>
  );
};

export const CommandsTable = () => {
  const TableRow = (props) => {
    const { name, usage = [], description, link } = props;

    return (
      <tr>
        <td className="border-0" style={{ width: "5%" }}>
          <code>{name}</code>
        </td>
        <td className="fw-bold border-0" style={{ width: "5%" }}>
          <ul className="ps-0">
            {usage.map((u) => (
              <ol key={u} className="ps-0">
                <code>{u}</code>
              </ol>
            ))}
          </ul>
        </td>
        <td className="border-0" style={{ width: "50%" }}>
          <pre className="m-0 p-0">{description}</pre>
        </td>
        <td className="border-0" style={{ width: "40%" }}>
          <pre>
            <Card.Link href={link} target="_blank">
              Read More{" "}
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" />
            </Card.Link>
          </pre>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="p-0">
        <Table
          responsive
          className="table-centered rounded"
          style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
        >
          <thead className="thead-light">
            <tr>
              <th className="border-0" style={{ width: "5%" }}>
                Name
              </th>
              <th className="border-0" style={{ width: "5%" }}>
                Usage
              </th>
              <th className="border-0" style={{ width: "50%" }}>
                Description
              </th>
              <th className="border-0" style={{ width: "40%" }}>
                Extra
              </th>
            </tr>
          </thead>
          <tbody>
            {commands.map((c) => (
              <TableRow key={`command-${c.id}`} {...c} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
