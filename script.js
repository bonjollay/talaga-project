function donasi(){
    alert("Terima kasih atas niat baik Anda 🙏");
}

// animasi scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".fade").forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if(pos < window.innerHeight - 100){
            el.classList.add("show");
        }
    });
});
