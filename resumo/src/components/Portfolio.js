import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSliderProps } from "../sliderProps";
import Modalbox from "./Modalbox";
const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState(null);
  return (
    <section id="portfolio">
      {modal && <Modalbox close={setModal} value={modalValue} />}
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div>
            <h3 className="subtitle">Portfolio</h3>
            <h3 className="title">Featured Projects</h3>
          </div>
          {/* /Main Title */}
        </div>
      </div>
      <div className="container noright">
        <div className="roww">
          <Swiper
            {...portfolioSliderProps}
            className="owl-carousel modal_items"
            data-from="portfolio"
          >
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(2);
              }}
              data-index={2}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/retappd.png" />
              </div>
              <div className="title_holder">
                <p>React, Express, PostgreSQL, Node, Redux</p>
                <h3>
                  <a href="#">ReTappd</a>
                </h3>
                <p>ReTappd is a clone of UnTappd that allows users to check in at famous bars around the world and share their thoughts.</p>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">React, Express, PostgreSQL, Node, Redux</p>
                <h3 className="fn__title">ReTappd</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/retappd.png" />
                </div>
                <p className="fn__desc">
                ReTappd is a clone of UnTappd that allows users to check in at famous bars around the world and share their thoughts.
                <a href="https://aa-solo-project.herokuapp.com/" target="_blank">Live Site</a>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(4);
              }}
              data-index={4}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/extensionhunt.png" />
              </div>
              <div className="title_holder">
                <p>Express, PUG, Node, PostgreSQL</p>
                <h3>
                  <a href="#">Extension Hunt</a>
                </h3>
                <p>Extension Hunt is a clone of Product Hunt that allows users to share their favorite extensions from VSCode and also allows users to share their thoughts on those extensions.</p>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">Express, PUG, Node, PostgreSQL</p>
                <h3 className="fn__title">Extension Hunt</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/extensionhunt.png" />
                </div>
                <p className="fn__desc">
                Extension Hunt is a clone of Product Hunt that allows users to share their favorite extensions from VSCode and also allows users to share their thoughts on those extensions.
                <a href="https://extension-hunt.herokuapp.com/" target="_blank">Live Site</a>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(1);
              }}
              data-index={1}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/forallthemarbles.png" />
              </div>
              <div className="title_holder">
                <p>React, Flask, SQLAlchemy, PostgreSQL, Redux</p>
                <h3>
                  <a href="#">For All The Marbles</a>
                </h3>
                <p>For All The Marbles is a site based around Robinhood that allows users to buy and sell stocks from their favorite companies, and even create and list their own companies.</p>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">React, Flask, SQLAlchemy, PostgreSQL, Redux</p>
                <h3 className="fn__title">For All The Marbles</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/forallthemarbles.png" />
                </div>
                <p className="fn__desc">
                  For All The Marbles is a site based around Robinhood that allows users to buy and sell stocks from their favorite companies, and even create and list their own companies.
                  <a href="https://capstone-fotm.herokuapp.com/" target="_blank">Live Site</a>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(3);
              }}
              data-index={3}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/instaclone.png" />
              </div>
              <div className="title_holder">
                <p>React, Flask, SQLAlchemy, PostgreSQL, Redux</p>
                <h3>
                  <a href="#">Insta-Clone</a>
                </h3>
                <p>Insta-Clone is an Instagram clone where user’s are able to create an account, upload images to posts, comment on posts, and follow/unfollow users.</p>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">React, Flask, SQLAlchemy, PostgreSQL, Redux</p>
                <h3 className="fn__title">Insta-Clone</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/instaclone.png" />
                </div>
                <p className="fn__desc">
                Insta-Clone is an Instagram clone where user’s are able to create an account, upload images to posts, comment on posts, and follow/unfollow users.
                <a href="https://flask-instagram-clone.herokuapp.com/" target="_blank">Live Site</a>
                </p>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
