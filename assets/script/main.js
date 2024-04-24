

const reveal = (event) => {
    console.info(event);

    const face = event.target.getAttribute('face');
    event.target.setAttribute('src', face);
}