import "./App.css"
function App(){

  const x = 100; // 
  var name = "sok";
  var name = "dara";
  name = "ronaldo"
  let price = 100; //let price = 1000;
  price = 10;
  price = "bona"
  price = ["C","C++","ReactNative","NodeJs"];

  var a = 10 , b = 5;
  var sum = a + b;
  var sub = a - b;

  var data1 =  100;
  var data2 = "Dara";
  var data3 = 1000.20;
  var data4 = true;
  var data5 = [3,4,5,3,,4,5,3,5];
  var data6 = ["Sok","Bona","Dara"];
  var data7 = {
    id : 101,
    name : "Dara",
    gender : "Male",
    tel : 99999999999
  }

  // const function_name = () => { // arrow function
  //   // body function
  // }
  // const function_name = (arg_list) => { // arrow function
  //   // body function
  // }

  const display = () => {
    return "My name is data";
  }

  const display1 = (name="AA",age=10) => {
    return "My name is " + name + ". And i am "+age+" year old";
  }

  return(
    <div style={{padding:20}}>
      <div>{display()}</div>
      <div>{display1()}</div>
      <div>{display1("Messi",90)}</div>
      <div>{display1("Jon",40)}</div>
      <div>{data1+data2}</div>
      <div>{data2}</div>
      <div>{data3}</div>
      <div>{data4+""}</div>
      <div>{data5[0]}</div>
      <div>{data5[1]}</div>
      <div>{data5.length}</div>
      <div>{data6.length}</div>
      <div>{data7.id}</div>
      <div>{data7.tel}</div>
      {/* <h1>{x}</h1>
      <h1>{name}</h1>
      <h1>{price.length}</h1>
      <div>value a = {a}</div>
      <div>value b = {b}</div>
      <div>a + b = {a+b}</div>
      <div>a - b + 100 = {a-b + 100}</div>
      <div>Sum = {sum}</div>
      <div>Sub (a-b) = {sub}</div> */}
    </div>
  )
}

export default App;
