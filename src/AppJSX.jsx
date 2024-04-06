import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

function AppJSX() {
  const name = "정헌";
  const list = ["우유", "딸기", "바나나", "요거트"];
  const style = { width: "200px", height: "200px" };
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <p>{name}</p>
      <ul style={style}>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
