let userinput = document.getElementById("date");
userinput.max = new Date().toISOString().split("T")[0];

function calculateage(){
    let birthdate = new Date(userinput.value);

    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear();

    let today = today.getDate();

    let d2 = birthdate.getDate();
    let m2 = birthdate.getMonth() + 1;
    let y2 = birthdate.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;
}