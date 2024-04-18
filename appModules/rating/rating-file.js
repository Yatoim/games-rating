const fs = require("fs").promises;

/**
 * path — путь к файлу
 * array — список игр
 */
async function makeRatingFile(path, array) {
  fs.readFile(path, "utf8", (err, ratingFile) => {
    if (err) {
        console.log(err)
        return
    }
 const ratingArray = JSON.parse(ratingFile)
  array.forEach((item) => {
    // Если в ratingArray ещё нет игры с таким id,
    if (!ratingArray.find((el) => el.id === item.id)) {
      let obj = {
        id: item.id,
        title: item.title,
        image: item.image,
        link: item.link,
        description: item.description,
        rating: 0,
      };
      // добавляем её к уже существующему списку игр
      ratingArray.push(obj);
    }
  });
fs.writeFile(path, JSON.stringify(ratingArray), () => {
console.log("Файл записан!")
  })
});
}
module.exports = makeRatingFile;