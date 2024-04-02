import React from "react";
import "./Main.css";
import Chart from "./Chart";
import { IoCubeOutline } from "react-icons/io5";

const Main = () => {
  return (
    <div className="main_Container">
      {/* left Section */}
      <aside className="left_section">
        {/* carbon Cell logo */}
        <div className="logo">
          <img
            src="https://carboncell.io/assets/img/logo2.png"
            alt="carbon_logo"
          />
          <i class="ri-menu-line menu"></i>
        </div>

        {/* Search Here */}
        <div class="inp_bar">
          <input type="text" name="text" class="input" placeholder="Search" />
          <button class="search__btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22"
              height="22"
            >
              <path
                d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                fill="#efeff1"
              ></path>
            </svg>
          </button>
        </div>

        {/* Left Side Lists */}
        <div className="lists">
          <ul>
            <li style={{ color: "rgb(39,145,39)" }}>
              <i class="ri-home-4-line"></i>
              <p>Home</p>
            </li>
            <li>
              <i class="ri-building-line"></i>
              <p>Organization</p>
            </li>
            <li>
              <IoCubeOutline />
              <p>Assets</p>
            </li>
            <li>
              <i class="ri-arrow-up-down-fill"></i>
              <p>Trade</p>
            </li>
            <li>
              <i class="ri-hourglass-line"></i>
              <p>History</p>
            </li>
            <li>
              <i class="ri-wallet-line"></i>
              <p>Wallet</p>
            </li>
          </ul>
        </div>
        {/* Second List */}
        <div className="sec_lists">
          <ul>
            <li>
              <i class="ri-notification-4-line"></i>
              <p>Notifications</p>
            </li>
            <li>
              <i class="ri-question-line"></i>
              <p>Support</p>
            </li>
            <li>
              <i class="ri-settings-5-line"></i>
              <p>Settings</p>
            </li>
          </ul>
        </div>
        {/* Profile Section */}
        <div className="profile">
          <div className="circle">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile.png"
            />
          </div>
          <div className="name_email">
            <p className="name">Brooklyn Simmons</p>
            <p className="mail">brooklyn@simmons.com</p>
          </div>
          <div className="icon">
            <i class="ri-more-2-line"></i>
          </div>
        </div>
      </aside>

      {/* right Container */}
      <aside className="right_section">
        <div className="right">
          <div className="companyName">
            <i class="ri-menu-line menu close"></i>
            <div className="names">
              <p className="hello">
                Hello, <span className="tagName">Brooklyn Simmons </span>👋
              </p>
              <p className="spot_trad">
                Welcome to <span className="green_spot"> Spot trading !</span>
              </p>
            </div>
            <button className="start_btn">Start Trading</button>
          </div>
          <Chart />
        </div>
      </aside>
    </div>
  );
};

export default Main;
