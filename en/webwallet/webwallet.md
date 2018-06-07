# Web Wallet Operation Manual

Web Wallet is a web-side wallet provided to developers by Egretia team.The different between blockchain's game development and troditional game development is  that blockchain games need to interact with the blockchain often, so they often deal with wallets. Although third-party wallets such as Metamask are available on the market, it is not very convenient for Egretia workflows, so the Egretia team developed the local debug wallet Web Wallet.

During the development process of blockchain games, Web Wallet is embedded into the game so that it can be easily used when debugging the game.

## Wallet login

Web Wallet login is currently divided into two steps. The first step is to use Egretia Server mnemonics. The second step is to use password to log in.

![](../egretiaserver/pic1.png)

Open Egretia Server，get mnemonics.

![](../egretiaserver/pic1.png)

And the use Wing click debug game，transfer the Web Wallet page**Use mnemonics to import wallets**

![](../egretiaserver/pic1.png)

And then input mnemonics and password, which is the password that will later be used to login to Web Wallet.

![](../egretiaserver/pic1.png)

After first login, you only need to use the password login your wallet. Of course, the developer can use the mnemonic to re-import the wallet at any time.

## RPC Connect

The address of the Egretia Server RPC server can be set in the **settings** of Egretia Server. Web Wallet needs to set this address to work normally. 

![](../egretiaserver/pic1.png)

Through Egretia Server get RPC address.

![](../egretiaserver/pic1.png)

Open Web Wallet RPC setting page，paste and save，you can get Egretia Server data。

![](../egretiaserver/pic1.png)

## Transfer

After the wallet is login successfully, you can check the current balance and the corresponding US dollar. Of course, the developer can make a transfer. For example, the developer transfers 10ETH from the address `0x939493274924093` to `0x939493274924093`.

![](../egretiaserver/pic1.png)

First click transfer input 10 and then click sumbit,final input password.

![](../egretiaserver/pic1.png)

## Payment

that all is Web Wallet basic function,but how to interactive between game and Web Wallet?The above describes the basic functions of Web Wallet, and how does the game interact with Web Wallet? Take the AVG as an example.

![](../egretiaserver/pic1.png)

We purchase 0.5 Huanhundan,that need a ETH,click the button.

![](../egretiaserver/pic1.png)

A Web Wallet confirmation window pops up. Enter the password.

![](../egretiaserver/pic1.png)

