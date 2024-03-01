import { generateReturnsArray } from "./src/investmentGoals.js";

const form = document.getElementById("investment-form");
//const calculateButton = document.getElementById("calculate-results");

function renderProgression(e) {
  e.preventDefault();
  //const startingAmount = Number(form["starting-amount"].value);
  const startingAmount = Number(
    document.getElementById("starting-amount").value
  );
  const additionalContribuition = Number(
    document.getElementById("additional-contribuition").value
  );
  const timeAmount = Number(document.getElementById("time-amount").value);
  const timeAmountPeriod = document.getElementById("time-amount-period").value;
  const returnRate = Number(document.getElementById("return-rate").value);
  const returnRatePeriod = document.getElementById("evaluation-period").value;
  const taxRate = Number(document.getElementById("tax-rate").value);

  const returnsArray = generateReturnsArray(
    startingAmount,
    timeAmount,
    timeAmountPeriod,
    additionalContribuition,
    returnRate,
    returnRatePeriod
  );
  console.log(returnsArray);
}

//form.addEventListener("submit", renderProgression);
form.addEventListener("submit", renderProgression);
