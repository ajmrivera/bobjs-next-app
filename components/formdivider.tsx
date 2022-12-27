import React from 'react'

interface FormDividerProps {
  title: string
}

function FormDivider({ title }:FormDividerProps) {
  return (
    <div className="w-10/12 h-14 bg-bob-secondary flex justify-center items-center">
      <p className="text-2xl font-bold text-bob-bg">{ title }</p>
    </div>
  )
}

export default FormDivider