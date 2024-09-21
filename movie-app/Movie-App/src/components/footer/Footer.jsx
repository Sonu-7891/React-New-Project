import './footer.css'

export default function footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <ul className="flex">
              <li>Terms of Use</li>
              <li>Privacy-Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
            </ul>
            <p>
              @ 2024 STREAMIT. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Dolor laboriosam maiores illum! Quidem quibusdam
              ex, perferendis voluptates harum aut soluta omnis ad rerum natus
              ipsa repellendus cum eos? Expedita dolores rem quas odit omnis
              repellat magni totam, tempora quo accusantium quam enim hic in
              architecto voluptas beatae asperiores et eum.
            </p>
          </div>
          <div className="BOX">
            <h3>Follow Us</h3>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
          <div className="box">
            <h3>Streamit App</h3>
            <div className="img flexSB">
              <img
                src="	https://img.icons8.com/color/48/000000/apple-app-store--v3.png"
                alt=""
              />
              <span>App Store</span>
              <img
                src="	https://img.icons8.com/fluency/48/000000/google-play.png"
                alt=""
              />
              <span>Google Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
