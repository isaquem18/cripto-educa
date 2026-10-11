import type { Lesson } from "../types";

export const securityLessons: Lesson[] = [
  {
    slug: "wallets-and-keys",
    title: "Wallets, Private Keys and Seed Phrases",
    summary:
      "Understand what a crypto wallet actually holds, how private keys and seed phrases work, and how to choose between hot, cold, custodial and non-custodial options.",
    level: "beginner",
    track: "security",
    readingMinutes: 5,
    blocks: [
      {
        type: "heading",
        text: "What a crypto wallet really is",
      },
      {
        type: "paragraph",
        text: "A crypto wallet does not store coins the way a leather wallet stores cash. Your coins exist as entries on a blockchain, a public ledger copied across thousands of computers. What a wallet actually holds is the set of cryptographic keys that prove you are allowed to move those entries. If the keys are lost, the coins stay on the ledger, but nobody, including you, can ever move them again.",
      },
      {
        type: "paragraph",
        text: "Every wallet is built on a key pair. The private key is a very large secret number used to sign transactions. The public key is derived from it, and your address, the string you share to receive funds, is usually derived from the public key. The math only works in one direction: anyone can verify that a signature came from your private key, but no one can work backward from your address to discover that key.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Your private key is the money",
        text: "Anyone who obtains your private key or seed phrase can move your funds instantly, from anywhere in the world, and blockchain transactions cannot be reversed. No legitimate exchange, wallet provider or support agent will ever ask you for it.",
      },
      {
        type: "heading",
        text: "Seed phrases",
      },
      {
        type: "paragraph",
        text: "Handling raw private keys is impractical, so most modern wallets generate a seed phrase, also called a recovery phrase or mnemonic. It is usually 12 or 24 words taken from a standard list of 2,048 words. From those words, the wallet can deterministically regenerate every private key and address it manages. If your phone breaks or your hardware device is lost, entering the same words into a compatible wallet restores access to all of your funds.",
      },
      {
        type: "paragraph",
        text: "That convenience cuts both ways. The seed phrase is a master key, and whoever has those words controls every account derived from them, with no password or second factor standing in the way.",
      },
      {
        type: "heading",
        text: "Custodial vs non-custodial",
      },
      {
        type: "paragraph",
        text: "A custodial wallet is one where a third party, usually an exchange, holds the keys on your behalf. You log in with a password and two-factor authentication, and the company signs transactions for you. It is convenient and forgiving: if you forget your password, you can go through account recovery. The trade-off is that you depend on the custodian's security, solvency and willingness to process withdrawals. Exchange hacks, bankruptcies and frozen withdrawals have happened repeatedly throughout crypto's history.",
      },
      {
        type: "paragraph",
        text: "A non-custodial wallet puts the keys in your hands. Nobody can freeze your funds or lose them on your behalf, but nobody can recover them for you either. This is where the phrase \"not your keys, not your coins\" comes from: if someone else holds the keys, what you really own is a claim against that company, not the coins themselves.",
      },
      {
        type: "comparison",
        columns: ["Custodial", "Non-custodial"],
        rows: [
          {
            label: "Who holds the keys",
            values: ["The service provider", "You"],
          },
          {
            label: "Account recovery",
            values: ["Possible through the provider's support process", "Only with your own seed phrase backup"],
          },
          {
            label: "Main risk",
            values: ["Hacks, insolvency or frozen withdrawals at the provider", "Losing your backup or having it stolen"],
          },
          {
            label: "Typical use",
            values: ["Buying, selling and trading on an exchange", "Long-term holding and using decentralized applications"],
          },
        ],
      },
      {
        type: "heading",
        text: "Hot vs cold wallets",
      },
      {
        type: "paragraph",
        text: "A second distinction is whether your keys are exposed to the internet. A hot wallet keeps keys on an internet-connected device, such as a mobile app, a desktop program or a browser extension. A cold wallet keeps keys offline, most commonly on a hardware wallet: a small dedicated device that signs transactions internally, so the private key never touches your computer. Many people use both, treating a hot wallet like a checking account with small amounts and a cold wallet like savings.",
      },
      {
        type: "comparison",
        columns: ["Hot wallet", "Cold wallet"],
        rows: [
          {
            label: "Connectivity",
            values: ["Keys live on an internet-connected device", "Keys stay offline"],
          },
          {
            label: "Convenience",
            values: ["Fast for everyday payments and apps", "Slower, each transaction is confirmed on the device"],
          },
          {
            label: "Exposure to malware",
            values: ["Higher", "Much lower"],
          },
          {
            label: "Cost",
            values: ["Usually free", "Hardware devices have an upfront cost"],
          },
          {
            label: "Good fit",
            values: ["Small balances you use often", "Larger balances held for the long term"],
          },
        ],
      },
      {
        type: "heading",
        text: "Backing up your seed phrase",
      },
      {
        type: "list",
        items: [
          "Write the words by hand, in the correct order, on paper, or stamp them into a metal backup plate designed to survive fire and water.",
          "Never photograph the phrase, save it in cloud notes, email it to yourself or store it in a screenshot.",
          "Double-check the spelling and order of every word; many wallets include a verification step during setup.",
          "Keep the backup somewhere private and secure, and consider a second copy in a separate location to protect against fire, flood or theft.",
          "Never type your seed phrase into a website, form or chat, even when the request looks official.",
          "Plan for inheritance so that a trusted person could access your funds if something happened to you, without exposing the phrase ahead of time.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Optional passphrase",
        text: "Many wallets support an extra passphrase, sometimes called a 25th word, that is combined with the seed phrase. It adds protection if someone finds your written words, but if you forget the passphrase the funds become unrecoverable, so back it up separately from the seed phrase.",
      },
    ],
    keyTakeaways: [
      "A wallet holds keys, not coins; the coins live on the blockchain.",
      "Your seed phrase can restore every key, so whoever has it controls your funds.",
      "Custodial wallets trade control for convenience; non-custodial wallets give you full control and full responsibility.",
      "Hot wallets suit small, frequently used balances, while cold wallets suit long-term savings.",
      "Back up your seed phrase offline and never share it with anyone.",
    ],
  },
  {
    slug: "scams-and-security",
    title: "Avoiding Scams and Securing Your Accounts",
    summary:
      "Learn to recognize the most common crypto scams and set up the account protections that stop most attacks before they start.",
    level: "beginner",
    track: "security",
    readingMinutes: 4,
    blocks: [
      {
        type: "heading",
        text: "Why crypto attracts scammers",
      },
      {
        type: "paragraph",
        text: "Crypto transactions are fast, global and usually irreversible. There is no fraud department that can claw back a transfer once it is confirmed on the blockchain. That makes crypto holders attractive targets, and most losses do not come from breaking cryptography. They come from tricking people into handing over access or sending funds voluntarily. Learning the common patterns is the most effective defense you have.",
      },
      {
        type: "heading",
        text: "Common scam patterns",
      },
      {
        type: "list",
        items: [
          "Phishing: fake websites, emails or text messages imitate an exchange or wallet and ask you to log in or \"verify\" your wallet. The address is often just one character different from the real one, and search ads are sometimes used to push these sites to the top.",
          "Fake support: after you ask a question publicly, so-called support agents contact you by direct message. Real support teams do not start private conversations and never ask for your seed phrase or remote access to your device.",
          "Impersonation and giveaways: accounts posing as celebrities, companies or influencers promise to double any crypto you send. No legitimate giveaway requires you to send money first.",
          "Rug pulls: the creators of a new token or project attract investors, then drain the liquidity or abandon the project. Anonymous teams, tokens you cannot sell, unrealistic returns and intense hype are warning signs.",
          "Pig-butchering and romance scams: a stranger builds a friendship or relationship over weeks, then introduces a supposedly profitable trading platform. Small early withdrawals may work to build trust, but larger deposits become impossible to withdraw, often followed by demands for \"taxes\" or \"fees\" to release them.",
          "Fake apps and browser extensions: copycat wallets in app stores or ads steal your seed phrase the moment you enter it. Download wallet software only through links on the project's official website.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Universal red flags",
        text: "Pressure to act quickly, guaranteed or unusually high returns, requests for your seed phrase or private key, requests to install remote-access software, and anyone who contacts you first about an investment opportunity. Any one of these is reason enough to stop.",
      },
      {
        type: "heading",
        text: "Securing your exchange accounts",
      },
      {
        type: "paragraph",
        text: "Start with a unique, long password for each exchange, ideally generated and stored by a reputable password manager, and protect the email account linked to your exchange just as carefully. Then enable two-factor authentication (2FA), which requires a second proof of identity in addition to your password. Not all 2FA methods offer the same protection.",
      },
      {
        type: "comparison",
        columns: ["Authenticator app 2FA", "SMS 2FA"],
        rows: [
          {
            label: "How codes are delivered",
            values: ["Generated locally on your device", "Sent by your mobile carrier as a text message"],
          },
          {
            label: "Vulnerable to SIM swap",
            values: ["No", "Yes"],
          },
          {
            label: "Works without cell signal",
            values: ["Yes", "No"],
          },
          {
            label: "Recovery planning",
            values: ["Save the backup codes when you set it up", "Depends on your phone number staying under your control"],
          },
        ],
      },
      {
        type: "paragraph",
        text: "In a SIM swap, a criminal convinces or bribes a mobile carrier employee to move your phone number to a SIM card they control. From that moment they receive your text messages, including SMS codes and password reset links. That is why authenticator apps or physical security keys are generally recommended over SMS. It is also worth asking your carrier whether it offers a PIN or extra verification for SIM changes.",
      },
      {
        type: "paragraph",
        text: "Many exchanges also let you restrict withdrawals to a whitelist of pre-approved addresses, and adding a new address often triggers a waiting period and an email confirmation. If an attacker does get into your account, the whitelist makes it much harder to send your funds to their own address. Turn it on, along with anti-phishing codes and login alerts where available.",
      },
      {
        type: "heading",
        text: "Token approvals and allowances",
      },
      {
        type: "paragraph",
        text: "When you use decentralized applications on networks such as Ethereum, you often sign an approval that lets a smart contract spend a specific token from your wallet. Some apps request unlimited allowances for convenience. If that contract is malicious or later compromised, it can drain the approved tokens without asking you again. Malicious sites also disguise approval or signature requests as harmless actions, such as claiming an airdrop.",
      },
      {
        type: "steps",
        items: [
          "Read what your wallet says you are signing before confirming; if you do not understand it, do not sign.",
          "Approve only the amount you need for a specific transaction whenever the app allows it.",
          "Review and revoke old approvals periodically, using your wallet or a reputable block explorer's token approval tool.",
          "Keep a separate wallet with a small balance for experimenting with new applications.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Verify through a second channel",
        text: "When in doubt, close the message, type the official website address yourself or use a saved bookmark, and check your account directly. Real problems will still be there when you look; fake ones disappear.",
      },
    ],
    keyTakeaways: [
      "Most crypto losses come from deception, not broken cryptography.",
      "Never share your seed phrase, and distrust anyone who contacts you first about money.",
      "Use an authenticator app or security key instead of SMS for 2FA.",
      "Enable withdrawal whitelists and review token approvals regularly.",
    ],
  },
  {
    slug: "self-custody",
    title: "Moving Funds to Self-Custody Safely",
    summary:
      "Follow a careful, repeatable process to move crypto from an exchange to a wallet you control without losing funds to network mistakes or address tricks.",
    level: "intermediate",
    track: "security",
    readingMinutes: 4,
    blocks: [
      {
        type: "heading",
        text: "Why the move itself matters",
      },
      {
        type: "paragraph",
        text: "Moving funds from an exchange to a wallet you control is a major step toward self-custody, and it is also one of the moments when mistakes are most expensive. A typo, the wrong network or a poisoned address can send funds somewhere they can never be recovered. The good news is that a careful, repeatable routine removes nearly all of these risks.",
      },
      {
        type: "heading",
        text: "Setting up a hardware wallet",
      },
      {
        type: "paragraph",
        text: "For meaningful amounts, a hardware wallet is a common choice because it keeps private keys offline. The details vary by manufacturer, but a safe setup broadly follows these steps.",
      },
      {
        type: "steps",
        items: [
          "Buy the device directly from the manufacturer or an authorized reseller, never second-hand, and check that the packaging shows no signs of tampering.",
          "Download the companion software only from the manufacturer's official website, typing the address yourself.",
          "Initialize the device as new so that it generates a fresh seed phrase. If a device arrives with a seed phrase already printed or filled in, do not use it.",
          "Write the seed phrase by hand on the recovery sheet or a metal backup, and confirm the words on the device when asked.",
          "Set a strong PIN and, if you choose, an optional passphrase that you back up separately.",
          "Update the firmware through the official app, then generate a receiving address and confirm it on the device's own screen.",
          "Before depositing significant funds, consider testing recovery: reset the device, restore it from your seed phrase and check that the same addresses appear.",
        ],
      },
      {
        type: "heading",
        text: "Choosing the right network",
      },
      {
        type: "paragraph",
        text: "Many assets exist on more than one blockchain. A stablecoin, for example, may be issued on several networks, and an exchange may offer withdrawals on each of them. The token has the same name everywhere, but the networks are separate systems. When you withdraw, the network you select on the exchange must be one your receiving wallet supports for that specific asset.",
      },
      {
        type: "paragraph",
        text: "A network mismatch, such as sending on one network to a wallet or service that only supports another, can make funds appear lost. Sometimes they can be recovered with technical work if you control the keys on both networks, sometimes only with help from the receiving platform, and sometimes not at all. Sending to an exchange deposit address on an unsupported network is a particularly common way to lose funds. Also check whether the destination requires a memo or tag, which some networks use to identify exchange deposits; leaving it out can delay or prevent the credit.",
      },
      {
        type: "comparison",
        columns: ["Safe habit", "Risky habit"],
        rows: [
          {
            label: "Network",
            values: ["Selecting a network the receiving wallet explicitly supports", "Picking the cheapest network without checking"],
          },
          {
            label: "Address source",
            values: ["Copying from the receiving wallet and confirming on the device screen", "Copying from transaction history or a chat message"],
          },
          {
            label: "Amount",
            values: ["Sending a small test first", "Sending the full balance in one transaction"],
          },
          {
            label: "Verification",
            values: ["Comparing characters at the start, middle and end", "Glancing only at the first few characters"],
          },
        ],
      },
      {
        type: "heading",
        text: "Test transactions",
      },
      {
        type: "paragraph",
        text: "Before moving a large amount, send a small test transaction. Wait until it appears as confirmed in the receiving wallet, then send the rest. The test costs an extra network fee, but it proves that the address, the network and any memo settings all work together. Some exchanges also hold first withdrawals to new addresses for a period of time, which is a useful safety feature rather than an obstacle.",
      },
      {
        type: "heading",
        text: "Address poisoning",
      },
      {
        type: "paragraph",
        text: "Address poisoning exploits the habit of copying addresses from transaction history. An attacker generates an address whose first and last characters match one you use often, then sends you a tiny or zero-value transaction from it so that it shows up in your history. If you later copy that familiar-looking entry instead of the original source, your funds go straight to the attacker.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Never copy addresses from history",
        text: "Always copy the destination from the receiving wallet itself or from a saved, verified address book entry. Compare the full address, or at least several characters at the beginning, middle and end, and confirm it on the hardware wallet screen. Clipboard-hijacking malware can also swap an address after you copy it, which is another reason to check again after pasting.",
      },
      {
        type: "heading",
        text: "A repeatable checklist",
      },
      {
        type: "list",
        items: [
          "Confirm the asset and the network your receiving wallet supports.",
          "Generate a receiving address and verify it on the device screen.",
          "Paste it into the exchange and compare the full string after pasting.",
          "Add a memo or tag if the destination requires one.",
          "Send a small test and wait for confirmation.",
          "Send the remaining amount and save the transaction ID for your records.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Take your time",
        text: "Scammers rely on urgency, but legitimate transfers almost never need to happen in the next five minutes. Doing this process slowly and in a quiet moment is one of the simplest security measures available.",
      },
    ],
    keyTakeaways: [
      "Initialize hardware wallets yourself and never use a pre-generated seed phrase.",
      "The withdrawal network must match a network your receiving wallet supports for that asset.",
      "Send a small test transaction before any large transfer.",
      "Copy addresses from the source, never from transaction history, to avoid address poisoning.",
    ],
  },
];
