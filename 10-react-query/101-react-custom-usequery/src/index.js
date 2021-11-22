import React from "react";
import { render } from "react-dom";

import { retrieveData } from "./repositories/DataRepository";

const App = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    retrieveData().then(setData);
  }, []);

  return (
    <>
      <h3>ToDo list</h3>
      <ul>
        {data.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </>
  );
};

render(
  <App />,
  document.getElementById("root")
);
