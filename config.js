window.FACTORY_CFG = {
  NAME: "FACTORY",
  TICKER: "FACTORY",
  CA: "",            // $FACTORY contract address
  CHAIN: "solana",
  PAD: "pumpfun",
  PAIR: "",
  X: "",             // https://x.com/...
  BUY: "",           // optional: launchpad page URL (defaults to pump.fun/coin/<CA>)
  CHART: "",         // optional: chart URL (defaults to gmgn)
  LIVE: false,       // true once the factory is launching coins (turns on the NEXT COIN clock)
  OUTPUT: [],        // CAs of coins the factory launched — shown as crates at the dock
  OUTPUT_URL: ""     // optional: URL of a JSON array of CAs the factory publishes
};
