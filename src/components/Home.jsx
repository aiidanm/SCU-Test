// src/pages/Services.js
import React from "react";
import TemplatePage from "./templatePage";

const Home = () => {
  const columns = [
    {
      heading: "Loan 1",
      content: "Description of loan 1",
      buttonText: "Learn More",
    },
    {
      heading: "Loan 2",
      content: "Description of loan 2...",
      buttonText: "Learn More",
    },
    {
      heading: "Loan 3",
      content: "Description of loan 3...",
      buttonText: "Learn More",
    },
  ];

  return <TemplatePage title="Home" columns={columns} />;
};

export default Home;
