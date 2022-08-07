const notebook = {
  brand: 'ASUS',
  model: 'Vivobook D413IA-EB303TS',
  processor: 'AMD Ryzen 7 4700U 3.6GHz',
  graphics: 'Integrated Graphics : AMD Radeon Graphics',
  ram: '8GB DDR4 Onboard',
  storage: '512GB PCIe NVMe M.2 SSD'
};

const notebook2 = {};

// for(let key in notebook) {
//   notebook2[key] = notebook[key];
// }

Object.assign(notebook2,notebook)

console.log(notebook2);