17343105 田皓

1. 什么是编译程序？

   编译程序也称为编译器，是指把高级程序设计语言书写的源程序，翻译成机器语言书写的目标程序的翻译程序。编译出的目标程序通常还要经历运行阶段，以便在运行程序的支持下运行，加工初始数据，算出所需的计算结果。

   解释程序是一种语言处理程序，在词法、语法和语义分析方面与编译程序的工作原理基本相同，但在运行用户程序时，它直接执行源程序或源程序的内部形式(中间代码）。因此解释程序并不产生目标程序，这是它和编译程序的主要区别。

2. 请给出编译程序的结构

   词法分析->语法分析->语义分析->中间代码生成->代码优化->目标代码生成

   大多数编译程序都包含上述几个阶段的工作，不过也有些编译程序并不需要生成中间代码，有些编译程序不进行优化。
