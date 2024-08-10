import React, { useState } from "react";
import { AnimateOnView } from "react-animate-onview";
import "./App.css";

const Section = ({ title, children, ...props }) => (
  <div className="section">
    <h2>{title}</h2>
    {children}
  </div>
);

const ColorfulBox = ({ color, size = 100 }) => (
  <div
    className="colorful-box"
    style={{
      backgroundColor: color,
      width: `${size}px`,
      height: `${size}px`,
    }}
  ></div>
);

const BouncingBox = ({ color }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div
      className={`bouncing-box ${isAnimating ? "animate" : ""}`}
      style={{ backgroundColor: color }}
      onMouseEnter={() => setIsAnimating(true)}
      onAnimationEnd={() => setIsAnimating(false)}
    ></div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AnimateOnView animation="zoomIn" duration={1.5}>
          <h1>React Animate OnView</h1>
          <p>Now with staggered animations!</p>
        </AnimateOnView>
      </header>

      <Section title="Staggered Fade In">
        <AnimateOnView animation="fadeInFromBottom" staggerDelay={0.2}>
          <h3>First Element</h3>
          <p>Second Element with some explanatory text.</p>
          <button>Third Element (Button)</button>
          <div className="flex-container">
            {["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"].map(
              (color) => (
                <ColorfulBox key={color} color={color} />
              )
            )}
          </div>
        </AnimateOnView>
      </Section>

      <Section title="Staggered Zoom In">
        <AnimateOnView
          animation="zoomIn"
          staggerDelay={0.15}
          viewportAmount={0.3}
        >
          <h3>Zoom Stagger</h3>
          <div className="flex-container">
            {["#FF6B6B", "#4ECDC4", "#45B7D1"].map((color) => (
              <BouncingBox key={color} color={color} />
            ))}
          </div>
          <p>
            These elements zoom in with a stagger effect. Hover to see them
            bounce!
          </p>
        </AnimateOnView>
      </Section>

      <Section title="Staggered Slide-in Gallery">
        <AnimateOnView animation="fadeInFromLeft" staggerDelay={0.2}>
          <ColorfulBox color="#FF6B6B" size={150} />
          <ColorfulBox color="#4ECDC4" size={100} />
          <ColorfulBox color="#45B7D1" size={75} />
          <p>Each box slides in from the left with a stagger effect!</p>
        </AnimateOnView>
      </Section>

      <Section title="Staggered Rotate">
        <AnimateOnView animation="rotateIn" duration={1.5} staggerDelay={0.3}>
          <div className="rotate-container">
            <ColorfulBox color="#FFA07A" />
          </div>
          <div className="rotate-container">
            <ColorfulBox color="#98D8C8" />
          </div>
          <p>Smooth staggered rotation, no overflow!</p>
        </AnimateOnView>
      </Section>

      <Section title="Staggered Pulsating Grid">
        <AnimateOnView
          animation="zoomIn"
          staggerDelay={0.1}
          viewportOnce={false}
        >
          <div className="grid-container">
            {Array(9)
              .fill()
              .map((_, i) => (
                <div
                  key={i}
                  className="grid-item"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    backgroundColor: `hsl(${i * 40}, 70%, 60%)`,
                  }}
                ></div>
              ))}
          </div>
          <p>A pulsating grid with staggered entrance!</p>
        </AnimateOnView>
      </Section>

      <footer>
        <AnimateOnView animation="fadeInFromBottom">
          <p>You've reached the end! Scroll up to replay animations.</p>
        </AnimateOnView>
      </footer>
    </div>
  );
}

export default App;
