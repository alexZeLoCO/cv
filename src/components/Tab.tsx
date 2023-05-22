import "../App.scss";
import { useState } from "react";

export const Tab = (
  props: {
    data:{
        tabTitle: string;
        contentTitle: string;
        content: JSX.Element;
        }[]
    }
) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (n: number) => {
    setToggleState(n);
  };
  return (
    <div className="container">
      <div className="bloc-tabs">
        {props.data.map((item) => {
          let idx: number = props.data.indexOf(item);
          return (
            <button
              className={toggleState === idx ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(idx)}
            >
              {item.tabTitle}
            </button>
          );
        })}
      </div>
      <div className="content-tabs">
        {props.data.map((item) => {
          let idx: number = props.data.indexOf(item);
          return (
            <div
              className={
                toggleState === idx ? "content active-content" : "content"
              }
              onClick={() => toggleTab(idx)}
            >
              <h2>{item.contentTitle}</h2>
              {item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};
