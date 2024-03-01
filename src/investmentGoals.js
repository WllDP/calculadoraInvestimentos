function convertToMonthlyReturnRate(yearlyReturnRate) {
  return yearlyReturnRate ** (1 / 12);
}
function generateReturnsArray(
  startingAmount = 0,
  timeHorizon = 0,
  timePeriod = "monthly",
  monthlyContribuition = 0,
  returnRate = 0,
  returnTimeFrame = 0
) {
  if (!timeHorizon || !startingAmount) {
    throw new Error("Investimento inivial e prazo devem ser preenchidos");
  }
  const finalReturnRate =
    returnTimeFrame === "monthly"
      ? returnRate
      : convertToMonthlyReturnRate(1 + returnRate / 100);
  const finalTimeHorizon =
    timePeriod === "monthly" ? timeHorizon : timeHorizon * 12;
  const referenceInvesmentObject = {
    investedAmount: startingAmount,
    interestReturns: 0,
    totalInterestReturns: 0,
    month: 0,
    totalAmount: startingAmount,
  };
  const returnsArray = [referenceInvesmentObject, {}];
  for (
    let timeReference = 1;
    timeReference <= finalTimeHorizon;
    timeReference++
  ) {
    const totalAmount =
      returnsArray[timeReference - 1].totalAmount * finalReturnRate +
      monthlyContribuition;
    const interestReturns =
      returnsArray[timeReference - 1].totalAmount * finalReturnRate;
    const investedAmount =
      startingAmount + monthlyContribuition * timeReference;
    const totalInterestReturns = totalAmount - investedAmount;
    returnsArray.push({
      investedAmount,
      interestReturns,
      totalInterestReturns,
      month: timeReference,
      totalAmount,
    });
  }
  return returnsArray;
}