---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">
<script src="https://unpkg.com/gitalk/dist/gitalk.min.js"></script>

<div id="gitalk-container"></div>
<script>
var gitalk = new Gitalk({
  clientID: 'db747d7ee2d5c9e0fe3d',
  clientSecret: '7fbdb348afce35a33f8c0a1faebfdfffe213d09a',
  repo: 'crow02531.github.io',
  owner: 'crow02531',
  admin: ['crow02531'],
  id: location.pathname,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false, // Facebook-like distraction free mode
  language:'zh-CN'
})

gitalk.render('gitalk-container')
</script>