let testimonial_data = [

    {
        name: "DRICTOR_PERVEEN",
        image: "pic1.jpg",
        content: " Hi! 😊  My name is Dr. Preveen, and I hail from the vibrant town of Poondhamallee. I am absolutely thrilled to announce that I recently became a part of the MagicBus team. This incredible journey began just last month, and it has already proven to be a significant milestone in my career. The opportunities and experiences I've encountered here are truly remarkable."
    },
    {
        name: "CHANDRAN_YT",
        image: "pic2.jpg",
        content: " Hi! 😊  My name is chandran_yt, and I hail from the vibrant town of Poondhamallee. I am absolutely thrilled to announce that I recently became a part of the MagicBus team. This incredible journey began just last month, and it has already proven to be a significant milestone in my career. The opportunities and experiences I've encountered here are truly remarkable."
    },
    {
        name: "MUKESH",
        image: "pic3.jpg",
        content: " Hi! 😊   My name is Dr. Mukesh, and I hail from the vibrant town of Poondhamallee. I am absolutely thrilled to announce that I recently became a part of the MagicBus team. This incredible journey began just last month, and it has already proven to be a significant milestone in my career. The opportunities and experiences I've encountered here are truly remarkable."
    }
]
let data = 0
let image = document.querySelector(".profile")
let name = document.querySelector(".profile_name")
let content = document.querySelector(".content")

function testimonial() {

    let current = testimonial_data[data]
    image.src = current.image
    name.innerHTML = current.name
    content.innerHTML = current.content
    data++
    if (data == testimonial_data.length) {
        data = 0
    }
}
setInterval(() => { testimonial() }, 1000);
testimonial()