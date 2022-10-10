export function getRandomHexColor() {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  if (color.length < 7)
    color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  if (color.length < 7)
    color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  if (color !== '#ffffff') {
    return color;
  } else {
    getRandomHexColor();
  }
}
