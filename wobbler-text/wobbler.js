window.addEventListener('load', function() {
  let nodes = document.querySelectorAll('.wobbly');

  for (let i = 0; i < nodes.length; i++) {
    let text = nodes[i].innerText;
    let html = '';
    for (let i2 = 0; i2 < text.length; i2++) {
      if (text[i2] == ' ') {
        html += ' ';
      } else {
        html += '<span>' + text[i2] + '</span>';
      }
      nodes[i].innerHTML = html;
    }
  }
});
