import React, { MouseEventHandler } from 'react'

interface BigButtonProps{
  title: string
  value?: string
  currentValue?: string|null
  onClick?: MouseEventHandler
}

function BigButton({ title, value, currentValue, onClick }:BigButtonProps) {
  const classnames = (...classes:string[]) => classes.join(' ');

  return (
    <button className={classnames("border-2 h-24 w-60 rounded-lg hover:bg-black hover:bg-opacity-5 drop-shadow-md", `${(value === currentValue)? "border-bob-main" : "border-gray-400"}`)} onClick={onClick}>
      <div className="h-full w-full flex justify-center">
        
        <p className={classnames("inline-block align-bottom self-end font-semibold text-lg", `${(currentValue == value)? "text-bob-main" : "text-gray-400"}`)}>{title}</p>
      </div>
    </button>
  )
}

export default BigButton