import React, { useState } from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const CLI = ({ windowName, windowState, setWindowsState }) => {
  const [promptColor, setPromptColor] = useState("#00ff00");

  const welcomeMsg = `
╔════════════════════════════════════════════╗
║      Welcome to Utkarsh's Portfolio        ║
╚════════════════════════════════════════════╝

Available commands:
  about        - Learn about me
  projects     - View my recent projects
  skills       - See my technical skills
  experience   - Check out my work experience
  contact      - Get my contact information
  color        - Change the prompt color
  clear        - Clear the terminal
  help         - Show this message

Type any command to get started!
`;

  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      setWindowsState={setWindowsState}
      width={"60vw"}
      height={"70vh"}
    >
      <div className="cli-window">
        <Terminal
          commands={{
            echo: {
              description: "Echo a passed string",
              usage: "echo <string>",
              fn: (...args) => args.join(" "),
            },
            about: {
              description: "Learn about me",
              usage: "about",
              fn: () =>
                "Hi! I'm Utkarsh Verma, a full-stack developer passionate about building beautiful and functional web applications.",
            },
            projects: {
              description: "View my recent projects",
              usage: "projects",
              fn: () => `
Recent Projects:
1. Mac OS Clone - A macOS-inspired project website
1. Figma Clone - A figma-inspired project website

Type 'projects --details' for more information.`,
            },
            skills: {
              description: "See my technical skills",
              usage: "skills",
              fn: () => `
Technical Skills:
Frontend:  React, JavaScript, SCSS, HTML5, CSS3
Backend:   Node.js, Express, MongoDB
Tools:     Git, VS Code, Vite, ESLint
Other:     REST APIs, Responsive Design, Problem Solving`,
            },
            experience: {
              description: "Check out my work experience",
              usage: "experience",
              fn: () => `
Work Experience:
• Full-stack Developer (Current)
  - Building scalable web applications

• Junior Developer (Previous)
  - Learned modern development practices`,
            },
            contact: {
              description: "Get my contact information",
              usage: "contact",
              fn: () => `
Contact Information:
Email:    codeuv30@gmail.com
GitHub:   github.com/codeuv30
Phone:    +91 8126932827`,
            },
            color: {
              description: "Change the prompt color",
              usage: "color <color>",
              fn: (color) => {
                if (!color) {
                  setPromptColor("#00ff00");
                  return "usage - color <color>";
                }

                const s = new Option().style;
                s.color = color;

                if (s.color === "") {
                  return "usage - color <color>";
                }

                const newColor = color || "#00ff00";
                setPromptColor(newColor);
                return;
              },
            },
          }}
          welcomeMessage={welcomeMsg}
          promptLabel={"utkarshverma~$"}
          promptLabelStyle={{ color: promptColor }}
        />
      </div>
    </MacWindow>
  );
};

export default CLI;
