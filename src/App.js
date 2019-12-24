import React from "react";
import { Switch, Route } from "react-router-dom";
//
import ContactsPage from "./components/contacts/ContactsPage";
import NewFormContact from "./components/form/NewFormContact";
import UpdateFormContact from "./components/form/UpdateFormContact";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={ContactsPage} />
        <Route path="/new" exact component={NewFormContact} />
        <Route path="/update/:id?" exact component={UpdateFormContact} />
      </Switch>
    </div>
  );
}

export default App;
