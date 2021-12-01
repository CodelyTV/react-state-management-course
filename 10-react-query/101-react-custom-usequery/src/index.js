import React from "react";
import { render } from "react-dom";

import { retrieveData } from "./repositories/DataRepository";
import { useQuery } from "./useQuery";

const App = () => {
  const { data, isLoading } = useQuery(retrieveData);

  if (isLoading) {
    return <span>Loading...</span>
  }

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
