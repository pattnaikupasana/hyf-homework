const url =
  "https://www.reddit.com/r/Unexpected/comments/137af2q/when_your_costume_is_ten_levels_above_the_others.json";

const fetchDataFromReddit = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

fetchDataFromReddit();

/*The console output gives result with an object containing a mix of string, number, and array properties.
 */
