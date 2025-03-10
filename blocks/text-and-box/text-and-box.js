/**
 * Create new DOM element with tag name and class name.
 * @param tagName tag name
 * @param className class name
 * @returns created element
 */
function createElement(tagName, className) {
  const element = document.createElement(tagName);
  if (className) {
    element.classList.add(className);
  }
  return element;
}

export default async function decorate(block) {
  const [title, text, boxIconTitle, boxText] = block.querySelectorAll(':scope > div > div');
  const content = createElement('div', '');
  const boxPanel = createElement('div', 'box-panel');
  boxIconTitle.classList.add('box-head');
  content.append(title);
  content.append(text);
  boxPanel.append(boxIconTitle);
  boxPanel.append(boxText);
  content.append(boxPanel);
  block.replaceChildren(...content.children);
}
