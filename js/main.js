var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
  console.log(this.readyState, xhttp.status);
  if (this.readyState === 4 && this.status === 200) {
    let response  = JSON.parse(this.response)
    for (i in response){
      console.log(response[i])
    }
  }
}

xhttp.open('GET', "https://ajaxkode.firebaseio.com/posts.json")
xhttp.send()

