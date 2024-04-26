
const reveal = (event, title) => {
    const img = event.target;
    const face = img.getAttribute('face');
    img.classList.add('flip');
    setTimeout(() => {
        event.target.setAttribute('src', face);
        img.onload = () => {
            img.classList.remove('flip');
            img.classList.add('show')
            document.querySelector(`#${title}-h3`).classList.remove('d-none')
            document.querySelector(`#${title}-p`).classList.remove('d-none')
        }
    }, 600)
}

const filterTarots = (suite) => {
    if (!suite) {
        document.querySelectorAll('[tarot-index]').forEach((ele) => {
            ele.classList.remove('d-none');
        });
        return;
    }
    document.querySelectorAll('[tarot-index]').forEach((ele) => {
        ele.classList.add('d-none');
    });
    document.querySelectorAll(`[tarot-index][suite="${suite}"]`).forEach((ele) => {
        ele.classList.remove('d-none');
    });
}