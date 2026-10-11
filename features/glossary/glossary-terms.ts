import type { GlossaryTerm } from "./types";

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "2FA",
    definition:
      "Two-factor authentication: a login protection that requires a second proof of identity besides your password, such as a code from an authenticator app or a physical security key. Authenticator apps and security keys are generally safer than SMS codes, which can be intercepted through SIM swap attacks.",
    category: "security",
    relatedLessonSlug: "scams-and-security",
  },
  {
    term: "Address poisoning",
    definition:
      "A scam in which an attacker sends tiny or zero-value transactions from an address that looks very similar to one you have used, hoping you will copy it from your transaction history by mistake. Always verify the full address before sending funds.",
    category: "security",
    relatedLessonSlug: "scams-and-security",
  },
  {
    term: "Altcoin",
    definition:
      "Any cryptocurrency other than Bitcoin. The term covers thousands of projects with very different goals, technologies and levels of risk.",
    category: "basics",
    relatedLessonSlug: "what-is-cryptocurrency",
  },
  {
    term: "AML",
    definition:
      "Anti-money laundering: laws and procedures that require financial institutions, including regulated exchanges, to monitor transactions and report suspicious activity. AML rules usually work together with KYC identity checks.",
    category: "trading",
    relatedLessonSlug: "choosing-an-exchange",
  },
  {
    term: "AMM",
    definition:
      "Automated market maker: a type of decentralized exchange that prices trades with a mathematical formula based on the token balances in a liquidity pool, instead of matching buyers and sellers in an order book.",
    category: "defi",
    relatedLessonSlug: "cex-vs-dex",
  },
  {
    term: "Ask",
    definition:
      "The lowest price at which a seller is currently willing to sell an asset in the order book, also called the offer. A market buy order starts filling at the ask price.",
    category: "trading",
    relatedLessonSlug: "reading-an-order-book",
  },
  {
    term: "Bear market",
    definition:
      "A prolonged period of falling prices and pessimistic sentiment in a market. It is the opposite of a bull market.",
    category: "trading",
    relatedLessonSlug: "risk-management",
  },
  {
    term: "Bid",
    definition:
      "The highest price a buyer is currently willing to pay for an asset in the order book. A market sell order starts filling at the bid price.",
    category: "trading",
    relatedLessonSlug: "reading-an-order-book",
  },
  {
    term: "Bitcoin",
    definition:
      "The first cryptocurrency, launched in 2009 by the pseudonymous Satoshi Nakamoto. It runs on a decentralized Proof of Work blockchain and has a maximum supply of 21 million coins.",
    category: "basics",
    relatedLessonSlug: "bitcoin-explained",
  },
  {
    term: "Block",
    definition:
      "A batch of transactions grouped together and added to a blockchain. Each block contains the hash of the previous block, which links them into a chain.",
    category: "technology",
    relatedLessonSlug: "how-blockchain-works",
  },
  {
    term: "Blockchain",
    definition:
      "A shared digital ledger that records transactions in linked blocks and is copied across many independent computers. Because each block references the previous one, altering past records is extremely difficult.",
    category: "basics",
    relatedLessonSlug: "how-blockchain-works",
  },
  {
    term: "Bridge",
    definition:
      "A protocol that moves tokens or data between different blockchains, often by locking assets on one chain and issuing a representation of them on another. Bridges have been frequent targets of large hacks, so using them adds risk.",
    category: "defi",
    relatedLessonSlug: "layer-2-scaling",
  },
  {
    term: "Bull market",
    definition:
      "A prolonged period of rising prices and optimistic sentiment in a market. It is the opposite of a bear market.",
    category: "trading",
    relatedLessonSlug: "risk-management",
  },
  {
    term: "Candlestick",
    definition:
      "A chart element that shows an asset's opening, highest, lowest and closing prices over a specific time period. Candlestick charts help traders visualize price movement and volatility.",
    category: "trading",
  },
  {
    term: "CBDC",
    definition:
      "Central bank digital currency: a digital form of a country's official currency that is issued and backed by its central bank. Unlike most cryptocurrencies, it is centralized and controlled by the monetary authority.",
    category: "technology",
  },
  {
    term: "Centralized exchange (CEX)",
    definition:
      "A company-run platform where users deposit funds and trade crypto through an order book managed by the exchange. It is usually easy to use and accepts fiat deposits, but the exchange holds custody of your assets while they stay on the platform.",
    category: "trading",
    relatedLessonSlug: "cex-vs-dex",
  },
  {
    term: "Cold wallet",
    definition:
      "A wallet whose private keys are kept offline, such as on a hardware device or a paper backup. Keeping keys offline greatly reduces exposure to online hacking.",
    category: "security",
    relatedLessonSlug: "wallets-and-keys",
  },
  {
    term: "Consensus",
    definition:
      "The process by which the computers in a blockchain network agree on which transactions are valid and in what order they happened. Proof of Work and Proof of Stake are the most common consensus mechanisms.",
    category: "technology",
    relatedLessonSlug: "consensus-mechanisms",
  },
  {
    term: "Custody",
    definition:
      "Control over the private keys of a set of crypto assets. With custodial services, such as most centralized exchanges, a third party holds the keys on your behalf.",
    category: "security",
    relatedLessonSlug: "self-custody",
  },
  {
    term: "DAO",
    definition:
      "Decentralized autonomous organization: a group that makes decisions and manages a shared treasury through rules encoded in smart contracts. Members typically vote using governance tokens.",
    category: "defi",
    relatedLessonSlug: "defi-basics",
  },
  {
    term: "Decentralization",
    definition:
      "The distribution of control across many independent participants instead of a single company or authority. Greater decentralization makes a network harder to censor, shut down or manipulate.",
    category: "technology",
    relatedLessonSlug: "what-is-cryptocurrency",
  },
  {
    term: "Decentralized exchange (DEX)",
    definition:
      "A trading platform that runs on smart contracts, letting users swap tokens directly from their own wallets without handing custody to a company. Many DEXs use automated market makers and liquidity pools instead of order books.",
    category: "defi",
    relatedLessonSlug: "cex-vs-dex",
  },
  {
    term: "Drex",
    definition:
      "A digital platform project of the Central Bank of Brazil aimed at modernizing financial services involving the Brazilian real through digital and tokenized assets. As a central bank initiative, it is centralized and differs from decentralized cryptocurrencies such as Bitcoin.",
    category: "technology",
    relatedLessonSlug: "crypto-in-brazil",
  },
  {
    term: "ERC-20",
    definition:
      "The most widely used technical standard for fungible tokens on Ethereum. Tokens that follow it share common functions, so wallets and exchanges can support them in the same way.",
    category: "technology",
    relatedLessonSlug: "tokens-and-tokenomics",
  },
  {
    term: "Ethereum",
    definition:
      "A blockchain that supports smart contracts, allowing developers to build decentralized applications on top of it. Its native currency, ether (ETH), is used to pay transaction fees, and the network has used Proof of Stake since 2022.",
    category: "basics",
    relatedLessonSlug: "ethereum-and-smart-contracts",
  },
  {
    term: "Fiat",
    definition:
      "Government-issued money, such as the Brazilian real or the US dollar, that is not backed by a physical commodity. Its value comes from law and public trust in the issuing country.",
    category: "basics",
    relatedLessonSlug: "what-is-cryptocurrency",
  },
  {
    term: "Fiat on-ramp",
    definition:
      "A service that lets you convert fiat money into crypto, for example by depositing reais on an exchange and buying bitcoin. An off-ramp does the reverse, turning crypto back into fiat.",
    category: "trading",
    relatedLessonSlug: "what-is-an-exchange",
  },
  {
    term: "Fork",
    definition:
      "A change to a blockchain's rules or a split in its history. A soft fork is backward compatible, while a hard fork is not and can create two separate chains if part of the network does not upgrade.",
    category: "technology",
    relatedLessonSlug: "how-blockchain-works",
  },
  {
    term: "Funding rate",
    definition:
      "Periodic payments exchanged between long and short traders in perpetual futures to keep the contract price close to the spot price. When the rate is positive, longs pay shorts; when it is negative, shorts pay longs.",
    category: "trading",
    relatedLessonSlug: "derivatives-and-leverage",
  },
  {
    term: "Gas",
    definition:
      "A unit that measures the computational work needed to process a transaction or run a smart contract on Ethereum and similar networks. The fee you pay depends on the gas used and the gas price, which rises when the network is busy.",
    category: "defi",
    relatedLessonSlug: "ethereum-and-smart-contracts",
  },
  {
    term: "Governance token",
    definition:
      "A token that gives holders voting rights over a protocol's decisions, such as parameter changes or treasury spending. Voting power is usually proportional to the number of tokens held.",
    category: "defi",
    relatedLessonSlug: "tokens-and-tokenomics",
  },
  {
    term: "Halving",
    definition:
      "A scheduled Bitcoin event that cuts the block reward paid to miners in half every 210,000 blocks, which is roughly every four years. It slows the rate at which new bitcoins are created.",
    category: "basics",
    relatedLessonSlug: "bitcoin-explained",
  },
  {
    term: "Hardware wallet",
    definition:
      "A small physical device that stores private keys offline and signs transactions internally, so the keys never touch your internet-connected computer or phone. Buy one only from the manufacturer or an authorized reseller.",
    category: "security",
    relatedLessonSlug: "self-custody",
  },
  {
    term: "Hash",
    definition:
      "The fixed-length output of a hash function, which turns any input data into a seemingly random string of characters. Changing even one character of the input produces a completely different hash, which makes tampering easy to detect.",
    category: "technology",
    relatedLessonSlug: "how-blockchain-works",
  },
  {
    term: "Hash rate",
    definition:
      "The total computing power miners use to secure a Proof of Work blockchain, measured in hashes per second. A higher hash rate makes the network more costly to attack.",
    category: "technology",
    relatedLessonSlug: "consensus-mechanisms",
  },
  {
    term: "Hot wallet",
    definition:
      "A wallet whose private keys are stored on a device connected to the internet, such as a mobile app or browser extension. It is convenient for frequent use but more exposed to hacks than a cold wallet.",
    category: "security",
    relatedLessonSlug: "wallets-and-keys",
  },
  {
    term: "Impermanent loss",
    definition:
      "The loss in value a liquidity provider can suffer compared with simply holding the tokens, caused by the prices of the pooled tokens changing relative to each other. It becomes permanent if the provider withdraws while the prices remain apart.",
    category: "defi",
    relatedLessonSlug: "defi-basics",
  },
  {
    term: "KYC",
    definition:
      "Know your customer: the identity verification process that regulated exchanges and financial services require, such as submitting an ID document and a selfie. It helps prevent fraud and money laundering.",
    category: "trading",
    relatedLessonSlug: "choosing-an-exchange",
  },
  {
    term: "Layer 1",
    definition:
      "A base blockchain that processes and finalizes transactions on its own, such as Bitcoin or Ethereum. Layer 2 networks are built on top of it.",
    category: "technology",
    relatedLessonSlug: "layer-2-scaling",
  },
  {
    term: "Layer 2",
    definition:
      "A network built on top of a Layer 1 blockchain to process transactions faster and more cheaply while relying on the Layer 1 for security. Rollups and the Lightning Network are common examples.",
    category: "technology",
    relatedLessonSlug: "layer-2-scaling",
  },
  {
    term: "Lending protocol",
    definition:
      "A DeFi application where users deposit crypto to earn interest or borrow against collateral, with loans managed automatically by smart contracts. Borrowers whose collateral value falls below a required level can be liquidated.",
    category: "defi",
    relatedLessonSlug: "defi-basics",
  },
  {
    term: "Leverage",
    definition:
      "Using borrowed funds to open a position larger than your own capital. With 10x leverage, a 1% price move changes your profit or loss by about 10% of your margin, magnifying both gains and losses.",
    category: "trading",
    relatedLessonSlug: "derivatives-and-leverage",
  },
  {
    term: "Limit order",
    definition:
      "An order to buy or sell only at a specified price or better. It gives you control over the price but may never be filled if the market does not reach that level.",
    category: "trading",
    relatedLessonSlug: "order-types",
  },
  {
    term: "Liquidation",
    definition:
      "The forced closing of a leveraged position by an exchange or protocol when losses push the margin below the required maintenance level. The trader can lose most or all of the margin committed to the position.",
    category: "trading",
    relatedLessonSlug: "derivatives-and-leverage",
  },
  {
    term: "Liquidity",
    definition:
      "How easily an asset can be bought or sold without significantly moving its price. Highly liquid markets have tight spreads and deep order books.",
    category: "trading",
    relatedLessonSlug: "reading-an-order-book",
  },
  {
    term: "Liquidity pool",
    definition:
      "A collection of tokens locked in a smart contract that traders swap against on a decentralized exchange. People who deposit tokens into the pool are called liquidity providers and earn a share of the trading fees.",
    category: "defi",
    relatedLessonSlug: "defi-basics",
  },
  {
    term: "Long",
    definition:
      "A position that profits when the price of an asset rises. Buying an asset or opening a long futures contract are both ways of going long.",
    category: "trading",
    relatedLessonSlug: "derivatives-and-leverage",
  },
  {
    term: "Mainnet",
    definition:
      "The live, production version of a blockchain where transactions are real and tokens have actual value. It contrasts with a testnet, which is used for experiments.",
    category: "technology",
  },
  {
    term: "Maker",
    definition:
      "A trader whose order adds liquidity to the order book, typically a limit order that does not fill immediately. Many exchanges charge makers lower fees than takers.",
    category: "trading",
    relatedLessonSlug: "exchange-fees",
  },
  {
    term: "Margin",
    definition:
      "The collateral a trader deposits to open and maintain a leveraged position. If losses reduce the margin below the maintenance requirement, the position may be liquidated.",
    category: "trading",
    relatedLessonSlug: "derivatives-and-leverage",
  },
  {
    term: "Market cap",
    definition:
      "Short for market capitalization: the current price of a coin multiplied by its circulating supply. It indicates the total market value of a cryptocurrency but says nothing about its liquidity or how the supply is distributed.",
    category: "basics",
    relatedLessonSlug: "tokens-and-tokenomics",
  },
  {
    term: "Market order",
    definition:
      "An order to buy or sell immediately at the best available prices in the order book. It guarantees execution in a liquid market but not the exact price, so it can suffer slippage.",
    category: "trading",
    relatedLessonSlug: "order-types",
  },
  {
    term: "Mempool",
    definition:
      "The waiting area where valid transactions sit after being broadcast and before being included in a block. When the mempool is crowded, transactions that pay higher fees are usually confirmed first.",
    category: "technology",
    relatedLessonSlug: "how-blockchain-works",
  },
  {
    term: "Mining",
    definition:
      "The process of using specialized computers to solve cryptographic puzzles in a Proof of Work blockchain. The miner who finds a valid block earns newly created coins plus the transaction fees in that block.",
    category: "technology",
    relatedLessonSlug: "consensus-mechanisms",
  },
  {
    term: "Multisig",
    definition:
      "Short for multi-signature: a wallet setup that requires several private keys to approve a transaction, such as 2 of 3. It removes the single point of failure of relying on one key.",
    category: "security",
    relatedLessonSlug: "self-custody",
  },
  {
    term: "NFT",
    definition:
      "Non-fungible token: a unique token on a blockchain that represents ownership of a specific item, such as digital art, a collectible or a ticket. Unlike regular tokens, each NFT is distinct and not interchangeable.",
    category: "technology",
    relatedLessonSlug: "tokens-and-tokenomics",
  },
  {
    term: "Node",
    definition:
      "A computer that runs a blockchain's software, keeps a copy of the ledger and verifies transactions and blocks according to the network's rules. The more independent nodes a network has, the more decentralized it tends to be.",
    category: "technology",
    relatedLessonSlug: "how-blockchain-works",
  },
  {
    term: "Oracle",
    definition:
      "A service that brings external data, such as asset prices, onto a blockchain so smart contracts can use it. DeFi protocols depend on accurate oracles, and manipulated price feeds have caused major losses.",
    category: "defi",
    relatedLessonSlug: "defi-basics",
  },
  {
    term: "Order book",
    definition:
      "The live list of open buy orders (bids) and sell orders (asks) for a trading pair on an exchange, organized by price. It shows market depth and where supply and demand are concentrated.",
    category: "trading",
    relatedLessonSlug: "reading-an-order-book",
  },
  {
    term: "OTC",
    definition:
      "Over-the-counter: trading done directly between two parties, often through a specialized desk, instead of on a public order book. It is commonly used for large trades to avoid moving the market price.",
    category: "trading",
  },
  {
    term: "P2P",
    definition:
      "Peer-to-peer: trading directly between individuals, often through a platform that holds the crypto in escrow until the buyer's payment is confirmed. In Brazil, P2P trades are frequently paid with Pix.",
    category: "trading",
    relatedLessonSlug: "crypto-in-brazil",
  },
  {
    term: "Perpetual futures",
    definition:
      "Derivative contracts that let traders speculate on an asset's price with leverage and have no expiration date. A funding rate mechanism keeps their price close to the spot market.",
    category: "trading",
    relatedLessonSlug: "derivatives-and-leverage",
  },
  {
    term: "Phishing",
    definition:
      "A scam that uses fake websites, emails, messages or ads imitating trusted services to trick you into revealing passwords or seed phrases, or into approving malicious transactions. Type addresses yourself or use saved bookmarks to avoid it.",
    category: "security",
    relatedLessonSlug: "scams-and-security",
  },
  {
    term: "Private key",
    definition:
      "A secret number that proves ownership of a crypto address and is used to sign transactions. Anyone who has your private key can move your funds, so it must never be shared.",
    category: "security",
    relatedLessonSlug: "wallets-and-keys",
  },
  {
    term: "Proof of reserves",
    definition:
      "A verification, often using cryptographic techniques or an independent auditor, showing that an exchange holds enough assets to cover its customers' balances. It is most meaningful when it also accounts for the exchange's liabilities.",
    category: "security",
    relatedLessonSlug: "proof-of-reserves",
  },
  {
    term: "Proof of Stake",
    definition:
      "A consensus mechanism in which validators lock up coins as collateral, known as stake, for the right to propose and confirm blocks. Validators who act dishonestly can lose part of their stake.",
    category: "technology",
    relatedLessonSlug: "consensus-mechanisms",
  },
  {
    term: "Proof of Work",
    definition:
      "A consensus mechanism in which miners compete to solve computationally expensive puzzles to add new blocks. It secures networks like Bitcoin by making attacks require enormous amounts of energy and hardware.",
    category: "technology",
    relatedLessonSlug: "consensus-mechanisms",
  },
  {
    term: "Public key",
    definition:
      "A key mathematically derived from a private key that can be shared safely. Wallet addresses are generated from public keys, allowing others to send you funds and verify your signatures.",
    category: "security",
    relatedLessonSlug: "wallets-and-keys",
  },
  {
    term: "Rollup",
    definition:
      "A Layer 2 solution that executes transactions off the main chain, bundles them together and posts the data or proofs back to the Layer 1. Optimistic rollups and zero-knowledge rollups are the two main types.",
    category: "technology",
    relatedLessonSlug: "layer-2-scaling",
  },
  {
    term: "Rug pull",
    definition:
      "A scam in which a project's developers suddenly abandon it and take investors' money, for example by draining a liquidity pool or dumping their large token holdings. It is especially common with new, anonymous tokens.",
    category: "security",
    relatedLessonSlug: "scams-and-security",
  },
  {
    term: "Satoshi",
    definition:
      "The smallest unit of bitcoin, equal to 0.00000001 BTC, or one hundred millionth of a bitcoin. It is named after Bitcoin's pseudonymous creator, Satoshi Nakamoto.",
    category: "basics",
    relatedLessonSlug: "bitcoin-explained",
  },
  {
    term: "Seed phrase",
    definition:
      "A list of words, usually 12 or 24, generated by a wallet that can restore all of its private keys. Write it down offline, store it securely and never type it into a website or share it with anyone.",
    category: "security",
    relatedLessonSlug: "wallets-and-keys",
  },
  {
    term: "Self-custody",
    definition:
      "Holding your crypto in a wallet where only you control the private keys, instead of leaving it with an exchange or other custodian. It removes the risk of a third party failing but makes you fully responsible for security and backups.",
    category: "security",
    relatedLessonSlug: "self-custody",
  },
  {
    term: "Short",
    definition:
      "A position that profits when the price of an asset falls, usually opened by selling borrowed assets or a futures contract. Losses on a short can grow quickly if the price rises.",
    category: "trading",
    relatedLessonSlug: "derivatives-and-leverage",
  },
  {
    term: "SIM swap",
    definition:
      "An attack in which a criminal convinces a mobile carrier to transfer your phone number to a SIM card they control, letting them receive your SMS codes. Using an authenticator app or a security key instead of SMS for 2FA reduces this risk.",
    category: "security",
    relatedLessonSlug: "scams-and-security",
  },
  {
    term: "Slippage",
    definition:
      "The difference between the expected price of a trade and the price at which it actually executes. It usually happens with market orders in fast-moving or low-liquidity markets.",
    category: "trading",
    relatedLessonSlug: "order-types",
  },
  {
    term: "Smart contract",
    definition:
      "A program stored on a blockchain that runs automatically when predefined conditions are met. Once deployed, it is often difficult or impossible to change, so bugs can put funds at risk.",
    category: "defi",
    relatedLessonSlug: "ethereum-and-smart-contracts",
  },
  {
    term: "Spread",
    definition:
      "The difference between the best ask price and the best bid price in an order book. A narrow spread usually signals a liquid market, while a wide spread increases the cost of trading.",
    category: "trading",
    relatedLessonSlug: "reading-an-order-book",
  },
  {
    term: "Stablecoin",
    definition:
      "A cryptocurrency designed to keep a stable value, usually pegged to a fiat currency such as the US dollar. Its stability may rely on reserves of cash and securities, crypto collateral or algorithms, each with different risks.",
    category: "technology",
    relatedLessonSlug: "stablecoins",
  },
  {
    term: "Staking",
    definition:
      "Locking up coins to help secure a Proof of Stake network, either by running a validator or delegating to one, in exchange for rewards. Staked funds may be subject to lock-up periods and penalties.",
    category: "defi",
    relatedLessonSlug: "consensus-mechanisms",
  },
  {
    term: "Stop-loss",
    definition:
      "An order that automatically closes a position when the price reaches a specified level, in order to limit losses. In fast markets it may be filled at a worse price than the trigger level.",
    category: "trading",
    relatedLessonSlug: "order-types",
  },
  {
    term: "Taker",
    definition:
      "A trader whose order removes liquidity from the order book by filling immediately against existing orders, such as a market order. Taker fees are usually higher than maker fees.",
    category: "trading",
    relatedLessonSlug: "exchange-fees",
  },
  {
    term: "Testnet",
    definition:
      "A separate version of a blockchain used by developers to test applications and upgrades. Testnet tokens have no real value and are usually obtained for free.",
    category: "technology",
  },
  {
    term: "Tokenomics",
    definition:
      "The economic design of a token, including its total supply, distribution, issuance schedule, vesting periods and uses. Analyzing tokenomics helps assess risks such as dilution and misaligned incentives.",
    category: "technology",
    relatedLessonSlug: "tokens-and-tokenomics",
  },
  {
    term: "Trading pair",
    definition:
      "Two assets that can be exchanged for each other on a market, such as BTC/BRL or ETH/USDT. The price shows how much of the second asset, the quote, is needed to buy one unit of the first asset, the base.",
    category: "trading",
    relatedLessonSlug: "what-is-an-exchange",
  },
  {
    term: "Validator",
    definition:
      "A participant in a Proof of Stake network who stakes coins and runs software to propose and verify blocks. Validators earn rewards for honest work and can be penalized for misbehavior or downtime.",
    category: "technology",
    relatedLessonSlug: "consensus-mechanisms",
  },
  {
    term: "Volume",
    definition:
      "The total amount of an asset traded over a period, such as 24 hours. Higher volume generally indicates more market activity and liquidity, although reported volume can be inflated on some platforms.",
    category: "trading",
    relatedLessonSlug: "choosing-an-exchange",
  },
  {
    term: "Whitepaper",
    definition:
      "A document published by a project to explain its purpose, technology and economics. Bitcoin's whitepaper was released in 2008, and reading a project's whitepaper critically is a basic research step.",
    category: "basics",
    relatedLessonSlug: "what-is-cryptocurrency",
  },
  {
    term: "Wrapped token",
    definition:
      "A token on one blockchain that represents an asset from another, backed 1:1 by the original asset held by a custodian or locked in a contract. Wrapped bitcoin on Ethereum is a common example.",
    category: "defi",
  },
  {
    term: "Yield farming",
    definition:
      "A strategy of moving crypto between DeFi protocols to earn rewards such as interest, fees or extra tokens. High advertised yields often come with high risks, including smart contract bugs and falling token prices.",
    category: "defi",
    relatedLessonSlug: "defi-basics",
  },
];
