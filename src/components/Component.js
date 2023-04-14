import React from "react";

export default function BiComponent(props) {
  const { data, dateChange, currentDate } = props;
  function dateChangeHandler(e) {
    console.log(e.target.value);
    dateChange(e.target.value);
  }
  if (!data) return <h3>Yükleniyor...</h3>;
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${data.hdurl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <div className="content">
        <div className="headingDiv">
          <div className="topPart">
            <h1 className="heading">
              How Does the Sky <br />
              Look Like Today?
            </h1>
            <div className="column">
              <img src={data.hdurl} alt={data.title} width="600" height="700" />
              <p className="date">{data.date}</p>
            </div>
          </div>
        </div>
        <div className="secondPart">
          <div className="dateChoose">
            <h3>Choose Date and See the Sky !</h3>
            <label htmlFor="apodDate">apodDate:</label>
            <input
              onChange={(e) => dateChangeHandler(e)}
              type="date"
              value={currentDate}
              name="apodDate"
              style={{ fontSize: "1.5rem" }}
            />
          </div>
          <div className="explain">
            <p>{data.explanation}</p>
            <p>{data.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
