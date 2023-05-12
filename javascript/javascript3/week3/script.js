import env from "./env.json" assert { type: "json" };
const button = document.getElementById("searchbutton");
button.addEventListener("click", function () {
  screenshot();
});

//capture screenshot
async function screenshot() {
  const websiteUrl = document.getElementById("url").value;
  const url = `https://website-screenshot6.p.rapidapi.com/screenshot?url=${websiteUrl}&width=300&height=200&fullscreen=true`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${env.screenshotShotApi}`,
      "X-RapidAPI-Host": "website-screenshot6.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    //shows screenshots
    const img = document.createElement("img");
    img.src = result.screenshotUrl;
    console.log(img);
    document.getElementById("screenshot").appendChild(img);

    const savebutton = document.getElementById("savebutton");
    savebutton.addEventListener("click", function () {
      savescreenshot(result.screenshotUrl, websiteUrl);
    });
  } catch (error) {
    console.error(error);
  }

  //save screenshot
  async function savescreenshot(screenshotUrl, websiteUrl) {
    const urlapi = `https://crudcrud.com/api/${env.apiToken}`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        screenshotUrl,
        websiteUrl,
      }),
    };
    try {
      const response = await fetch(urlapi, options);
      const result = await response.json();
      document.getElementById("saved").innerHTML = JSON.stringify(result);
    } catch (error) {
      console.error(error);
    }
  }

  //list of screenshots
  const showAllImgs = document.getElementById("showAllImgs");
  showAllImgs.addEventListener("click", function () {
    listscreenshots();
  });
  async function listscreenshots() {
    const urlapi = `https://crudcrud.com/api/${env.apiToken}/screenshots`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(urlapi, options);
      const result = await response.json();
      console.log(result);
      let allImgsHtml = "";
      result.forEach((listscreenshots) => {
        allImgsHtml =
          allImgsHtml + `<img src="${listscreenshots.screenshotUrl}"/>`;
      });
      document.getElementById("allImgs").innerHTML = allImgsHtml;
    } catch (error) {
      console.error(error);
    }

    //Delete screenshot
    let result = { _id: "someId" };

    const deletebtn = document.getElementById("deletebutton");
    deletebtn.addEventListener("click", function () {
      const idInput = document.getElementById("idInput").value;
      deletescreenshots(idInput, result);
    });

    async function deletescreenshots(idInput, result) {
      if (result._id == idInput) {
        const deleteUrl = `https://crudcrud.com/api/${env.apiToken}/${idInput}`;

        const options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const response = await fetch(deleteUrl, options);
          const deleteresult = await response.json();
          console.log(deleteresult);
          document.getElementById("allImgs").innerHTML = allImgsHtml;
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
}
