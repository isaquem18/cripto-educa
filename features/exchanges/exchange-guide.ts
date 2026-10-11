export type PlatformType = {
  name: string;
  shortName: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  lessonSlug: string;
};

export const platformTypes: PlatformType[] = [
  {
    name: "Centralized exchange",
    shortName: "CEX",
    description:
      "A company runs an order book that matches buyers and sellers, holds customer funds and connects crypto to the banking system.",
    strengths: ["Deep liquidity and fast execution", "Fiat deposits and withdrawals", "Customer support and account recovery"],
    weaknesses: ["You trust the company with custody", "Identity verification (KYC) required", "Accounts can be frozen or hacked"],
    lessonSlug: "cex-vs-dex",
  },
  {
    name: "Decentralized exchange",
    shortName: "DEX",
    description:
      "Smart contracts let you swap tokens directly from your own wallet, usually through liquidity pools instead of an order book.",
    strengths: ["You keep custody of your funds", "No account or sign-up", "Access to a long tail of tokens"],
    weaknesses: ["Smart contract and scam-token risk", "Network fees and slippage", "No support desk if you make a mistake"],
    lessonSlug: "cex-vs-dex",
  },
  {
    name: "Broker app",
    shortName: "Broker",
    description:
      "A simplified app that quotes you a price and fills your order itself or through partners. Convenient, but the cost is often hidden in the spread.",
    strengths: ["Very simple interface", "Instant buy and sell", "Good for small, occasional purchases"],
    weaknesses: ["Wider spreads than an exchange", "Withdrawals to your own wallet may be limited", "Fewer order types"],
    lessonSlug: "exchange-fees",
  },
  {
    name: "Peer-to-peer marketplace",
    shortName: "P2P",
    description:
      "Individuals trade directly with each other, usually with an escrow service holding the crypto until the fiat payment is confirmed.",
    strengths: ["Flexible payment methods", "Useful where banking access is limited", "Prices set by participants"],
    weaknesses: ["Higher fraud risk", "Slower than order-book trading", "Requires care with payment proofs"],
    lessonSlug: "scams-and-security",
  },
];

export const tradeLifecycleSteps = [
  {
    title: "Create and verify your account",
    description:
      "Regulated exchanges ask for identity documents (KYC). Turn on authenticator-app two-factor authentication before depositing anything.",
  },
  {
    title: "Deposit funds",
    description:
      "Send money through a bank transfer or an instant payment system such as Pix. Check deposit fees and confirm the account belongs to the exchange.",
  },
  {
    title: "Place an order",
    description:
      "A market order fills immediately at the best available prices. A limit order waits for your price. The exchange charges a maker or taker fee.",
  },
  {
    title: "Withdraw or hold",
    description:
      "Keep the asset on the exchange, or withdraw it to a wallet you control. Always double-check the address and the network before sending.",
  },
];

export const exchangeFeeTypes = [
  {
    name: "Trading fee (maker / taker)",
    description: "A percentage of each trade. Makers add liquidity with limit orders; takers remove it and usually pay more.",
    example: "0.10% taker fee on a $1,000 buy = $1.00",
  },
  {
    name: "Spread",
    description: "The gap between the best buy (ask) and sell (bid) price. Brokers that advertise zero fees often earn here.",
    example: "Bid $99.50 / Ask $100.50 → 1% round-trip cost",
  },
  {
    name: "Deposit and withdrawal fees",
    description: "Charged when moving fiat or crypto in or out. Crypto withdrawals also include the blockchain network fee.",
    example: "Withdrawing BTC may cost a fixed amount per transaction",
  },
  {
    name: "Conversion and FX costs",
    description: "Buying with a different currency or a card can add currency conversion markups and card processing fees.",
    example: "A 2% card fee on a $500 purchase = $10",
  },
  {
    name: "Funding and borrowing",
    description: "Leveraged and futures positions pay interest or periodic funding rates that add up the longer you hold.",
    example: "0.01% funding every 8 hours ≈ 0.03% per day",
  },
];

export const exchangeRedFlags = [
  "Guaranteed or unusually high fixed returns on deposits",
  "No clear legal entity, address or license information",
  "Pressure to deposit quickly or to recruit friends for bonuses",
  "Withdrawals delayed with new fees required to “unlock” your funds",
  "Support agents contacting you first through social media or messaging apps",
  "Domain names that imitate a well-known exchange with small spelling changes",
];

export const exchangeChecklistItems = [
  { id: "license", label: "It is registered or authorized to operate in my country" },
  { id: "track-record", label: "It has a multi-year track record without unresolved hacks or withdrawal freezes" },
  { id: "reserves", label: "It publishes proof of reserves or audited financial statements" },
  { id: "two-factor", label: "It supports authenticator-app 2FA and withdrawal address whitelists" },
  { id: "fees", label: "Its full fee schedule (trading, spread, deposit, withdrawal) is public and clear" },
  { id: "fiat", label: "It supports deposits and withdrawals in my local currency" },
  { id: "liquidity", label: "The pairs I need have meaningful volume and tight spreads" },
  { id: "withdrawals", label: "I can withdraw crypto to my own wallet without unreasonable limits" },
  { id: "support", label: "It has reachable customer support through official channels" },
  { id: "terms", label: "I have read how it handles custody, insolvency and account closures" },
];
