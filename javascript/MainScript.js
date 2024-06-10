function StartWebsite() {
    const colors = ["🔴", "🟡", "🔵"];
    const nav = document.getElementById("nav");

    let randomNumber = Math.floor(Math.random() * colors.length);

    document.getElementsByName("logo").forEach((element) => {
        element.classList.remove("⚪", "🔴", "🟡", "🔵");
        element.classList.add(colors[randomNumber]);
    });

    document.getElementsByName("nav").forEach((element) => {
        element.classList.remove("⚪", "🔴", "🟡", "🔵");
        element.classList.add("⚫");
    });

    nav.classList.remove("⚪", "🔴", "🟡", "🔵");
    nav.classList.add(colors[randomNumber]);

    document.getElementsByName("links").forEach((element) => {
        element.classList.remove("⚪", "🔴", "🟡", "🔵");
        element.classList.add(colors[randomNumber]);
    });
}