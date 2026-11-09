import "../src/style.css";
import { Application, Graphics } from "pixi.js";

const app = new Application();

await app.init({
  resizeTo: window,
  background: "#1e1e1e",
});

document.body.appendChild(app.canvas);

const circle = new Graphics()
  .circle(50, 50, 50)
  .fill(0x00ff00);

app.stage.addChild(circle);

const recenter = () => {
  circle.position.set(
    app.screen.width / 2 - 50,
    app.screen.height / 2 - 50,
  );
};

const observer = new ResizeObserver(recenter);
observer.observe(document.body);

recenter();
