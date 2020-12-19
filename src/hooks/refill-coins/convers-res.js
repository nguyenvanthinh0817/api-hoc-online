module.exports = (context) => {
  const { result } = context;
  const newData = result.data.map((item) => {
    return {
      _id: item._id,
      name: item.userId.name,
      username: item.userId.username,
      bankAccount: item.bankAccount,
      bankNameAdmin: item.bankNameAdmin,
      amount: item.amount,
      content: item.content,
      status: item.status,
    };
  });
  result.data = newData;
  return context;
};
