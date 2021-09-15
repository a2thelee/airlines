import React, { useEffect, useState } from "react";
import axios from "axios";
import AirLineTile from "./AirLineTile.js";

function Home() {
  const [data, SetData] = useState(null);
  //returns an array of objects. need site, alliance, phone, name, and logoURL
  const fetchURL = "kayak.com/h/mobileapis/directory/airlines/homework";

  // fires off our fetch on load
  useEffect(() => {
    fetch(fetchURL).then((response) => {
      SetData(response.data);
      console.log(data, "????????");
    });
  }, [data]);

  // let airlines = console.log(data);
  return (
    <div>
      <div>{data}</div>
      <p>this is here on home component</p>
    </div>
  );
}

export default Home;
