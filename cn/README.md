# Egretia 文档

Egretia 将已有的 HTML5 技术及产品工具相结合，打造一个完整的区块链游戏开发工具集。通过 Egretia 的工具集，开发者可以轻松快速地创建区块链游戏而不需要关注复杂的底层技术实现，而且可以通过区块链打通游戏之间的虚拟资产流通。

## FAQ

对于初次接触区块链的开发者，我们准备了几篇入门文档。

* [常见问题 FAQ](faq/faq.md)
* [区块链白皮书、书籍、交易所、币种、自媒体](https://github.com/dily3825002/awesome-blockchain)
* [Web3.js、Solidity、Truffle教程及 ETH 开发](https://github.com/dily3825002/awesome-ethereum-cn)

## 开发环境搭建

开发一款区块链游戏第一步需要做的就是搭建开发环境，在 Egretia 出现之前开发者需要学习非常繁杂的区块链知识，包括语言、钱包、公链、工具，如下图所示。

![](pic.png)

由于区块链还处于初级阶段，各个方面的技术也不是非常完善，开发者从传统游戏领域进入到区块链游戏领域时门槛非常高，需要耗费非常大的时间和精力。

而 Egretia 就是为了解决这个问题而存在，使用 Egretia 区块链开发工作流，可以大大提高开发者的学习效率。

Egretia 开发环境搭建非常简单。

* [开发环境搭建](install/install.md)

SmartIDE 和 Web Wallet 是云端的，可以直接使用，后续有详细教程。

## 第一个区块链游戏

按照惯例，在详细文档开始之前有一个`Hello World`，第一个游戏示例主要是为了让开发者对于区块链游戏开发有个整体的概念，详细内容请参考后续内容。

* [Hello World](helloWorld/helloworld.md)

## Egretia Server

Egretia Server 是以太坊开发的本地节点服务器，您可以使用它来部署智能合约，开发应用程序并运行测试。 Egretia Server 是可视化的方式进行操作，通过官方操作手册可以让开发者快速上手。

* [Egretia Server 简介](egretiaserver/introduction.md)
* [概览](egretiaserver/overview.md)
* [账户](egretiaserver/account.md)
* [区块、交易、日志](egretiaserver/block.md)
* [Egretia Server 设置](egretiaserver/setting.md)
* [Metamask 使用](egretiaserver/metamask.md)

## SmartIDE

开发区块链游戏避不开智能合约的开发，SmartIDE 是一款功能强大的开源工具，可以让您直接在云端编写 Solidity 合约。

* [SmartIDE 简介](smartide/introduction.md)
* [资源管理器](smartide/document.md)
* [代码编辑器](smartide/editor.md)
* [控制台输出](smartide/console.md)
* [编译](smartide/compile.md)
* [运行 & 部署](smartide/run.md)
* [设置](smartide/setting.md)
* [分析](smartide/analysis.md)
* [调试](smartide/debug.md)

## Web Wallet

区块链游戏开发和传统游戏开发另一个非常大的区别在于，区块链游戏需要经常和区块链进行交互，所以会频繁的和钱包打交道。虽然市面上有 Metamask 等第三方钱包，但是对于 Egretia 工作流来说不是非常方便，所以 Egretia 团队开发了本地调试钱包 Web Wallet。

* [Web Wallet 操作手册](webwallet/webwallet.md)

## Egret 文档

以上内容介绍了关于 Egretia 的相关工具，但是还是需要将 Egret Engine 相关知识完全掌握，这样才能更集中精力地学习区块链游戏开发。

* [Egret Engine 文档](http://developer.egret.com/cn/github/egret-docs/Engine2D/getStarted/helloWorld/index.html)
* [Egret Wing 文档](http://developer.egret.com/cn/github/egret-docs/Wing/introduction/index.html)
* [Egret 扩展库](http://developer.egret.com/cn/github/egret-docs/extension/threes/instructions/index.html)

## 技术支持

遇到任何问题请访问访问 Egret 论坛或者 Egretia Github 进行交流、提问。

* [Egret 论坛](http://bbs.egret.com)
* [Egretia Github](https://github.com/egretia)