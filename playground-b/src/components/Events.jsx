export function handleKeyDown(player, keys) {
  window.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "w":
        if (player.velocity.y === 0) {
          player.velocity.y = -7; // Jump
        }
        break;
      case "a":
        keys.a.pressed = true; // Move left
        break;
      case "d":
        keys.d.pressed = true; // Move right
        break;
      default:
        break;
    }
  });
}

export function handleKeyUp(keys) {
  window.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "a":
        keys.a.pressed = false; // Stop moving left
        break;
      case "d":
        keys.d.pressed = false; // Stop moving right
        break;
      default:
        break;
    }
  });
}
