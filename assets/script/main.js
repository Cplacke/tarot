

const reveal = (event, title) => {
    console.info(event, title);

    const img = event.target;
    const face = img.getAttribute('face');
    img.classList.add('flip');
    setTimeout(() => {
        event.target.setAttribute('src', face);
        img.onload = () => {
            img.classList.remove('flip');
            img.classList.add('show')
            document.querySelector(`#${title}-h3`).classList.remove('hidden')
            document.querySelector(`#${title}-p`).classList.remove('hidden')
        }
    }, 600)

}