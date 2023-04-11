function countDanishCharacter(danishString) {
    const æ = danishString.match(/æ/gi) || [];
    const ø = danishString.match(/ø/gi) || [];
    const å = danishString.match(/å/gi) || [];
    const total = æ.length + ø.length + å.length;
    return `total: ${total}, æ: ${æ.length}, ø: ${ø.length}, å: ${å.length}`;
}

const danishString1 = 'Jeg har en blå bil';
const danishString2 = 'Blå grød med røde bær';
const danishString3 = 'skæl du hjæpe mig?';
const danishString4 = 'Hello my name is Upæsænå';

const body = document.querySelector('body')
const divTag = document.createElement('div')
body.appendChild(divTag)
divTag.innerHTML = `number of danish letters : ${countDanishCharacter(danishString1)}`

const body1 = document.querySelector('body')
const divTag1 = document.createElement('div')
body.appendChild(divTag1)
divTag1.innerHTML = `number of danish letters : ${countDanishCharacter(danishString2)}`

const body2 = document.querySelector('body')
const divTag2 = document.createElement('div')
body2.appendChild(divTag2)
divTag2.innerHTML = `number of danish letters : ${countDanishCharacter(danishString3)}`

const body3 = document.querySelector('body')
const divTag3 = document.createElement('div')
body3.appendChild(divTag3)
divTag3.innerHTML = `number of danish letters : ${countDanishCharacter(danishString4)}`



console.log(danishString1);
console.log(countDanishCharacter(danishString1));

console.log(danishString2);
console.log(countDanishCharacter(danishString2));

console.log(danishString3);
console.log(countDanishCharacter(danishString3));

console.log(danishString4);
console.log(countDanishCharacter(danishString4));
