import React from 'react'

interface ErrorMessageProps {
    error: string;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <h1 className='text-center text-red-700 font-bold text-3xl'>{error}</h1>
  )
}
