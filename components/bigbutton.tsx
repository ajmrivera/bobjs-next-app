import React, { MouseEventHandler } from 'react'
import { TableCellsIcon, ViewColumnsIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'

interface BigButtonProps{
  title: string
  value?: string
  currentValue?: string|null
  onClick?: MouseEventHandler
}

function BigButton({ title, value, currentValue, onClick }:BigButtonProps) {
  const classnames = (...classes:string[]) => classes.join(' ');

  return (
    <button className={classnames("border-2 h-24 w-60 lg:mx-24 rounded-lg hover:bg-black hover:bg-opacity-5 drop-shadow-md", `${(value === currentValue)? "border-bob-main" : "border-gray-400"}`)} onClick={onClick}>
      <div className="h-full w-full flex flex-col items-center justify-center">
        {(title === "Brick")? <TableCellsIcon className={`${(currentValue == value)? "text-bob-main" : "text-gray-400"}`} /> : (title === "Slab")? <ViewColumnsIcon className={`${(currentValue == value)? "text-bob-main" : "text-gray-400"}`} /> : <BuildingOffice2Icon className={`${(currentValue == value)? "text-bob-main" : "text-gray-400"}`} />}
        <p className={classnames("inline-block align-bottom self-center font-semibold text-lg", `${(currentValue == value)? "text-bob-main" : "text-gray-400"}`)}>{title}</p>
      </div>
    </button>
  )
}

export default BigButton