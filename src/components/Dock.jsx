import React, { useContext } from "react";
import "./dock.scss";
import { DockItemDataContext } from "../context/DockItemContext";

const Dock = ({ setWindowsState }) => {
  const dockItems = useContext(DockItemDataContext);
  return (
    <footer className="dock">
      {dockItems.map((item) => {
        return (
          <div
            onClick={() => {
              setWindowsState((state) => {
                if (item.name === "launchpad") {
                  for (const key in state) {
                    if (key === "launchpad") continue;
                    state[key] = false;
                  }
                }

                if (item.name === "link") {
                  window.open("https://github.com/codeuv30", "_blank");
                }

                if (item.name === "mail") {
                  window.open(
                    "https://mail.google.com/mail/?view=cm&to=codeuv30@gmail.com",
                    "_blank",
                  );
                }

                if (item.name === "calender") {
                  window.open("https://calendar.google.com/calendar", "_blank");
                }

                return { ...state, [item.name]: !state[item.name] };
              });
            }}
            className={`icon ${item.name}`}
          >
            <img src={item.icon} alt="" />
          </div>
        );
      })}
    </footer>
  );
};

export default Dock;
