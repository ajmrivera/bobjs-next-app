import React from 'react'

type addOnObject = {
  left?: string,
  right?: string
}

interface InputProps {
  input_type?: string
  add_on?: "left" | "right" | "both"
  add_on_data?: addOnObject
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: any
  min?: number
  max?: number
}

function Input({ input_type = "string", add_on, add_on_data, onChange, value, min = 1, max = 2000 }: InputProps) {

  const leftAddOn = () => {
    return(
      <div className='flex border-2 border-gray-400 h-12 mt-2 lg:mt-0 '>
        <div className="flex border-2 border-gray-400"><p className="text-md font-bob-main">{add_on_data?.left}</p></div>
        <input className="p-1 border-2 border-gray-400" type={input_type} value={value} onChange={onChange} min={min}></input>
      </div>
    )
  }

  const rightAddOn = () => {
    return(
      <div className='mt-2 lg:mt-0 flex h-12 w-56 focus:border-bob-main'>
        <input className="p-1 border-2 border-gray-400 rounded-l-md focus:border-bob-main focus:outline-none" type={input_type} value={value} onChange={onChange} min={min}></input>
        <div className="flex border-y-2 border-r-2 border-gray-400 rounded-r-md items-center justify-center bg-bob-bg w-10"><p className="text-md font-bob-main">{add_on_data?.right}</p></div>
      </div>
    )
    
  }

  const bothAddOn = () => {
    return(
      <div className='flex h-12 mt-2 lg:mt-0 '>
        <div className="flex"><p className="text-md font-bob-main">{add_on_data?.left}</p></div>
        <input type={input_type} onChange={onChange} value={value} className="p-1" min={min}></input>
        <div className="flex"><p className="text-md font-bob-main">{add_on_data?.right}</p></div>
      </div>
    )
    
  }

  const baseInput = () => {
    return(
      <div className='flex h-12'>
        <input type={input_type} onChange={onChange} value={value} className="h-12 w-full mt-2 lg:mt-0 p-1 border-2 border-gray-400 rounded-md focus:border-bob-main focus:outline-none" min={min}></input>
      </div>
    )
  }

  const returnInput = () => {
    if(add_on === "left"){
      return leftAddOn()
    }else if(add_on === "right"){
      return rightAddOn()
    }else if(add_on === "both"){
      return bothAddOn()
    }else{
      return baseInput()
    }
  }
  

  return (
    returnInput()
  )
}

export default Input