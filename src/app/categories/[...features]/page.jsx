import React from "react";

const CategoriesDetailsPage = ({ params }) => {
  console.log(params);
  const { features } = params;

  // Check if features array exists and has at least 3 elements
  if (features?.length >= 3) {
    return <div>this is {features[2]}</div>;
  }
  if (features?.length >= 2) {
    return <div>this is {features[1]}</div>;
  }

  return <div>Categories Details Page</div>;
};

export default CategoriesDetailsPage;
