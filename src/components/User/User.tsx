import React, { useContext } from "react";
import Image from "react-bootstrap/Image";
import { MyContext } from "../../context/Context";

export default function User() {
  const { user } = useContext(MyContext);
  // const PF = "http://localhost:5000/images/"
  return (
    <Image
      src={/* PF+ */ user.profilePic}
      roundedCircle
      style={{ width: "3em", cursor: "pointer" }}
    />
  );
}
