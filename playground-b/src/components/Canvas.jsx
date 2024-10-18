import React, { useRef, useEffect } from "react";

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

    // Draw something on the canvas
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    animate();
  }, []);

  let y = 100;
  let bottom = y + 100;
  const height = 100;

  function animate() {
    const canvas = canvasRef.current;
    const context = contextRef.current;

    window.requestAnimationFrame(animate);

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Redraw the background
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "red";
    context.fillRect(100, y, 100, height);

    if (bottom < canvas.height) {
      y++;
      bottom = y + 100;
    }
  }

  return (
    <>
      <canvas ref={canvasRef} width={1024} height={576} />
    </>
  );
}
