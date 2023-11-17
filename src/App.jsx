import { useState } from "react";
import "./App.css";
import MainAppContainer from "./Components/MainAppContainer/MainAppContainer";
import { unread } from "./Components/MainAppContainer/Unread";

function App() {
  const [notifications, setNotifications] = useState(unread);

  return (
    <>
      <header>
        <h3>Notification</h3>
        <button className="mark">Mark all as read</button>
      </header>
      <main>
        <MainAppContainer></MainAppContainer>
      </main>
    </>
  );
}

export default App;
