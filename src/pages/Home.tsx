import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Home = (props: Props) => {
  return (
    <div><h1>Home</h1>
    <a href="/FormBuilder">FormBuilder</a>
    </div>
  )
}

export default Home