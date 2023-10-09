import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { pageEmpolyer } from "../data/tables";
import { BACKEND_URL } from "../services/helper";
import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";
const CandidateView = () => {
  const { id } = useParams();
  const history = useHistory();
  const [pageIndex, setPageIndex] = React.useState("0");
  const [pageLimit, setPageLimit] = React.useState("10");
  const [data, setData] = React.useState([]);

  const url =
    BACKEND_URL +
    `/candidate/getallcandidates?page=${pageIndex}&pageLimit=${pageLimit}`;
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
    fetchTodos(pageIndex, pageLimit);
  }, [pageIndex, pageLimit]);

  return (
    <div>
      <h1>{id}</h1>
      {data.map((task) => (
        <ul key={task._id}>
          <li>{task.name}</li>
          <li>{task.companyName}</li>
          <li>{task.email}</li>

          <li>{task.yearsOfExperience}</li>
          <li>{task.state}</li>
          <li>{moment(task.startDate).format("MMMM Do YYYY, h:mm a")}</li>
          <li>{task.skillsTechnical}</li>
          <li>{task.preferredJobCategory}</li>
          <li>{task.photo}</li>
          <li>{task.permanentAddress}</li>
          <li>{task.mobile}</li>
          <li>{task.miscellaneous}</li>
          <li>{task.languagesKnown}</li>
          <li>{task.hobbies}</li>
          <li>{task.gender}</li>
          <li>{moment(task.fromDate).format("MMMM Do YYYY, h:mm a")}</li>
          <li>{moment(task.endDate).format("MMMM Do YYYY, h:mm a")}</li>
        </ul>
      ))}
    </div>
  );
};

export default CandidateView;
