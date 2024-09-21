import  { useState } from 'react'
import './trending.css'
import Home from '../Homes/Home'
import { trending } from "../../dummyData";

export default function Trending() {
    const [items, setItems] = useState(trending);
  return (
    <div>
      <section className="trending">
        <Home items={items}/>
      </section>
    </div>
  )
}
