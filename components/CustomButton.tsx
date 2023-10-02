"use client";

import React from "react";
import Image from "next/image";
import { CustomButtoProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtoProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
