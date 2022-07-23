function power(num1, num2) {
  return (num1 % num2) + 0;
}
module.exports = power;

//-8%2の場合、あまりが-0になってしまうため、0を足している
