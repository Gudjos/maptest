document.querySelector('svg').addEventListener('click', handleClick);

function handleClick(event) {
  const svg = event.currentTarget;
  const flagsGroup = document.getElementById('flags');
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;

  const cursorPoint = point.matrixTransform(svg.getScreenCTM().inverse());
  const x = cursorPoint.x;
  const y = cursorPoint.y;

  console.log('Clicked coordinates:', x, y);

  // Create the flag element
  const flag = document.createElementNS('http://www.w3.org/2000/svg', 'image');
  flag.setAttribute('class', 'flag');
  flag.setAttribute('x', x - 10);
  flag.setAttribute('y', y - 20);
  flag.setAttribute('width', '20');
  flag.setAttribute('height', '30');
  flag.setAttribute('href', './pin.png')

  // Append the flag to the flags group
  svg.appendChild(flag);
}