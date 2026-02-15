// Typing Animation
const roles = ["Java Developer", "Web Developer"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type(){
    current = roles[i];

    if(!isDeleting){
        document.getElementById("typing").innerHTML = current.substring(0, j++);
        if(j > current.length){
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        document.getElementById("typing").innerHTML = current.substring(0, j--);
        if(j < 0){
            isDeleting = false;
            i = (i + 1) % roles.length;
        }
    }

    setTimeout(type, 100);
}

type();

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    if(response.ok){
        alert("Message sent successfully!");
        form.reset();
    } else {
        alert("Something went wrong.");
    }
});
