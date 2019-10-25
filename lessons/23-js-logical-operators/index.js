let time = prompt ("Enter the current hour (0 to 23): ", 0);

if (time<0 || time > 23) {
    alert("The input is incorrect");
} else if (time<8 || time>=18) {
    alert("The input is outside of office hours");
} else if (time>=8 && time<18) {
    alert("We are open");
}