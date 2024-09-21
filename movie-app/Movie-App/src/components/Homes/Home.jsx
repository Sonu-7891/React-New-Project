
import HomeCard from './homeCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ShampleNextArrow=(props)=>{
  const {onClick}= props 
  return (
    <div className="control-btn" onClick={onClick}>
      <button className='next'>
      <i className='fa fa-chevron-right'></i>
      </button>
    </div>
  )
}
const ShamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-chevron-left"></i>
      </button>
    </div>
  );
};
function Home({items}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ShampleNextArrow />,
    prevArrow: <ShamplePrevArrow />,
  };
  return (
    <>
      <div className="homeContainer">
        <Slider {...settings}>
          {items.map((item) => (
            <HomeCard key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Home
