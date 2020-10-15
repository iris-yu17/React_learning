// ------基本navbar與footer範例------ //
// App_09.checkAge

import React, { useState, useEffect } from "react";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
// import datepicker
import DatePicker from "react-datepicker";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <MyNavbar />
      <main role="main" className="flex-shrink-0">
        <div className="container">
          <h1 className="mt-5">檢查是否滿18歲</h1>
        </div>

        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </main>
      <MyFooter />
    </>
  );
}

export default App;
