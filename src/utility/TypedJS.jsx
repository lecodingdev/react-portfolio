/* eslint-disable react/prop-types */
import React from "react";
import Typed from "typed.js";

export default function TypedJS({ string, loop, speed, disableCursor }) {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: string,
      typeSpeed: speed || 30,
      backSpeed: 50,
      loop: loop || false,
      showCursor: !disableCursor,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}