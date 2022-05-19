import { useState, useEffect } from "react";
import "./scss/main.scss";

function Clock() {
  const [data, setData] = useState(new Date());

  useEffect(() => {
    const timeoutId = setInterval(function () {
      setData(new Date());
    }, 1_000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <p className="clock">
      {data.toLocaleDateString()} : {data.toLocaleTimeString()}
    </p>
  );
}

export default Clock;
