import type { Lesson } from "../types";

export const fundamentalsLessons: Lesson[] = [
  {
    slug: "what-is-cryptocurrency",
    title: "What Is Cryptocurrency?",
    summary:
      "A plain-language introduction to cryptocurrency: what it is, how it differs from traditional money, and why it relies on cryptography and shared ledgers instead of banks.",
    level: "beginner",
    track: "fundamentals",
    readingMinutes: 4,
    blocks: [
      {
        type: "paragraph",
        text: "A cryptocurrency is a form of digital money that exists only as entries on a shared, public record kept by a network of computers. Instead of a bank or government confirming who owns what, the network itself agrees on the state of the record using a mix of cryptography, economic incentives and open-source software that anyone can inspect.",
      },
      {
        type: "heading",
        text: "The Problem Cryptocurrency Tries to Solve",
      },
      {
        type: "paragraph",
        text: "Digital files are easy to copy. If money were just a file, you could send the same file to two people and spend it twice. This is known as the double-spending problem. Traditional online payments solve it with a trusted middleman: your bank keeps a private ledger, checks that you have enough funds and updates the balances on both sides of the transfer.",
      },
      {
        type: "paragraph",
        text: "Cryptocurrencies solve the same problem without a single middleman. Thousands of independent computers, called nodes, each keep a copy of the ledger and follow the same rules for deciding which transactions are valid. Because no single party controls the record, no single party can quietly change it, freeze it or create extra units outside the rules.",
      },
      {
        type: "heading",
        text: "The Core Building Blocks",
      },
      {
        type: "list",
        items: [
          "Blockchain: the shared ledger, organized as a chain of blocks in which each block contains a batch of transactions and a reference to the block before it.",
          "Cryptography: mathematical techniques that let people prove ownership and protect the ledger from tampering without revealing secrets.",
          "Public and private keys: a pair of linked numbers. The public key, or an address derived from it, works like an account number you can share. The private key works like a password that authorizes spending and must never be shared.",
          "Wallet: software or hardware that stores your keys and helps you sign transactions. A wallet does not hold coins itself; the coins live on the blockchain, and the wallet holds the keys that control them.",
          "Consensus mechanism: the set of rules the network uses to agree on which new transactions are added and in what order.",
        ],
      },
      {
        type: "heading",
        text: "What Happens When You Send Crypto",
      },
      {
        type: "steps",
        items: [
          "You enter the recipient's address and the amount in your wallet.",
          "The wallet uses your private key to create a digital signature, proving the transaction came from the owner of the funds without exposing the key.",
          "The signed transaction is broadcast to the network, where nodes check that the signature is valid and that the funds have not already been spent.",
          "A miner or validator includes the transaction in a new block, usually prioritizing transactions that pay higher network fees.",
          "Once the block is accepted by the network, the transfer is recorded, and each additional block built on top makes it harder to reverse.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Coins and Tokens",
        text: "A coin is the native asset of its own blockchain, such as bitcoin on the Bitcoin network or ether on Ethereum. A token is an asset created on top of an existing blockchain using smart contracts. Both are called cryptocurrencies in everyday speech, but the distinction matters when you learn about fees and networks.",
      },
      {
        type: "heading",
        text: "How It Compares to Traditional Money",
      },
      {
        type: "comparison",
        columns: ["Traditional bank transfer", "Cryptocurrency transfer"],
        rows: [
          {
            label: "Who keeps the ledger",
            values: [
              "A bank or payment company, privately",
              "A network of independent nodes, publicly",
            ],
          },
          {
            label: "Operating hours",
            values: [
              "Often limited by business days and banking networks",
              "Runs continuously, every day of the year",
            ],
          },
          {
            label: "Reversibility",
            values: [
              "Errors and fraud can sometimes be reversed",
              "Confirmed transactions are generally final",
            ],
          },
          {
            label: "Account access",
            values: [
              "Requires approval from the institution",
              "Anyone with a wallet can receive funds",
            ],
          },
          {
            label: "Losing access",
            values: [
              "Identity checks can restore your account",
              "Losing a private key usually means losing the funds",
            ],
          },
        ],
      },
      {
        type: "heading",
        text: "Why People Use It",
      },
      {
        type: "paragraph",
        text: "People are drawn to cryptocurrency for different reasons. Some value the ability to send value across borders without relying on intermediaries. Others are interested in assets with a fixed or predictable supply, or in programmable money that can power applications such as decentralized exchanges and lending platforms. Developers see public blockchains as open platforms where anyone can build without asking permission.",
      },
      {
        type: "heading",
        text: "Risks Worth Understanding Early",
      },
      {
        type: "paragraph",
        text: "Cryptocurrency also comes with real drawbacks. Prices can move sharply in short periods, regulation differs from country to country and continues to evolve, and scams are common because transactions are hard to reverse. Self-custody gives you full control, but it also makes you fully responsible: there is no help desk that can reset a lost private key.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Education, Not Advice",
        text: "This lesson explains how cryptocurrency works. It is not a recommendation to buy, sell or hold any asset. Never put in money you cannot afford to lose, and be skeptical of anyone promising guaranteed returns.",
      },
    ],
    keyTakeaways: [
      "Cryptocurrency is digital money recorded on a shared ledger maintained by a network rather than a bank.",
      "Private keys prove ownership: whoever controls the key controls the funds.",
      "Confirmed transactions are generally irreversible, so mistakes and scams are costly.",
      "Coins are native to their own blockchain, while tokens are built on top of existing ones.",
    ],
    references: [
      {
        label: "Bitcoin: A Peer-to-Peer Electronic Cash System",
        url: "https://bitcoin.org/bitcoin.pdf",
      },
    ],
  },
  {
    slug: "how-blockchain-works",
    title: "How a Blockchain Works",
    summary:
      "Learn how blocks, hashes and a distributed network of nodes work together to create a tamper-resistant record that no single party controls.",
    level: "beginner",
    track: "fundamentals",
    readingMinutes: 4,
    blocks: [
      {
        type: "paragraph",
        text: "A blockchain is a type of database with an unusual design goal: strangers around the world should be able to share one record and agree on its contents without trusting any single administrator. To achieve this, blockchains combine three ideas: grouping data into linked blocks, using cryptographic hashes as fingerprints and distributing copies of the record across many independent computers.",
      },
      {
        type: "heading",
        text: "What Is Inside a Block",
      },
      {
        type: "paragraph",
        text: "Each block is a container. It holds a batch of transactions plus a header with metadata. The header typically includes a timestamp, a summary of the transactions and, most importantly, the hash of the previous block. That backward reference is what turns a collection of blocks into a chain.",
      },
      {
        type: "list",
        items: [
          "Transactions: the transfers or contract interactions being recorded.",
          "Previous block hash: a fingerprint of the block that came before, linking the two together.",
          "Timestamp: an approximate record of when the block was created.",
          "Merkle root: a single hash that summarizes every transaction in the block, making it efficient to prove that a transaction is included.",
          "Consensus data: information required by the network's rules, such as a nonce in Proof of Work or a validator signature in Proof of Stake.",
        ],
      },
      {
        type: "heading",
        text: "Hashes: Digital Fingerprints",
      },
      {
        type: "paragraph",
        text: "A hash function takes any input, from a single word to an entire book, and produces a fixed-length output that looks random. Good cryptographic hash functions have a few crucial properties: the same input always produces the same output, a tiny change in the input produces a completely different output, and it is practically impossible to work backward from the output to the input or to find two inputs with the same hash.",
      },
      {
        type: "paragraph",
        text: "Because every block includes the hash of its predecessor, changing a single transaction in an old block changes that block's hash. The next block would then point to a hash that no longer matches, breaking the chain from that point forward. To hide the change, an attacker would have to redo every later block and convince the rest of the network to accept the altered version, which the consensus rules make extremely expensive.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "A Simple Mental Model",
        text: "Imagine a notebook where each page ends with a code calculated from everything written on that page plus the previous page's code. Erasing one word on page 10 changes its code, which invalidates page 11, page 12 and every page after it. Anyone holding a copy of the notebook can spot the tampering immediately.",
      },
      {
        type: "heading",
        text: "A Network of Nodes",
      },
      {
        type: "paragraph",
        text: "A public blockchain is not stored in one place. Nodes are computers running the network's software, and each full node keeps its own copy of the ledger and independently verifies every block against the rules. If someone broadcasts an invalid block, honest nodes simply reject it. This redundancy means the network keeps running even if many nodes go offline, and there is no central server to shut down or pressure.",
      },
      {
        type: "heading",
        text: "How a New Block Gets Added",
      },
      {
        type: "steps",
        items: [
          "Users broadcast signed transactions, which wait in a pool of pending transactions often called the mempool.",
          "A block producer, called a miner in Proof of Work or a validator in Proof of Stake, selects transactions and assembles a candidate block.",
          "The producer satisfies the consensus rules, for example by finding a valid Proof of Work or by being chosen to propose a block in Proof of Stake.",
          "The new block is shared with the network, and nodes verify every transaction and the block's link to the existing chain.",
          "Valid blocks are appended to each node's copy of the ledger, and the process repeats.",
        ],
      },
      {
        type: "heading",
        text: "Public and Private Blockchains",
      },
      {
        type: "comparison",
        columns: ["Public blockchain", "Private or permissioned blockchain"],
        rows: [
          {
            label: "Who can join",
            values: [
              "Anyone can run a node or submit transactions",
              "Only approved participants",
            ],
          },
          {
            label: "Transparency",
            values: [
              "Transaction history is visible to everyone",
              "Visibility is limited to members",
            ],
          },
          {
            label: "Control",
            values: [
              "No single owner; rule changes need broad agreement",
              "Governed by an organization or consortium",
            ],
          },
          {
            label: "Typical use",
            values: [
              "Open cryptocurrencies and applications",
              "Shared record-keeping between known parties",
            ],
          },
        ],
      },
      {
        type: "heading",
        text: "What Blockchains Do Not Guarantee",
      },
      {
        type: "paragraph",
        text: "A blockchain makes it very hard to alter recorded data after the fact, but it cannot verify that information was true when it was entered. If someone records incorrect data, the chain will preserve that error faithfully. Blockchains also trade efficiency for decentralization: every node repeating the same work makes them slower and more costly than a traditional database run by a single company.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Confirmations and Finality",
        text: "On Proof of Work chains such as Bitcoin, security builds over time. Each new block added after a transaction makes reversing it harder, which is why services often wait for several confirmations before treating a payment as settled. Some Proof of Stake chains add an explicit finality step on top of this.",
      },
    ],
    keyTakeaways: [
      "A blockchain is a chain of blocks, each linked to the previous one by a cryptographic hash.",
      "Changing old data breaks every later link, which makes tampering easy to detect.",
      "Many independent nodes store and verify the ledger, so there is no single point of control.",
      "Blockchains protect data integrity but cannot guarantee that the data entered was accurate.",
    ],
    references: [
      {
        label: "Bitcoin: A Peer-to-Peer Electronic Cash System",
        url: "https://bitcoin.org/bitcoin.pdf",
      },
    ],
  },
  {
    slug: "bitcoin-explained",
    title: "Bitcoin: Digital Scarcity Explained",
    summary:
      "Discover how Bitcoin created the first decentralized digital currency, why its supply is capped at 21 million coins, and how mining and halvings shape its issuance.",
    level: "beginner",
    track: "fundamentals",
    readingMinutes: 4,
    blocks: [
      {
        type: "paragraph",
        text: "Bitcoin was the first cryptocurrency and remains the best known. It was described in 2008 in a white paper published under the pseudonym Satoshi Nakamoto, and the network went live in January 2009. Its central idea was a peer-to-peer electronic cash system that lets people send value directly to each other without a financial institution in the middle.",
      },
      {
        type: "heading",
        text: "A Fixed Supply",
      },
      {
        type: "paragraph",
        text: "Most national currencies can be issued in larger quantities when central bank policy calls for it. Bitcoin takes a different approach: its software limits the total supply to 21 million bitcoin. New coins enter circulation only as rewards to miners who add blocks to the chain, and that reward shrinks on a predictable schedule. This programmed scarcity is why bitcoin is often compared to a digital commodity.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Units of Bitcoin",
        text: "One bitcoin can be divided into 100 million smaller units called satoshis, or sats. This divisibility means people can transact in very small amounts even though the number of whole coins is limited.",
      },
      {
        type: "heading",
        text: "How Mining Works",
      },
      {
        type: "paragraph",
        text: "Bitcoin uses a consensus mechanism called Proof of Work. Miners bundle pending transactions into a candidate block and then repeatedly hash the block header with different values, searching for a result that falls below a target set by the network. Finding such a hash takes an enormous number of guesses, but checking a winning answer is instant for everyone else.",
      },
      {
        type: "paragraph",
        text: "The first miner to find a valid block broadcasts it, and if other nodes accept it, that miner earns the block reward: newly created bitcoin plus the transaction fees paid by users in that block. The cost of electricity and specialized hardware is what makes the system secure, because rewriting history would require outpacing the combined computing power of all honest miners.",
      },
      {
        type: "heading",
        text: "The Difficulty Adjustment",
      },
      {
        type: "paragraph",
        text: "Bitcoin targets one new block roughly every 10 minutes. Because miners join and leave over time, the network recalculates the mining difficulty every 2,016 blocks, or about every two weeks. If blocks were found too quickly, the puzzle becomes harder; if too slowly, it becomes easier. This self-correcting rule keeps issuance steady regardless of how much computing power is on the network.",
      },
      {
        type: "heading",
        text: "Halvings",
      },
      {
        type: "paragraph",
        text: "Every 210,000 blocks, which works out to roughly four years, the reward for mining a new block is cut in half. This event is called the halving. The first block reward was 50 bitcoin, and it has been halved several times since. Because each halving reduces new issuance, the last fractions of a bitcoin are expected to be mined around the year 2140, after which miners will rely entirely on transaction fees.",
      },
      {
        type: "heading",
        text: "Key Features at a Glance",
      },
      {
        type: "list",
        items: [
          "Decentralized: thousands of independent nodes enforce the rules, and no company or government runs the network.",
          "Pseudonymous: addresses are not tied to names on the blockchain, but every transaction is public and can often be traced.",
          "Permissionless: anyone with an internet connection can create a wallet and transact.",
          "Censorship-resistant: valid transactions that pay an adequate fee are hard for any single party to block.",
          "Conservative by design: changes to the protocol are deliberately slow and require broad agreement.",
        ],
      },
      {
        type: "comparison",
        columns: ["Bitcoin", "Traditional fiat currency"],
        rows: [
          {
            label: "Supply",
            values: [
              "Capped at 21 million coins",
              "Set by central bank policy",
            ],
          },
          {
            label: "Issuance",
            values: [
              "Predictable schedule written in code",
              "Adjusted in response to economic conditions",
            ],
          },
          {
            label: "Record keeping",
            values: ["Public blockchain", "Bank and central bank ledgers"],
          },
          {
            label: "Legal status",
            values: [
              "Varies from country to country",
              "Legal tender in its home jurisdiction",
            ],
          },
        ],
      },
      {
        type: "heading",
        text: "Common Misunderstandings",
      },
      {
        type: "paragraph",
        text: "Bitcoin is not anonymous. Because the full transaction history is public, analytics firms and investigators can often link addresses to real identities, especially when coins pass through regulated exchanges. Bitcoin's base layer is also not built for speed or low fees: block space is limited, so fees rise when demand is high. Projects such as the Lightning Network add a second layer to make small, fast payments more practical.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Scarcity Is Not a Price Guarantee",
        text: "Bitcoin's price has historically experienced large swings in both directions. A fixed supply does not guarantee that the price will rise, because value depends on demand, and demand can change quickly.",
      },
    ],
    keyTakeaways: [
      "Bitcoin launched in 2009 as the first decentralized digital currency.",
      "Its supply is capped at 21 million coins, each divisible into 100 million satoshis.",
      "Miners secure the network through Proof of Work and earn new coins plus fees.",
      "The block reward halves every 210,000 blocks, roughly every four years.",
      "Bitcoin is pseudonymous, not anonymous: all transactions are publicly visible.",
    ],
    references: [
      {
        label: "Bitcoin: A Peer-to-Peer Electronic Cash System",
        url: "https://bitcoin.org/bitcoin.pdf",
      },
    ],
  },
  {
    slug: "ethereum-and-smart-contracts",
    title: "Ethereum and Smart Contracts",
    summary:
      "Understand how Ethereum turns the blockchain into a programmable platform, what smart contracts are, and how gas fees pay for computation.",
    level: "beginner",
    track: "fundamentals",
    readingMinutes: 4,
    blocks: [
      {
        type: "paragraph",
        text: "If Bitcoin showed that a decentralized network could keep track of money, Ethereum asked a broader question: what if the same kind of network could run programs? Launched in 2015, Ethereum is a blockchain designed to work like a shared global computer. Anyone can deploy code to it and anyone can interact with that code, with the results recorded on a public ledger.",
      },
      {
        type: "heading",
        text: "Ether and the Ethereum Network",
      },
      {
        type: "paragraph",
        text: "Ethereum's native currency is ether, abbreviated ETH. Ether has two main jobs. It pays transaction fees, which compensate the network for processing and storing data, and it is staked by validators who secure the network. Ethereum switched from Proof of Work to Proof of Stake in September 2022 in an upgrade known as The Merge, which cut the network's energy consumption by well over 99 percent.",
      },
      {
        type: "heading",
        text: "What Is a Smart Contract?",
      },
      {
        type: "paragraph",
        text: "A smart contract is a program stored on the blockchain that runs exactly as written when certain conditions are met. Despite the name, it is not a legal document. A common analogy is a vending machine: you insert the right amount, select an item and the machine delivers it automatically without a shopkeeper. A smart contract applies the same idea to digital assets, executing rules without a trusted intermediary.",
      },
      {
        type: "paragraph",
        text: "Smart contracts are usually written in programming languages such as Solidity and then compiled into bytecode that runs on the Ethereum Virtual Machine, or EVM. The EVM is the standardized environment every node uses to execute contract code, which ensures that all nodes reach the same result from the same inputs.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Contract Code Is Public",
        text: "Once deployed, a smart contract's bytecode is visible to everyone, and many projects publish their source code so others can verify it. This transparency allows independent review, but it also means attackers can study the code for weaknesses.",
      },
      {
        type: "heading",
        text: "What People Build With Smart Contracts",
      },
      {
        type: "list",
        items: [
          "Tokens: custom digital assets that follow shared standards, such as ERC-20 for interchangeable tokens and ERC-721 for unique ones.",
          "Decentralized finance: exchanges, lending markets and other financial services that run on code instead of institutions.",
          "NFTs: tokens that represent ownership of a unique item, such as digital art, collectibles or tickets.",
          "DAOs: decentralized autonomous organizations, where members vote on decisions using tokens and contracts can carry out the results.",
          "Naming and identity services: systems that map human-readable names to wallet addresses.",
        ],
      },
      {
        type: "heading",
        text: "Gas: Paying for Computation",
      },
      {
        type: "paragraph",
        text: "Every operation on Ethereum, from a simple transfer to a complex contract interaction, requires computational work, which is measured in units of gas. Users pay for gas in ether, and the total fee depends on how much gas a transaction uses and how busy the network is. Since an upgrade in 2021, each fee includes a base fee that is burned, permanently removing that ether from circulation, plus an optional priority fee, or tip, paid to the validator.",
      },
      {
        type: "heading",
        text: "How a Smart Contract Interaction Works",
      },
      {
        type: "steps",
        items: [
          "You connect your wallet to an application and choose an action, such as swapping one token for another.",
          "Your wallet shows the transaction details and an estimated gas fee for you to review.",
          "You sign the transaction with your private key, and it is broadcast to the network.",
          "A validator includes it in a block, and every node runs the contract code on the EVM to compute the result.",
          "The new state, such as updated token balances, is recorded on the blockchain.",
        ],
      },
      {
        type: "comparison",
        columns: ["Bitcoin", "Ethereum"],
        rows: [
          {
            label: "Primary purpose",
            values: [
              "Decentralized digital money",
              "Programmable platform for applications",
            ],
          },
          {
            label: "Native asset",
            values: ["Bitcoin (BTC)", "Ether (ETH)"],
          },
          {
            label: "Consensus",
            values: ["Proof of Work", "Proof of Stake since September 2022"],
          },
          {
            label: "Supply policy",
            values: [
              "Hard cap of 21 million coins",
              "No fixed cap; issuance partly offset by fee burning",
            ],
          },
          {
            label: "Programmability",
            values: [
              "Intentionally limited scripting",
              "General-purpose smart contracts",
            ],
          },
        ],
      },
      {
        type: "heading",
        text: "Risks and Limitations",
      },
      {
        type: "paragraph",
        text: "Because smart contracts execute automatically and are often difficult to change after deployment, bugs can be costly, and there have been many incidents where flaws in contract code led to large losses. Fees can also become expensive when demand for block space is high, which is one reason layer 2 networks have grown around Ethereum. Finally, interacting with an unfamiliar contract can grant it permission to move your tokens, so it pays to understand what you are signing.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Read Before You Sign",
        text: "Wallets often ask you to approve a contract to spend your tokens, and malicious contracts use these approvals to drain funds. Only interact with applications you have verified, and periodically review and revoke approvals you no longer need.",
      },
    ],
    keyTakeaways: [
      "Ethereum is a programmable blockchain that runs smart contracts on the Ethereum Virtual Machine.",
      "Smart contracts are self-executing programs, not legal agreements.",
      "Gas measures computational work, and fees are paid in ether.",
      "Ethereum moved from Proof of Work to Proof of Stake in September 2022 with The Merge.",
      "Contract bugs and malicious token approvals are major risks for users.",
    ],
    references: [
      {
        label: "Ethereum developer documentation",
        url: "https://ethereum.org/en/developers/docs/",
      },
      {
        label: "Introduction to smart contracts",
        url: "https://ethereum.org/en/smart-contracts/",
      },
    ],
  },
  {
    slug: "stablecoins",
    title: "Stablecoins: Crypto Pegged to Real-World Value",
    summary:
      "Learn what stablecoins are, the main ways they try to hold a steady value, and the specific risks that come with each design.",
    level: "beginner",
    track: "fundamentals",
    readingMinutes: 4,
    blocks: [
      {
        type: "paragraph",
        text: "Most cryptocurrencies can change in value significantly from one day to the next, which makes them awkward for everyday payments, pricing goods or keeping savings steady. Stablecoins are tokens designed to hold a stable value relative to a reference asset, most often the US dollar. In practice, one unit of a stablecoin aims to be worth one unit of the asset it tracks.",
      },
      {
        type: "heading",
        text: "Why Stablecoins Exist",
      },
      {
        type: "list",
        items: [
          "Trading: they provide a stable unit for moving between crypto assets without converting back to bank money.",
          "Payments and transfers: they let dollar-denominated value move on blockchains at any hour and across borders.",
          "Decentralized finance: they serve as a common unit for lending, borrowing and liquidity pools.",
          "Access to stable value: where local currencies are unstable, some people use stablecoins as a digital way to hold a steadier unit.",
        ],
      },
      {
        type: "heading",
        text: "How the Peg Is Maintained",
      },
      {
        type: "paragraph",
        text: "The promise that a stablecoin is worth one dollar is called its peg. Keeping the peg requires a mechanism that pushes the market price back toward the target whenever it drifts. Different stablecoins use very different mechanisms, and those choices determine where the risks lie.",
      },
      {
        type: "heading",
        text: "Fiat-Collateralized Stablecoins",
      },
      {
        type: "paragraph",
        text: "The most common design is backed by reserves that a company holds off-chain. For each token issued, the issuer aims to hold an equivalent amount in cash, short-term government bonds or similar assets. Approved customers can typically redeem tokens with the issuer for the underlying currency, and this redemption option, combined with arbitrage traders profiting from small price gaps, helps keep the market price near the peg. The key issue is trust: users rely on the issuer to actually hold the reserves, keep them safe and honor redemptions.",
      },
      {
        type: "heading",
        text: "Crypto-Collateralized Stablecoins",
      },
      {
        type: "paragraph",
        text: "Another approach uses other cryptocurrencies as collateral, locked in smart contracts. Because crypto collateral is volatile, these systems require overcollateralization: for example, a user might lock 150 dollars worth of ether to mint 100 dollars worth of stablecoins. If the collateral value falls too far, the position is automatically liquidated, meaning the collateral is sold to keep the system solvent. Reserves are visible on-chain, but the design depends on smart contracts and reliable price feeds.",
      },
      {
        type: "comparison",
        columns: ["Fiat-collateralized", "Crypto-collateralized"],
        rows: [
          {
            label: "Backing",
            values: [
              "Cash and short-term securities held by an issuer",
              "Cryptocurrency locked in smart contracts",
            ],
          },
          {
            label: "Transparency",
            values: [
              "Depends on issuer reports and attestations",
              "Collateral is visible on the blockchain",
            ],
          },
          {
            label: "Main risks",
            values: [
              "Issuer mismanagement, insolvency or regulatory action",
              "Collateral crashes, contract bugs or price feed failures",
            ],
          },
          {
            label: "Capital efficiency",
            values: [
              "About one dollar of reserves per token",
              "More collateral than the value of tokens issued",
            ],
          },
          {
            label: "Control",
            values: [
              "The issuer can usually freeze tokens",
              "Governed by code and often by token holder votes",
            ],
          },
        ],
      },
      {
        type: "heading",
        text: "Algorithmic Stablecoins",
      },
      {
        type: "paragraph",
        text: "A third category tries to maintain the peg mainly through algorithms that expand or shrink supply, often paired with a second, volatile token that absorbs price swings. These designs can work in calm markets but are vulnerable to a loss of confidence. When many holders rush to exit at once, the mechanism can spiral, with falling prices triggering more selling. Several prominent algorithmic stablecoins have collapsed in exactly this way.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Stable Does Not Mean Risk-Free",
        text: "A stablecoin can lose its peg, an event called a depeg. Coins of every design have depegged during market stress, banking problems or a loss of confidence. Understand what backs a stablecoin before relying on it.",
      },
      {
        type: "heading",
        text: "Questions to Ask About Any Stablecoin",
      },
      {
        type: "steps",
        items: [
          "What backs it? Identify whether the reserves are cash, bonds, crypto or nothing tangible.",
          "Can the backing be verified? Look for regular independent attestations or on-chain proof.",
          "Who can redeem, and how? Check whether holders can exchange tokens for the underlying asset.",
          "Who has control? Find out whether an issuer or governance group can freeze addresses or change the rules.",
          "How has it behaved under stress? Review its track record during past market downturns.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Regulation Is Evolving",
        text: "Many jurisdictions are introducing rules specifically for stablecoin issuers, covering reserve quality, audits and redemption rights. Requirements differ by region and continue to change, so availability and protections may depend on where you live.",
      },
    ],
    keyTakeaways: [
      "Stablecoins are tokens designed to track the value of a reference asset, usually the US dollar.",
      "Fiat-backed coins rely on an issuer holding reserves; crypto-backed coins rely on overcollateralized smart contracts.",
      "Algorithmic designs have proven fragile when confidence breaks.",
      "Any stablecoin can depeg, so understanding its backing and redemption process matters.",
    ],
    references: [
      {
        label: "Stablecoins on ethereum.org",
        url: "https://ethereum.org/en/stablecoins/",
      },
    ],
  },
  {
    slug: "tokens-and-tokenomics",
    title: "Tokens, NFTs and Tokenomics",
    summary:
      "Explore the difference between coins, fungible tokens and NFTs, and learn how to read a project's tokenomics: supply, distribution, utility and incentives.",
    level: "intermediate",
    track: "fundamentals",
    readingMinutes: 4,
    blocks: [
      {
        type: "paragraph",
        text: "Beyond the native coins that power blockchains, there are many thousands of tokens built on top of existing networks. Understanding what a token is, how it is created and how its supply and incentives are designed helps you evaluate projects critically instead of relying on marketing claims.",
      },
      {
        type: "heading",
        text: "Coins Versus Tokens",
      },
      {
        type: "paragraph",
        text: "A coin is native to its own blockchain and is typically used to pay fees and secure the network. A token is created by a smart contract on an existing blockchain. Launching a token does not require building a new network: a developer writes or reuses a contract that tracks balances and transfer rules. This low barrier makes experimentation easy, but it also means anyone can launch a token, including bad actors.",
      },
      {
        type: "heading",
        text: "Fungible and Non-Fungible Tokens",
      },
      {
        type: "paragraph",
        text: "Fungible means interchangeable. One banknote is worth the same as any other of the same denomination, and one unit of a fungible token is identical to any other unit of that token. On Ethereum, fungible tokens commonly follow the ERC-20 standard, which defines functions for checking balances and transferring tokens so that wallets and applications can support them in a uniform way.",
      },
      {
        type: "paragraph",
        text: "Non-fungible tokens, or NFTs, are unique. Each one has its own identifier and can represent a distinct item, such as a piece of digital art, an in-game object, a membership pass or an event ticket. The ERC-721 standard is a common way to create them. An NFT usually records ownership of a token that points to data; the image or file itself is often stored elsewhere, which matters if that storage ever disappears.",
      },
      {
        type: "comparison",
        columns: ["Fungible tokens", "Non-fungible tokens (NFTs)"],
        rows: [
          {
            label: "Interchangeability",
            values: ["Every unit is identical", "Each token is unique"],
          },
          {
            label: "Divisibility",
            values: [
              "Usually divisible into small fractions",
              "Typically held as whole units",
            ],
          },
          {
            label: "Common Ethereum standard",
            values: ["ERC-20", "ERC-721"],
          },
          {
            label: "Typical uses",
            values: [
              "Payments, governance, stablecoins, rewards",
              "Collectibles, tickets, memberships, digital art",
            ],
          },
        ],
      },
      {
        type: "heading",
        text: "Common Token Roles",
      },
      {
        type: "list",
        items: [
          "Utility tokens: grant access to a service or pay for something within an application.",
          "Governance tokens: give holders voting power over a protocol's settings, treasury or upgrades.",
          "Stablecoins: aim to track the value of a reference asset such as a national currency.",
          "Wrapped tokens: represent an asset from another blockchain, such as bitcoin, so it can be used elsewhere.",
          "Liquid staking tokens: represent staked assets while letting the holder keep using them in other applications.",
        ],
      },
      {
        type: "heading",
        text: "What Is Tokenomics?",
      },
      {
        type: "paragraph",
        text: "Tokenomics, a blend of the words token and economics, describes how a token's supply, distribution and incentives are designed. Two tokens built on similar technology can behave very differently depending on these choices. Reviewing tokenomics means asking who holds the token, how many more will be created and why anyone would want to hold or use it.",
      },
      {
        type: "steps",
        items: [
          "Check the supply: find the circulating supply, the total supply and whether there is a maximum supply.",
          "Study the distribution: see what share went to the team, early investors, the community and the treasury.",
          "Look at vesting and unlock schedules: large allocations that unlock over time can add significant selling pressure.",
          "Understand issuance and burning: learn whether new tokens are minted as rewards and whether any mechanism removes tokens from circulation.",
          "Identify real utility: ask what the token is actually needed for and whether that demand exists independently of speculation.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Market Cap Versus Fully Diluted Valuation",
        text: "Market capitalization multiplies the price by the circulating supply. Fully diluted valuation multiplies the price by the maximum or total supply. A large gap between the two signals that many tokens have yet to enter circulation.",
      },
      {
        type: "heading",
        text: "Warning Signs",
      },
      {
        type: "paragraph",
        text: "Concentrated ownership, where a few wallets hold most of the supply, gives those holders outsized influence and the ability to move the price. Contracts that let the creator mint unlimited new tokens, block transfers or change fees at will can be abused. Promises of high guaranteed yields funded by newly issued tokens are often unsustainable. Learning to check these details on a block explorer, a website that displays blockchain data, is one of the most useful skills in crypto.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Anyone Can Copy a Name",
        text: "Token names and symbols are not unique. Scammers frequently create fake tokens with the same name as well-known projects. Always verify the contract address through official sources before interacting with a token.",
      },
    ],
    keyTakeaways: [
      "Tokens are created by smart contracts on existing blockchains, while coins are native to their own networks.",
      "Fungible tokens are interchangeable; NFTs are unique and represent distinct items.",
      "Tokenomics covers supply, distribution, vesting, issuance and utility.",
      "Concentrated ownership and large upcoming unlocks are important risk signals.",
      "Always verify a token's contract address, since names and symbols can be copied.",
    ],
    references: [
      {
        label: "ERC-20 token standard",
        url: "https://ethereum.org/en/developers/docs/standards/tokens/erc-20/",
      },
      {
        label: "Non-fungible tokens on ethereum.org",
        url: "https://ethereum.org/en/nft/",
      },
    ],
  },
  {
    slug: "consensus-mechanisms",
    title: "Proof of Work vs Proof of Stake",
    summary:
      "Compare the two dominant ways blockchains reach agreement, Proof of Work and Proof of Stake, including how each secures the network and the trade-offs involved.",
    level: "intermediate",
    track: "fundamentals",
    readingMinutes: 4,
    blocks: [
      {
        type: "paragraph",
        text: "A blockchain network has no central authority to decide which transactions are valid or in what order they happened. Instead, it relies on a consensus mechanism: a set of rules and incentives that lets thousands of independent participants agree on a single version of the ledger, even if some of them are dishonest or offline.",
      },
      {
        type: "heading",
        text: "The Problem Consensus Solves",
      },
      {
        type: "paragraph",
        text: "In an open network, anyone can create many identities. If decisions were made by a simple vote of participants, an attacker could spin up countless nodes and outvote everyone else. This is known as a Sybil attack. Consensus mechanisms prevent it by tying influence to something scarce and costly, such as computing power or locked-up capital, rather than to the number of identities.",
      },
      {
        type: "heading",
        text: "Proof of Work",
      },
      {
        type: "paragraph",
        text: "In Proof of Work, miners compete to find a value that, when combined with a block's data and hashed, produces a result below a target defined by the network. The only way to find it is trial and error, which requires specialized hardware and large amounts of electricity. The winner adds the next block and receives a reward. Bitcoin uses Proof of Work, and its security comes from the fact that rewriting history would require more computing power than the rest of the network combined.",
      },
      {
        type: "paragraph",
        text: "If two miners find blocks at about the same time, the network may briefly split. Nodes follow the chain with the most accumulated work, so one branch soon pulls ahead and the other is abandoned. This is why a transaction becomes more secure with every additional block, or confirmation, built on top of it.",
      },
      {
        type: "heading",
        text: "Proof of Stake",
      },
      {
        type: "paragraph",
        text: "In Proof of Stake, validators lock up, or stake, the network's native coin as collateral. The protocol selects validators to propose new blocks and others to attest that those blocks are valid. Honest participation earns rewards, while provably malicious behavior, such as signing two conflicting blocks, is punished by slashing, which destroys part of the validator's stake. Ethereum has used Proof of Stake since The Merge in September 2022. Running a validator requires staking at least 32 ETH, though pooled services let people take part with less.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Explicit Finality",
        text: "Ethereum's Proof of Stake design includes a finality step. Once validators holding at least two thirds of the staked ether vote for a checkpoint, the blocks before it become finalized, and reversing them would require destroying an enormous amount of stake.",
      },
      {
        type: "heading",
        text: "How a Proof of Stake Block Is Produced",
      },
      {
        type: "steps",
        items: [
          "The protocol pseudo-randomly selects a validator to propose a block for a given time slot.",
          "The proposer gathers pending transactions, builds a block and broadcasts it.",
          "A committee of other validators checks the block and votes for it with signed attestations.",
          "Blocks that gather enough attestations become part of the canonical chain, and participating validators earn rewards.",
          "Validators that go offline miss out on rewards and incur small penalties, while those that act maliciously can be slashed.",
        ],
      },
      {
        type: "heading",
        text: "Side-by-Side Comparison",
      },
      {
        type: "comparison",
        columns: ["Proof of Work", "Proof of Stake"],
        rows: [
          {
            label: "Scarce resource",
            values: ["Computing power and electricity", "Staked native coins"],
          },
          {
            label: "Block producers",
            values: ["Miners", "Validators"],
          },
          {
            label: "Energy use",
            values: [
              "Very high by design",
              "A small fraction of Proof of Work",
            ],
          },
          {
            label: "Penalty for misbehavior",
            values: [
              "Wasted electricity and hardware costs",
              "Slashing of staked funds",
            ],
          },
          {
            label: "Cost to attack",
            values: [
              "Control a majority of the hashing power",
              "Control a large share of the staked supply",
            ],
          },
          {
            label: "Main criticisms",
            values: [
              "Environmental impact and concentrated mining",
              "Wealth concentration and dominant staking pools",
            ],
          },
          {
            label: "Example",
            values: ["Bitcoin", "Ethereum since 2022"],
          },
        ],
      },
      {
        type: "heading",
        text: "Trade-Offs and Debates",
      },
      {
        type: "paragraph",
        text: "Supporters of Proof of Work argue that tying security to physical energy creates an external cost that is hard to fake, and that the model has been battle-tested for many years. Critics point to its electricity consumption and the concentration of mining in large industrial operations. Supporters of Proof of Stake highlight its energy efficiency and its ability to punish attackers directly by destroying their stake. Critics worry that large holders and staking providers could accumulate too much influence over the network.",
      },
      {
        type: "heading",
        text: "Other Approaches",
      },
      {
        type: "list",
        items: [
          "Delegated Proof of Stake: token holders vote for a small set of block producers, trading some decentralization for speed.",
          "Proof of Authority: a limited group of approved validators produces blocks, which is common in private and test networks.",
          "Byzantine fault tolerant protocols: validators exchange votes in rounds to reach fast, final agreement, often as part of a Proof of Stake system.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "No Perfect Design",
        text: "Every consensus mechanism balances security, decentralization and performance differently. When evaluating a network, ask who can participate in block production, how many independent parties control it and what it would cost to attack.",
      },
    ],
    keyTakeaways: [
      "Consensus mechanisms let independent nodes agree on one ledger without a central authority.",
      "Proof of Work ties security to computing power and energy; Proof of Stake ties it to staked capital.",
      "Proof of Stake can punish misbehavior through slashing and uses far less energy.",
      "Bitcoin uses Proof of Work, while Ethereum moved to Proof of Stake in September 2022.",
      "Each design involves trade-offs between security, decentralization and efficiency.",
    ],
    references: [
      {
        label: "Consensus mechanisms on ethereum.org",
        url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/",
      },
      {
        label: "Bitcoin: A Peer-to-Peer Electronic Cash System",
        url: "https://bitcoin.org/bitcoin.pdf",
      },
    ],
  },
  {
    slug: "defi-basics",
    title: "DeFi: Decentralized Finance Basics",
    summary:
      "An introduction to decentralized finance: how smart contracts power trading, lending and other financial services without traditional intermediaries, and the risks involved.",
    level: "intermediate",
    track: "fundamentals",
    readingMinutes: 4,
    blocks: [
      {
        type: "paragraph",
        text: "Decentralized finance, usually shortened to DeFi, refers to financial services built with smart contracts on public blockchains. Instead of a bank or broker matching orders, holding deposits or approving loans, these functions are handled by open code that anyone with a compatible wallet can use. Much of DeFi activity takes place on Ethereum and networks compatible with it, though many other blockchains host DeFi applications too.",
      },
      {
        type: "heading",
        text: "Core Principles",
      },
      {
        type: "list",
        items: [
          "Permissionless: anyone can use the services without an account application or credit check.",
          "Non-custodial: users typically keep control of their assets in their own wallets until they deposit them into a contract.",
          "Transparent: contract code and transactions are publicly visible on the blockchain.",
          "Composable: protocols can plug into each other like building blocks, so one application can use another's features directly.",
        ],
      },
      {
        type: "heading",
        text: "Decentralized Exchanges and Liquidity Pools",
      },
      {
        type: "paragraph",
        text: "A decentralized exchange, or DEX, lets users swap tokens directly from their wallets. Many DEXs use an automated market maker, or AMM, instead of a traditional order book. In an AMM, users called liquidity providers deposit pairs of tokens into a shared pool. Traders swap against that pool, and a formula sets the price based on the ratio of the tokens inside it. Liquidity providers earn a share of the trading fees in return.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Impermanent Loss",
        text: "When the prices of the two tokens in a pool move apart, liquidity providers can end up with less value than if they had simply held the tokens. This effect is called impermanent loss, and it can outweigh the trading fees earned.",
      },
      {
        type: "heading",
        text: "Lending and Borrowing",
      },
      {
        type: "paragraph",
        text: "DeFi lending protocols let users deposit assets into a pool to earn interest, while borrowers take loans from that pool. Because there are no credit checks, loans are usually overcollateralized: borrowers must deposit collateral worth more than what they borrow. Interest rates typically adjust automatically based on supply and demand. If the value of a borrower's collateral falls below a set threshold, the protocol allows the position to be liquidated to repay the loan.",
      },
      {
        type: "heading",
        text: "How a Typical DeFi Loan Works",
      },
      {
        type: "steps",
        items: [
          "The borrower deposits collateral, such as ether, into a lending protocol's smart contract.",
          "The protocol calculates how much can be borrowed based on the collateral's value and its risk settings.",
          "The borrower receives the loan, often in a stablecoin, directly in their wallet.",
          "Interest accrues over time, and the borrower can repay at any point to unlock the collateral.",
          "If the collateral value drops too far, liquidators repay part of the debt and receive collateral at a discount.",
        ],
      },
      {
        type: "heading",
        text: "Other DeFi Building Blocks",
      },
      {
        type: "paragraph",
        text: "Beyond trading and lending, DeFi includes liquid staking protocols that issue tokens representing staked assets, yield aggregators that move funds between strategies, derivatives platforms and bridges that move assets between blockchains. Most of these depend on oracles, which are services that deliver off-chain data such as asset prices to smart contracts. Because so many protocols rely on accurate price data, oracle failures or manipulation can have widespread effects.",
      },
      {
        type: "comparison",
        columns: ["Traditional finance", "DeFi"],
        rows: [
          {
            label: "Access",
            values: [
              "Accounts, identity checks and approval required",
              "Open to anyone with a wallet, subject to local law",
            ],
          },
          {
            label: "Custody",
            values: [
              "Institutions hold customer funds",
              "Users hold assets or deposit them into contracts",
            ],
          },
          {
            label: "Operating hours",
            values: [
              "Business hours and settlement delays",
              "Continuous, with settlement in seconds or minutes",
            ],
          },
          {
            label: "Transparency",
            values: [
              "Internal records and periodic reports",
              "Public code and on-chain activity",
            ],
          },
          {
            label: "Consumer protection",
            values: [
              "Deposit insurance and dispute processes in many countries",
              "Generally none, and errors are hard to reverse",
            ],
          },
        ],
      },
      {
        type: "heading",
        text: "Understanding the Risks",
      },
      {
        type: "paragraph",
        text: "DeFi removes some risks, such as depending on a single institution, but introduces others. Smart contract bugs have led to large exploits. Governance attacks can occur when someone acquires enough voting tokens to change a protocol's rules. Bridges have historically been frequent targets for hackers. Liquidations can happen quickly during sharp price moves, and unusually high yields often reflect high risk rather than free money.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Start Small and Verify",
        text: "If you explore DeFi, stick to well-established applications, double-check website addresses to avoid phishing clones, start with small amounts and understand every transaction before signing it. Advertised yields are not guaranteed and can change or disappear.",
      },
    ],
    keyTakeaways: [
      "DeFi uses smart contracts to provide financial services such as trading and lending without traditional intermediaries.",
      "Automated market makers let users trade against liquidity pools funded by other users.",
      "DeFi loans are typically overcollateralized and can be liquidated if collateral value falls.",
      "Oracles, bridges and contract code are common points of failure.",
      "There is usually no deposit insurance and no way to reverse mistakes.",
    ],
    references: [
      {
        label: "Decentralized finance on ethereum.org",
        url: "https://ethereum.org/en/defi/",
      },
    ],
  },
  {
    slug: "layer-2-scaling",
    title: "Layer 2 Networks and Scaling",
    summary:
      "Learn why base-layer blockchains struggle to scale, how rollups and other layer 2 networks add capacity while relying on the main chain for security, and what trade-offs they introduce.",
    level: "advanced",
    track: "fundamentals",
    readingMinutes: 4,
    blocks: [
      {
        type: "paragraph",
        text: "Popular blockchains face a basic constraint: every full node must process and store every transaction, so the network can only handle a limited amount of activity before fees rise. Raising that limit directly tends to make nodes more expensive to run, which reduces decentralization. Layer 2 networks offer another path, moving most activity off the main chain while still relying on it for security.",
      },
      {
        type: "heading",
        text: "The Scalability Trilemma",
      },
      {
        type: "paragraph",
        text: "Blockchain designers often describe a trilemma between three goals: decentralization, security and scalability. Improving one tends to put pressure on the others. A network run by a few powerful servers can be very fast, but it is easier to censor or control. A network that anyone can verify on modest hardware is more decentralized, but its throughput is limited. Layer 2 designs try to ease this tension by separating where transactions are executed from where they are settled.",
      },
      {
        type: "heading",
        text: "Layer 1 and Layer 2",
      },
      {
        type: "paragraph",
        text: "Layer 1 refers to the base blockchain, such as Bitcoin or Ethereum, which provides final settlement and security. A layer 2 is a separate system built on top of a layer 1. It processes transactions on its own and periodically posts data or proofs back to the base chain. When designed well, it lets users rely on the layer 1 to enforce the correct state even if the layer 2 operators misbehave.",
      },
      {
        type: "heading",
        text: "Rollups",
      },
      {
        type: "paragraph",
        text: "Rollups are the most widely used layer 2 approach on Ethereum. They execute transactions off-chain, bundle, or roll up, many of them together and post compressed transaction data to the layer 1. Spreading the cost of layer 1 data across many users makes each transaction much cheaper. Rollups differ mainly in how they prove that their results are correct.",
      },
      {
        type: "comparison",
        columns: ["Optimistic rollups", "Zero-knowledge rollups"],
        rows: [
          {
            label: "How correctness is ensured",
            values: [
              "Assumed valid unless challenged with a fraud proof",
              "Every batch comes with a validity proof",
            ],
          },
          {
            label: "Withdrawals to layer 1",
            values: [
              "Usually wait out a challenge period of about a week",
              "Possible once the proof is verified on the layer 1",
            ],
          },
          {
            label: "Computation cost",
            values: [
              "Lower, since proofs are only needed in disputes",
              "Higher, since generating proofs is intensive",
            ],
          },
          {
            label: "Technical complexity",
            values: [
              "Simpler and easier to make EVM-compatible",
              "Advanced cryptography that is rapidly maturing",
            ],
          },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "What Is a Zero-Knowledge Proof?",
        text: "A zero-knowledge proof lets one party convince another that a statement is true without revealing all of the underlying information. In rollups, it is used to prove that a large batch of transactions was executed correctly, so the layer 1 can verify the batch quickly instead of re-running every transaction.",
      },
      {
        type: "heading",
        text: "How a Rollup Transaction Flows",
      },
      {
        type: "steps",
        items: [
          "You bridge assets from the layer 1 to the rollup by depositing them into a contract on the base chain.",
          "You transact on the rollup, where a component called a sequencer orders transactions and returns fast confirmations.",
          "The sequencer batches many transactions and posts the compressed data to the layer 1.",
          "Correctness is enforced either by a challenge window for fraud proofs or by a validity proof verified on the layer 1.",
          "When you withdraw, the layer 1 contract releases your assets once the rollup's state has been settled.",
        ],
      },
      {
        type: "heading",
        text: "Other Scaling Approaches",
      },
      {
        type: "list",
        items: [
          "State channels: two or more parties lock funds and exchange signed updates off-chain, settling only the final result on the main chain. Bitcoin's Lightning Network is a well-known example built on payment channels.",
          "Sidechains: independent blockchains with their own consensus that connect to a main chain through a bridge. They do not inherit the main chain's security.",
          "Validiums: similar to zero-knowledge rollups but storing transaction data off-chain, which lowers costs while adding trust assumptions about data availability.",
        ],
      },
      {
        type: "heading",
        text: "Data Availability",
      },
      {
        type: "paragraph",
        text: "For a rollup to be secure, anyone must be able to reconstruct its state from the data posted to the layer 1. This requirement is called data availability. Ethereum's Dencun upgrade in March 2024 introduced blobs, a dedicated and cheaper form of temporary data storage for rollups, which significantly lowered layer 2 fees. Expanding this data capacity remains a central theme of Ethereum's roadmap.",
      },
      {
        type: "heading",
        text: "Trade-Offs to Understand",
      },
      {
        type: "paragraph",
        text: "Layer 2 networks are not identical, and their security depends on implementation details. Many still rely on a single centralized sequencer, which could delay or censor transactions, although users can often force transactions through the layer 1. Some have upgradeable contracts controlled by a small group, which means the rules could change. Bridging adds smart contract risk, and spreading activity across many layer 2s can fragment liquidity and complicate the user experience.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Check the Network Before You Send",
        text: "The same token can exist on many networks, and Ethereum and its layer 2s often share the same address format. Sending assets on the wrong network, or to an exchange that does not support that network, can delay or even lose funds. Always confirm which network both sides support.",
      },
    ],
    keyTakeaways: [
      "Layer 2 networks process transactions off the main chain while relying on it for security and settlement.",
      "Rollups bundle many transactions and post data to the layer 1, spreading costs across users.",
      "Optimistic rollups rely on fraud proofs and challenge periods; zero-knowledge rollups rely on validity proofs.",
      "Sidechains and validiums can be cheaper but do not fully inherit layer 1 security.",
      "Centralized sequencers, upgradeable contracts and bridges are key risks to evaluate.",
    ],
    references: [
      {
        label: "Layer 2 on ethereum.org",
        url: "https://ethereum.org/en/layer-2/",
      },
      {
        label: "Scaling documentation on ethereum.org",
        url: "https://ethereum.org/en/developers/docs/scaling/",
      },
    ],
  },
];
