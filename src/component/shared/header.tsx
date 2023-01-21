import { FC, useEffect, useState } from "react";

import headerBg from "./../../assets/blob-header.svg";
import headerMobile from "../../assets/blo-header-mobile.svg";
import groway from "../../assets/groway-black.svg";
import groway_mobile from "../../assets/groway-black2.svg";
import groway_mobile_gray from "../../assets/groway-gray.svg";

import "./../../sass/shared/_header.scss";
import { Link } from "react-router-dom";

interface Props {
  image?: boolean;
}

const Header: FC<Props> = ({ image = false }) => {
  const [width, setWidth] = useState(0);
  //scroll.scrollToTop();

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", () => {});
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <img
        src={width < 700 ? headerMobile : headerBg}
        className="headerBg"
        alt="headerBg"
        draggable={false}
      />

      <div
        className="navMenu"
      >
        <Link to="/">
          <img
            src={
              width < 700
                ? image
                  ? groway_mobile_gray
                  : groway_mobile
                : image
                ? groway_mobile_gray
                : groway
            }
            draggable={false}
            alt="Groway.Academy"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
