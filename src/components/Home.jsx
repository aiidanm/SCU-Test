// src/pages/Services.js
import React from "react";
import TemplatePage from "./templatePage";

const Home = () => {
  const columns = [
    {
      heading: "Loan 1",
      content: "",
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

  return <TemplatePage title="Home" columns={columns} />;
};

export default Home;
