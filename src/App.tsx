import { center, circle, hstack } from "../styled-system/patterns";
import { css } from "../styled-system/css";

function App() {
  return (
    <div className={center({ height: "100vh" })}>
      <div
        className={css({
          border: "3px solid black",
          boxShadow: "4px 4px 0 black",
          rounded: "13px",
          padding: 6,
          maxW: "388px",
          display: "grid",
          gap: 4,
        })}
      >
        <div className={hstack({ gap: 4 })}>
          <div className={circle({ size: 12, overflow: "hidden" })}>
            <img
              src="https://capecoraltech.edu/wp-content/uploads/2016/01/tutor-8-3.jpg"
              alt="John Doe"
              height="120px"
              width="120px"
            />
          </div>

          <div>
            <h2 className={css({ fontWeight: 600 })}>John Doe</h2>
            <p className={css({ color: "#7d7d7d" })}>@john_doe</p>
          </div>
        </div>

        <blockquote className={css({ fontSize: 17 })}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Magni ullam vel placeat provident corrupti tempora aut.
          Necessitatibus, cumque nesciunt totam recusandae voluptate
          quasi veritatis velit! Tempora voluptas recusandae eligendi?
          Recusandae perferendis doloribus facilis consequuntur?
          Beatae nisi enim ipsam in quidem.
        </blockquote>
      </div>
    </div>
  );
}

export default App;
