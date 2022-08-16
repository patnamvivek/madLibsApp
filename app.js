// About the story
var q = prompt("enter questions");
const ui = [];
var u;
var ql = q,qc = 0;
for(let i = 1; i<=q; i++)
{
    u = prompt("enter word");
    ui.push(u);
    ql = ql - 1;
    qc = qc + 1;
    console.log(qc+"questions done");
    console.log(ql+"questions left");
    console.log("we are at"+ui.indexOf(ui[i])+"index");
}
if(ql==0)
{
    alert('Already and questions done');
}
var os = ui[0] + " is a " +ui[1]+" robust "+ui[2]+" ,so all must learn it "+ui[3];
console.log(os);
prompt(os);
console.log(ui);
prompt(ui);
