"use client"
import Header from '@/Components/Header'
import React, { useState } from 'react'

const page = () => {
   const [num, setnum] = useState(10)
  return (
    <>
    <h1> This is Home page </h1>

    <Header  num={num} />
    </>
  )
}

export default page