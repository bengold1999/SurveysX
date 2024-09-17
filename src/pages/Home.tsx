import React from 'react'
import { Link } from 'react-router-dom'
import SurvList from '../components/survList'
type Props = {}

const Home = (props: Props) => {
  return (
    <div><h1>Home</h1>
    <a href="/FormBuilder">FormBuilder</a>
    <section>
   <SurvList></SurvList>
    </section>
    </div>
  )
}

export default Home