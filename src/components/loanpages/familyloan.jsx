// src/pages/Services.js
import React from "react";
import TemplatePage from "../templatePage";

const Familyloan = () => {
  const columns = [
    {
      heading: "Service 1",
      content: "Description of Service 1...",
      buttonText: "Learn More",
    },
    {
      heading: "Service 2",
      content: "Description of Service 2...",
      buttonText: "Learn More",
    },
    {
      heading: "Service 3",
      content: "Description of Service 3...",
      buttonText: "Learn More",
    },
  ];

  return <TemplatePage title="Family Loan" columns={columns} />;
};

export default FamilyLoan;
