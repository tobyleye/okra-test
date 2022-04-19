import okra from "./okra";

const options = {
  key: "1308hf301h83f1iweg0jhe",
  env: "production", // or sandbox
  token: "qwdnoufe3180u814001408jf",
  country: "NG",
  payment: true,
  charge: {
    amount: 100000,
    currency: "ngn",
  },
};

const client = new okra.create();
client.open(options);

export * from "./okra";
