import type { QuizQuestion } from "./types";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "fundamentals-bitcoin-max-supply",
    track: "fundamentals",
    question: "What is the maximum supply of bitcoin defined by its protocol?",
    options: ["21 million BTC", "100 million BTC", "18 million BTC", "There is no maximum supply"],
    correctOptionIndex: 0,
    explanation:
      "Bitcoin's protocol caps the total supply at 21 million coins. New bitcoins are issued through block rewards that shrink over time until the cap is reached.",
    relatedLessonSlug: "bitcoin-explained",
  },
  {
    id: "fundamentals-satoshis-per-bitcoin",
    track: "fundamentals",
    question: "How many satoshis are there in one bitcoin?",
    options: ["1,000", "1,000,000", "100,000,000", "21,000,000"],
    correctOptionIndex: 2,
    explanation:
      "A satoshi is the smallest unit of bitcoin, equal to 0.00000001 BTC. That means one bitcoin is made up of 100,000,000 satoshis.",
    relatedLessonSlug: "bitcoin-explained",
  },
  {
    id: "fundamentals-bitcoin-halving",
    track: "fundamentals",
    question: "What happens during a Bitcoin halving?",
    options: [
      "The price of bitcoin is cut in half",
      "The block reward paid to miners is cut in half",
      "Half of all existing bitcoins are burned",
      "Transaction fees are permanently reduced by 50%",
    ],
    correctOptionIndex: 1,
    explanation:
      "Every 210,000 blocks, roughly every four years, the number of new bitcoins paid to miners per block is cut in half. This slows the creation of new coins and does not directly change the price or existing balances.",
    relatedLessonSlug: "bitcoin-explained",
  },
  {
    id: "fundamentals-blockchain-immutability",
    track: "fundamentals",
    question: "Why is it very hard to alter a past transaction recorded on a blockchain?",
    options: [
      "A government agency reviews and locks every block",
      "Transactions are stored on a single highly secure server",
      "Blocks are encrypted with each user's password",
      "Each block contains the previous block's hash, so altering one breaks the chain and the network rejects it",
    ],
    correctOptionIndex: 3,
    explanation:
      "Blocks are linked by hashes, so changing an old transaction changes that block's hash and invalidates every block after it. The many independent nodes holding the correct copy would reject the altered history.",
    relatedLessonSlug: "how-blockchain-works",
  },
  {
    id: "fundamentals-smart-contract-definition",
    track: "fundamentals",
    question: "What is a smart contract?",
    options: [
      "A legal document signed digitally in front of a notary",
      "A program stored on a blockchain that runs automatically when its conditions are met",
      "The terms of service between an exchange and its customers",
      "An AI assistant that negotiates trades for you",
    ],
    correctOptionIndex: 1,
    explanation:
      "A smart contract is code deployed on a blockchain such as Ethereum that executes automatically according to its predefined rules. It does not need a middleman to enforce the outcome.",
    relatedLessonSlug: "ethereum-and-smart-contracts",
  },
  {
    id: "fundamentals-gas-fees",
    track: "fundamentals",
    question: "On Ethereum, what do gas fees pay for?",
    options: [
      "Storing ether in a hardware wallet",
      "Converting ether into fiat currency",
      "Insurance against smart contract hacks",
      "The computational work of processing transactions and running smart contracts",
    ],
    correctOptionIndex: 3,
    explanation:
      "Gas measures the computational effort a transaction requires, and the fee compensates the network for processing it. Fees rise when demand for block space is high.",
    relatedLessonSlug: "ethereum-and-smart-contracts",
  },
  {
    id: "fundamentals-stablecoin-goal",
    track: "fundamentals",
    question: "What is the main goal of a stablecoin pegged to the US dollar?",
    options: [
      "To keep a value close to one US dollar",
      "To rise in price faster than bitcoin",
      "To reward miners for securing the network",
      "To replace the need for private keys",
    ],
    correctOptionIndex: 0,
    explanation:
      "A dollar-pegged stablecoin is designed to track the value of one US dollar, usually through reserves or collateral. This makes it useful for trading and payments without the volatility of most cryptocurrencies.",
    relatedLessonSlug: "stablecoins",
  },
  {
    id: "fundamentals-proof-of-stake-collateral",
    track: "fundamentals",
    question: "In Proof of Stake, what do validators put up to earn the right to propose and confirm blocks?",
    options: [
      "Computing power from mining hardware",
      "A license issued by the central bank",
      "Coins locked as collateral, known as stake",
      "Copies of their identity documents",
    ],
    correctOptionIndex: 2,
    explanation:
      "Validators lock coins as stake, which gives them the right to participate in block production. If they act dishonestly, part of that stake can be taken away.",
    relatedLessonSlug: "consensus-mechanisms",
  },
  {
    id: "fundamentals-bitcoin-consensus",
    track: "fundamentals",
    question: "Which consensus mechanism does the Bitcoin network use?",
    options: ["Proof of Stake", "Delegated Proof of Stake", "Proof of Work", "Proof of Authority"],
    correctOptionIndex: 2,
    explanation:
      "Bitcoin uses Proof of Work, in which miners spend computing power to find valid blocks. This makes rewriting the blockchain extremely expensive.",
    relatedLessonSlug: "consensus-mechanisms",
  },
  {
    id: "fundamentals-market-cap-calculation",
    track: "fundamentals",
    question: "A token costs $2 and has a circulating supply of 50 million tokens. What is its market capitalization?",
    options: ["$100 million", "$25 million", "$52 million", "$1 billion"],
    correctOptionIndex: 0,
    explanation:
      "Market cap equals price multiplied by circulating supply. $2 times 50,000,000 equals $100,000,000.",
    relatedLessonSlug: "tokens-and-tokenomics",
  },
  {
    id: "fundamentals-impermanent-loss",
    track: "fundamentals",
    question: "What is impermanent loss in DeFi?",
    options: [
      "A fee charged by a DEX when a swap is canceled",
      "Losing access to a wallet after forgetting the seed phrase",
      "A temporary outage on the blockchain network",
      "The lower value a liquidity provider can end up with compared with simply holding, caused by price changes between pooled tokens",
    ],
    correctOptionIndex: 3,
    explanation:
      "When the prices of tokens in a liquidity pool move relative to each other, the pool rebalances and the provider may end up with less value than if they had just held the tokens. The loss becomes permanent if they withdraw while prices remain apart.",
    relatedLessonSlug: "defi-basics",
  },
  {
    id: "fundamentals-layer-2-purpose",
    track: "fundamentals",
    question: "What is the main purpose of a Layer 2 network such as a rollup?",
    options: [
      "To replace the Layer 1 blockchain entirely",
      "To increase throughput and lower fees while relying on the Layer 1 for security",
      "To store users' private keys in the cloud",
      "To issue new fiat currencies",
    ],
    correctOptionIndex: 1,
    explanation:
      "Layer 2 networks process many transactions off the main chain and settle the results on the Layer 1. This makes transactions cheaper and faster while inheriting the base chain's security.",
    relatedLessonSlug: "layer-2-scaling",
  },
  {
    id: "exchanges-taker-fee-calculation",
    track: "exchanges",
    question: "You buy R$ 2,000 worth of bitcoin with a market order on an exchange that charges a 0.5% taker fee. How much do you pay in fees?",
    options: ["R$ 1", "R$ 100", "R$ 5", "R$ 10"],
    correctOptionIndex: 3,
    explanation:
      "A market order is a taker order, so the 0.5% taker fee applies. 0.5% of R$ 2,000 is 0.005 times 2,000, which equals R$ 10.",
    relatedLessonSlug: "exchange-fees",
  },
  {
    id: "exchanges-spread-calculation",
    track: "exchanges",
    question: "In an order book, the best bid is $9.95 and the best ask is $10.05. What is the spread?",
    options: ["$0.05", "$0.10", "$0.20", "$1.00"],
    correctOptionIndex: 1,
    explanation:
      "The spread is the best ask minus the best bid. $10.05 minus $9.95 equals $0.10.",
    relatedLessonSlug: "reading-an-order-book",
  },
  {
    id: "exchanges-maker-order",
    track: "exchanges",
    question: "Which type of order usually qualifies for the lower maker fee?",
    options: [
      "A market order that fills immediately",
      "A stop-market order triggered during a sharp move",
      "A limit order that rests on the order book until someone fills it",
      "A withdrawal to an external wallet",
    ],
    correctOptionIndex: 2,
    explanation:
      "A resting limit order adds liquidity to the order book, which makes it a maker order. Orders that fill immediately against existing orders remove liquidity and pay the taker fee.",
    relatedLessonSlug: "exchange-fees",
  },
  {
    id: "exchanges-leverage-profit",
    track: "exchanges",
    question: "You open a 10x leveraged long position with $100 of margin. If the price rises 5%, what is your approximate profit, ignoring fees and funding?",
    options: ["$50", "$5", "$10", "$500"],
    correctOptionIndex: 0,
    explanation:
      "With 10x leverage, $100 of margin controls a $1,000 position. A 5% rise on $1,000 is $50, which is a 50% return on your margin.",
    relatedLessonSlug: "derivatives-and-leverage",
  },
  {
    id: "exchanges-leverage-margin-wipeout",
    track: "exchanges",
    question: "With a 10x leveraged long position, roughly how large a price drop would wipe out your entire initial margin, ignoring fees?",
    options: ["5%", "10%", "25%", "50%"],
    correctOptionIndex: 1,
    explanation:
      "At 10x, your position is ten times your margin, so a 10% drop equals a 100% loss of the margin. In practice, liquidation usually happens even earlier because of maintenance margin requirements and fees.",
    relatedLessonSlug: "derivatives-and-leverage",
  },
  {
    id: "exchanges-slippage-calculation",
    track: "exchanges",
    question: "You place a market buy order expecting a price of $100, but your average fill price is $101. What is the slippage?",
    options: ["1%", "0.1%", "2%", "10%"],
    correctOptionIndex: 0,
    explanation:
      "Slippage is the difference between the expected and actual price divided by the expected price. ($101 minus $100) divided by $100 equals 1%.",
    relatedLessonSlug: "order-types",
  },
  {
    id: "exchanges-limit-buy-guarantee",
    track: "exchanges",
    question: "What does a limit buy order at $50 guarantee?",
    options: [
      "It will execute immediately at the current market price",
      "It will execute at exactly $50 even if the price never reaches that level",
      "It will automatically sell if the price drops below $50",
      "It will only execute at $50 or lower, but it might never be filled",
    ],
    correctOptionIndex: 3,
    explanation:
      "A limit order guarantees the price, not the execution. A buy limit at $50 can only fill at $50 or better, and it stays open if the market never reaches that price.",
    relatedLessonSlug: "order-types",
  },
  {
    id: "exchanges-stop-loss-use",
    track: "exchanges",
    question: "You bought a token at $20 and want to limit your loss if the price falls. Which order is designed for this?",
    options: [
      "A limit buy order at $25",
      "A market buy order",
      "A stop-loss order at $18",
      "A limit sell order at $30",
    ],
    correctOptionIndex: 2,
    explanation:
      "A stop-loss order triggers a sale when the price falls to the chosen level, capping the loss on the position. The other orders either add to the position or only sell at a higher price.",
    relatedLessonSlug: "order-types",
  },
  {
    id: "exchanges-cex-vs-dex-custody",
    track: "exchanges",
    question: "What is a key difference between a centralized exchange (CEX) and a decentralized exchange (DEX)?",
    options: [
      "A CEX never requires identity verification",
      "A DEX always accepts fiat deposits by bank transfer",
      "On a DEX you trade from your own wallet, while on a CEX the exchange holds custody of deposited funds",
      "Both hold custody of users' funds in exactly the same way",
    ],
    correctOptionIndex: 2,
    explanation:
      "A DEX uses smart contracts so you can swap directly from a wallet you control. On a CEX you deposit funds into an account, and the exchange holds the private keys on your behalf.",
    relatedLessonSlug: "cex-vs-dex",
  },
  {
    id: "exchanges-proof-of-reserves-purpose",
    track: "exchanges",
    question: "What does an exchange's proof of reserves aim to show?",
    options: [
      "That the exchange is profitable",
      "That the exchange's own token will rise in value",
      "That every user has completed identity verification",
      "That the exchange holds enough assets to cover its customers' balances",
    ],
    correctOptionIndex: 3,
    explanation:
      "Proof of reserves verifies that the assets held by an exchange match or exceed what it owes to customers. It is most useful when it also includes the exchange's liabilities.",
    relatedLessonSlug: "proof-of-reserves",
  },
  {
    id: "exchanges-funding-rate-direction",
    track: "exchanges",
    question: "In perpetual futures, who pays whom when the funding rate is positive?",
    options: [
      "Longs pay shorts",
      "Shorts pay longs",
      "The exchange pays both sides",
      "Nobody pays, because it is only an indicator",
    ],
    correctOptionIndex: 0,
    explanation:
      "A positive funding rate means the contract trades above the spot price, so traders holding longs pay those holding shorts. This pushes the contract price back toward the spot price.",
    relatedLessonSlug: "derivatives-and-leverage",
  },
  {
    id: "exchanges-order-book-average-price",
    track: "exchanges",
    question: "The order book shows asks of 10 tokens at $5.00 and 10 tokens at $5.20. If you place a market buy for 20 tokens, what is your average price, ignoring fees?",
    options: ["$5.00", "$5.10", "$5.20", "$10.20"],
    correctOptionIndex: 1,
    explanation:
      "You buy 10 tokens for $50 and 10 tokens for $52, spending $102 on 20 tokens. $102 divided by 20 equals an average of $5.10 per token.",
    relatedLessonSlug: "reading-an-order-book",
  },
  {
    id: "exchanges-choosing-a-platform",
    track: "exchanges",
    question: "Which of these is the most sensible check when choosing a centralized exchange?",
    options: [
      "Whether it is authorized to operate where you live, publishes proof of reserves and offers strong account security",
      "Whether it promises guaranteed daily returns",
      "Whether it had the most app downloads this week",
      "Whether someone recommended it in an unsolicited direct message",
    ],
    correctOptionIndex: 0,
    explanation:
      "Regulatory standing, transparency about reserves and solid security features reduce the risk of losing funds. Guaranteed returns and unsolicited recommendations are common warning signs of scams.",
    relatedLessonSlug: "choosing-an-exchange",
  },
  {
    id: "exchanges-round-trip-fees",
    track: "exchanges",
    question: "You make a $1,000 buy and later a $1,000 sell on an exchange that charges 0.1% per trade. How much do you pay in trading fees in total?",
    options: ["$1", "$2", "$0.20", "$20"],
    correctOptionIndex: 1,
    explanation:
      "Each trade costs 0.1% of $1,000, which is $1. Two trades therefore cost $2 in total.",
    relatedLessonSlug: "exchange-fees",
  },
  {
    id: "security-seed-phrase-support-request",
    track: "security",
    question: "Someone claiming to be exchange support asks for your seed phrase to fix a problem. What should you do?",
    options: [
      "Share it, since support needs it to fix the issue",
      "Share only half of the words",
      "Send it by email instead of chat to be safer",
      "Refuse, because legitimate support never asks for it and anyone with it can take your funds",
    ],
    correctOptionIndex: 3,
    explanation:
      "Your seed phrase gives full control over your wallet, and no legitimate company will ever ask for it. Requests like this are a classic impersonation scam.",
    relatedLessonSlug: "scams-and-security",
  },
  {
    id: "security-shareable-information",
    track: "security",
    question: "Which of these can you safely share with someone who wants to send you crypto?",
    options: ["Your private key", "Your seed phrase", "Your wallet address", "Your exchange password"],
    correctOptionIndex: 2,
    explanation:
      "A wallet address is derived from your public key and is meant to be shared so others can send you funds. Private keys, seed phrases and passwords must always stay secret.",
    relatedLessonSlug: "wallets-and-keys",
  },
  {
    id: "security-cold-wallet-advantage",
    track: "security",
    question: "What is the main advantage of a cold wallet over a hot wallet?",
    options: [
      "It makes transactions free",
      "It earns interest automatically",
      "Its balance cannot lose value",
      "Its private keys stay offline, reducing exposure to online attacks",
    ],
    correctOptionIndex: 3,
    explanation:
      "Cold wallets keep private keys away from internet-connected devices, which makes remote hacking much harder. They do not change fees or protect against price drops.",
    relatedLessonSlug: "wallets-and-keys",
  },
  {
    id: "security-2fa-sim-swap",
    track: "security",
    question: "Which two-factor authentication method offers the best protection against SIM swap attacks?",
    options: [
      "SMS codes sent to your phone number",
      "Codes delivered by voice call",
      "An authenticator app or hardware security key",
      "A security question about your first pet",
    ],
    correctOptionIndex: 2,
    explanation:
      "A SIM swap lets an attacker receive texts and calls sent to your number, but it does not give access to codes generated by an authenticator app or a physical security key. Security questions are easy to guess or research.",
    relatedLessonSlug: "scams-and-security",
  },
  {
    id: "security-address-poisoning-defense",
    track: "security",
    question: "You receive a tiny unexpected transfer from an address that looks almost identical to one you often use. What is the safest practice from now on?",
    options: [
      "Copy the address from your recent transaction history",
      "Verify the full destination address from a trusted source before every transfer",
      "Send the tiny amount back to the sender",
      "Post your seed phrase online to report the scam",
    ],
    correctOptionIndex: 1,
    explanation:
      "This is address poisoning, which tricks you into copying the look-alike address from your history. Checking the complete address against a trusted source prevents sending funds to the attacker.",
    relatedLessonSlug: "scams-and-security",
  },
  {
    id: "security-self-custody-trade-off",
    track: "security",
    question: "What is the main trade-off of self-custody?",
    options: [
      "You control your keys, but you are fully responsible for backups and security",
      "The exchange can restore your funds if you lose your seed phrase",
      "Your funds are automatically insured by the government",
      "You can no longer send crypto to other people",
    ],
    correctOptionIndex: 0,
    explanation:
      "Self-custody removes the risk of a third party freezing or losing your funds. However, if you lose your seed phrase or it is stolen, nobody can recover the funds for you.",
    relatedLessonSlug: "self-custody",
  },
  {
    id: "security-guaranteed-returns",
    track: "security",
    question: "A website promises a guaranteed 2% daily return if you deposit crypto. What is the most likely explanation?",
    options: [
      "A legitimate low-risk savings product",
      "Very likely a scam, such as a Ponzi scheme",
      "A government-backed bond",
      "A standard staking reward",
    ],
    correctOptionIndex: 1,
    explanation:
      "A 2% daily return would compound to thousands of percent per year, which no legitimate investment can guarantee. Promises like this are a hallmark of Ponzi schemes that pay early users with new deposits.",
    relatedLessonSlug: "scams-and-security",
  },
  {
    id: "security-hardware-wallet-purchase",
    track: "security",
    question: "Where is the safest place to buy a hardware wallet?",
    options: [
      "A second-hand listing that includes a pre-written seed phrase",
      "Any seller offering the biggest discount",
      "A link received in an unsolicited direct message",
      "Directly from the manufacturer or an authorized reseller",
    ],
    correctOptionIndex: 3,
    explanation:
      "Devices from unofficial sellers may be tampered with or come with a seed phrase the seller already knows. Buying from the manufacturer or an authorized reseller avoids these risks.",
    relatedLessonSlug: "self-custody",
  },
  {
    id: "investing-dca-definition",
    track: "investing",
    question: "What is dollar-cost averaging (DCA)?",
    options: [
      "Investing everything at once when the price looks lowest",
      "Borrowing money to buy more crypto",
      "Investing a fixed amount at regular intervals regardless of price",
      "Selling everything whenever the price drops 10%",
    ],
    correctOptionIndex: 2,
    explanation:
      "DCA means buying a fixed amount on a regular schedule, such as every month. It reduces the impact of short-term volatility and removes the pressure of trying to time the market.",
    relatedLessonSlug: "dollar-cost-averaging",
  },
  {
    id: "investing-dca-average-cost",
    track: "investing",
    question: "You invest $100 when a coin costs $10 and another $100 when it costs $20. What is your average cost per coin?",
    options: ["$13.33", "$15.00", "$10.00", "$20.00"],
    correctOptionIndex: 0,
    explanation:
      "The first $100 buys 10 coins and the second buys 5 coins, so you hold 15 coins for $200. $200 divided by 15 is about $13.33 per coin, lower than the simple average of the two prices.",
    relatedLessonSlug: "dollar-cost-averaging",
  },
  {
    id: "investing-risk-management-principle",
    track: "investing",
    question: "Which principle best describes sound risk management in crypto?",
    options: [
      "Put all your savings into a single new token",
      "Use maximum leverage to recover losses faster",
      "Invest only what you can afford to lose and diversify",
      "Follow anonymous tips from social media groups",
    ],
    correctOptionIndex: 2,
    explanation:
      "Crypto prices are highly volatile, so limiting your exposure to money you can afford to lose and spreading risk helps protect your finances. The other choices concentrate or amplify risk.",
    relatedLessonSlug: "risk-management",
  },
  {
    id: "investing-loss-recovery-math",
    track: "investing",
    question: "If an investment falls 50%, what percentage gain is needed to return to its original value?",
    options: ["100%", "50%", "75%", "150%"],
    correctOptionIndex: 0,
    explanation:
      "After a 50% drop, $100 becomes $50. To get back to $100, the $50 must double, which is a 100% gain.",
    relatedLessonSlug: "risk-management",
  },
  {
    id: "investing-brazil-instant-payments",
    track: "investing",
    question: "Which instant payment system is widely used in Brazil to deposit and withdraw reais on crypto exchanges?",
    options: ["SWIFT", "Pix", "SEPA", "Zelle"],
    correctOptionIndex: 1,
    explanation:
      "Pix is the instant payment system created by the Central Bank of Brazil, and most Brazilian exchanges accept it for deposits and withdrawals. SWIFT, SEPA and Zelle are international, European and US systems.",
    relatedLessonSlug: "crypto-in-brazil",
  },
  {
    id: "investing-brazil-regulator",
    track: "investing",
    question: "Under Brazil's legal framework for crypto assets (Law 14,478/2022), which body was designated to regulate and supervise virtual asset service providers?",
    options: [
      "The Brazilian stock exchange (B3)",
      "The Federal Revenue Service alone",
      "No authority, since the sector remains unregulated",
      "The Central Bank of Brazil",
    ],
    correctOptionIndex: 3,
    explanation:
      "Decree 11,563/2023 designated the Central Bank of Brazil as the authority responsible for regulating and supervising virtual asset service providers under Law 14,478/2022. Crypto assets that qualify as securities remain under the oversight of the CVM.",
    relatedLessonSlug: "crypto-in-brazil",
  },
];
