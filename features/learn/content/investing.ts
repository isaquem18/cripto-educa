import type { Lesson } from "../types";

export const investingLessons: Lesson[] = [
  {
    slug: "risk-management",
    title: "Volatility and Risk Management",
    summary:
      "Understand why crypto prices swing so sharply and learn the core habits that keep volatility from turning into decisions you regret.",
    level: "beginner",
    track: "investing",
    readingMinutes: 4,
    blocks: [
      {
        type: "heading",
        text: "What volatility means",
      },
      {
        type: "paragraph",
        text: "Volatility describes how much and how quickly an asset's price moves. Crypto assets are known for high volatility: double-digit percentage moves in a single day are not unusual, and declines of 50% to 80% from previous peaks have happened several times in the market's history. Volatility works in both directions. The same characteristic that produces large gains can produce large, fast losses, and nothing guarantees that a price will ever return to a previous high.",
      },
      {
        type: "paragraph",
        text: "Several factors contribute to these swings: a relatively young market, prices driven largely by expectations rather than cash flows, thin liquidity in smaller tokens, widespread use of leverage on trading platforms, and sensitivity to news, regulation and broader economic conditions.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Only risk what you can afford to lose",
        text: "Before putting money into crypto, make sure you have an emergency fund, no high-interest debt, and that losing the entire amount invested would not affect your essential expenses or long-term plans. Never use money set aside for rent, bills or other near-term needs.",
      },
      {
        type: "heading",
        text: "Diversification",
      },
      {
        type: "paragraph",
        text: "Diversification means spreading money across different assets so that a single failure does not wipe out your savings. Within crypto, many assets tend to move together, especially during sharp declines, so owning a long list of tokens is not the same as being diversified. Meaningful diversification usually means thinking about how crypto fits alongside other kinds of savings and investments. Concentrating heavily in one small token also exposes you to project-specific risks, such as hacks, abandoned development or disappearing liquidity.",
      },
      {
        type: "heading",
        text: "Position sizing",
      },
      {
        type: "paragraph",
        text: "Position sizing is deciding how much to put into any single asset. A common approach is to set a maximum percentage of your total savings for crypto as a whole, and a smaller maximum for any individual, more speculative asset. The value of this habit is not a magic number but a limit chosen in advance, while you are calm, rather than in the middle of a market move.",
      },
      {
        type: "paragraph",
        text: "The arithmetic shows why size matters. If a position worth 5% of your portfolio falls 60%, your total portfolio drops by 3%, which is painful but manageable. If the same position were 50% of your portfolio, the identical 60% fall would cut your total wealth by 30%. Recovering from large losses is also harder than it looks: after a 50% decline, an asset needs to double just to get back to where it started.",
      },
      {
        type: "heading",
        text: "Emotional biases",
      },
      {
        type: "paragraph",
        text: "Some of the biggest risks come from our own reactions. Fast-moving markets that are discussed constantly on social media amplify predictable emotional patterns.",
      },
      {
        type: "list",
        items: [
          "FOMO (fear of missing out): buying after a big rally because everyone seems to be making money, often close to a local peak.",
          "FUD (fear, uncertainty and doubt): selling in a panic after alarming headlines or rumors, sometimes close to a local low.",
          "Loss aversion: holding a losing position far too long because selling would make the loss feel real.",
          "Overconfidence: crediting gains in a rising market to personal skill and taking on more risk as a result.",
          "Confirmation bias: seeking out only the opinions that agree with what you already believe.",
          "Anchoring: fixating on a past price as if it were the asset's correct value.",
        ],
      },
      {
        type: "heading",
        text: "Having a plan",
      },
      {
        type: "paragraph",
        text: "A written plan turns emotional decisions into decisions you made earlier with a clear head. It does not need to be complicated, but it should answer a few questions before you invest.",
      },
      {
        type: "steps",
        items: [
          "Define why you are investing and over what time horizon.",
          "Set the maximum share of your total savings that will go into crypto.",
          "Decide how you will add money: all at once or gradually on a schedule.",
          "Write down when you will rebalance, take profits or reduce exposure.",
          "Choose where you will store your assets and how you will secure them.",
          "Plan how you will keep records of every transaction for tax purposes.",
        ],
      },
      {
        type: "comparison",
        columns: ["Plan-driven decision", "Emotion-driven decision"],
        rows: [
          {
            label: "Timing",
            values: ["Follows a schedule or a predefined rule", "Triggered by price spikes or social media"],
          },
          {
            label: "Size",
            values: ["Respects a limit set in advance", "Grows with excitement or fear"],
          },
          {
            label: "Information",
            values: ["Based on research done beforehand", "Based on headlines and rumors"],
          },
          {
            label: "Review",
            values: ["Periodic and deliberate", "Constant price checking"],
          },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Be cautious with leverage",
        text: "Borrowed money and derivatives magnify both gains and losses and can lead to liquidation, where a position is closed automatically and the collateral is lost. Beginners are generally better served by understanding spot markets thoroughly before considering leverage of any kind.",
      },
    ],
    keyTakeaways: [
      "Crypto volatility cuts both ways, and past highs are never guaranteed to return.",
      "Invest only money you could lose entirely without harming your essential finances.",
      "Limit position sizes in advance; holding many correlated tokens is not true diversification.",
      "Recognize FOMO, FUD and other biases, and rely on a written plan instead of impulses.",
    ],
  },
  {
    slug: "dollar-cost-averaging",
    title: "Dollar-Cost Averaging (DCA)",
    summary:
      "See how investing a fixed amount on a regular schedule affects your average cost, and weigh its trade-offs against investing everything at once.",
    level: "beginner",
    track: "investing",
    readingMinutes: 4,
    blocks: [
      {
        type: "heading",
        text: "What dollar-cost averaging is",
      },
      {
        type: "paragraph",
        text: "Dollar-cost averaging (DCA) is a strategy in which you invest a fixed amount of money at regular intervals, such as every week or every month, regardless of the current price. Despite the name, it works with any currency, so investing R$100 every month follows exactly the same logic. Because the amount is fixed, you automatically buy more units when the price is low and fewer units when the price is high.",
      },
      {
        type: "paragraph",
        text: "The goal of DCA is not to find the perfect moment to buy. It removes the need to try, which reduces the impact of short-term volatility and the emotional pressure of timing decisions.",
      },
      {
        type: "heading",
        text: "A worked example",
      },
      {
        type: "paragraph",
        text: "Imagine investing R$100 at the start of each month for four months in an asset whose price changes from month to month. These figures are purely illustrative.",
      },
      {
        type: "list",
        items: [
          "Month 1: the price is R$50, so R$100 buys 2 units.",
          "Month 2: the price drops to R$25, so R$100 buys 4 units.",
          "Month 3: the price is R$40, so R$100 buys 2.5 units.",
          "Month 4: the price rises to R$80, so R$100 buys 1.25 units.",
        ],
      },
      {
        type: "paragraph",
        text: "In total you invested R$400 and accumulated 9.75 units. Your average cost per unit is R$400 divided by 9.75, or about R$41.03. Compare that with the simple average of the four prices: (50 + 25 + 40 + 80) / 4 = R$48.75. Your average cost is lower because the fixed amount bought twice as many units in the month the price was lowest. Mathematically, the average cost under DCA is the harmonic mean of the purchase prices, which is always less than or equal to their simple average.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "DCA does not guarantee profit",
        text: "Your result depends on the price when you eventually sell. In the example, if the price fell to R$30 after the last purchase, the 9.75 units would be worth R$292.50, a loss of R$107.50 on R$400 invested. DCA manages timing risk; it does not remove market risk or the possibility that an asset loses value permanently.",
      },
      {
        type: "heading",
        text: "DCA vs lump sum",
      },
      {
        type: "paragraph",
        text: "The alternative is lump-sum investing: putting the whole amount in at once. Studies of traditional markets have found that, in markets that rise over the long run, lump-sum investing has more often produced higher returns, simply because the money is exposed to the market for longer. DCA tends to look better when prices fall or move sideways during the purchase period. Since no one knows in advance which scenario will play out, the choice depends largely on your risk tolerance, your cash flow and how you are likely to behave if prices drop right after you buy.",
      },
      {
        type: "comparison",
        columns: ["DCA", "Lump sum"],
        rows: [
          {
            label: "Timing risk",
            values: ["Spread across many purchase dates", "Concentrated on a single entry point"],
          },
          {
            label: "Emotional pressure",
            values: ["Lower, purchases follow a routine", "Higher, with regret if the price falls soon after"],
          },
          {
            label: "Steadily rising market",
            values: ["Often lower returns, since money enters gradually", "Often higher returns, fully invested from the start"],
          },
          {
            label: "Falling or choppy market",
            values: ["Often better, thanks to a lower average cost", "Often worse"],
          },
          {
            label: "Fees",
            values: ["Many small purchases can add up in fees", "One purchase, one set of fees"],
          },
          {
            label: "Natural fit",
            values: ["Investing from a regular income", "Investing a sum you already have available"],
          },
        ],
      },
      {
        type: "heading",
        text: "Putting DCA into practice",
      },
      {
        type: "steps",
        items: [
          "Choose an amount that fits comfortably in your budget after essential expenses and emergency savings.",
          "Pick a fixed interval, such as weekly or monthly, and commit to it for a defined period.",
          "Check the costs of each purchase, because spreads and fixed fees weigh more heavily on small, frequent orders.",
          "Record every purchase with its date, price, quantity and fees, since you will need this to calculate gains for taxes.",
          "Review the plan periodically, but avoid changing it in reaction to short-term price moves.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Consistency is the point",
        text: "The behavioral benefit of DCA depends on actually sticking to the schedule. Many people find that automating purchases and checking prices less often makes it easier to keep going during downturns, which is precisely when a fixed amount buys the most units.",
      },
    ],
    keyTakeaways: [
      "DCA means investing a fixed amount at regular intervals, regardless of price.",
      "A fixed amount buys more units at low prices, pulling your average cost below the simple average price.",
      "Lump sum has often done better in rising markets; DCA reduces timing risk and regret.",
      "DCA does not guarantee profit or protect against an asset losing value.",
    ],
  },
  {
    slug: "crypto-in-brazil",
    title: "Crypto in Brazil: Regulation and Taxes Overview",
    summary:
      "Get a general picture of how crypto is regulated and taxed in Brazil, who the main authorities are, and how Pix connects reais to crypto platforms.",
    level: "intermediate",
    track: "investing",
    readingMinutes: 5,
    blocks: [
      {
        type: "callout",
        tone: "warning",
        title: "General overview, not legal or tax advice",
        text: "This lesson summarizes the general landscape as a starting point for your own research. Brazilian rules on crypto assets change frequently, details depend on your individual situation, and some of the information here may be out of date by the time you read it. Always confirm current rules on official sources such as gov.br, the Receita Federal and the Banco Central do Brasil, or consult a qualified accountant or lawyer.",
      },
      {
        type: "heading",
        text: "The legal framework",
      },
      {
        type: "paragraph",
        text: "Brazil's main legal milestone for crypto is Law 14.478/2022, often called the legal framework for virtual assets, which came into force in 2023. Broadly, it defines virtual assets as digital representations of value that can be traded or transferred electronically and used for payments or investment, while excluding items such as national and foreign currency and assets already covered by other regulation, like securities. It sets guidelines for virtual asset service providers, meaning companies that exchange, transfer or hold virtual assets for others, and requires them to be authorized to operate. The law also created a specific type of fraud involving virtual assets in the criminal code and connected the sector to anti-money laundering rules.",
      },
      {
        type: "paragraph",
        text: "Decree 11.563/2023 then designated the Banco Central do Brasil as the authority responsible for regulating and supervising these service providers. Tokens that qualify as securities generally remain under the oversight of the Brazilian Securities and Exchange Commission (CVM). Since that designation, the Central Bank has held public consultations and has been publishing rules for the sector, covering topics such as authorization to operate, governance, protection and segregation of customer assets, and anti-money laundering controls. These rules have been rolled out in stages, some with transition periods for companies already operating, so check the Banco Central website for their current status.",
      },
      {
        type: "comparison",
        columns: ["Banco Central do Brasil", "Receita Federal"],
        rows: [
          {
            label: "Main role",
            values: ["Regulates and supervises virtual asset service providers", "Administers federal taxes and reporting obligations"],
          },
          {
            label: "What it affects for you",
            values: ["Which companies may operate and how they must protect clients", "What you must report, declare and pay"],
          },
          {
            label: "Where to check",
            values: ["The official Banco Central website", "The Receita Federal pages on gov.br"],
          },
        ],
      },
      {
        type: "heading",
        text: "Reporting to the Receita Federal",
      },
      {
        type: "paragraph",
        text: "The Receita Federal has required reporting of crypto operations since Normative Instruction 1888/2019. Under that rule, Brazilian exchanges report their clients' operations, while people who transact through foreign exchanges or directly between wallets have historically had to report their own operations monthly when the total exceeded a set threshold. The Receita Federal has been introducing newer reporting rules intended to update and replace this framework, including obligations involving foreign providers, so current thresholds and procedures may differ from the historical ones.",
      },
      {
        type: "paragraph",
        text: "Separately, crypto holdings are generally listed in the annual income tax return, in the assets and rights section, using categories specific to crypto and typically at acquisition cost rather than market value. Minimum value thresholds and exact codes are defined in each year's official instructions.",
      },
      {
        type: "heading",
        text: "Taxes on gains",
      },
      {
        type: "paragraph",
        text: "Capital gains from selling crypto are subject to income tax in Brazil. The gain is generally the difference between the sale value and the average acquisition cost, which is why detailed records matter. Historically, individuals have benefited from an exemption in certain cases when total monthly sales, meaning the amount sold rather than the profit, stayed at or below R$35,000; above that, gains were taxed at progressive rates and paid through a monthly tax payment form. Swapping one crypto asset for another may also be treated as a sale for tax purposes. Changes to how crypto gains are taxed have been proposed in recent years, and treatment can differ depending on factors such as whether assets are held through Brazilian or foreign providers, so confirm the current rules before relying on any exemption or rate.",
      },
      {
        type: "list",
        items: [
          "Date and time of every purchase, sale, swap and transfer.",
          "Quantity, price in reais and total value of each operation.",
          "Fees paid and the platform or wallet involved.",
          "Transfers between your own wallets, so they are not mistaken for sales.",
          "Copies of statements and any reports or payment forms you submit.",
        ],
      },
      {
        type: "heading",
        text: "Pix as a common on-ramp",
      },
      {
        type: "paragraph",
        text: "Pix, the instant payment system created and operated by the Banco Central do Brasil, has become one of the most common ways to move reais into and out of crypto platforms in Brazil. Transfers usually settle within seconds, at any time of day, which makes deposits and withdrawals fast. A typical flow looks like this.",
      },
      {
        type: "steps",
        items: [
          "Check that the platform is permitted to operate in Brazil, using official sources rather than its own marketing.",
          "Choose the option to deposit reais via Pix, which shows a Pix key or QR code.",
          "Pay from a bank account in your own name, since many platforms reject third-party deposits to comply with anti-money laundering rules.",
          "Wait for the balance to be credited before placing any order.",
          "When withdrawing, send reais to a Pix key registered in your own name.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Stay alert to Pix scams",
        text: "Because Pix payments are fast and generally final, scammers exploit them too, with fake sellers in peer-to-peer trades, fraudulent QR codes and impersonated support agents. The Banco Central created the Special Return Mechanism (MED) for fraud cases, but recovery is not guaranteed, so contact your bank immediately if something goes wrong.",
      },
    ],
    keyTakeaways: [
      "Law 14.478/2022 set Brazil's legal framework for virtual assets, and Decree 11.563/2023 named the Banco Central do Brasil as regulator of service providers.",
      "The Receita Federal requires reporting of crypto operations, and reporting rules have been evolving.",
      "Crypto gains are subject to income tax; exemptions and rates can change, so always verify current rules.",
      "Pix is a fast, common on-ramp, but its payments are generally final.",
      "Keep detailed records and confirm details on gov.br, Receita Federal, Banco Central or with an accountant.",
    ],
    references: [
      {
        label: "Banco Central do Brasil",
        url: "https://www.bcb.gov.br",
      },
      {
        label: "Receita Federal",
        url: "https://www.gov.br/receitafederal",
      },
    ],
  },
];
