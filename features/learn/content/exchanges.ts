import type { Lesson } from "../types";

export const exchangeLessons: Lesson[] = [
  {
    slug: "what-is-an-exchange",
    title: "What Is a Crypto Exchange?",
    summary:
      "A crypto exchange is a platform that converts traditional money into digital assets and lets you trade one digital asset for another. This lesson explains how exchanges work, what they do with your funds and the main risks to understand before using one.",
    level: "beginner",
    track: "exchanges",
    readingMinutes: 4,
    blocks: [
      {
        type: "paragraph",
        text: "A crypto exchange is a service that lets people buy, sell and trade digital assets such as bitcoin, ether and stablecoins. For most newcomers it is the first contact with crypto: you send money from a bank account, convert it into a digital asset and can later convert it back. Behind that simple experience sit several distinct functions, and understanding them helps you judge what you are actually trusting when you sign up.",
      },
      { type: "heading", text: "What an exchange actually does" },
      {
        type: "paragraph",
        text: "At its core, an exchange is a marketplace. It collects orders from people who want to buy and people who want to sell, and matches them when their prices agree. The price you see on screen is simply the level at which the most recent trades happened, which is why it moves constantly as new orders arrive. Most exchanges bundle this matching service with several others:",
      },
      {
        type: "list",
        items: [
          "Fiat on-ramp and off-ramp: accepting deposits in national currencies such as dollars, euros or reais, and paying withdrawals out to your bank account.",
          "Trading: letting you exchange one asset for another through an order book or a quoted price.",
          "Custody: holding the assets you buy on your behalf until you decide to withdraw them.",
          "Price discovery: publishing live prices, charts and volumes that the wider market uses as reference points.",
          "Extra products: staking, lending, savings programs or derivatives, each adding its own set of risks.",
        ],
      },
      { type: "heading", text: "Trading pairs: base and quote assets" },
      {
        type: "paragraph",
        text: "Trades happen in pairs. In a pair written as BTC/USDT, BTC is the base asset, the thing being bought or sold, and USDT is the quote asset, the unit used to express the price. If the BTC/USDT price were 60,000, for example, one bitcoin would cost 60,000 units of the USDT stablecoin. A pair such as ETH/BTC prices ether in bitcoin instead. If an asset is only listed against a stablecoin, you may first need to convert your local currency into that stablecoin, and each conversion can carry its own cost.",
      },
      { type: "heading", text: "Exchanges and broker-style apps" },
      {
        type: "paragraph",
        text: "Not every platform that sells crypto is an exchange in the strict sense. Some apps work like brokers: instead of placing your order into an open market, you buy from or sell to the platform at a price it quotes. This is convenient, but the cost is usually built into the quoted price rather than shown as a separate fee. Many companies offer both modes, a simple buy button and an advanced trading screen, and the price difference between them can be significant.",
      },
      {
        type: "comparison",
        columns: ["Order book exchange", "Broker-style app"],
        rows: [
          {
            label: "How the price is set",
            values: [
              "By buyers and sellers placing orders",
              "Quoted by the platform",
            ],
          },
          {
            label: "Who is on the other side",
            values: [
              "Another user of the exchange",
              "Usually the platform itself",
            ],
          },
          {
            label: "Cost visibility",
            values: [
              "Published fee schedule plus the spread",
              "Often bundled into the quoted price",
            ],
          },
          {
            label: "Control over price",
            values: [
              "You can set an exact price with limit orders",
              "Accept or reject the quote",
            ],
          },
          {
            label: "Ease of use",
            values: ["Steeper learning curve", "Very simple, few decisions"],
          },
        ],
      },
      { type: "heading", text: "Custody: who holds the keys" },
      {
        type: "paragraph",
        text: "Control over crypto comes from private keys, the secret data that authorizes transactions on a blockchain. When you deposit to a centralized exchange, the exchange holds the keys and your account shows a balance in its internal database. That balance is a promise to deliver the assets when you ask for them. As long as the exchange is honest, well run and solvent, the promise holds. If it is hacked, mismanaged or goes bankrupt, withdrawals can be frozen and customers may wait years to recover only part of their funds.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "An exchange balance is a claim, not coins in your wallet",
        text: "Assets left on an exchange are only as safe as the company holding them. Withdrawing to a wallet whose keys you control removes that counterparty risk, but makes you fully responsible for protecting your keys and backups.",
      },
      { type: "heading", text: "A typical first journey" },
      {
        type: "steps",
        items: [
          "Create an account and complete identity verification, which regulated exchanges are generally required to perform.",
          "Turn on two-factor authentication with an authenticator app or a hardware security key before depositing anything.",
          "Deposit local currency using a supported method, such as a bank transfer or an instant payment system.",
          "Place a small buy order and review the final amount received after fees.",
          "Decide whether to keep the asset on the exchange or withdraw it to a wallet you control, testing the process with a small amount first.",
          "Keep records of every purchase, sale and transfer, since many countries treat crypto disposals as taxable events.",
        ],
      },
      { type: "heading", text: "Risks to keep in mind" },
      {
        type: "paragraph",
        text: "Beyond the price volatility of the assets themselves, using an exchange exposes you to platform risks: security breaches, account takeovers through phishing, outages during heavy trading, sudden delistings and regulatory actions that restrict service in your country. None of these is a reason to avoid exchanges altogether, but each is a reason to choose carefully, protect your account and avoid keeping more on a platform than you need there.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Start small",
        text: "Treat your first deposit, trade and withdrawal as practice runs. Small amounts let you learn the interface, see the real costs and confirm that withdrawals work before larger sums are involved.",
      },
    ],
    keyTakeaways: [
      "An exchange matches buyers and sellers and usually also handles fiat deposits, withdrawals and custody.",
      "Prices are expressed in trading pairs made of a base asset and a quote asset.",
      "Broker-style apps quote you a price and often include their cost inside it.",
      "Assets held on an exchange are a claim on the company, not coins under your control.",
      "Protect your account with strong two-factor authentication and test withdrawals with small amounts.",
    ],
  },
  {
    slug: "cex-vs-dex",
    title: "Centralized vs Decentralized Exchanges",
    summary:
      "Centralized exchanges are companies that hold your funds and run an internal trading system, while decentralized exchanges are smart contracts you use directly from your own wallet. Each model shifts risk and responsibility in a different way.",
    level: "beginner",
    track: "exchanges",
    readingMinutes: 4,
    blocks: [
      {
        type: "paragraph",
        text: "Crypto can be traded on two very different kinds of venue. A centralized exchange, or CEX, is operated by a company that holds customer funds and runs its own trading engine. A decentralized exchange, or DEX, is a set of smart contracts on a blockchain that anyone can use directly from a self-custody wallet. Both let you swap one asset for another, but they differ in who controls the funds, who can stop a trade and who helps when something goes wrong.",
      },
      { type: "heading", text: "How a centralized exchange works" },
      {
        type: "paragraph",
        text: "On a CEX you open an account, usually verify your identity and deposit money or crypto. From then on the exchange holds the assets and tracks your balance in its own database. When you trade, nothing is written to a blockchain: the exchange simply updates the internal balances of buyer and seller. This makes trading fast and cheap, supports sophisticated order types and allows deposits and withdrawals in national currencies. The trade-off is trust. You rely on the company to keep your assets safe, stay solvent and honor withdrawals.",
      },
      { type: "heading", text: "How a decentralized exchange works" },
      {
        type: "paragraph",
        text: "On a DEX there is no account to open. You connect a wallet, approve a transaction and a smart contract executes the swap, recording the result on the blockchain. Your assets stay in your wallet until the moment of the swap, and the output arrives directly back in it. Many DEXs use an automated market maker, or AMM, instead of an order book. Liquidity providers deposit pairs of tokens into a pool, and a formula sets the price based on the ratio of the two tokens. In the common constant product design, the product of the two reserves must stay the same after each trade, so every purchase makes the next unit of that token slightly more expensive. Liquidity providers earn a share of trading fees but face impermanent loss when prices move.",
      },
      { type: "heading", text: "Side by side" },
      {
        type: "comparison",
        columns: ["Centralized exchange (CEX)", "Decentralized exchange (DEX)"],
        rows: [
          {
            label: "Custody",
            values: [
              "The exchange holds the private keys",
              "You keep the keys in your own wallet",
            ],
          },
          {
            label: "Account and identity",
            values: [
              "Account with identity verification in most jurisdictions",
              "No account; you connect a wallet",
            ],
          },
          {
            label: "Fiat currency",
            values: [
              "Deposits and withdrawals in national currencies",
              "Crypto only; fiat requires a separate service",
            ],
          },
          {
            label: "Settlement",
            values: [
              "Internal ledger update, off-chain",
              "On-chain transaction for each swap",
            ],
          },
          {
            label: "Costs",
            values: [
              "Trading fee, spread and withdrawal fees",
              "Pool fee, network fee and price impact",
            ],
          },
          {
            label: "Asset listings",
            values: [
              "Selected and reviewed by the company",
              "Anyone can create a pool for any token",
            ],
          },
          {
            label: "Help when things go wrong",
            values: [
              "Customer support and account recovery",
              "Generally none; mistakes are usually irreversible",
            ],
          },
          {
            label: "Main risks",
            values: [
              "Hacks, insolvency, frozen withdrawals",
              "Contract bugs, scam tokens, user error",
            ],
          },
        ],
      },
      { type: "heading", text: "Risks specific to DEXs" },
      {
        type: "paragraph",
        text: "Removing the company in the middle also removes the safety nets a company provides. Responsibility shifts to you.",
      },
      {
        type: "list",
        items: [
          "Smart contract risk: a bug or design flaw can be exploited to drain pools or user funds.",
          "Impostor tokens: anyone can create a token with the same name and ticker as a well-known asset, so the ticker alone proves nothing.",
          "Token approvals: swapping usually requires granting a contract permission to move your tokens, and unlimited approvals to a malicious or compromised contract can be abused later.",
          "Front-running and sandwich attacks: because pending transactions are often visible, bots can trade just before and after yours to profit from the price movement you cause.",
          "Thin liquidity: small pools can move sharply on a single trade, causing heavy slippage.",
          "Phishing front-ends: fake websites copying a popular interface can trick you into signing harmful transactions.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Verify the contract address, not the ticker",
        text: "Before swapping on a DEX, confirm the token's contract address through official project channels or a reputable block explorer. Buying the wrong token or signing an approval on a fake site usually cannot be undone.",
      },
      { type: "heading", text: "Risks specific to CEXs" },
      {
        type: "paragraph",
        text: "Centralized exchanges concentrate risk in a single company. If its wallets are hacked, if management misuses customer deposits or if a run on withdrawals reveals a hole in its balance sheet, users can lose access to their funds. Exchanges can also freeze individual accounts during compliance reviews, stop serving certain countries or delist assets with little notice. Regulation, audits and proof of reserves reduce these risks but do not eliminate them.",
      },
      { type: "heading", text: "Which one fits which need" },
      {
        type: "paragraph",
        text: "Many people use both. A CEX is often the most practical way to convert national currency into crypto and back, especially when it supports local payment methods. A DEX can offer access to tokens not listed on centralized platforms and lets you trade without handing over custody. The right choice depends on what you value more in a given situation: convenience and support, or direct control with full responsibility.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Decentralization is a spectrum",
        text: "Some DEXs have admin keys that can upgrade contracts, front-ends run by a single company or governance controlled by a few large holders. Ask who can change the rules and how, rather than relying on the label.",
      },
    ],
    keyTakeaways: [
      "A CEX holds your funds and trades on an internal ledger; a DEX lets you swap directly from your own wallet.",
      "Centralized platforms offer fiat access and support but add counterparty risk.",
      "Decentralized platforms remove the custodian but expose you to contract bugs, scam tokens and irreversible mistakes.",
      "Always verify token contract addresses and review approvals when using a DEX.",
    ],
    references: [
      {
        label: "Ethereum.org: Decentralized finance (DeFi)",
        url: "https://ethereum.org/en/defi/",
      },
    ],
  },
  {
    slug: "choosing-an-exchange",
    title: "How to Choose a Crypto Exchange",
    summary:
      "There is no single best exchange for everyone. This lesson gives you a practical checklist covering regulation, security, transparency, costs, payment methods, liquidity and support so you can evaluate any platform on your own.",
    level: "beginner",
    track: "exchanges",
    readingMinutes: 4,
    blocks: [
      {
        type: "paragraph",
        text: "Choosing an exchange is less about finding the most popular brand and more about matching a platform to your country, your needs and your tolerance for risk. A platform that suits an active trader in one country may be unavailable, unregulated or needlessly complex for a long-term saver in another. The criteria below apply to any exchange and help you compare options without relying on advertising or influencer opinions.",
      },
      { type: "heading", text: "Regulation and licensing in your country" },
      {
        type: "paragraph",
        text: "Start by checking whether the exchange is authorized to serve residents of your country. Many jurisdictions now require crypto service providers to register or obtain a license, and regulators often publish searchable public registers. In the European Union, for example, the Markets in Crypto-Assets regulation requires crypto-asset service providers to be authorized. A locally regulated entity is typically subject to rules on segregating customer assets, anti-money-laundering controls and complaint handling. An offshore platform that accepts customers from everywhere may offer less protection and may leave your market abruptly if local authorities act.",
      },
      {
        type: "heading",
        text: "Security track record and account protections",
      },
      {
        type: "paragraph",
        text: "Research whether the platform has suffered hacks or prolonged withdrawal halts, and how it treated affected customers. An incident handled transparently, with users made whole, can be more reassuring than a vague history. Then look at the protections you can enable on your own account:",
      },
      {
        type: "list",
        items: [
          "Two-factor authentication (2FA) through an authenticator app or a hardware security key, which is stronger than codes sent by SMS.",
          "Withdrawal address whitelists, so funds can only go to addresses you approved in advance.",
          "Waiting periods that block withdrawals for a time after a password or security change.",
          "Anti-phishing codes that appear in genuine emails from the platform.",
          "Alerts for every new login or device.",
        ],
      },
      { type: "heading", text: "Proof of reserves and transparency" },
      {
        type: "paragraph",
        text: "Some exchanges publish proof of reserves reports that let customers check that their balances are included in a snapshot and that the platform controls enough assets to cover them. These reports have important limits, covered in the advanced lesson on solvency, but a platform that publishes regular, independently verified reports and clear corporate information is more transparent than one that publishes nothing.",
      },
      { type: "heading", text: "Fees, assets and fiat on-ramps" },
      {
        type: "paragraph",
        text: "Compare the full cost of using the platform, not just the headline trading fee: spreads, deposit and withdrawal fees, network fees and currency conversion. Check that the assets you care about are listed and which blockchain networks are supported for withdrawals. Equally important is how money gets in and out. Local payment methods, such as bank transfers or instant payment systems like Pix in Brazil, are often cheaper and faster than cards or international wires. Confirm limits, processing times and fees for deposits and withdrawals in your currency.",
      },
      { type: "heading", text: "Liquidity, KYC, limits and support" },
      {
        type: "paragraph",
        text: "Liquidity determines how close to the quoted price your orders fill; deeper order books and tighter spreads mean lower hidden costs. Know-your-customer (KYC) verification is a legal requirement in most jurisdictions, so check which documents are needed and how the platform protects your personal data. Review withdrawal limits at each verification level, since low limits can trap funds when you need them. Finally, look for official support channels, reasonable response times and a clear complaint process. Genuine support staff will never ask for your password or 2FA codes.",
      },
      {
        type: "comparison",
        columns: ["Reassuring sign", "Warning sign"],
        rows: [
          {
            label: "Regulation",
            values: [
              "Listed on your national regulator's public register",
              "Vague or unverifiable licensing claims",
            ],
          },
          {
            label: "Transparency",
            values: [
              "Regular proof of reserves and clear company details",
              "No information about who runs it or from where",
            ],
          },
          {
            label: "Fees",
            values: [
              "Complete fee schedule that is easy to find",
              "Costs only visible after you trade",
            ],
          },
          {
            label: "Withdrawals",
            values: [
              "Consistent processing and published limits",
              "Frequent delays or new conditions to withdraw",
            ],
          },
          {
            label: "Marketing",
            values: [
              "Explains risks alongside features",
              "Promises guaranteed or unusually high returns",
            ],
          },
        ],
      },
      { type: "heading", text: "An evaluation routine" },
      {
        type: "steps",
        items: [
          "Search your national regulator's register for providers authorized in your country.",
          "Read the fee schedule and estimate the total cost of a typical deposit, trade and withdrawal.",
          "Look up the platform's security incident history and how customers were treated.",
          "Check supported assets, networks and local payment methods.",
          "Open an account, enable 2FA and set up a withdrawal whitelist.",
          "Make a small deposit, trade and withdrawal before committing larger amounts.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Pressure is a red flag",
        text: "Countdown bonuses, guaranteed returns, unsolicited messages from self-described account managers and requests to move funds to another site are common features of scams. A legitimate platform does not need to rush you.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Do not keep everything in one place",
        text: "Even a well-run exchange is a single point of failure. Keeping only what you actively need on a platform, and holding long-term savings in self-custody you understand, limits the damage if something goes wrong.",
      },
    ],
    keyTakeaways: [
      "Confirm that the exchange is authorized to operate in your country before anything else.",
      "Check its security history and enable strong 2FA and withdrawal whitelists.",
      "Compare total costs, supported assets and local payment methods such as instant bank transfers.",
      "Test deposits, trades and withdrawals with small amounts first.",
      "Treat pressure tactics and promises of guaranteed returns as warning signs.",
    ],
  },
  {
    slug: "exchange-fees",
    title: "Understanding Exchange Fees",
    summary:
      "Exchange costs go well beyond the advertised trading fee. Learn how maker and taker fees, spreads, deposit and withdrawal charges, network fees and conversion costs add up, and how zero-fee platforms still get paid.",
    level: "beginner",
    track: "exchanges",
    readingMinutes: 4,
    blocks: [
      {
        type: "paragraph",
        text: "Fees are one of the few parts of crypto trading you can know with certainty. Prices are unpredictable, but costs are known in advance if you know where to look. The challenge is that they appear in several places: some are listed in a fee schedule, others are embedded in the price you receive. Small percentages compound quickly, especially for people who trade often or move small amounts.",
      },
      { type: "heading", text: "Trading fees: maker and taker" },
      {
        type: "paragraph",
        text: "Most order book exchanges charge a percentage of each trade's value, with different rates for makers and takers. A maker places an order that does not execute immediately, such as a buy limit below the current price, and so adds liquidity to the order book. A taker places an order that executes against existing orders, such as a market order, and removes liquidity. Because exchanges want deep order books, maker fees are usually equal to or lower than taker fees, and on some venues they are zero.",
      },
      {
        type: "comparison",
        columns: ["Maker", "Taker"],
        rows: [
          {
            label: "What the order does",
            values: [
              "Rests on the order book and waits",
              "Executes immediately against resting orders",
            ],
          },
          {
            label: "Typical order types",
            values: [
              "Limit orders away from the current price",
              "Market orders and limit orders that cross the spread",
            ],
          },
          {
            label: "Effect on liquidity",
            values: ["Adds liquidity", "Removes liquidity"],
          },
          {
            label: "Typical fee level",
            values: ["Lower, sometimes zero", "Higher"],
          },
          {
            label: "Trade-off",
            values: [
              "Lower cost, no guarantee of execution",
              "Certain execution, higher cost",
            ],
          },
        ],
      },
      {
        type: "paragraph",
        text: "A worked example: with a 0.1% taker fee, buying $1,000 worth of an asset with a market order costs $1 in fees. If the same platform charges makers 0.08% and your limit order rests on the book before filling, the fee is $0.80. Many exchanges lower both rates as your 30-day trading volume grows, and some offer discounts for paying fees in their own token, which exposes you to that token's price risk.",
      },
      { type: "heading", text: "The spread" },
      {
        type: "paragraph",
        text: "The spread is the gap between the highest price a buyer will pay, the bid, and the lowest price a seller will accept, the ask. Suppose the bid is $99.90 and the ask is $100.10. The spread is $0.20, or 0.2% of the price. If you bought $1,000 at the ask and immediately sold at the bid, you would lose about $2 before paying any trading fee. The spread never appears in a fee schedule, but it is a real cost every time you trade with a market order, and it widens for less liquid assets and during volatile moments.",
      },
      { type: "heading", text: "Deposit, withdrawal and network fees" },
      {
        type: "paragraph",
        text: "Moving money in and out has its own price. Fiat deposits may be free by bank transfer or instant payment, while card payments often carry a percentage fee. Crypto withdrawals usually cost a flat amount per asset and network, which covers the blockchain transaction fee and sometimes includes a margin for the exchange. Flat fees hit small amounts hardest: a $5 withdrawal fee is 0.5% of a $1,000 withdrawal but 10% of a $50 one. Many assets can be withdrawn over more than one network, each with different fees and speeds. Make sure the receiving wallet supports the network you choose, since sending over the wrong network can mean lost funds.",
      },
      { type: "heading", text: "Conversion costs" },
      {
        type: "paragraph",
        text: "Currency conversion adds another layer. If you deposit in a currency the exchange does not trade directly, it may convert it at a rate that includes a markup. Buying an asset that is only quoted against a stablecoin may require two trades, local currency to stablecoin and stablecoin to asset, each with its own fee and spread. Paying by card in a foreign currency can also trigger a charge from your card issuer.",
      },
      { type: "heading", text: "Hidden costs on zero-fee platforms" },
      {
        type: "paragraph",
        text: "Platforms that advertise zero commission still need revenue. The most common approach is a markup built into the quoted price. Imagine an asset trading at $100 on major order books while an app offers to sell it to you at $101.50. No line is labeled fee, yet you pay 1.5%: $15 on a $1,000 purchase, fifteen times the cost of a 0.1% taker fee. Others recover costs through wider spreads, higher withdrawal fees or poor conversion rates. The only reliable test is to compare what you actually receive with a reference market price at the same moment.",
      },
      { type: "heading", text: "Putting it together" },
      {
        type: "list",
        items: [
          "Deposit $1,000 by instant bank transfer: $0 on many platforms, but check yours.",
          "Buy with a market order at a 0.1% taker fee: $1.00.",
          "Cross half of a 0.1% spread when entering: about $0.50.",
          "Withdraw to a personal wallet with a flat fee equal to about $2.00.",
          "Total: about $3.50, or 0.35% of the amount, before you ever sell.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Read the fee page before you trade",
        text: "Every exchange publishes a fee schedule, usually linked from the footer of its website. Check maker and taker rates, deposit and withdrawal fees for your currency and the withdrawal fee for each network you plan to use.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Network fees change constantly",
        text: "Blockchain transaction fees depend on network demand and can shift from minute to minute. Exchanges often set fixed withdrawal fees that may be higher or lower than the actual network cost at any given moment.",
      },
    ],
    keyTakeaways: [
      "Maker orders add liquidity and usually pay lower fees than taker orders.",
      "A 0.1% taker fee costs $1 on a $1,000 trade, and the spread is an extra, unlisted cost.",
      "Flat withdrawal fees weigh heavily on small amounts, and the wrong network can mean lost funds.",
      "Zero-fee platforms typically earn through price markups and wider spreads.",
      "Compare what you actually receive with a reference price to find your true cost.",
    ],
    references: [
      {
        label: "Ethereum.org: Gas and fees",
        url: "https://ethereum.org/en/developers/docs/gas/",
      },
    ],
  },
  {
    slug: "order-types",
    title: "Order Types: Market, Limit and Stop",
    summary:
      "Market, limit and stop orders offer different trade-offs between speed and price control. Knowing how each one behaves, especially in fast markets, helps you avoid costly surprises.",
    level: "intermediate",
    track: "exchanges",
    readingMinutes: 4,
    blocks: [
      {
        type: "paragraph",
        text: "Every trade on an order book exchange starts with an order: an instruction telling the exchange what to buy or sell, how much and under what conditions. The order type decides whether you prioritize speed or price, and how your order behaves when the market moves quickly. Most platforms offer the same core types, even if names and screens differ slightly.",
      },
      { type: "heading", text: "Market orders" },
      {
        type: "paragraph",
        text: "A market order asks the exchange to buy or sell immediately at the best prices currently available. It almost always executes, which makes it useful when speed matters more than the exact price. The catch is that the final price is not guaranteed. A market buy takes the lowest asks in the order book, and if your order is larger than the quantity at the best price, it continues into higher price levels. The difference between the expected and the actual average price is called slippage. Market orders are always takers, so they pay the higher trading fee.",
      },
      { type: "heading", text: "Limit orders" },
      {
        type: "paragraph",
        text: "A limit order sets the worst price you are willing to accept: a maximum for a buy, a minimum for a sell. It executes only at that price or better. Suppose the lowest ask for an asset is $60,000 and you place a buy limit at $59,500. Nothing happens unless sellers come down to your level, and if they never do, the order never fills. Large limit orders can also fill partially, leaving the rest open. A limit order that rests on the book before executing usually pays the lower maker fee. A buy limit placed above the current ask executes immediately as a taker, but still protects you from paying more than your limit.",
      },
      {
        type: "comparison",
        columns: ["Market order", "Limit order"],
        rows: [
          {
            label: "Execution",
            values: [
              "Almost certain and immediate",
              "Only if the market reaches your price",
            ],
          },
          {
            label: "Price",
            values: [
              "Not guaranteed; depends on the order book",
              "Your price or better",
            ],
          },
          {
            label: "Typical fee",
            values: ["Taker fee", "Maker fee if it rests on the book"],
          },
          {
            label: "Best suited for",
            values: [
              "Small orders in liquid markets when speed matters",
              "Larger orders, thin markets or a target price",
            ],
          },
          {
            label: "Main risk",
            values: [
              "Slippage in thin or fast markets",
              "Missing the trade entirely",
            ],
          },
        ],
      },
      { type: "heading", text: "Stop orders" },
      {
        type: "paragraph",
        text: "A stop order stays dormant until the market reaches a trigger level called the stop price. Stops are often used to limit losses or to enter a trade once a price level breaks. There are two common versions. A stop-market order sends a market order when the stop price is reached. A stop-limit order sends a limit order instead, using a limit price you set in advance.",
      },
      {
        type: "paragraph",
        text: "The difference matters in fast markets. Imagine you hold an asset bought at $100 and set a stop-market at $90. If the price drops sharply, the order triggers at $90 but might fill at $88, because the market order takes whatever bids remain. With a stop-limit using a $90 stop and an $89 limit, you will never sell below $89, but if the price gaps straight from $91 to $85, the order may not fill at all and you stay exposed to further declines.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "A stop is not a guaranteed exit",
        text: "Stop orders depend on the liquidity available at the moment they trigger. Sudden drops, brief price spikes known as wicks and exchange outages can make stops fill far from the stop price, trigger just before the price recovers or fail to execute when needed.",
      },
      { type: "heading", text: "Time in force and other options" },
      {
        type: "list",
        items: [
          "Good-til-cancelled (GTC): the order stays open until it fills or you cancel it.",
          "Immediate-or-cancel (IOC): whatever can fill right away does, and the remainder is cancelled.",
          "Fill-or-kill (FOK): the whole order must fill immediately or nothing executes.",
          "Post-only: the order is rejected if it would execute immediately, ensuring you pay the maker fee.",
          "One-cancels-the-other (OCO): links two orders, such as a take-profit limit and a stop, so that filling one cancels the other.",
          "Trailing stop: a stop price that follows the market by a set distance as the price moves in your favor.",
        ],
      },
      {
        type: "paragraph",
        text: "Not every exchange offers every option, and names vary, so read the platform's help pages before relying on an unfamiliar feature.",
      },
      { type: "heading", text: "Placing a limit order step by step" },
      {
        type: "steps",
        items: [
          "Select the correct trading pair and confirm the quote currency.",
          "Choose limit as the order type and enter your price.",
          "Enter the quantity, checking whether the field expects units of the asset or an amount of the quote currency.",
          "Review the order preview, including the total value and the estimated fee.",
          "Submit, then watch the open orders list until the order fills or you decide to cancel it.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Check the decimals",
        text: "A misplaced decimal point in a price or quantity field is one of the most common and expensive mistakes. Read the order preview carefully, and start with small orders when trying a new platform or order type.",
      },
    ],
    keyTakeaways: [
      "Market orders prioritize speed and pay taker fees, but the final price can slip.",
      "Limit orders control the price and often pay maker fees, but may never fill.",
      "Stop-market orders can fill well below the stop price; stop-limit orders may not fill at all.",
      "Time-in-force options such as GTC, IOC, FOK and post-only fine-tune how orders behave.",
    ],
  },
  {
    slug: "reading-an-order-book",
    title: "Reading an Order Book, Liquidity and Slippage",
    summary:
      "The order book lists every open buy and sell order in a market. Learning to read it lets you judge liquidity, estimate slippage before you trade and avoid paying far more than the quoted price.",
    level: "intermediate",
    track: "exchanges",
    readingMinutes: 4,
    blocks: [
      {
        type: "paragraph",
        text: "The price displayed at the top of a trading screen is only part of the story. Beneath it sits the order book, a live list of all the buy and sell orders waiting to be filled. It shows how much can be traded near the current price and what will happen to the price you pay if your order is large. Reading it is a basic skill that protects you from some of the most common hidden costs in trading.",
      },
      { type: "heading", text: "Anatomy of an order book" },
      {
        type: "paragraph",
        text: "An order book has two sides. Bids are buy orders, sorted from the highest price down. Asks, also called offers, are sell orders, sorted from the lowest price up. The highest bid and the lowest ask are the best prices available, and the gap between them is the spread. The midpoint between them, the mid price, is a common reference for the asset's current value. Each price level shows the quantity available there, and many interfaces also show a running total.",
      },
      {
        type: "comparison",
        columns: ["Bids (buy orders)", "Asks (sell orders)"],
        rows: [
          {
            label: "Level 1",
            values: ["2.0 units at $99.95", "2.0 units at $100.05"],
          },
          {
            label: "Level 2",
            values: ["3.0 units at $99.90", "2.0 units at $100.10"],
          },
          {
            label: "Level 3",
            values: ["5.0 units at $99.80", "4.0 units at $100.20"],
          },
          {
            label: "Level 4",
            values: ["12.0 units at $99.50", "10.0 units at $100.50"],
          },
        ],
      },
      {
        type: "paragraph",
        text: "In this simplified book, the best bid is $99.95 and the best ask is $100.05. The spread is $0.10, which is 0.1% of the $100 mid price. Anyone selling immediately receives at most $99.95, and anyone buying immediately pays at least $100.05.",
      },
      { type: "heading", text: "Liquidity and depth" },
      {
        type: "paragraph",
        text: "Liquidity describes how easily an asset can be traded without moving its price. In an order book it shows up as depth: the total quantity resting at prices close to the mid price. Liquid markets have tight spreads and large quantities at every level, so even sizable orders barely move the price. Illiquid markets have wide spreads and thin levels, so modest orders can push the price significantly. Depth charts display the same information visually, with cumulative bids and asks forming two curves that meet at the spread. Tall, steep curves near the middle mean deep liquidity; low, flat ones mean thin liquidity.",
      },
      { type: "heading", text: "Slippage: walking the book" },
      {
        type: "paragraph",
        text: "When a market order is larger than the quantity at the best price, it consumes successive levels, a process often called walking the book. Using the example above, a market buy of 5 units would fill like this:",
      },
      {
        type: "list",
        items: [
          "2.0 units at $100.05, costing $200.10.",
          "2.0 units at $100.10, costing $200.20.",
          "1.0 unit at $100.20, costing $100.20.",
          "Total: 5 units for $500.50, an average price of $100.10.",
        ],
      },
      {
        type: "paragraph",
        text: "The average price is $0.05 above the best ask, roughly 0.05% of slippage, plus the trading fee. That is small because the book is reasonably deep relative to the order. Now imagine a lightly traded token whose book holds only the equivalent of $2,000 in sell orders within 1% of the mid price. A $10,000 market buy would sweep through those orders and keep climbing into much higher levels, and the average price could end up several percent above the quote. In thin markets, the visible price is not the price you will pay for size.",
      },
      { type: "heading", text: "Slippage on decentralized exchanges" },
      {
        type: "paragraph",
        text: "Automated market makers have no order book, but the same principle applies through price impact: the larger your trade relative to the pool, the more the price moves against you. DEX interfaces ask you to set a slippage tolerance. With a 0.5% tolerance, the transaction reverts if the final price is more than 0.5% worse than quoted, although you still pay the network fee for the failed attempt. A very high tolerance makes failures less likely but invites sandwich attacks, in which bots deliberately push the price to the edge of your limit.",
      },
      { type: "heading", text: "Signals and caveats" },
      {
        type: "list",
        items: [
          "Order books change in milliseconds; what you see is a snapshot, not a promise.",
          "Spoofing, placing large orders with no intention of letting them fill in order to mislead other traders, is prohibited in many regulated markets but can still occur on some venues.",
          "Some orders are hidden or only partly displayed, so visible depth does not always match real liquidity.",
          "Reported volume can be inflated by wash trading, so depth near the mid price is a more useful liquidity measure than volume alone.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Reducing slippage",
        text: "Use limit orders to cap your price, split large orders into smaller pieces over time, check order book depth before trading an unfamiliar asset and avoid trading thin markets during sudden news events.",
      },
    ],
    keyTakeaways: [
      "Bids are buy orders and asks are sell orders; the gap between the best of each is the spread.",
      "Depth near the mid price is the most practical measure of liquidity.",
      "Large market orders walk the book, pulling the average price away from the quote.",
      "On DEXs, slippage tolerance caps price impact, but very high settings invite sandwich attacks.",
    ],
  },
  {
    slug: "proof-of-reserves",
    title: "Proof of Reserves and Exchange Solvency",
    summary:
      "Proof of reserves lets an exchange show that it holds assets matching customer balances, but it is not a complete picture of solvency. This lesson explains how Merkle-tree proofs work, what the FTX collapse taught the industry and where these proofs fall short.",
    level: "advanced",
    track: "exchanges",
    readingMinutes: 4,
    blocks: [
      {
        type: "paragraph",
        text: "When you deposit funds on a centralized exchange, you trust that the company holds enough assets to repay every customer who wants to withdraw. An exchange is solvent when its assets exceed its liabilities. If it lends out customer deposits, gambles with them or simply loses them, the gap stays invisible until many users try to withdraw at once. Proof of reserves is a set of techniques designed to make part of that picture verifiable.",
      },
      { type: "heading", text: "A cautionary example: the FTX collapse" },
      {
        type: "paragraph",
        text: "In November 2022, FTX, then one of the largest crypto exchanges in the world, collapsed within days. Reports raised questions about the balance sheet of an affiliated trading firm, customers rushed to withdraw, and the exchange halted withdrawals before filing for bankruptcy in the United States on November 11, 2022. Later investigations and court proceedings found that customer deposits had been diverted to the affiliated firm, and the exchange's founder was convicted of fraud in 2023. Customers became creditors in a lengthy bankruptcy process, with claims generally valued at prices from the filing date. The episode showed that a large, well-known brand is no guarantee that customer assets are actually there.",
      },
      { type: "heading", text: "What solvency means in numbers" },
      {
        type: "paragraph",
        text: "Suppose customer balances add up to 10,000 BTC. If the exchange controls 10,200 BTC, its bitcoin reserve ratio is 102%, and every customer could in principle withdraw at once. If it controls only 8,000 BTC, the ratio is 80%: early withdrawals would be paid, but the last 2,000 BTC of claims could not be honored. Proof of reserves aims to show which situation is true, at least for the assets it covers.",
      },
      { type: "heading", text: "How Merkle-tree proof of reserves works" },
      {
        type: "paragraph",
        text: "A Merkle tree summarizes many pieces of data into a single short fingerprint called the root hash. To build a proof of reserves, the exchange takes a snapshot of every customer balance and hashes each one, typically together with an anonymized account identifier. Hashes are paired and hashed again, level by level, until only the root remains. In a Merkle sum tree, each node also carries the total of the balances beneath it, so the root commits to the sum of all customer liabilities in the snapshot.",
      },
      {
        type: "paragraph",
        text: "The exchange publishes the root and the total, and gives each customer a Merkle proof: the few sibling hashes needed to recompute the path from their own leaf to the root. If the recomputed root matches the published one, the customer knows their balance was included. Separately, the exchange demonstrates control of on-chain addresses holding at least the total, for example by signing messages with them, often with an accounting firm reviewing the process. Newer designs use zero-knowledge proofs to show that no account was given a negative balance to shrink the total, without revealing individual balances.",
      },
      { type: "heading", text: "Checking your own inclusion" },
      {
        type: "steps",
        items: [
          "Log in and open the exchange's proof of reserves page for the latest snapshot.",
          "Retrieve your record identifier, the balance recorded in your leaf and your Merkle proof.",
          "Confirm that the recorded balance matches what you held on the snapshot date.",
          "Recompute the root with the exchange's tool or, preferably, an independent open-source verifier.",
          "Compare your result with the root that was published at the time of the snapshot.",
        ],
      },
      { type: "heading", text: "The limits of proof of reserves" },
      {
        type: "list",
        items: [
          "Other liabilities: a report can show assets matching customer deposits while the company owes loans or other debts, so reserves alone do not prove solvency.",
          "Point-in-time snapshots: the data reflects a single moment, so assets could be borrowed just before the snapshot and returned afterwards.",
          "Control is not ownership: signing with an address shows access to keys, not that the assets are free of pledges or claims by others.",
          "Participation: inclusion proofs only catch omitted accounts if enough customers actually check.",
          "Asset quality: reserves held in the exchange's own token or in illiquid assets may be worth far less in a crisis.",
          "Limited assurance: many reports are narrow attestations rather than full financial audits.",
        ],
      },
      {
        type: "comparison",
        columns: ["Typical proof of reserves", "Stronger solvency evidence"],
        rows: [
          {
            label: "Customer balances",
            values: [
              "Shown to be included in a snapshot",
              "Reconciled with full accounting records",
            ],
          },
          {
            label: "Assets",
            values: [
              "On-chain holdings the exchange controls",
              "All assets, with any pledges disclosed",
            ],
          },
          {
            label: "Other liabilities",
            values: ["Usually not covered", "Loans and debts included"],
          },
          {
            label: "Timing",
            values: ["A single snapshot", "Frequent or continuous reporting"],
          },
          {
            label: "Assurance",
            values: [
              "Often a limited-scope attestation",
              "Independent audit of the full balance sheet",
            ],
          },
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "A minimum, not a guarantee",
        text: "Proof of reserves makes some kinds of misconduct harder to hide, but it cannot prove that an exchange is solvent. Treat it as one positive signal among several, alongside regulation, audited financial statements and a clean operating history.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Limit what you leave exposed",
        text: "The most direct way to reduce exchange insolvency risk is to keep only the funds you actively need on a platform and hold the rest in self-custody you know how to secure.",
      },
    ],
    keyTakeaways: [
      "An exchange is solvent only if its assets exceed all of its liabilities, not just customer balances.",
      "The FTX collapse in November 2022 showed how customer funds can be misused behind a trusted brand.",
      "Merkle-tree proofs let each customer verify that their balance is included in a snapshot.",
      "Proof of reserves usually ignores other liabilities and reflects a single point in time.",
      "Keeping less on exchanges is the most direct way to limit insolvency risk.",
    ],
    references: [
      {
        label: "Bitcoin: A Peer-to-Peer Electronic Cash System",
        url: "https://bitcoin.org/bitcoin.pdf",
      },
    ],
  },
  {
    slug: "derivatives-and-leverage",
    title: "Futures, Margin and the Risks of Leverage",
    summary:
      "Futures, perpetual contracts and margin trading let you take positions larger than your capital. This lesson explains how they work, how funding rates and liquidation operate and why leverage magnifies losses as much as gains.",
    level: "advanced",
    track: "exchanges",
    readingMinutes: 4,
    blocks: [
      {
        type: "paragraph",
        text: "Many exchanges offer products that go beyond buying and selling assets directly. Derivatives are contracts whose value comes from an underlying asset, such as bitcoin, without requiring you to own that asset. Combined with leverage, they allow positions much larger than the money you put in. These products are complex, can lose money very quickly and are restricted for retail customers in some jurisdictions; the United Kingdom, for example, has banned the sale of crypto derivatives to retail consumers since 2021.",
      },
      { type: "heading", text: "Margin trading" },
      {
        type: "paragraph",
        text: "In margin trading, you borrow funds to buy or sell more than your own balance allows. Your own funds serve as collateral, and you pay interest on the borrowed amount while the position is open. Borrowing to buy creates a long position that profits if the price rises; borrowing an asset to sell it, hoping to buy it back cheaper, creates a short position.",
      },
      { type: "heading", text: "Futures and perpetual futures" },
      {
        type: "paragraph",
        text: "A futures contract is an agreement to buy or sell an asset at a set price on a future date. Traditional futures have an expiry date on which they settle. Crypto markets popularized the perpetual future, or perpetual swap, which never expires and can be held indefinitely as long as you maintain enough margin. Long and short positions are equally easy to open, one reason these contracts trade enormous volumes.",
      },
      { type: "heading", text: "Funding rates" },
      {
        type: "paragraph",
        text: "Without an expiry date, something must keep a perpetual contract's price close to the spot price. That mechanism is the funding rate, a periodic payment exchanged directly between traders holding long and short positions, often every eight hours depending on the venue. When the perpetual trades above spot, funding is usually positive and longs pay shorts; when it trades below, shorts pay longs. Funding looks small per period but adds up. On a $10,000 position with a rate of 0.01% every eight hours, you pay $1 per period, $3 per day and about $1,095 over a year, roughly 11% of the position.",
      },
      { type: "heading", text: "How leverage magnifies results" },
      {
        type: "paragraph",
        text: "Leverage is the ratio between the size of your position and the margin backing it. With $1,000 of margin at 10x leverage, you control a $10,000 position, so every 1% move in the asset changes your result by $100, or 10% of your margin. The comparison below ignores fees and funding to show the core effect.",
      },
      {
        type: "comparison",
        columns: ["Spot purchase", "10x leveraged long"],
        rows: [
          { label: "Your capital", values: ["$1,000", "$1,000 of margin"] },
          { label: "Position size", values: ["$1,000", "$10,000"] },
          {
            label: "Price rises 10%",
            values: ["Gain of $100 (10%)", "Gain of $1,000 (100%)"],
          },
          {
            label: "Price falls 10%",
            values: ["Loss of $100 (10%)", "Loss of $1,000, the entire margin"],
          },
          {
            label: "Price falls 50%",
            values: [
              "Loss of $500; you still hold the asset",
              "Liquidated long before this point",
            ],
          },
        ],
      },
      { type: "heading", text: "Liquidation explained" },
      {
        type: "paragraph",
        text: "Exchanges require a minimum amount of equity in each leveraged position, called the maintenance margin. If losses push your equity below that level, the exchange forcibly closes the position, which is called liquidation, and usually charges a fee. A 10x position is therefore typically liquidated before the full 10% adverse move. Liquidation is normally triggered by a mark price derived from several markets, which reduces but does not remove the effect of brief price spikes. As a rough guide, ignoring fees, the adverse move that liquidates an isolated position is about one divided by the leverage, minus the maintenance margin rate. With a 0.5% rate, which varies by contract:",
      },
      {
        type: "list",
        items: [
          "5x leverage: about a 19.5% move.",
          "10x leverage: about a 9.5% move.",
          "50x leverage: about a 1.5% move.",
          "100x leverage: about a 0.5% move, which can happen in seconds.",
        ],
      },
      {
        type: "paragraph",
        text: "With isolated margin, only the margin assigned to that position is at risk. With cross margin, your whole account balance backs open positions, so one bad trade can consume funds you never meant to risk.",
      },
      { type: "heading", text: "Why leverage so often goes wrong" },
      {
        type: "paragraph",
        text: "Crypto assets can move 5% or more in a single day, which is ordinary volatility for an unleveraged holder but a liquidation event at high leverage. Fees are charged on the full position, not your margin: a 0.05% taker fee on a $10,000 position is $5, or 0.5% of a $1,000 margin, every time you open or close. Funding payments accumulate the longer you hold. Where providers of leveraged retail products must publish risk warnings, those warnings commonly state that a majority of retail accounts lose money.",
      },
      { type: "heading", text: "Risk controls to understand" },
      {
        type: "steps",
        items: [
          "Confirm that these products are legal for you in your jurisdiction.",
          "Read the contract specifications, including fees, funding intervals and maintenance margin.",
          "Prefer low leverage and isolated margin while learning.",
          "Size positions so that a liquidation would cost only a small, acceptable fraction of your capital.",
          "Decide your exit before entering, and avoid adding margin to a losing position just to delay liquidation.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Losses can be total and fast",
        text: "A leveraged position can lose its entire margin in minutes, and cross margin can expose the rest of your account. Never trade derivatives with money you cannot afford to lose.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Not only for speculation",
        text: "Derivatives also have risk management uses. A miner or long-term holder might open a short position to hedge against falling prices, offsetting losses on assets already owned.",
      },
    ],
    keyTakeaways: [
      "Derivatives let you take positions larger than your capital, in either direction.",
      "Perpetual futures use funding payments between longs and shorts to track the spot price.",
      "At 10x leverage, a 10% move against you wipes out your margin, and liquidation usually comes earlier.",
      "Fees and funding are charged on the full position size, not just your margin.",
      "The higher the leverage, the less normal volatility it takes to be liquidated.",
    ],
  },
];
