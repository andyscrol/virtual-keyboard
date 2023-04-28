window.onload = () => {
  // Create wrapper div
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  document.body.appendChild(wrapper);

  // Create textarea
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  wrapper.appendChild(textarea);

  // Create keyboard div
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  wrapper.appendChild(keyboard);

  // Add description
  const description = document.createElement('h1');
  description.innerText = 'Change language: Shift + Ctrl\nCreated on Windows OS';
  description.classList.add('description');
  wrapper.appendChild(description);
};
