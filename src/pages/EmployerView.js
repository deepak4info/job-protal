import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { pageEmpolyer } from "../data/tables";
import { BACKEND_URL } from "../services/helper";
import axios from "axios";
import { toast } from "react-toastify";
const EmployerView = () => {
  const { id } = useParams();
  const history = useHistory();
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
      setData(data.data.rows.filter((task) => task._id === id));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTodos(pageIndex, pageLimit, status);
  }, [pageIndex, pageLimit, status]);
  const submitHandler = (event) => {
    event.preventDefault();
    const status = data[0].status === "APPROVED" ? "NOT_DEFINED" : "APPROVED";
    const id = data[0]._id;
    const upData = { status, id };
    axios
      .put(BACKEND_URL + "/employer/updatestatus", upData)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          history.push("/Employerlist");
          toast.success(response.data.message);
        }
      });
  };

  return (
    <div>
      <h1>{id}</h1>
      {data.map((task) => (
        <ul key={task._id}>
          <li>{task.companyName}</li>
          <li>{task.employerName}</li>
          <li>{task.email}</li>
          <li>{task.whatsappNo}</li>

          <button className="btn btn-primary" onClick={submitHandler}>
            {task.status === "APPROVED" ? "Dis-Apporved" : "APPROVED"}
          </button>
        </ul>
      ))}
    </div>
  );
};

export default EmployerView;
