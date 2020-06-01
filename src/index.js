import React from "react";
import ReactDOM from "react-dom";

import Image from "./component/image";
import WithGrayScale from "./component/withGrayScale";

import "./styles.css";

const WithGrayScaleImage = WithGrayScale(Image);

function App() {
  return (
    <div className="App">
      <WithGrayScaleImage src="https://cdn.pixabay.com/photo/2020/05/26/09/01/night-5222267__340.jpg" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
