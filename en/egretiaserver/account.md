#  Account

When you start Egretia Server, the screen shows some details about the server and some accounts list. **Each account has 100 ETH **. Automatically generating Ethernet in all accounts allows you to focus on developing applications.

Account main function：Mnemonic、Address、Number of transactions、private key.

![](pic1.png)

For new player who are just beginning to use the blockchain, they often feel very confused when using the wallet. There are several nouns that must be deeply understood. These nouns are: wallet, private key, public key, address, password, mnemonic, Keystore.

   Compare with bank account,the five words correspond to the following：

    Address = Bank account number

    Password = Bank account password

    Private key = Bank account number + Bank account password

    Mnemonic = Bank account number + Bank account password

    Keystore + Password = Bank account number + Bank account password

    Keystore ≠ Bank account number 

## Mnemonic

Mnemative It is another form of private key, mnemonic = bank account number + bank account password. Mnemonic = private key. The main purpose is to allow users to better remember their own private keys. After creating a wallet, a backup mnemonic function will appear. Select a backup mnemonic and enter a password. There will be appear 12 words, one space between each word. Spaces, this is a mnemonic. A wallet has only one mnemonic and cannot be modified.

**Usage：**The mnemonic has the same function as the private key. When importing the wallet, enter the mnemonic and reset a password, you can enter the wallet and have control over the wallet, and can transfer the tokens in the wallet. . If you leaked your mnemonic, it would be streaking.

**Tips: **The mnemonics can only be backed up once. After the backup, they will no longer be displayed in the wallet. Therefore, it is best to copy the mnemonic to save in the notebook.

## Adderss

The public key is paired with the private key, the public key is calculated from the private key, and the address is calculated from the public key. But note that the address is not a public key. As shown in the figure, the address is a string of 42 hexadecimal hash values beginning with 0x.

    For Example：0x7A51Be24D95bb4935dd36eC836CFeDD77aa7b3C5。

This string of characters is the wallet address. The wallet address is unique and cannot be modified. In other words, the transfer receipt address of all tokens in a wallet is the same. For example, the ETH transfer receipt address in one wallet and the EOS transfer receipt address are the same. This is not the same as on the trading platform. The transfer receipts of different tokens on the platform are generally different. Therefore, you must confirm the address before transferring to the trading platform.

**Usage：**The wallet address can receive other people token，it also can be as the proof of token. We can show the address to public but the private key can't show to public.

## Private key

The private key is essentially a fixed-length random number. After the wallet is created, entering the password can export the private key. A wallet has only one private key and cannot be modified. Who has the private key and who has control over the digital token. So the private key is very important and it must be well preserved. However, because the private key is too long, the wallet does not allow the user to set it by himself, but the wallet itself generates the private key.

**Usage：**In the import wallet, enter the private key and set a password (without entering the original password), you can enter the wallet and have the right to use the wallet, you can transfer the tokens in the wallet away.

## Other

* **Balance**This is address balcnce, we can check our account balance in anytime.

* **Number of transactions**This is address number of transactions.

