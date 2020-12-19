module.exports = (context) => {
  const { result } = context;
  const { userId, amount, status } = result;
  if (status == 2) {
    const coin = amount / 1000;
    context.app.services.users.patch(userId, { coin }, {}).then((res) => {
      console.log("Nap tien thanh cong");
      return context;
    });
  } else {
    console.log("Da tu choi");
    return context;
  }
};
