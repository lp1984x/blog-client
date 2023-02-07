import React, { useContext } from "react";
import Image from "react-bootstrap/Image";
import { MyContext } from "../../context/Context";

export default function User() {
  const { user } = useContext(MyContext);
  return (
    <Image
      src={user.profilePic}
      roundedCircle
      style={{ height: "3em", width: "3em", cursor: "pointer" }}
    />
  );
}
