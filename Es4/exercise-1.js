// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000

function calculateSalary(role) {
  const baseSalary = 1000;
  let multiplier;
  if (role == 'ceo') {
    multiplier = 2.2;
  }
  else if (role == 'manager') {
    multiplier = 1.8;
  }
  else if (role == 'cto') {
    multiplier = 1.8;
  }
  else if (role == 'developer') {
    multiplier = 1.5;
  } else {
    return baseSalary;
  }
  const salary = baseSalary * multiplier;
  return salary;
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);