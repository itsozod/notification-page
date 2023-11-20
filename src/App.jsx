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
                {notification.author.img && (
                  <>
                    <img
                      className="img"
                      src={notification.author.img}
                      alt={notification.author.name}
                    />
                    <p className="name_container">
                      <a href="#" className="blackName">
                        {notification.author.name}
                      </a>
                      {notification.author.nameBlue && (
                        <a href="#" className="blueName">
                          {notification.author.nameBlue}{" "}
                        </a>
                      )}{" "}
                      {notification.author.text}{" "}
                      {notification.messageBlue && (
                        <a href="#" className="messageBlue">
                          {notification.messageBlue}
                        </a>
                      )}{" "}
                      {notification.messageBlack && (
                        <a href="#" className="messageBlack">
                          {notification.messageBlack}
                        </a>
                      )}{" "}
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
                  </>
                )}

                {notification.author.imgChess && (
                  <div className="chessGirlContainer">
                    <img
                      className="imgChess"
                      src={notification.author.imgChess}
                      alt={notification.author.nameChess}
                    ></img>
                    <p className="name_container">
                      <a className="blackName" href="#">
                        {notification.author.nameChess}
                      </a>{" "}
                      {notification.author.textChess}
                    </p>
                    <img
                      className="chessGirl"
                      src={notification.imgChessGirl}
                      alt={notification.author.nameChess}
                    />
                  </div>
                )}
                <span
                  className={notification.isRead ? "noDot" : "redDot"}
                ></span>
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
