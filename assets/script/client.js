

const reveal = (event, title) => {
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

const filterTarots = (suite) => {
    if (!suite) {
        document.querySelectorAll('[tarot-index]').forEach((ele) => {
            ele.classList.remove('hidden');
        });
        return;
    }
    document.querySelectorAll('[tarot-index]').forEach((ele) => {
        ele.classList.add('hidden');
    });
    document.querySelectorAll(`[tarot-index][suite="${suite}"]`).forEach((ele) => {
        ele.classList.remove('hidden');
    });
}