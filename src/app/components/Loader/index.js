import React from "react";
import Center from "../Center";
import Spinner from "../Spinner";
import "./loader.scss";

export default function Loader() {
  return (
    <Center>
      <Spinner color="var(--color-gray-001)" />
    </Center>
  );
}
