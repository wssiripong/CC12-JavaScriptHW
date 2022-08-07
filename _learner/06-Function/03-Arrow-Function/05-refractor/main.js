

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask('Do you agree?', 
//   function () { alert('You agreed.'); },
//   function () { alert('You canceled the execution.'); }
// );


let ask = (question, yes, no) => {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

let showYes = () => alert("You agreed.");
let showNo = () => alert("You canceled the execution");

ask("Do you agree?", showYes, showNo);
