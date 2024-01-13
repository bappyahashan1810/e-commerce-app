import React from "react";
import { Link } from "react-router-dom";
import { ImBackward2 } from "react-icons/im";
import { FaForward } from "react-icons/fa";

const Pagination = ({ page, perpage, count, path }) => {
  console.log(page, perpage, count);
  const totalLink = Math.ceil(count / perpage);
  let startLoop = page;
  let diff = totalLink - page;
  if (diff <= 3) {
    startLoop = totalLink - 3;
  }
  let endLoop = startLoop + 3;
  if (startLoop <= 0) {
    startLoop = 1;
  }

  const links = () => {
    let allLinks = [];
    for (let i = startLoop; i <= endLoop; i++) {
      allLinks.push(
        <li
          key={i}
          className={`${page === i && "bg-gray-300 px-2 rounded-md"}`}
        >
          <Link to={`/${path}/${i}`}>{i}</Link>
        </li>
      );
    }
    return allLinks;
  };
  const next = () => {
    if (page < totalLink) {
      return (
        <li>
          <Link to={`/${path}/${page + 1}`}>
            <FaForward className="text-xl" />
          </Link>
        </li>
      );
    }
  };
  const pre = () => {
    if (page > 1) {
      return (
        <li>
          <Link to={`/${path}/${page - 1}`}>
            <ImBackward2 className="text-2xl" />
          </Link>
        </li>
      );
    }
  };
  return (
    count > perpage && (
      <ul className="flex justify-center space-x-5 text-gray-400 bg-gray-800 p-4">
        {pre()}
        {links()}
        {next()}
      </ul>
    )
  );
};

export default Pagination;
