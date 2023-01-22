import React from "react";
import Image from "react-bootstrap/Image";
import userImg from "./user.png";

export default function User() {
  return (
    <Image
      src={userImg}
      roundedCircle
      style={{ height: "3em", cursor: "pointer" }}
    />
  );
}
