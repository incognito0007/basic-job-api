import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchJobs = async () => {
    const res = await fetch(
      `http://localhost:5000/api/jobs?page=${page}&limit=10`,
    );
    const data = await res.json();

    setJobs(data.data);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    fetchJobs();
  }, [page]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Job Listings</h1>
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default Jobs;
