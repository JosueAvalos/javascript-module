var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  console.log('state', this.readyState, xhttp.status);
  if (this.readyState === 4 && this.status === 200){
      let objRes = JSON.parse(this.response)
      //console.log(objRes);
      for(i in objRes){
        //console.log(objRes[i])
        handlerResponse(objRes[i]);
        console.log(card)
        document.getElementById("container").innerHTML += card
      }
  }
}
xhttp.open("GET", "https://ajaxkode.firebaseio.com/posts.json");
xhttp.send();
const handlerResponse = (response) => {
  /*console.log(response)
  var parent = document.getElementById('container')
  response.forEach(({ element, text }) => {
    let node = document.createElement(element)
    node.innerText = text
    parent.appendChild(node)
  });*/
  //console.log(response);
  card = `
  <div class="card-deck">
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src=${response.img} alt="Card image cap">
  <div class="card-body">
  <h5 class="card-title">${response.title}</h5>
  <p class="card-text">${response.description}</p>
  </div>
  </div>
  </div>
  `
  return card;
}
