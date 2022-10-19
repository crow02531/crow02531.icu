---
layout: post
title:  Wolftail开发步入第二阶段
date:   2022-10-02 17:11:02 +0800
last_modified_at: 2022-10-09 00:17:23 +0800
tags: [minecraft, coding]
---

有望了！在[Wolftail与Riceball](/2021/10/19/wolftail-and-riceball/)中我曾讲述了Wolftail面临的最大问题，现在这个问题有望解决，“假EntityPlayer实例”方法表现得比我预期的更好，现在使用的渲染方法是顶层代码自己写，底层调用mc基本的渲染框架。

下图是演示效果，已经能够渲染天空、云朵、地形、实体（包括TileEntity）、粒子效果、天气。
![演示效果](/assets/images/2022-10-02-wolftail-stage-2_0.png "演示效果")
