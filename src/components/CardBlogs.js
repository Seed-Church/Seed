import React from "react";
import Title from "./shared/Title";
import CardBlog from "../components/shared/CardBlog";
const CardBlogs = () => {
  return (
    <React.Fragment>
      <Title name="Cardblog" />
      <CardBlog />
      <CardBlog />
    </React.Fragment>
  );
};

export default CardBlogs;
