import React from "react";

export default function Counter(props: { title: any; number: any }) {
  return (
    <div className="counter">
      <p className="counter-number">{props.number}</p>
      <h3 className="counter-text">{props.title}</h3>
    </div>
  );
}
