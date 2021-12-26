const axios = require("axios");
const cheerio = require("cheerio");

const getHTML = async () => {
  try {
    return await axios.get(
      "https://www.ministrybooks.org/alphabetical.cfm?s=all"
    );
  } catch (err) {
    console.log(err);
  }
};

const parsing = async () => {
  const html = await getHTML();
  const $ = cheerio.load(html.data);
  const $table = $("tr");
  console.log($table);
  $table.each((idx, node) => {
    const title = $(node).find("a").text();
    console.log(title);
  });
};

parsing();
