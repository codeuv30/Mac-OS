import React, { useRef, useState } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";
import { getNextZIndex } from "../../utils/zIndexManager.js";

const MacWindow = ({
  children,
  width = "40vw",
  height = "30vw",
  windowName,
  setWindowsState,
}) => {
  const [zIndex, setZIndex] = useState(getNextZIndex());
  const [mode, setMode] = useState("normal");
  const [bounds, setBounds] = useState({
    width,
    height,
    x: 200,
    y: 100,
  });
  const prevBounds = useRef(bounds);

  const bringToFront = () => {
    setZIndex((prev) => {
      const next = getNextZIndex();
      return prev === next ? prev : next;
    });
  };

  return (
    <Rnd
      size={
        mode === "maximized"
          ? { width: "100vw", height: "100vh" }
          : { width: bounds.width, height: bounds.height }
      }
      position={
        mode === "maximized" ? { x: 0, y: 0 } : { x: bounds.x, y: bounds.y }
      }
      enableResizing={mode === "normal"}
      disableDragging={mode !== "normal"}
      style={{ zIndex }}
      dragHandleClassName="nav"
      bounds="window"
      onDragStop={(e, d) => setBounds((b) => ({ ...b, x: d.x, y: d.y }))}
      onResizeStop={(e, dir, ref, delta, pos) =>
        setBounds({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
          x: pos.x,
          y: pos.y,
        })
      }
      onMouseDown={bringToFront}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              onClick={() => {
                setWindowsState((state) => ({ ...state, [windowName]: false }));
              }}
              className="dot red"
              onMouseDown={(e) => e.stopPropagation()}
            ></div>
            <div
              className="dot yellow"
              onClick={() => {
                setWindowsState((state) => ({ ...state, [windowName]: false }));
              }}
              onMouseDown={(e) => e.stopPropagation()}
            ></div>
            <div
              className="dot green"
              onMouseDown={(e) => e.stopPropagation()}
              onClick={() => {
                if (mode === "maximized") {
                  setMode("normal");
                  setBounds(prevBounds.current);
                } else {
                  prevBounds.current = bounds;
                  setMode("maximized");
                }
              }}
            ></div>
          </div>

          <div className="title">
            <p>{windowName}</p>
          </div>
        </div>

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
