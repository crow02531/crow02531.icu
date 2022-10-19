---
layout: post
title:  非递归光线追踪
date:   2022-09-10 14:9:55 +0800
last_modified_at: 2022-09-27 13:48:55 +0800
tags: [gossip, coding]
---

读的文章整天说什么光追一定要递归，所以GPU上难实现，然而明明就有空间复杂度1的算法（我在[Glowstone-C](https://github.com/crow02531/Glowstone-C)里写了个实现，其实就是一个简单的Monte Carlo Incremental Path Tracer）。

![图1](/assets/images/2022-09-10-non-recursive-raytracing_0.png "图1")
![图2](/assets/images/2022-09-10-non-recursive-raytracing_1.png "图2")

不说了赶紧读PBRT涨知识，读完了我会整理一篇专门为Minecraft设计的光追架构。
