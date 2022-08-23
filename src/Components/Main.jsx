import "./main.css";
import { useEffect, useState } from "react";

const Main = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://api.sampleapis.com/beers/ale")
      .then((r) => r.json())
      .then((d) => setData(d));
  }, []);

  console.log(data);
  return <div className="main">{data ? data.map((i) => <h1>{i.name}</h1>) : <h1>Home</h1>}</div>;
};

export default Main;
