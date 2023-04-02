import React, { useEffect, useState } from "react";
import axios from "axios";

function RecommendationsNames({ id }) {
  const [nurse, setNurse] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8000/nurse/id", {
        params: { id: id },
      })
      .then((response) => setNurse(response.data))
      .catch((error) => console.log(error));
  }, []);
  return <div className="class">{nurse.fname}</div>;
}

export default RecommendationsNames;
