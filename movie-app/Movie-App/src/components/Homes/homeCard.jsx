import { Link } from "react-router-dom";


function HomeCard({
  item: {
    id,
    posterUrl,
    videoUrl,
    title,
    releaseDate,
    genre,
    overview,
    rating,
    director,
  }}) {
  return (
    <>
      <div className="box">
        <div className="coverImage">
          <img src={posterUrl} alt="" />
        </div>
        <div className="content flex">
          <div className="detail row ">
            <h1>{title}</h1>
            <div className="rating flex">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </div>
            <label>{rating}</label>
            <span>GP</span>
            <label>{releaseDate}</label>

            <p>{overview}</p>
            <div className="cast">
              <label>{director}</label>
              <h4>
                <span>Genres</span>
                {genre}
              </h4>
            </div>
            <button className="primary-btn">
              <i className="fas fa-play"></i>PLAY NOW
            </button>
          </div>
          <div className="playButton row">
            <Link to={`/SinglePage/${id}`}>
              <button>
                <div className="img">
                  <img
                    src="https://img.icons8.com/ios/50/FFFFFF/circled-play--v1.png"
                    alt=""
                    className="change"
                  />
                </div>
                WATCH TRAILER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCard
