---
layout: post
title:  Wolftail与Riceball实现第一人称控制非EntityPlayer实体，新的种族模组实现方法是否有望？
date:   2021-10-19 14:9:55 +0800
tags: minecraft coding
---

种族模组一直是Minecraft里的坑，传统的实现思路是对EntityPlayer进行修饰，例如说更改相关的渲染代码来改变玩家的外形，更改逻辑代码以实现种族的某些特性，使用这种方法的一个经典例子是[血族传说](https://github.com/TeamLapen/Vampirism)，一个稳定且知名的模组。

传统方法看起来不错，也确实能够应付绝大多数需求，特别是当种族是EntityPlayer的“加强变种”的时候这种方法简直完美。可如果碰上要实现的种族同EntityPlayer相差巨大，走完全不同的游戏逻辑的时候，这种方法就是地狱了。Riceball就是这样一个模组。

[Riceball](https://github.com/crow02531/Riceball)的根本目的是加入一个叫舰娘的种族，这个种族要求玩家不能以steve的玩法玩MC及其他MOD。显然这个要求用传统方法实现会相当吃力，因为传统方法对EntityPlayer修饰来修饰去，到底还是EntityPlayer，若要让玩家没法以steve的玩法体验游戏，势必要进行各自各样的特性禁用，以让EntityPlayer变成一张白纸，再在这张白纸上添加需要的功能，而传统方法最不擅长的就是特性禁用，Riceball需要新的方法。

[Wolftail](https://github.com/crow02531/Wolftail)提供了一种思路，下图是运用Wolftail的演示效果：
![演示效果](/assets/img/2021-10-19-wolftail-and-riceball_0.webp "演示效果")
图中可见两个客户端，左侧的客户端显示一个类似命令行的界面，右侧的客户端显示正常游戏画面，左侧客户端是舰娘玩家，右侧是steve。

Wolftail是通过“连接代理”的方法实现种族模组的。客户端登录服务器时（均装了FORGE），连接先经过HANDSHAKE阶段，之后经过FML HANDSHAKE阶段，然后服务端再把生成的关联该客户端的EntityPlayer加入到游戏里。“连接代理”就是在FML HANDSHAKE阶段之后于服务端阻止EntityPlayer加入游戏，得到一个仅建立了FML CONNECTION的连接，这样的话在服务端就完全没有相关的EntityPlayer，我们得到了一张白纸连接，爱做什么就做什么，比方说我可以生成一只EntityPig，连接断了后给这只猪setDead，没有其他东西会干扰我们，在MC及其他MOD看来那只是一只猪。

可以看到这种方法在服务端表现得相当好，我们可以让客户端控制服务端里的种族实体，而不涉及任何EntityPlayer相关的东西。但在客户端这种方法就麻烦了，客户端在FML HANDSHAKE阶段之后会等待服务端发基本的游戏数据，之后进入一个围绕EntityPlayer进行的gameloop，这对“连接代理”相当麻烦，因为我们希望在客户端没有EntityPlayer，没有EntityPlayer实例就没法走原版的gameloop，有两种方法解决这个问题，一种是设计新的gameloop，上图的演示效果就用了这种方法（所以只有命令行，因为渲染起来比较简单，正常游戏界面的渲染工作量巨大，但并非不可行），另一种方法是搞个“假”的EntityPlayer实例，这个实例只是为了让我们能够复用原版的gameloop而已，此外没有任何用处。

设计新gameloop这种方法比较简单粗暴，但工作量巨大；假EntityPlayer实例则有些微妙，可能会出很多BUG，而且要对原版gameloop进行大量修改。两种方法那种好，是否存在第三种方法，我就不知道了。