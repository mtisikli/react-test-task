import React from "react";
import { Keyboard } from "./Keyboard";
import "./Board.css";

export const Board = () => {
  return (
    <div className="board-wrapper">
      <div className="board"></div>
      <Keyboard />
    </div>
  );
};
