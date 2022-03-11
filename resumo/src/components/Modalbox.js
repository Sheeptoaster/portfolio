import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const Modalbox = ({ close, value }) => {
  const data = [
    {
      name: "For All The Marbles",
      tag: "Stock Market Simulation, Solo",
      desc: [
        { p: "For All The Marbles is a site based around Robinhood that allows users to buy and sell stocks from their favorite companies, and even create and list their own companies." }
      ],
      img: "img/portfolio/forallthemarbles.png",
      link: "https://capstone-fotm.herokuapp.com/",
      repoLink: "https://github.com/Sheeptoaster/Capstone"
    },
    {
      name: "ReTappd",
      tag: "Web App Inspired by UnTappd, Solo",
      desc: [
        { p: "ReTappd is a clone of UnTappd that allows users to check in at famous bars around the world and share their thoughts." }
      ],
      img: "img/portfolio/retappd.png",
      link: "https://aa-solo-project.herokuapp.com/",
      repoLink: "https://github.com/Sheeptoaster/W15-Solo-Project"
    },
    {
      name: "Insta-Clone",
      tag: "Instagram Clone, 4 Person Group",
      desc: [
        { p: "Insta-Clone is an Instagram clone where user’s are able to create an account, upload images to posts, comment on posts, and follow/unfollow users."}
      ],
      img: "img/portfolio/instaclone.png",
      link: "https://flask-instagram-clone.herokuapp.com/",
      repoLink: "https://github.com/jinnie96/Instagram-Clone"
    },
    {
      name: "Extension Hunt",
      tag: "Take on ProductHunt, 4 Person Group",
      desc: [
        { p: "Extension Hunt is a clone of Product Hunt that allows users to share their favorite extensions from VSCode and also allows users to share their thoughts on those extensions." }
      ],
      img: "img/portfolio/extensionhunt.png",
      link: "https://extension-hunt.herokuapp.com/",
      repoLink: "https://github.com/ntseng/w12-groupproject"
    },
  ];

  const [index, setIndex] = useState(value);
  useEffect(() => {
    dataImage();
  }, [index]);

  return (
    <div className="resumo_fn_modalbox opened">
      <a
        className="extra_closer"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          close(false);
        }}
      />
      <div className="box_inner">
        <a
          className="closer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            close(false);
          }}
        >
          <span />
        </a>
        <div className="modal_content">
          <div className="modal_in">
            {data.map(
              (d, i) =>
                i + 1 == index && (
                  <div key={i}>
                    <p className="fn__cat">{d.tag}</p>
                    <h3 className="fn__title"><a href={d.link} target="_blank">{d.name}</a></h3>
                    <div className="img_holder_modal">
                      <img src="/img/thumb/square.jpg" alt="" />
                      <div
                        className="abs_img"
                        data-bg-img={d.img}
                      />
                    </div>
                    {d.desc.map((des,i) => (
                      <p key={i} className="fn__desc">
                        {des.p}
                      </p>
                    ))}
                    <a href={d.repoLink} target="_blank" className="fn__desc">Repo Link</a>
                  </div>
                )
            )}
          </div>

          <div className="fn__nav" data-from="portfolio" data-index="1">
            <a
              href="#"
              className="prev"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 1 ? 4 : index - 1);
              }}
            >
              <span className="text">Prev</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
            <a
              href="#"
              className="next"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 4 ? 1 : index + 1);
              }}
            >
              <span className="text">Next</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalbox;
