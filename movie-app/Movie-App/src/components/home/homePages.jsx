
import { useState } from 'react';
import Homes from '../Homes/Homes';
import Upcomming from '../Upcoming/Upcomming';
import { latest, recommended, upcome } from '../../dummyData';
import Trending from '../trending/trending';
import { trending } from "../../dummyData";

function HomePage() {
  const [items,SetItems]=useState(upcome)
  const [item2, SetItem2] = useState(latest);
  const [rec, Setrec] = useState(recommended);
  const [trend, setTrend] = useState(trending);
  return (
    <>
      <Homes />
      <Upcomming items={items} title="Upcoming Movies " />
      <Upcomming items={item2} title="Latest Movies " />
      <Trending/>
      <Upcomming items={rec} title="Recommended Movies " />
    </>
  );
}

export default HomePage;
