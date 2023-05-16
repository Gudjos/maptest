document.querySelector('svg').addEventListener('click', handleClick);

function handleClick(event) {
    const svg = event.currentTarget;
    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
  
    const cursorPoint = point.matrixTransform(svg.getScreenCTM().inverse());
    const x = cursorPoint.x;
    const y = cursorPoint.y;
  
    console.log('Clicked coordinates:', x, y);
  }