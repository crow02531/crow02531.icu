---
layout: post
title:  向量空间初步
date:   2023-01-07 16:55:47 +0800
tags: mathematics
---

文章从抽象代数起步认识向量空间。

## 群和域

**定义**（群）群是一个二元组$(G,\circ)$，其中$G$是一个集合，$\circ:G\times G\to G$，满足
1. （结合律）对任意的$a,b,c\in G$，$a\circ(b\circ c)=(a\circ b)\circ c$
2. （存在单位元）存在一个$e\in G$，使得对任意的$a\in G$，$a\circ e=e\circ a=a$
3. （消去律）对任意的$a,b\in G$，方程$a\circ x=b$与方程$x\circ a=b$均只有唯一解

**定义**（半群）诺$S$是集合，$\circ:S\times S\to S$是一个函数，并且对任意的$a,b,c\in S$，有$a\circ(b\circ c)=(a\circ b)\circ c$成立，那么称二元组$(S,\circ)$是一个半群

**定义**（域）域是一个三元组$(F,+,\times)$，满足
1. $(F,+)$是一个交换群，$(F,\times)$是一个可交换幺半群
2. 对任意的$a,b,c\in F$，$a\times(b+c)=a\times b+a\times c$
3. 对任意的$a\in F$且$a$不为$(F,+)$的单位元，总存在$b\in F$使得$a\times b$等于$(F,\times)$的单位元



## 向量空间

**定义**（向量空间）给定一个域$(F,+,\times)$，其上的一个向量空间是一个三元组$(V,\oplus,\cdot)$，满足
1. $(V,\oplus)$是一个交换群，$\cdot$是一个函数$F\times V\to V$
2. 对任意的$a,b\in F$与$v\in V$，有$a\cdot(b\cdot v)=(a\times b)\cdot v$
3. 诺$e$为域$F$的乘法单位元，则对任给的$v\in V$，$e\cdot v=v$
4. 对任意的$a\in F$与$u,v\in V$，有$a\cdot(u\oplus v)=(a\cdot u)\oplus(a\cdot v)$
5. 对任意的$a,b\in F$与$v\in V$，有$(a+b)\cdot v=(a\cdot v)\oplus(b\cdot v)$
