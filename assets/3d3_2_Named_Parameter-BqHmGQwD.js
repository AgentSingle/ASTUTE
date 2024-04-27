const __vite__fileDeps=["assets/index-C2eSwMdE.js","assets/index-ChWTeaip.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{o as r,c as t,a as i,w as d,u as o,F as m,b as n,d as s,_ as g}from"./index-C2eSwMdE.js";const p=n("div",{class:"FlxM XLT Tbold Tupper"}," Named Parameter ",-1),_=n("pre",null,`          /*
Named Parameter In Dart
*/

void main(){
  printInfo(age: 18, name: "Jenny");
  printInfo(name: "Bob Coder");

  printDetails(age: 18, name: "Jenny", gender: "Female");

  printDetailsAgain("Jenny", "Female");
}

//Named Parameter
void printInfo({String? name, int? age}){
  print("$name, your age is: $age");
}

// Use Of Required In Named Parameter
void printDetails({required String name, required String gender, required int age}) {
  print('''
  Check your details:
  Name: $name,
  Age: $age,
  Gender: $gender
  ''');
}

// Use Of Optional Parameter
void printDetailsAgain(String name, String gender, [int? age]) {
  print('''
  Check your details:
  Name: $name,
  Age: $age,
  Gender: $gender
  ''');
}
        `,-1),f={__name:"3d3_2_Named_Parameter",setup(l){const a=s(()=>g(()=>import("./index-C2eSwMdE.js").then(e=>e.D),__vite__mapDeps([0,1])));return(e,c)=>(r(),t(m,null,[p,i(o(a),{codeTitle:"Named Parameter"},{default:d(()=>[_]),_:1})],64))}};export{f as default};
