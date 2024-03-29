---
layout: post
title:  刻画函数连续性
date:   2023-01-07 14:12:32 +0800
tags: mathematics
---

早在学习实数函数的过程中我们就已经对连续性有了一定的认识，向量函数也有连续性的概念，不同的领域研究不同的函数，对函数连续性的定义也千差万别. 为了维护理论的简洁，对于函数连续性我们需要一个足够抽象、广义、高度概括的定义. 本篇文章以拓扑学对函数连续性的定义为基础阐述有关函数连续性的知识框架.

## 拓扑空间与度量空间

在讨论何为函数连续性之前，我们必须得先认识拓扑空间和度量空间这两个非常常见且有用的空间，特别是拓扑空间，它对定义连续性是不可或缺的.

**定义**（度量空间）任给一个集合$S$和一个函数$d:S\times S\to\mathbb R$，若满足
1. （正定性）对任意$x_1,x_2\in S$，$d(x_1,x_2)\ge 0$，且$d(x_1,x_2)=0$当且仅当$x_1=x_2$.
2. （对称性）对任意$x_1,x_2\in S$，$d(x_1,x_2)=d(x_2,x_1)$.
3. （三角不等式）对任意$x_1,x_2,x_3\in S$，$d(x_1,x_3)\le d(x_1,x_2)+d(x_2,x_3)$.

那么称$d$是$S$的一个度量，二元组$(S,d)$是一个度量空间.

度量空间是赋予了“距离”结构的集合. 空间中任两个元素之间都定义了距离，距离的定义不是任意的，它必须得满足上述的三条公理. 对同一个集合，不同的距离的定义将引出不同的度量空间.

**例子**（欧几里得度量）设$n\ge 1$是正整数，并设$d:\mathbb R^n\times\mathbb R^n\to\mathbb R$为$d((x_1,...,x_n),(y_1,...,y_n))=\sqrt{(x_1-y_1)^2+...+(x_n-y_n)^2}$，那么$d$是$\mathbb R^n$的度量，称为$\mathbb R^n$的欧几里得度量（或$l^2$度量）.

**例子**（出租车度量）仍设$n\ge 1$是正整数，$d:\mathbb R^n\times\mathbb R^n\to\mathbb R$为$d((x_1,...,x_n),(y_1,...,y_n))=\vert x_1-y_1\vert+...+\vert x_n-y_n\vert$，那么$d$也是$\mathbb R^n$的度量，称为$\mathbb R^n$的出租车度量（或$l^1$度量）.

上面对$\mathbb R^n(n=1,2...)$这类集合定义了两种不同的度量，当$n=2$时，令$d_{l^1}$、$d_{l^2}$分别表示$\mathbb R^n$的出租车度量和欧几里得度量，$d_{l^1}((0,0),(2,1))=3$但$d_{l^2}((0,0),(2,1))=\sqrt 5$. 出租车度量之所以叫出租车度量是因为出租车从一点到另一点时，只能沿坐标轴方向（东、南、西、北）行驶而无法走斜线，出租车度量体现了这种性质.

**定义**（$\mathbb R$的标准度量）定义$\mathbb R$上的标准度量$d:\mathbb R\times\mathbb R\to\mathbb R$为$d(x,y)=\vert x-y\vert$.

容易看出$\mathbb R$的标准度量就是$\mathbb R$的欧几里得度量，同时也是$\mathbb R$的出租车度量. 一般的，当$\mathbb R^n(n=1,2...)$作为度量空间时，如果没有特别指定，使用的度量都是欧几里得度量.

每个集合，哪怕是空集，都至少存在一个度量，这个度量是离散度量.

**定义**（离散度量）设$S$是集合，函数$d:S\times S\to\mathbb R$为$d(x,y)=1$，则$d$是$S$的度量，该度量称为$S$的离散度量.

**注**：空集$\emptyset$的离散度量是空函数，它也是空集唯一拥有的度量.

度量空间可以推广为拓扑空间，拓扑空间抛弃了明确的、数字化的距离概念.

**定义**（拓扑空间）任给一个集合$S$，$S$上的一个拓扑$\tau$是$S$的一个子集簇，满足
1. （空集和$S$是$\tau$中的集合）$\emptyset\in\tau$且$S\in\tau$.
2. （$\tau$中集合的有限交还是$\tau$的集合）若$V_1,...,V_n\in\tau$，则$\bigcap_{i=1}^n V_i\in\tau$.
3. （$\tau$中集合的无限并还是$\tau$的集合）若$\lbrace V_{i\in I}\rbrace$是$\tau$中的一簇集合，即对任意$i\in I$，$V_i\in\tau$，那么$\bigcup_{i\in I} V_i\in\tau$.

