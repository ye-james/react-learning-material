import { Switch, Route, Link } from "react-router-dom";

import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front-end javascript framework",
  },
  {
    title: "Why use React??",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];
const options = [
  {
    label: "The Color Red",
    value: "Red",
  },
  {
    label: "The Color Green",
    value: "Green",
  },
  {
    label: "A Shde of Blue",
    value: "Blue",
  },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <>
      <div>
        <div className="ui secondary pointer menu">
          <Link to="/" className="item">
            Accordion
          </Link>
          <Link to="/list" className="item">
            Search
          </Link>
          <Link to="/dropdown" className="item">
            Dropdown
          </Link>
          <Link to="/translate" className="item">
            Translate
          </Link>
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Accordion items={items} />
        </Route>
        <Route exact path="/list" component={Search} />
        <Route
          exact
          path="/dropdown"
          component={() => (
            <div>
              <button onClick={() => setShowDropdown(!showDropdown)}>
                Toggle Dropdown
              </button>
              {showDropdown ? (
                <Dropdown
                  options={options}
                  selected={selected}
                  onSelectedChange={setSelected}
                />
              ) : null}
            </div>
          )}
        />

        <Route path="/translate" component={Translate} />
      </Switch>
    </>
  );
};

export default App;
