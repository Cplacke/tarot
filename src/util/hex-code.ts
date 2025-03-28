
export const generateHexCode = () => {
    let hexCode = '';
    const characters = '0123456789abcdef';
    for (let i = 0; i < 12; i++) {
        if (i === 6) {
            hexCode += '-';
        }
        hexCode += characters[Math.floor(Math.random() * 16)];
    }
    return hexCode;
}
