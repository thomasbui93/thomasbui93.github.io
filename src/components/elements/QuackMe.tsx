import React from "react"
import { useState } from "react";

type QuackProps = {
  size: number
}

export const QuackMe = ({size}: QuackProps) => {
  const initialState = new Array(size).fill(0).map(() => new Array<boolean>(size));
  const [matrix, setMatrix] = useState(initialState);

  return (<div>
    {
      matrix.map(row => row.map((cell) => <div>{cell}</div>))
    }
  </div>)
}
