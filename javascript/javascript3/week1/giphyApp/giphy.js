const button = document.getElementById("searchButton");
button.addEventListener("click", function () {
  const inputName = document.getElementById("inputGiphyName").value;
  const inputNumber = document.getElementById("numberOfGiphy").value;
  fetchDataFromGiphy(inputName, inputNumber);
});

const fetchDataFromGiphy = async (inputName, inputNumber) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${inputName}&api_key=aVAsln5OsdttPXJ12na0cFw1mK50sxqY&limit=${inputNumber}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const output = document.getElementById("outputGiphyImages");

  output.innerHTML = "";
  data.data.forEach((gif) => {
    const img = document.createElement("img");
    img.src = gif.images.original.url;
    output.appendChild(img);
  });
};
