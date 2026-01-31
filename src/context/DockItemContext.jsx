import React, { createContext } from "react";

export const DockItemDataContext = createContext();

const DockItemContext = ({ children }) => {
  const dockItems = [
    { name: "launchpad", icon: "/doc-icons/launchpad.svg" },
    { name: "github", icon: "/doc-icons/github.svg" },
    { name: "note", icon: "/doc-icons/note.svg" },
    { name: "resume", icon: "/doc-icons/pdf.svg" },
    { name: "calender", icon: "/doc-icons/calender.svg" },
    { name: "spotify", icon: "/doc-icons/spotify.svg" },
    { name: "mail", icon: "/doc-icons/mail.svg" },
    { name: "link", icon: "/doc-icons/link.svg" },
    { name: "cli", icon: "/doc-icons/cli.svg" },
  ];

  return (
    <DockItemDataContext.Provider value={dockItems}>
      {children}
    </DockItemDataContext.Provider>
  );
};

export default DockItemContext;