我们称二元组$(S,\tau)$是一个拓扑空间，并称$\tau$中的集合为该空间中的开集.

一个集合一旦指定了它的子集中哪些是开集，哪些不是开集，它就成为了拓扑空间. 当然，这种指定不是任意的，它必须得满足上面的三条公理，不能随便选几个子集为开集就说构造了一个拓扑空间.

每个集合都存在至少一个度量，同样的，每个集合也都存在至少一个拓扑.

**定义**（离散拓扑与平凡拓扑）设$S$是集合，$S$的幂集$P(S)$以及$\lbrace\emptyset,S\rbrace$均为$S$的拓扑，称前者为$S$的离散拓扑，后者称为$S$的平凡拓扑.

度量空间天然地带有拓扑的结构，每一个度量空间都伴随着一个能够自然地体现其性质的拓扑. 这点现在看上去还不是很明朗，但当我们在度量空间上定义了度量球，并利用度量球定义度量空间中的开集后，这点将变得清晰.

**定义**（度量球）设$(S,d)$是度量空间，$p\in S$是其上一点，$r$是正实数，定义以$p$为中心，$r$为半径的度量球是集合$\lbrace x\in S:d(x,p)<r\rbrace$，记为$B_{(S,d)}(p,r)$.

**注**：若上下文明确在讨论的$(S,d)$具体指哪个度量空间，$B_{(S,d)}(p,r)$总是简写成$B(p,r)$.

度量球是对一般意义下的“球”的概念在度量空间中的推广. 以$p$为中心，$r$为半径的度量球就是空间中所有到$p$的距离小于$r$的点的集合，需要注意的是度量球的半径$r$一定是正数，以$p$为中心的度量球一定包含$p$.

**例子**：令$d_{l^2}$、$d_{l^1}$分别表示$\mathbb R^2$的欧几里得度量和出租车度量. 那么，$B_{(\mathbb R^2,d_{l^2})}((0,0),1)$是以$(0,0)$为圆心，$1$为半径的开的圆盘，$B_{(\mathbb R^2,d_{l^1})}((0,0),1)$则是开的棱形$\lbrace(x,y):\vert x\vert+\vert y\vert<1\rbrace$.

**定义**（度量空间中的开集）设$(S,d)$是度量空间，$U\subseteq S$，称集合$U$是开集，当且仅当对任意的$p\in U$，都存在$r>0$，使得$B(p,r)\subseteq U$.

**例子**：令$d_{l^2}$、$d_{l^1}$分别表示$\mathbb R^2$的欧几里得度量和出租车度量，$U=\lbrace(x,y):-2<x<2\wedge -1<y<1\rbrace$. 读者可自行证明$U$即是$(\mathbb R^2,d_{l^2})$中的开集，也是$(\mathbb R^2,d_{l^1})$中的开集.

度量空间中的度量球一定是该空间中的开集.

**命题**（度量球是开集）若$(S,d)$是度量空间，$p\in S$，$r>0$，则$B(p,r)$是开集.

**证明**：记$U=B(p,r)$，对任意$x\in U$，均有$B(x,r-d(p,x))\subseteq U$成立. 这是因为$d(p,x)<r$，$r-d(p,x)>0$，对任意$y\in B(x,r-d(p,x))$，$d(y,x)<r-d(p,x)$，即$d(p,x)+d(y,x)<r$，由于$d(p,y)\le d(p,x)+d(y,x)$，故$d(p,y)<r$，这表明$y\in B(p,r)=U$，同时因为$y$在$B(x,r-d(p,x))$里任取，就有$B(x,r-d(p,x))\subseteq U$. 又因为$x$在$U$里任取，故$U$，即$B(p,r)$是开集.

对任意的度量空间$(S,d)$我们定义了$S$的哪些子集是开集，接下来将证明这些开集确实构成了拓扑. 就是说，我们要证明$\emptyset$和$S$都是$(S,d)$的开集，$(S,d)$中开集的有限交是$(S,d)$的开集，开集的无限并仍是$(S,d)$的开集.

**命题**（度量空间的开集构成拓扑）设$(S,d)$是度量空间，$\tau$是该度量空间中所有开集构成的集合，则$\tau$是$S$的拓扑.

