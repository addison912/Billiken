import popmotion from "popmotion";
//const popmotion = require("popmotion");

const { styler, spring, listen, pointer, value } = popmotion;

const frames = document.getElementsByClassName("app-frame");

for (let i = 0; i < frames.length; i++) {
  let divStyler = styler(frames[i]);
  let ballXY = value({ x: 0, y: 0 }, divStyler.set);
  listen(frames[i], "mousedown touchstart").start(e => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

  listen(document, "mouseup touchend").start(() => {
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      mass: 0.3
      // damping: 10
    }).start(ballXY);
  });
}
