export type ScenarioType = 'MOAT' | 'GOAT';

export interface Scenario {
    id: number;
    text: string;
    type: ScenarioType;
    feedback: string;
}

export const scenarios: Scenario[] = [
    // 1-10
    { id: 1, text: "We use the GPT-4 API to rewrite emails, but with a blue UI.", type: "GOAT", feedback: "OpenAI releases this feature next Tuesday. You are dead." },
    { id: 2, text: "A marketplace where buyers only come if sellers are there, and sellers only come if buyers are there. We have 1M of each.", type: "MOAT", feedback: "Classic Network Effect. The flywheel spins!" },
    { id: 3, text: "Our enterprise software is terrible, but it takes 3 years and $5M to migrate data away from us.", type: "MOAT", feedback: "The 'High Switching Cost' moat. Evil, but profitable." },
    { id: 4, text: "We were the first people to sell socks on the blockchain.", type: "GOAT", feedback: "First mover advantage is a myth. Execution > Ideas." },
    { id: 5, text: "We have a patent on a round pizza box.", type: "GOAT", feedback: "Patents are for lawsuits, not moats. Dominos doesn't care." },
    { id: 6, text: "We are the only supplier of a rare earth metal needed for iPhone batteries.", type: "MOAT", feedback: "Supply Chain Monopoly. The ultimate flex." },
    { id: 7, text: "We built a wrapper around Excel.", type: "GOAT", feedback: "Microsoft just acquired your competitor. Game over." },
    { id: 8, text: "Our brand is so strong, people tattoo our logo on their faces.", type: "MOAT", feedback: "Brand Moat. Irrational loyalty is the best kind." },
    { id: 9, text: "We sell $1 bills for $0.90 to grow fast.", type: "GOAT", feedback: "Unit economics matter. You are burning cash, not building a business." },
    { id: 10, text: "We have data on 100M users that no one else can access.", type: "MOAT", feedback: "Data Asset Moat. If your model gets smarter than everyone else's, you win." },

    // 11-20
    { id: 11, text: "We are 'The Uber for Dog Walking' in a town with 50 people.", type: "GOAT", feedback: "TAM (Total Addressable Market) is too small. Not venture backable." },
    { id: 12, text: "We are building a search engine to compete with Google.", type: "GOAT", feedback: "They have 90% market share and billions in cash. Good luck." },
    { id: 13, text: "Our software is mandated by federal law for all hospitals.", type: "MOAT", feedback: "Regulatory Capture. The government is your best salesperson." },
    { id: 14, text: "We use AI to generate NFTs of bored apes.", type: "GOAT", feedback: "The bubble popped. You are 2 years too late." },
    { id: 15, text: "We have the lowest cost structure in the industry due to proprietary robotics.", type: "MOAT", feedback: "Cost Advantage Moat. You can win on price forever." },
    { id: 16, text: "We are a social network for people who hate social networks.", type: "GOAT", feedback: "Anti-social network? How do you grow? Vitality is 0." },
    { id: 17, text: "We pivot every week based on what's trending on Twitter.", type: "GOAT", feedback: "Lack of focus. You are building nothing." },
    { id: 18, text: "Our platform is the standard for 98% of Fortune 500 companies.", type: "MOAT", feedback: "Standardization Moat. No one gets fired for buying you." },
    { id: 19, text: "We are a dating app where you can only match with people who have the same name.", type: "GOAT", feedback: "Niche is good, but this is too niche." },
    { id: 20, text: "We have an exclusive 10-year contract with the NFL.", type: "MOAT", feedback: "Exclusive Access. No one else can play." },

    // 21-30
    { id: 21, text: "We are building a metaverse for cats.", type: "GOAT", feedback: "Cats don't have VR headsets. Or wallets." },
    { id: 22, text: "Our CEO is a famous celebrity.", type: "GOAT", feedback: "Celebrity founders are a risk, not a moat. Ask Fyre Festival." },
    { id: 23, text: "We have 0% churn because our product is addictive.", type: "MOAT", feedback: "Habit Moat. But careful with the ethics." },
    { id: 24, text: "We are a crypto exchange with no unexpected downtime.", type: "GOAT", feedback: "Basic functionality is not a moat." },
    { id: 25, text: "We are the only company that can repair their machines.", type: "MOAT", feedback: "Right to Repair laws might hurt, but for now, it's a monopoly." },
    { id: 26, text: "We sell water.", type: "GOAT", feedback: "Commodity. Unless you are 'Liquid Death', good luck." },
    { id: 27, text: "We sell water, but it's called 'Murder H2O' and comes in a skull.", type: "MOAT", feedback: "Brand differentiation. Commodities can become brands." },
    { id: 28, text: "We are a decentralized autonomous organization (DAO) to buy the Constitution.", type: "GOAT", feedback: "Cool stunt, not a business model." },
    { id: 29, text: "Our code is open source, but our service is hosted and managed.", type: "MOAT", feedback: "Open Core model. Can work if ops is hard." },
    { id: 30, text: "We have a team of 50 PhDs in a field only 100 people understand.", type: "MOAT", feedback: "Talent Moat. Extremely hard to replicate." },

    // 31-40
    { id: 31, text: "We are 'AirBnB for renting out your toaster'.", type: "GOAT", feedback: "Transaction costs > Item value. Doesn't scale." },
    { id: 32, text: "We are a bank that only exists in the metaverse.", type: "GOAT", feedback: "Regulatory nightmare. SEC says no." },
    { id: 33, text: "We built a platform that developers love and refuse to leave.", type: "MOAT", feedback: "Developer Evangelism is a huge moat (e.g., Stripe, Vercel)." },
    { id: 34, text: "We drop-ship products from AliExpress.", type: "GOAT", feedback: "Low barrier to entry. Anyone can do this in 5 minutes." },
    { id: 35, text: "Our founder wrote the textbook on this technology.", type: "MOAT", feedback: "Deep expertise/IP moat." },
    { id: 36, text: "We are a social media app that charges $10/month.", type: "GOAT", feedback: "Ads support free competitors. Hard to scale." },
    { id: 37, text: "We are the App Store.", type: "MOAT", feedback: "Platform Monopoly. 30% tax on the internet." },
    { id: 38, text: "We are a blockchain for tracking bananas.", type: "GOAT", feedback: "A database works fine. Blockchain is overkill." },
    { id: 39, text: "We own the railroad tracks.", type: "MOAT", feedback: "Physical Infrastructure Moat. Impossible to rebuild today." },
    { id: 40, text: "We successfully lobbied to require a license to braid hair, which only we teach.", type: "MOAT", feedback: "Regulatory Moat via lobbying. Dirty, but effective." },

    // 41-50
    { id: 41, text: "We are 'Tinder for finding co-founders'.", type: "GOAT", feedback: "High churn. Once successful, users leave forever." },
    { id: 42, text: "We have a 10x better battery technology.", type: "MOAT", feedback: "Hard Tech Moat. If it works, you win energy." },
    { id: 43, text: "We are a clone of Facebook, but red.", type: "GOAT", feedback: "Zero differentiation." },
    { id: 44, text: "We integrate with every legacy banking system in the world.", type: "MOAT", feedback: "Integration Moat. It's so painful, no one else will do it." },
    { id: 45, text: "We are 'Uber for Private Jets'.", type: "GOAT", feedback: "Market too small, logistics too hard." },
    { id: 46, text: "We are the only ones with the map data for self-driving cars.", type: "MOAT", feedback: "Data Moat." },
    { id: 47, text: "We aggregate news articles.", type: "GOAT", feedback: "Google News exists." },
    { id: 48, text: "We are a platform where creators own their audience.", type: "MOAT", feedback: "Counter-positioning against closed platforms." },
    { id: 49, text: "We use AI to trade stocks.", type: "GOAT", feedback: "So does Citadel, with 1000x your budget." },
    { id: 50, text: "We are the clearinghouse for all US financial transactions.", type: "MOAT", feedback: "Systemic Importance. Too big to fail." },

    // 51-60
    { id: 51, text: "We made a slightly better mousetrap.", type: "GOAT", feedback: "Distribution > Product. Better isn't enough." },
    { id: 52, text: "We are a vertically integrated rocket company.", type: "MOAT", feedback: "Economies of Scale + Tech. Example: SpaceX." },
    { id: 53, text: "We are a VR headset for dogs.", type: "GOAT", feedback: "Dogs see with their noses. Pivot." },
    { id: 54, text: "We are Stripe, but for Mars.", type: "GOAT", feedback: "Too early. Come back in 50 years." },
    { id: 55, text: "We have the rights to Harry Potter.", type: "MOAT", feedback: "IP Moat. Content is King." },
    { id: 56, text: "We are 'WeWork' for prisons.", type: "GOAT", feedback: "Ethical disaster. PR nightmare." },
    { id: 57, text: "We are the dominant operating system for PCs.", type: "MOAT", feedback: "Eçosystem Moat. Windows 95 style." },
    { id: 58, text: "We made a crypto coin named after a meme.", type: "GOAT", feedback: "Ponzi scheme." },
    { id: 59, text: "We are the only chip manufacturer that can make 3nm chips.", type: "MOAT", feedback: "Process Power Moat. TSMC style." },
    { id: 60, text: "We are a subscription box for rocks.", type: "GOAT", feedback: "Just... why?" },

    // 61-70
    { id: 61, text: "We use quantum computing to solve Sudoku.", type: "GOAT", feedback: "Tech overkill. Solving a problem that doesn't exist." },
    { id: 62, text: "We are a marketplace for buying and selling kidneys.", type: "GOAT", feedback: "Illegal. Go directly to jail." },
    { id: 63, text: "We have a massive community of developers contributing to our code.", type: "MOAT", feedback: "Community Moat. Free labor + loyalty." },
    { id: 64, text: "We are 'The Facebook for 80-year-olds'.", type: "GOAT", feedback: "High churn (morbid, but true)." },
    { id: 65, text: "We control the distribution channels to every grocery store.", type: "MOAT", feedback: "Distribution Moat. Shelf space is finite." },
    { id: 66, text: "We offer 15-minute grocery delivery losing $5 per order.", type: "GOAT", feedback: "Blitzscaling without unit economics = death." },
    { id: 67, text: "We are a search engine that pays you to search.", type: "GOAT", feedback: "Fraud bots will bankrupt you in hour 1." },
    { id: 68, text: "We are the default search engine on the iPhone.", type: "MOAT", feedback: "Distribution deal. Worth billions." },
    { id: 69, text: "We are a new Cola brand.", type: "GOAT", feedback: "Coke and Pepsi will crush you." },
    { id: 70, text: "We are a social network based on voice audio only.", type: "GOAT", feedback: "Remember Clubhouse? Feature, not a product." },

    // 71-80
    { id: 71, text: "We are a library of all the world's knowledge.", type: "MOAT", feedback: "Wikipedia. Network effect + Brand." },
    { id: 72, text: "We sell digital real estate in a dead game.", type: "GOAT", feedback: "Bag holder." },
    { id: 73, text: "We own the fiber optic cables under the ocean.", type: "MOAT", feedback: "Infrastructure Moat." },
    { id: 74, text: "We are 'DoorDash for Cannabis'.", type: "GOAT", feedback: "Regulatory nightmare + Apple Store ban." },
    { id: 75, text: "We heavily customized SAP for 10 years.", type: "MOAT", feedback: "Sunk Cost fallacy... but functionally a switching cost moat." },
    { id: 76, text: "We are a decentralized Youtube on IPFS.", type: "GOAT", feedback: "UX is terrible. Users don't care about decentralization." },
    { id: 77, text: "We are a tool that makes other tools faster.", type: "MOAT", feedback: "Picks and Shovels. Always a good business." },
    { id: 78, text: "We are a luxury fashion brand with 100 year history.", type: "MOAT", feedback: "Veblen Good. Higher price = Higher demand." },
    { id: 79, text: "We are 'Uber for Ambulances'.", type: "GOAT", feedback: "Actually illegal. 911 exists." },
    { id: 80, text: "We are the only ones who can make the machines that make the chips.", type: "MOAT", feedback: "ASML. The moat of moats." },

    // 81-90
    { id: 81, text: "We use AI to write code.", type: "MOAT", feedback: "If you have the best model + distribution (Github Copilot)." },
    { id: 82, text: "We use AI to write code, but worse.", type: "GOAT", feedback: "You are a wrapper." },
    { id: 83, text: "We are a neo-bank for teenagers.", type: "MOAT", feedback: "Lock them in early. LTV is massive." },
    { id: 84, text: "We are a smart juicer that requires wifi.", type: "GOAT", feedback: "Juicero. The ultimate goat." },
    { id: 85, text: "We are a cloud provider with 1000s of services.", type: "MOAT", feedback: "AWS. Scale economies." },
    { id: 86, text: "We are a todo list app.", type: "GOAT", feedback: "Saturated market. Zero switching cost." },
    { id: 87, text: "We are legalzoom for divorces.", type: "GOAT", feedback: "One-time use. High CAC, low LTV." },
    { id: 88, text: "We are a vertical SaaS for Toastmasters.", type: "GOAT", feedback: "Market too small." },
    { id: 89, text: "We are the standard file format for design.", type: "MOAT", feedback: "File format lock-in. Adobe." },
    { id: 90, text: "We sell air in a can.", type: "GOAT", feedback: "Scam." },

    // 91-100
    { id: 91, text: "We are a localized version of Amazon in a large emerging market.", type: "MOAT", feedback: "Geographic Moat + Logistics." },
    { id: 92, text: "We facilitate bribes for government officials.", type: "GOAT", feedback: "Prison." },
    { id: 93, text: "We are a connector for all APIs.", type: "MOAT", feedback: "Middleware Moat. Zapier." },
    { id: 94, text: "We are 'Tikok for Audio'.", type: "GOAT", feedback: "Audio is not viral like video." },
    { id: 95, text: "We maintain the legacy COBOL systems for banks.", type: "MOAT", feedback: "Nobody else knows how to do it. Charge whatever you want." },
    { id: 96, text: "We are a browser that mines crypto in the background.", type: "GOAT", feedback: "Battery drain. Users hate it." },
    { id: 97, text: "We match freelancers with clients.", type: "MOAT", feedback: "2-sided marketplace. Hard to build, hard to kill." },
    { id: 98, text: "We are a coding bootcamp with an ISA.", type: "GOAT", feedback: "Commoditized education." },
    { id: 99, text: "We focus on privacy in an ad-supported world.", type: "MOAT", feedback: "Differentiation. Signal/Apple." },
    { id: 100, text: "We are making a game called 'Moat or Goat'.", type: "MOAT", feedback: "Meta. It's going to be a hit." }
];
