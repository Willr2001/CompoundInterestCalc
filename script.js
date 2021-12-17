const PrincipalBox= document.querySelector("#Principal")
const IntrestBox= document.querySelector("#Intrest")
const NoCompundedBox= document.querySelector("#NoCompunded")
const YearsBox= document.querySelector("#years")


const IntrestSpan= document.querySelector("#Profit")
const TotalSpan= document.querySelector("#Total")


function calcIntrest() {
  const Principal = PrincipalBox.value
  const Intrest = IntrestBox.value
  const NoCompunded = NoCompundedBox.value
  const Years = YearsBox.value

  const Total = Principal * (1 + Intrest/NoCompunded)^NoCompunded * Years
  TotalSpan.textContent = Total

  const Profit = (Total - Principal)
  IntrestSpan.textContent = Profit

}


PrincipalBox.addEventListener('input', calcIntrest)
IntrestBox.addEventListener('input', calcIntrest)
NoCompundedBox.addEventListener('input', calcIntrest)
YearsBox.addEventListener('input', calcIntrest)

