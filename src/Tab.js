import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

function Tab({ tab }) {
  const [isActive, setIsActive] = useState(false);
  const { title, dates, duties, company } = tab;

  return (
    <>
      <div className="jobs-center">
        <div>
          <button
            className="job-btn"
            onClick={(e) => {
              e.target.classList.toggle("active-btn");
              return setIsActive(!isActive);
            }}
          >
            {company}
          </button>
        </div>
        {isActive && (
          <div className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            <ul className="jobs-info">
              {duties.map((duty) => (
                <li className="job-disc">
                  <span className="job-icon">
                    <FaAngleDoubleRight />
                  </span>
                  <span>{duty}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Tab;
