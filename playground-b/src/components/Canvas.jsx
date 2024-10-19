import React, { useRef, useEffect } from "react";
import Player from "../classes/Player";
import { handleKeyDown, handleKeyUp } from "./Events"

export default function Canvas() {
  /**
   * Once you create a ref using useRef, you can access its .current property
   * directly, similar to how a getter allows access to a class's private fields
   * in java
   */
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current; // "getter"
    const context = canvas.getContext("2d"); // get 2d context from canvas
    contextRef.current = context; // store for later usage

    const player = new Player();

    // need this to fix bug when holding d, holding a, and letting go of a while d is still being held
    const keys = {
      w: {
        pressed: false,
      },
      a: {
        pressed: false,
      },
      d: {
        pressed: false,
      },
    };

    function animate() {
      window.requestAnimationFrame(animate);

      // draw the background
      context.fillStyle = "white";
      context.fillRect(0, 0, canvas.width, canvas.height);

      // change speed depending on events
      player.velocity.x = 0;

      if (keys.d.pressed) {
        player.velocity.x = 4;
      } else if (keys.a.pressed) {
        player.velocity.x = -4;
      }

      player.draw(context);
      player.update(canvas);
    }

    animate();

    handleKeyDown(player, keys);
    handleKeyUp(keys);

  }, []);

  return (
    <>
      <canvas ref={canvasRef} width={1024} height={576} />
    </>
  );
}
