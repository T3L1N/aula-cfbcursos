let num:number[] = [2, 52, 35, 22, 14];
// let num:Array<number | string> = [2, 52, 35, 22, 14, 'Teles'];
// let num:(number | string)[] = [2, 52, 35, 22, 14, 'Teles']

//Inseri os elemento no Array
num.push(50);
num.unshift(10);

//Remove os elementos do Array
num.pop();
num.shift();

console.log(num);


let num_ro:ReadonlyArray<number> = [100, 200, 300];

console.log(num_ro);