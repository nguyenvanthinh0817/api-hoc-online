module.exports = (context) => {
  const { result } = context;
  const { userId, amount, status } = result;
  console.log(context.params);
  if (status == 2) {
    const coin = amount / 1000;
    context.app.services.users
      .get(userId, context.params)
      .then((res) => {
        const totalCoin = res.coin + coin;
        context.app.services.users
          .patch(userId, { coin: totalCoin }, {})
          .then((res) => {
            console.log("Nap tien thanh cong");
            return context;
          });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("Da tu choi");
    return context;
  }
};
