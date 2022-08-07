const employees = {
  john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
  peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
  mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
  sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};

let name = prompt("Enter name");

if (employees[name] === undefined) {
  console.log("Not Found");
} else {
  console.log(`Name: ${name} Salary: ${employees[name].salary} Address: ${employees[name].address.district}, ${employees[name].address.province}`);
}

