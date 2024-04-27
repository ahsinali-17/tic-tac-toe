import { useState } from "react"
import React from 'react'

export default function Square({value,onSquareClick,turn,winner}) {
  return (
    <button className={`square ${turn?winner==="draw"?"text-green-500":"text-blue-600":winner==="draw"?"text-green-500":"text-red-600"} w-20 h-20 border-2 border-green-600`} onClick={onSquareClick}>
      {value}
    </button>
  );
}
