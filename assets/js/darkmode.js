const chk = document.querySelector("#chk");
const twitter = document.getElementById("x");

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        twitter.style.color = "white";
    } else {
        twitter.style.color = "black"; 
    }
});
