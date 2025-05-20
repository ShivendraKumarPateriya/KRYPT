const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TransactionsModule = buildModule("TransactionsModule", (m) => {
  // Deploy the Transactions contract without constructor arguments
  const transactions = m.contract("Transactions");

  return { transactions };
});

module.exports = TransactionsModule;









// import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// module.exports = buildModule("TransactionsModule", (m) => {
//   const transactions = m.contract("Transactions");
//   return { transactions };
// });