**证明**：首先，因为虚真空集$\emptyset$必然是开集. $S$也是开集，因为对任意$p\in S$和$r>0$，$B(p,r)\subseteq S$必然成立，这样就证明了$\emptyset$和$S$是$\tau$中的集合. 此外，对任意开集$U$和$V$，任给$p\in U\wedge p\in V$，一定存在$r_1$使得$B(p,r_1)\subseteq U$，$r_2$使得$B(p,r_2)\subseteq V$，可以推断$B(p,min(r_1,r_2))$即是$U$的子集又是$V$的子集，于是$U\cap V\in\tau$是开集，这样就证明了$\tau$中集合的有限交还是$\tau$中的集合. 接下来，令$\lbrace V_{i\in I}\rbrace$表示一簇开集，记$U=\bigcup_{i\in I} V_i$，目的是证明$U$亦是开集. 对任给的$p\in U$，存在$i\in I$使得$p\in V_i$，同时因为$V_i$是$(S,d)$的开集，所以存在$r$使得$B(p,r)\subseteq V_i$，而$V_i\subseteq U$，于是$B(p,r)\subseteq U$，这就证明了$U$是开集. 综上，$\tau$是$S$的拓扑，$(S,\tau)$构成拓扑空间.

**例子**（$\mathbb R$上的标准拓扑）令$d$表示$\mathbb R$的标准度量，$\tau$表示度量空间$(\mathbb R,d)$中的所有开集构成的集合，根据前文所述，$\tau$是$\mathbb R$的一个拓扑，称这个拓扑是$\mathbb R$的标准拓扑.

每一个度量空间$(S,d)$都蕴含着一个拓扑空间$(S,\tau)$，其中$\tau$是$(S,d)$中所有开集构成的集合，我们称$\tau$是$(S,d)$导出的拓扑，$(S,\tau)$是$(S,d)$导出的拓扑空间. 由于$\tau$是$(S,d)$中所有开集构成的集合，$(S,d)$的开集和$(S,\tau)$的开集是同一个概念.（为什么？）

$(S,d)$中的开集自然而然地构成了$S$的拓扑，从这层意义上讲，可以说度量空间天然的是拓扑空间. 既然每个度量空间背后都是一个拓扑空间，这自然而然地引申出一个疑问：是不是每一个拓扑空间都能被某个度量空间导出？我们把能被某个度量空间导出的拓扑空间称为可度量化的拓扑空间.

**定义**（可度量化拓扑空间）设$(S,\tau)$是拓扑空间，若存在$S$的度量$d$，使得$\tau$为$(S,d)$导出，那么称拓扑空间$(S,\tau)$是可度量化的. 反之，若这样的$d$不存在，则称$(S,\tau)$不可度量化.

不可度量化的拓扑空间是存在的.

**命题**（多于一点的平凡拓扑空间不可度量化）设$(S,\tau)$是平凡拓扑空间，即$\tau=\lbrace\emptyset,S\rbrace$，且设$S$中至少有两个不同的元素$a$和$b$，那么$(S,\tau)$不可度量化.

**证明**：假设存在$S$的一个度量$d$，使得$(S,d)$导出的拓扑是$\tau$，那么，记$r=d(a,b)$，由于$a\ne b$，故$r>0$，发现$B(a,0.5r)$非空，同时$b$显然不属于$B(a,0.5r)$，也就是说，$B(a,0.5r)\notin\tau$，但这不可能，因为$(S,d)$导出的拓扑是$\tau$，那么$B(a,0.5r)$应当属于$\tau$，矛盾，这就证明了不存在$S$的度量$d$使得$(S,d)$导出的拓扑是$\tau$，因而$(S,\tau)$不可度量化.

此外，对同一个可度量化的拓扑空间而言，可能存在两个不同的度量空间，使得这两个度量空间都导出该拓扑空间.

**例子**：令$d_{l^2}$、$d_{l^1}$分别表示$\mathbb R^2$的欧几里得度量和出租车度量，那么$(\mathbb R^2,d_{l^1})$导出的拓扑与$(\mathbb R^2,d_{l^2})$导出的拓扑相同. 这等于说对任意$U\in\mathbb R^2$，$U$是$d_{l^1}$中的开集当且仅当$U$是$d_{l^2}$中的开集. 读者可自行证明该点.

接下来将介绍一些拓扑空间中常用的概念. 由于度量空间中的开集天然构成了该空间的拓扑，度量空间可以视为拓扑空间. 度量空间作为拓扑空间对待时，使用的拓扑是该度量空间导出的拓扑，*度量空间可视为带度量结构的拓扑空间*. 一切定义在拓扑空间上的概念同样也定义在度量空间上.

**定义**（邻域）设$(S,\tau)$为拓扑空间，$p\in S$为其上一点. 称$N\subseteq S$是$p$的邻域，当且仅当存在开集$U$满足$p\in U\subseteq N$.

**定义**（内点、外点、边界点）设$(S,\tau)$为拓扑空间，$E\subseteq S$，$p\in S$. 称
1. $p$是$E$的内点，当且仅当存在包含$p$的开集$U$，使得$U\subseteq E$.
2. $p$是$E$的外点，当且仅当存在包含$p$的开集$U$，使得$U\cap E=\emptyset$.
3. $p$是$E$的边界点，当且仅当对任意包含$p$的开集$U$，都有$U\cap E\ne\emptyset\wedge U\cap E\ne U$.

