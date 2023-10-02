import { MouseEventHandler } from "react";

export interface CustomButtoProps {
  
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}
