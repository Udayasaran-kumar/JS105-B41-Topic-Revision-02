class CustomArray{
  constructor(arr){
    this.arr=arr;
  }
  mapper(){
    let newarr=this.arr.map((ele,i)=> ele*i);
    return newarr;
  }
  filterer(){
    let newarr=this.arr.filter((ele)=>ele%2!==0)
    return newarr;
  }
  reducer(){
    let sum=this.arr.reduce((acc,ele)=> acc+ele);
    return sum;
  }
  forEacher(){
    this.arr.forEach((ele)=>console.log(ele));
  }
  sorterdescending(){
    let newarr=this.arr.sort((a,b)=>b-a);
    return newarr;
  }
    sorterascending(){
    let newarr=this.arr.sort((a,b)=>a-b);
    return newarr;
  }
}

let p1=new CustomArray([5, 2, 9, 1, 5, 6]);
console.log(p1.mapper());
console.log(p1.filterer());
console.log(p1.reducer());
p1.forEacher();
console.log(p1.sorterdescending());
console.log(p1.sorterascending());
//In this code I have attached the functions to perform all Higher order functions 
