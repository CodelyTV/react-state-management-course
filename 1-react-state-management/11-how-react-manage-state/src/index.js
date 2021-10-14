import React, { useState } from "react";
import TestRenderer from 'react-test-renderer';
import { render } from "react-dom";

const ShowNumber = ({ number }) => {
  return <p>Current Number: {number}</p>;
}

const ListItem = ({ item }) => {
  return <li >{item}</li>;
}

const ShowList = ({ list }) => {
  return (
    <ul>
      {list.map(l => <ListItem key={l} item={l} />)}
    </ul>
  );
}

const App = ({ defaultNumber = 0, defaultList = [] }) => {
  const [number, setNumber] = useState(defaultNumber);
  const [list, setList] = useState(defaultList);

  const [virtualDOM, setVirtualDOM] = useState('');

  const printNode = () => {
    const testRenderer = TestRenderer.create(<App defaultNumber={number} defaultList={list} />);
    setVirtualDOM(JSON.stringify(testRenderer.toJSON(), undefined, 4));
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <div style={{ position: 'sticky', top: 10 }}>
          <button onClick={printNode}>Print show DOM tree</button>

          <h3>Numbers</h3>
          <button onClick={() => setNumber(old => ++old)}>Add number</button>
          <ShowNumber number={number} />


          <h3>List</h3>
          <button onClick={() => setList(old => old.concat(Math.random()))}>Add number</button>
          <p>Show list:</p>
          <ShowList list={list} />
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <code>
          {virtualDOM}
        </code>
      </div>
    </div>
  );
}

render(
  <App />,
  document.getElementById("root")
);
