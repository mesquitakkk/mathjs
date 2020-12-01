// f: A -> B, f(x) = x² + 1
function f(x) {
    return x ** 2
}

// g: B -> C, g(x) = 2x + 2
function g(x) {
    return 2 * x + 1
}

// h: A -> C, h(x) = g(f(x))
function h(x) {
    return g(f(x));
}

// show Im(f)
function atob() {
    console.log('f: A -> B, f(x) = x² + 1');
    for (let i in A) {
        console.log(A[i], ' -> ', B[i]);
    }
    console.log('============================');
}

// show Im(g)
function btoc() {
    console.log('f: B -> C, g(x) = 2x + 2');
    for (let i in B) {
        console.log(B[i], ' -> ', C[i]);
    }
    console.log('============================');
}

// show Im(h)
function atoc() {
    console.log('f: A -> C, h(x) = g(f(x))');
    for (let i in A) {
        console.log(A[i], ' -> ', C[i]);
    }
    console.log('============================');
}

let A = [-1, 0, 1, 2];
let B = Array();
let C = Array();

A.forEach(element => {
    B.push(f(element));
})

B.forEach(element => {
    C.push(g(element));
})

atob();
btoc();
atoc();