import React from "react";
import { useParams } from "react-router";

export default function PingSequenceDetails() {
  let { id } = useParams();

  return (
    <div>
      <h1>PingSequenceDetails</h1>
    </div>
  );
}
