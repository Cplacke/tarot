
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

const addReadingResults = () => {
    const type = document.querySelector('#reading-type').innerText.trim();
    const cardPositions = [ ...document.querySelectorAll('.tarot-title') ].map((ele) => ele.innerText.trim());
    const cardNames = [ ...document.querySelectorAll('.tarot-name') ].map((ele) => ele.innerText.trim());

    fetch('/api/add/reading', {
        method: 'POST', // HTTP method
        headers: {
            'Content-Type': 'application/json' // Content type
        },
        body: JSON.stringify({
            user: localStorage.getItem('user'),
            data: {
                type,
                cards: cardPositions.map((pos, i) => ({
                    position: pos,
                    name: cardNames[i]
                }))
            }
        })
    })
        .then((res) => {
            console.info('inserted reading :: ', type)
        })
        .catch((err) => {
            console.error('error inserting reading :: ', type)
        });
}