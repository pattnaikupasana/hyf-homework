const button = document.getElementById("clickButton");
button.addEventListener("click", async function () {
  const textArea = document.getElementById("textAreaMessage").value;
  try {
    await sentimentalAnalyzer(textArea);
  } catch (error) {
    console.log(error);
  }
});

const sentimentalAnalyzer = async (textArea) => {
  const url = `https://twinword-sentiment-analysis.p.rapidapi.com/analyze/?text=${textArea}&rapidapi-key=e0c2cb79bfmsh74450775b975ec4p1c874bjsn3cbd7fc871e3`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    switch (data.type) {
      case "positive":
        $(".alert-success, .happy, .ti-face-smile").css(
          "visibility",
          "visible"
        );
        break;
      case "negative":
        $(".alert-primary, .sad, .ti-face-sad").css("visibility", "visible");
        break;
      case "neutral":
        $(".alert-info, .neutral, .ti-flickr-alt").css("visibility", "visible");
        break;
    }
  } catch (error) {
    throw new Error("Failed to analyze sentiment");
  }
};
