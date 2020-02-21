import React, { useState } from "react";
import ReactDOM from "react-dom";
import Badge from "./badge";

import "./styles.css";
import "./whatsapp.css";

const data = {
  title: "HackerRank Hiring Test - November 2019",
  subTitle: "10 MCQ + 5 Coding Questions",
  status: "Pending",
  score: "48/50",
  linkText: "View Report",
  para:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
};

const dummyData = {
  title: "A ".repeat(20),
  subTitle: "A ".repeat(20),
  status: "A ".repeat(7),
  score: "A ".repeat(7),
  linkText: "A".repeat(10),
  para: " .A ".repeat(100)
};

const Stensiler = ({ children }) => {
  return <div className="enable-stensil">{children}</div>;
};

const StensilList = ({ Component, dummyDataConfig, length }) => {
  const dummyData = Object.keys(dummyDataConfig).reduce((r, i) => {
    r[i] = " .".repeat(dummyDataConfig[i]);
    return r;
  }, {});
  return [...Array(length)].map((_, index) => (
    <Stensiler key={index}>
      <Component {...dummyData} />
    </Stensiler>
  ));
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setLoading(!loading)}>
        {loading ? "Turn off Loading" : "Turn on Loading"}
      </button>
      {loading ? (
        <StensilList
          length={6}
          Component={Card}
          dummyDataConfig={{
            title: 40,
            subTitle: 20,
            status: 7,
            score: 7,
            linkText: 10,
            para: 100
          }}
        />
      ) : (
        [wData, wData, wData].map(_ => <WhatsAppCard {..._} />)
      )}
    </div>
  );
}

const Card = props => {
  return (
    <div className="card">
      <div className="left-panel">
        <div className="part upper-part">
          <span data-loader-stencil="true" className="title stensil">
            {props.title}
          </span>
          <span data-loader-stencil="true" className="sub-title stensil">
            {props.subTitle}
          </span>
        </div>
        <p className="para stensil">{props.para}</p>
        <div className="part lower-part">
          <span data-stencil="true" className="status stensil">
            Status: {props.status}
          </span>
          <span data-stencil="true" className="score stensil">
            Score: {props.score}
          </span>
        </div>
      </div>
      <div className="right-panel">
        <div className="icon stensil-ignore">
          <Badge />
        </div>
        <span data-loader-stencil="true" className="link-text stensil">
          {props.linkText}
        </span>
      </div>
    </div>
  );
};

const wData = {
  name: "Mr Developer",
  avatar:
    "https://clipartstation.com/wp-content/uploads/2017/11/software-developer-clipart-5.jpg",
  lastChat: "I created stensils !!!",
  lastSeen: "12:30 PM"
};

const WhatsAppCard = props => (
  <div className="whatsapp-card">
    <div className="whatsapp-avatar stensil">
      <img src={props.avatar} alt={props.name} className="stensil-ignore" />
    </div>
    <div className="whatsapp-chat-frame">
      <span className="whatsapp-name stensil">{props.name}</span>
      <p className="whatsapp-last-chat stensil">{props.lastChat}</p>
    </div>
    <div className="whatsapp-right-block">
      <div className="stensil">{props.lastSeen}</div>
    </div>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
