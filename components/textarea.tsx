import React from 'react'

interface TextAreaProps {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextArea({ onChange }:TextAreaProps) {
  return (
    <textarea className="h-24 w-full lg:w-11/12 border-2 border-gray-400 focus:border-bob-main focus:outline-none rounded-lg mt-2" onChange={onChange}/>
  )
}

export default TextArea