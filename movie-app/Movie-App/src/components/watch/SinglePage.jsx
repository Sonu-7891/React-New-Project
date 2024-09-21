import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { homeData, recommended } from "../../dummyData";
import Upcomming from "../Upcoming/Upcomming"
import './style.css'

export default function Singlepage() {

    const {id} = useParams()
    const [item , setItem] = useState(homeData)
    const [rec, Setrec] = useState(recommended);
    useEffect(()=>{
        let item = homeData.find((item)=> item.id === parseInt(id))
        if(item){
            setItem(item)
        }
    },[id])
  return (
    <>
      {item ? (
        <div>
          <section className="singlePage">
            <div className="singleHeading">
              <h1>{item.title}</h1>
              <span>| {item.time} |</span> <span>HD</span>
            </div>
            <div className="container">
              <video src={item.videoUrl} controls>
                <iframe
                  src={item.videoUrl}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </video>
              <div className="para">
                <h3>Date:{item.date}</h3>
                <p>{item.overview}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iusto voluptates nam nobis voluptas soluta non omnis ipsum
                  odio ad eaque fuga, dolores, enim illum consequatur eos,
                  provident libero. Quidem ipsum aspernatur, animi ullam,
                  reiciendis beatae accusamus, sequi perferendis cupiditate
                  pariatur eos! Temporibus architecto ab illo praesentium
                  repudiandae dolore repellendus quam?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis debitis aliquid necessitatibus delectus at,
                  dolores nam dicta atque eum commodi accusamus excepturi neque
                  esse? Soluta iure ea corrupti pariatur impedit, exercitationem
                  facere. Illum ratione commodi corrupti! Delectus iusto,
                  ducimus illum suscipit error repellendus. Unde nihil fugiat
                  expedita, sit voluptates ab.
                </p>
              </div>
              <div className="social">
                <h3>Share:</h3>
                <img
                  src="https://img.icons8.com/color/48/000000/facebook-new.png"
                  alt=""
                />
                <img
                  src="	https://img.icons8.com/fluency/48/000000/twitter-circled.png"
                  alt=""
                />
                <img
                  src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png"
                  alt=""
                />
              </div>
            </div>
          </section>
          <Upcomming items={rec} title="Recommended Movies " />
        </div>
      ) : null}
    </>
  );
}
