import { useState } from "react";
import "./App.css";
import MainAppContainer from "./Components/MainAppContainer/MainAppContainer";
import { unread } from "./Components/MainAppContainer/Unread";

function App() {
  const [notifications, setNotifications] = useState(unread);

  const markAll = () => {
    setNotifications((prevNotification) => {
      return prevNotification.map((notification) => {
        if (!notification.isRead) {
          return { ...notification, isRead: true };
        }
        return notification;
      });
    });
  };

  const removeUnread = (notificationId) => {
    setNotifications((prevNotification) => {
      return prevNotification.map((notification) => {
        if (notification.id === notificationId && !notification.isRead) {
          return { ...notification, isRead: true };
        }
        return notification;
      });
    });
  };

  return (
    <>
      <header id="header">
        <h2>
          Notification{" "}
          <span className="notify">
            {
              notifications.filter((notification) => !notification.isRead)
                .length
            }
          </span>
        </h2>
        <button className="mark" onClick={() => markAll()}>
          Mark all as read
        </button>
      </header>
      <main>
        <MainAppContainer>
          {notifications.map((notification) => (
            <div key={notification.id}>
              <p
                className={notification.isRead ? "read" : "unread"}
                onClick={() => removeUnread(notification.id)}
              >
                {notification.name} {notification.text}
              </p>
            </div>
          ))}
        </MainAppContainer>
      </main>
    </>
  );
}

export default App;
