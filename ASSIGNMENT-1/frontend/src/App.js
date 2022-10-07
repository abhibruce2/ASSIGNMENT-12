
import React from 'react';
import Table from "./components/Table";

import Login from "./components/Login/index"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (

<Router>
<Routes>
  <Route path = "/" element = {<Login />} />
  <Route path = "/users" element = {<Table />} />

</Routes>
</Router>
  );
}

export default App;
