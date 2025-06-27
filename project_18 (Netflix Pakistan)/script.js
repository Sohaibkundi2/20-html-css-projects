const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


document.addEventListener("DOMContentLoaded", function() {
    const labels = document.querySelectorAll(".accordion label");

    labels.forEach(label => {
        label.addEventListener("click", function() {
            const contentId = label.getAttribute("for");
            const content = document.getElementById(contentId);

            if (content.classList.contains("expanded")) {
                content.classList.remove("expanded");
            } else {
                document.querySelectorAll(".accordion .content").forEach(c => c.classList.remove("expanded"));
                content.classList.add("expanded");
            }
        });
    });
});
