let burger = document.getElementById("burger");
function calc() {
    burger.value = eval(burger.value);
}
function press(x) {
    burger.value += x;
}