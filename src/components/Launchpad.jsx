import React, { useContext } from "react";
import "./launchpad.scss";
import { DockItemDataContext } from "../context/DockItemContext";

const Launchpad = ({ setWindowsState }) => {
  const dockItems = useContext(DockItemDataContext);

  const apps = dockItems.filter((item) => item.name !== "launchpad");

  return (
    <div className="launchpad">
      <div className="apps-grid">
        {apps.map((app) => (
          <div
            key={app.name}
            className="app"
            onClick={() => {
              if (app.name === "link") {
                window.open("https://github.com/codeuv30", "_blank");
              }

              if (app.name === "mail") {
                window.open(
                  "https://mail.google.com/mail/?view=cm&to=codeuv30@gmail.com",
                  "_blank",
                );
              }

              if (app.name === "calender") {
                window.open("https://calendar.google.com/calendar", "_blank");
              }

              setWindowsState((state) => {
                return { ...state, [app.name]: !state[app.name] };
              });
              closeLaunchpad(setWindowsState);
            }}
          >
            <img src={app.icon} alt={app.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

const closeLaunchpad = (setWindowsState) => {
  setWindowsState((state) => ({ ...state, launchpad: false }));
};

export default Launchpad;
