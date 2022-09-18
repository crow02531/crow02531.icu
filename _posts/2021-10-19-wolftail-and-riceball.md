---
layout: post
title:  "Wolftail与Riceball实现第一人称控制非EntityPlayer实体，新的种族实现方法是否有望？"
date:   2021-10-19 14:9:55 +0800
categories: post coding
---

种族模组一直是Minecraft里的坑，传统的实现思路是对EntityPlayer进行修饰，例如说更改相关的渲染代码来改变玩家的外形，更改逻辑代码以实现种族的某些特性，使用这种方法的一个经典例子是血族传说，一个稳定且之知名的模组。

传统方法看起来不错，也确实能够应付绝大多数需求，特别是当种族是EntityPlayer的“加强变种”的时候这种方法简直完美。可如果碰上要实现的种族同EntityPlayer相差巨大，走完全不同的游戏逻辑的时候，这种方法就是地狱了。Riceball就是这样一个模组。

TODO Riceball的根本目的
TODO Wolftail是如何做的
![演示效果](/assets/misc/wolftail-and-riceball-0.png "演示效果")
TODO 这个想法的最大问题