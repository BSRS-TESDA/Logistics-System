const textElement = document.querySelector('.error');

window.addEventListener('mousemove', (event) => {
  // Calculate relative cursor position within the text element's bounding box
  const boundingRect = textElement.getBoundingClientRect();
  const relativeX = event.clientX - boundingRect.left;
  const relativeY = event.clientY - boundingRect.top;

  // Calculate normalized cursor position (0-1)
  const normalizedX = relativeX / boundingRect.width;
  const normalizedY = relativeY / boundingRect.height;

  // Adjust shadow offset based on normalized position
  const shadowOffsetX = (normalizedX - 0.5) * 25; Range: -25 - 25;
  const shadowOffsetY = (normalizedY - 0.5) * 25; Range: -25 - 25;

  // Update text shadow style with calculated offsets
  textElement.style.textShadow = `
    1px 1px 1px #00593E,
    2px 2px 1px #00593E,
    3px 3px 1px #00593E,
    4px 4px 1px #00593E,
    5px 5px 1px #00593E,
    6px 6px 1px #00593E,
    7px 7px 1px #00593E,
    8px 8px 1px #00593E,
    ${shadowOffsetX}px ${shadowOffsetY}px 1px #00593E
  `;
});


window.addEventListener("mouseleave", function(){
    textElement.style.textShadow = `
    1px 1px 1px #00593E,    
    2px 2px 1px #00593E,
    3px 3px 1px #00593E,
    4px 4px 1px #00593E,
    5px 5px 1px #00593E,
    6px 6px 1px #00593E,
    7px 7px 1px #00593E,
    8px 8px 1px #00593E,
    25px 25px 8px rgba(0,0,0, 0.2)
  `;
})