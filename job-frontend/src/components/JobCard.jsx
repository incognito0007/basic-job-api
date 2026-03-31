import React from "react";

const JobCard = ({ job }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "8px",
      }}
    >
      <h3>{job.role}</h3>
      <p>
        <strong>{job.company}</strong> - {job.location}
      </p>
      <p>
        {job.experience} | {job.type}
      </p>
      <p>💰 {job.salary}</p>
      <p>Posted {job.posteddaysAgo} days ago</p>
    </div>
  );
};

export default JobCard;