**注**：$E$的所有内点构成$E$的内部，记为$int(E)$，$E$的所有外点构成$E$的外部，记为$E^\circ$，$E$的所有边界点构成$E$的边界，记为$\partial E$.

**命题**（内部、外部、边界划分整个空间）设$(S,\tau)$为拓扑空间，$E\subseteq S$，$p\in S$. 那么$p$要么是$E$的内点，要么是$E$的外点，要么是$E$的边界点，但不可能同时是这三种点或三种点中的任两种.

**定义**（附着点）设$(S,\tau)$为拓扑空间，$E\subseteq S$，$p\in S$. 称$p$是$E$的附着点（或$p$附着于$E$），当且仅当对任意包含$p$的开集$U$，$U\cap E\ne\emptyset$.

**注**：$E$的所有附着点构成$E$的闭包，记为$\bar E$.

**命题**（内点、边界点统称附着点）设$(S,\tau)$为拓扑空间，$E\subseteq S$，$p\in S$. 那么$p$附着于$E$当且仅当$p$是$E$的内点或边界点.

**定义**（闭集）设$(S,\tau)$为拓扑空间，称$E\subseteq S$为闭集当且仅当$S\backslash E$为开集.

**定义**（拓扑子空间）设$(S,\tau)$为拓扑空间，$E\subseteq S$. 称$\tau_E=\lbrace U\cap E:U\in\tau\rbrace$为由$(S,\tau)$导出的$E$上的拓扑，并称$(E,\tau_E)$为由$(S,\tau)$导出的$E$上的拓扑子空间.

**定义**（度量子空间）

**定义**（相对拓扑）

**定义**（点列收敛）设$(S,\tau)$为拓扑空间，$\lbrace x_n\rbrace$为其上的点列，$p\in S$，我们称点列$\lbrace x_n\rbrace$收敛于$p$，当且仅当对$p$的任意开邻域$U$，都存在正整数$N$，使得对所有的$n\ge N$，都有$x_n\in U$成立.

**定义**（Hausdorff空间）若一个拓扑空间$(S,\tau)$满足：任取空间中不相同的两点$x,y\in S$，存在包含$x$的开集$U_x$和包含$y$的开集$U_y$，使得$U_x\cap U_y=\emptyset$. 那么称该拓扑空间$(S,\tau)$为Hausdorff空间.

**命题**（可度量化拓扑空间是Hausdorff的）设$(S,\tau)$为可度量化拓扑空间，那么$(S,\tau)$是Hausdorff的.

**命题**（Hausdorff空间中收敛的唯一性）设$(S,\tau)$为Hausdorff空间，$\lbrace x_n\rbrace$为其上的点列，若该点列同时收敛于$p_1$和$p_2$，则$p_1=p_2$.

## 函数连续性

**定义**（函数在一点处连续）设$(X,\tau_X)$与$(Y,\tau_Y)$是拓扑空间，$\Omega$是$X$的子集，$f:\Omega\to Y$，$p\in X$. 称$f$在$p$连续，当且仅当对任意包含$f(p)$的开集$V$，总存在包含$p$的开集$U$，使得$f(U)\subseteq V$.

**定义**（连续函数）设$(X,\tau_X)$与$(Y,\tau_Y)$是拓扑空间，$\Omega$是$X$的子集，$f:\Omega\to Y$. 称$f$连续，当且仅当对任意$Y$中的开集$V$，$f^{-1}(V)$相对$\Omega$开.

**命题**（连续函数是在定义域处处连续的函数）

**定义**（函数极限）设$(X,\tau_X)$与$(Y,\tau_Y)$是拓扑空间，$\Omega$是$X$的子集，$f:\Omega\to Y$，$p\in X$，$L\in Y$. 称$f$在$p$的极限是$L$，当且仅当$p$附着于$\Omega$且对任意包含$L$的开集$V$，存在包含$p$的开集$U$，使得$f(U)\subseteq V$.

**注**：

**命题**（函数的连续性与函数极限的关系）

**命题**（函数的连续性和环绕空间无关）

**命题**（函数在一点的连续性是局部的）

**命题**（Heine定理）

**命题**（连续函数的子函数连续）

**命题**（复合运算保持连续性）

**命题**（加减乘除保持连续性）

**命题**（基本初等函数连续）

**命题**（初等函数连续）

**定义**（连通空间）

**例子**（区间和$\mathbb R$的连通集等价）

**命题**（连续函数保持连通性）

**命题**（中值定理）

**定义**（紧致空间）

**命题**（连续函数保持紧致性）

**命题**（最值定理）

**定义**（一致连续）

---

参考资料：

