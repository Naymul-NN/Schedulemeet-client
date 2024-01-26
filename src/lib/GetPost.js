import React from "react";

const GetPost = async (id) => {
  const response = await fetch(
    `http://localhost:5000/api/v1/blogs/getblog/${id}`
  );

  return await response.json();
};

export default GetPost;
