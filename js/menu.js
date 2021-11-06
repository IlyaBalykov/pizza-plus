const renderItems = (data) => {
  data.forEach((value) => {
    console.log(value);
  })
}
fetch(`./db/partners.json`)
  .then((response) => response.json())
  .then((data) => {
    renderItems(data)
  })
  .catch((error) => {
    console.log(error);
  })