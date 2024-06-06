const getFoo = async () => {
  const { foo } = await import("./module2.mjs");
  return foo;
};

module.exports = { getFoo };
