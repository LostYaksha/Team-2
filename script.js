function toggleDetails(button) {
    const moreDetails = button.nextElementSibling;
    if (moreDetails.style.display === "none" || moreDetails.style.display === "") {
        moreDetails.style.display = "block";
        button.textContent = "Read Less";
    } else {
        moreDetails.style.display = "none";
        button.textContent = "Read More";
    }
}



function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}




