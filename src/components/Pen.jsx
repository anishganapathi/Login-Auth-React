import React, { useEffect } from 'react';
import "../components/css/pen.css";

const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Pen = () => {
  useEffect(() => {
    const h1Element = document.querySelector("h1");

    const handleMouseOver = (event) => {
      let iteration = 0;
      const interval = setInterval(() => {
        event.target.innerHTML = event.target.innerHTML
          .split("")
          .map((letters, index) => {
            if (index < Math.floor(Math.random() * iteration)) {
              return event.target.dataset.value[index];
            }
            return letter[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (event.target.innerHTML === event.target.dataset.value) {
          clearInterval(interval);
        }

        iteration += 1;
      }, 30);
    };

    h1Element.addEventListener("mouseover", handleMouseOver);

    return () => {
      h1Element.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div>
      <h1 data-value="Victor Juarez">Victor Juarez</h1>
    </div>
  );
}

export default Pen;
