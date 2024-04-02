import React from "react";
import "./MiniCards.css";
import USD from "../../src/Usd.png";
import EUR from "../../src/Eur.png";
import GBP from "../../src/Gbp.png";

const MiniCards = (props) => {
  console.log(props.name);
  return (
    <div className="miniCharts">
      <ul className="cards_list">
        <li>
          <div className="img_name">
            <img className="usd_img" src={USD} alt="" />
            <p style={{ marginLeft: "-15px" }}>{props.name.USD.code}</p>
          </div>
          <p className="description">{props.name.USD.description}</p>
          <p className="rate">Rate:- {props.name.USD.rate}</p>
          <div className="footer">
            <i class="ri-error-warning-line waringError"></i>
            <button className="trade_btn">Trade</button>
          </div>
        </li>
        <li>
          <div className="img_name">
            <img className="eur_img" src={EUR} alt="" />
            <p>{props.name.EUR.code}</p>
          </div>
          <p className="description">{props.name.EUR.description}</p>
          <p className="rate">Rate:- {props.name.EUR.rate}</p>
          <div className="footer">
            <i class="ri-error-warning-line waringErrorBlue"></i>
            <button className="trade_Bluebtn">Trade</button>
          </div>
        </li>
        <li>
          <div className="img_name">
            <img className="gbp_img" src={GBP} alt="" />
            <p>{props.name.GBP.code}</p>
          </div>
          <p className="description">{props.name.GBP.description}</p>
          <p className="rate">Rate:- {props.name.GBP.rate}</p>
          <div className="footer">
            <i class="ri-error-warning-line waringErrorYellow"></i>
            <button className="trade_Yellowbtn">Trade</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MiniCards;
