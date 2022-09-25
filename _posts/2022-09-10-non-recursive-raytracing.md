---
layout: post
title:  非递归光线追踪
date:   2022-09-10 14:9:55 +0800
last_modified_at: 2022-09-10 14:9:55 +0800
tags: [coding]
---

读的文章整天说什么光追一定要递归，所以GPU上难实现。扯淡呢那个年代的光追，明明就有不递归且仅使用固定大小内存空间的算法（我在Glowstone-C里写了个实现，其实就是一个简单的Monte Carlo Path Tracer）。

![图1](/assets/misc/non-recursive-raytracing-0.png "图1")
![图2](/assets/misc/non-recursive-raytracing-1.png "图2")

不说了赶紧读PBRT涨知识。

编写中...