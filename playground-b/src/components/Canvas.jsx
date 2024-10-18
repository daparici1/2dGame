import React, { useRef, useEffect } from "react";
import Player from '../classes/Player'

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

    function animate() {
      window.requestAnimationFrame(animate);

      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Redraw the background
      context.fillStyle = "white";
      context.fillRect(0, 0, canvas.width, canvas.height);

      player.draw(context);
      player.update(canvas);
    }

    animate();
  }, []);

  return (
    <>
      <canvas ref={canvasRef} width={1024} height={576} />
    </>
  );
}
