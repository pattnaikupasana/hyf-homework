function spiritAnimalNamesGenerator(name) {
    return `${name} - ${SpiritAnimalNameList [parseInt(Math.random()*10)]}`
}

function clickButtons() {
    const getName = document.getElementById('inputText').value;
    if (getName !== '') {
        spiritName.innerHTML = spiritAnimalNamesGenerator(getName);
    } else {
        spiritName.innerHTML = 'Please write a name';
    }
}
const SpiritAnimalNameList = [
  "The Saluting Soul",
  "The Laughing Phantom",
    "The Midnight Butcher",
    'Phyntom',
    'Menos',
    'Brand',
    'The Vicious Servant',
    'The Wild Templar',
    'The Twin Stalker',
    'The Oblivious Wizard',
    'The Bloodied Wraith',
]

const clickButton = document.querySelector('.name')
const spiritName = document.querySelector('h2');

clickButton.addEventListener('click', clickButtons)