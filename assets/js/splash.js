---
---

var splash_list = ["{{ site.data.splash | join: '", "' }}"];

function assign_splash(id) {
  document.getElementById(id).innerHTML = splash_list[Math.floor(Math.random() * splash_list.length)];
}
