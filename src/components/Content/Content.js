import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import img4 from "../../img/img4.png";
import { BsFillArrowUpCircleFill, BsThreeDots } from "react-icons/bs";
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

import "./Content.css";

const Content = () => {
  const [mobileText, setMobileText] = useState(false);

  const changeScreenWidth = () => {
    window.innerWidth <= 786 ? setMobileText(true) : setMobileText(false);
  };

  window.addEventListener("resize", changeScreenWidth);

  const data = [
    {
      year: "Jan",
      Incomes: 200,
      Expenses: 300,
    },
    {
      year: "Feb",
      Incomes: 300,
      Expenses: 300,
    },
    {
      year: "Mar",
      Incomes: 400,
      Expenses: 300,
    },
    {
      year: "Apr",
      Incomes: 500,
      Expenses: 400,
    },
    {
      year: "May",
      Incomes: 400,
      Expenses: 500,
    },
    {
      year: "Jun",
      Incomes: 500,
      Expenses: 400,
    },
    {
      year: "Jul",
      Incomes: 300,
      Expenses: 500,
    },
    {
      year: "Aug",
      Incomes: 400,
      Expenses: 600,
    },
    {
      year: "Sep",
      Incomes: 300,
      Expenses: 700,
    },
    {
      year: "Oct",
      Incomes: 500,
      Expenses: 600,
    },
    {
      year: "Nov",
      Incomes: 400,
      Expenses: 700,
    },
    {
      year: "Dec",
      Incomes: 500,
      Expenses: 500,
    },
  ];

  const radarData = [
    {
      subject: "Shoes",
      A: 120,
      B: 110,
    },
    {
      subject: "Jeans",
      A: 98,
      B: 130,
    },
    {
      subject: "Accessories",
      A: 86,
      B: 130,
    },
    {
      subject: "T-shirts",
      A: 99,
      B: 100,
    },
    {
      subject: "Outwear",
      A: 85,
      B: 90,
    },
  ];

  const productData = [
    {
      img: "https://www.mysportskit.com.ng/wp-content/uploads/2022/09/15.jpg",
      name: "PSG Stadium 20/21",
      variant: "3 Variants",
      baseId: "SKU:",
      id: "8600844",
      brand: "Jerseys",
      date: "12.11.2020",
      btn: "Published",
    },
    {
      img: "https://basketballjerseyarchive.com/image/2022/11/01/Vs5OuFDZNT8GMAL-small/los-angeles-lakers-2022-23-classic-jersey.jpg",
      name: "Los Angles Lakers City",
      variant: "5 Variants",
      baseId: "SKU:",
      id: "8608647",
      brand: "Jerseys",
      date: "12.11.2020",
      btn: "Pending",
    },
    {
      img: "https://i.ebayimg.com/images/g/vzUAAOSwEC5iAHzI/s-l500.jpg",
      name: "Miami Heat Courtside",
      variant: "4 Variants",
      baseId: "SKU:",
      id: "8609824",
      brand: "Outwear",
      date: "10.11.2020",
      btn: "Published",
    },
    {
      img: "https://media.very.co.uk/i/very/QAGJE_SQ1_0000000017_RED_MDf?$300x400_retinamobilex2$",
      name: "Liverpool 20/21 Stadium",
      variant: "3 Variants",
      baseId: "SKU:",
      id: "8609474",
      brand: "Jerseys",
      date: "07.11.2020",
      btn: "Published",
    },
  ];
  return (
    <div className="content">
      <div className="content__header">
        <div className="input__wrapper">
          <input type="text" placeholder="Search..." />
          <GoSearch />
        </div>
        <div className="header__content-right">
          <div className="header__content-right-left">
            <p>jamesbrown@example.com</p>
            <small>Admin</small>
          </div>
          <img
            src="https://media.istockphoto.com/id/507480872/photo/portrait-of-a-mature-man-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=NxdsjGEFiYBXOEzRzVVQrFlMrEpyZVtuhDNi-zxndJ8="
            alt=""
          />
        </div>
      </div>
      <div className="content__middle-row">
        <div className="content__middle-row-header">
          <p>Sales Overview</p>
          <button>
            <FiPlus />
            Add offer
          </button>
        </div>
        <hr className="hr" />
        <div className="content__graph-container">
          <div className="graph__container-left">
            <h1>80,630</h1>
            <BsFillArrowUpCircleFill className="arrowUp" />
            <small>
              <FiPlus />
              6,7%
            </small>
          </div>
          <div className="graph__container-right">
            <ul>
              <li>Incomes</li>
              <li>Expenses</li>
            </ul>
            <select>
              <option value="year">Year</option>
            </select>
          </div>
        </div>
        <div className="graph__wrapper">
          <ResponsiveContainer width="100%" aspect={6}>
            <AreaChart
              width={mobileText ? 700 : 1200}
              height={250}
              data={data}
              margin={{
                top: 1,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="year" />
              {/* <YAxis /> */}
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Expenses"
                stroke="#D97FBF"
                fill="#D97FBF"
                activeDot={{ r: 8 }}
              />
              <Area
                type="monotone"
                dataKey="Incomes"
                stroke="#799FE9"
                fill="#799FE9"
                activeDot={{ r: 8 }}
              />
              <CartesianGrid stroke="#EEEEEF" strokeDasharray={1} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="content__card-wrapper">
        <img src={img1} alt="card" />
        <img src={img2} alt="card" />
        <img src={img3} alt="card" />
        <img src={img4} alt="card" />
      </div>
      <div className="content__bottom">
        <div className="content__bottom-left">
          <div className="rader__wrapper">
            <p>Top Selling Categories</p>
            <ResponsiveContainer width="100%" aspect={1}>
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={radarData}
                margin={{
                  top: 1,
                  right: 40,
                  left: 30,
                  bottom: 5,
                }}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar
                  dataKey="A"
                  stroke="#D39DCA"
                  fill="#D39DCA"
                  fillOpacity={0.6}
                />
                <Radar
                  dataKey="B"
                  stroke="#5691E6"
                  fill="#5691E6"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="content__bottom-right">
          <div className="added__breakdown">
            <div className="added__breakdown-header">
              <p>Latest Added Products</p>
              <BsThreeDots />
            </div>
          </div>
          <div className="items__wrapper">
            {productData.map(
              ({ img, name, variant, baseId, id, brand, date, btn }) => (
                <div className="added__breakdown-content">
                  <img src={img} alt={name} />
                  <div className="nameAndAvailable">
                    <p className="first-child">{name}</p>
                    <small>{variant}</small>
                  </div>
                  <p className="second-child">
                    {baseId}
                    <span>{id}</span>
                  </p>
                        <p className="third-child">{brand}</p>
                        <p className="fourth-child">{date}</p>
                        <button className={btn.toLocaleLowerCase()}>{btn}</button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
