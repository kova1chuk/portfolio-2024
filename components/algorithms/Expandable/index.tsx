"use client";
import React, { useState } from "react";

interface ExpandableProps {
  title: string;
  children: React.ReactNode;
}

const Expandable: React.FC<ExpandableProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState<string | number>("0px");

  const contentRef = React.useRef<HTMLDivElement>(null);

  const toggleExpanded = () => {
    if (contentRef.current) {
      setContentHeight(
        isExpanded ? "0px" : `${contentRef.current.scrollHeight}px`
      );
    }
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      style={{
        marginBottom: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        overflow: "hidden",
        padding: "10px",
        transition: "all 0.3s ease",
      }}
    >
      <div
        onClick={toggleExpanded}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <h2 style={{ margin: 0 }}>{title}</h2>
        <button>{isExpanded ? "Hide" : "Show"}</button>
      </div>
      <div
        ref={contentRef}
        style={{
          height: contentHeight,
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <div
          style={{
            padding: isExpanded ? "10px 0" : "0",
            transition: "padding 0.3s ease",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Expandable;
