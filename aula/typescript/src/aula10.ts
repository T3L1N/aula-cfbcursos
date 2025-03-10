// NULL - UNDEFINED - UNKNOWN
// NULO - INDEFINIDO - DESCONHECIDO

// NULL - Tipo nulo
let vnome : string | null;
vnome = null;
console.log(vnome);

// UNDEFINED - Tipo indefinido
let vnome2 : any;
console.log(vnome2);

// UNKNOWN - so pode ser atribuido em tipos unknown ou any
let vnome3 : unknown = 10; 
let vnum = vnome3;
console.log(vnum);