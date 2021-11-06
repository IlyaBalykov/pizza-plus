const renderItems = (data) => {
  data.forEach((value) => {
    console.log(value);
  })
}
fetch('https://pizza-plus-ec2fe-default-rtdb.firebaseio.com/db/partners.json')
  .then((response) => response.json())
  .then((data) => {
    renderItems(data)
  })
  .catch((error) => {
    console.log(error);
  })