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
            <div
              key={notification.id}
              className={notification.isRead ? "read" : "unread"}
              onClick={() => removeUnread(notification.id)}
            >
              <div className="container">
                <img
                  className="img"
                  src={notification.author.img}
                  alt={notification.author.name}
                />
                <p className="name_container">
                  <a href="#" className="blackName">
                    {notification.author.name}{" "}
                  </a>
                  {notification.author.nameBlue && (
                    <a href="#" className="blueName">
                      {notification.author.nameBlue}{" "}
                    </a>
                  )}
                  {notification.author.text} {notification.messageBlue && <a href="#" className="messageBlue">{notification.messageBlue}</a>}{" "}
                  <span
                    className={notification.isRead ? "noDot" : "redDot"}
                  ></span>
                  {notification.author.privateMsg ? (
                    <a
                      href="#"
                      className="privMsg"
                      onClick={() =>
                        notification.priveRead
                          ? (notification.priveRead = false)
                          : (notification.priveRead = true)
                      }
                    >
                      {notification.author.privateMsg}
                    </a>
                  ) : null}
                </p>
              </div>
              <div className="time_container">
                <p>{notification.time}</p>
              </div>
              {notification.priveRead ? (
                <p className="private">{notification.private}</p>
              ) : null}
            </div>
          ))}
        </MainAppContainer>
      </main>
    </>
  );
}

export default App;
