const carobj = fetch("https://api.zoomcar.com/v6/search?platform=web&version=2&device_id=000&device_name=000&starts_epoch=1656817200000&ends_epoch=1656846000000&city=bhopal&bracket=no_fuel&zap=true&type=round_trip&country_code=IND&locale=en&lat=23.2599333&lng=77.412615", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://www.zoomcar.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
}).then(res => res.json()).then(data => data.sections[0].cards.map((cardata, i)=>{


  console.log(cardata);
  console.log(data);
  function display(cardata){

  
  if(cardata.type == 'INFO'){
    var car = document.createElement('div');
    car.classList = 'car';
    var cartext = document.createElement('div');
    cartext.classList = "cartext";
    var carimg = document.createElement('div');
    carimg.classList = "carimg"
    var image = document.createElement('img');
    image.src = `${cardata.info_data.image}`;
    image.classList = 'carimage';
    carimg.append(image);
    var h5 = document.createElement('h4');
    h5.innerText = `${cardata.info_data.header}`;
    var pera = document.createElement('p');
    
    pera.innerText = `${cardata.info_data.sub_header}`;
    pera.classList = "pera";
    cartext.append(h5, pera);
    car.append(carimg, cartext);
    document.querySelector('.book-overflow').append(car);
    return ;
  }
  
  
  
  
  var car = document.createElement('div');
  car.classList = 'car';
  
  var carleft = document.createElement('div');
  carleft.classList = 'carleft';
  var carimage = document.createElement('img');
  // console.log(data.sections[0].cards)
  carimage.src = `${cardata.car_data.url_large}`
  carimage.style.width = '90%'
  carimage.style.margin = '5px'
  carleft.append(carimage);
  
  var carright = document.createElement('div');
  carright.classList = 'carright';
  var carrightpart1 = document.createElement('div');
  var carname = document.createElement('h3');
  carname.innerText = `${cardata.car_data.brand} ${cardata.car_data.name} `
  var carType = document.createElement('p');
  carType.innerText = `${cardata.car_data.accessories.map((ele) => " "+ele)} `
  carType.style.color = 'gray';
  var rateimg = document.createElement('img');
  var carRate = document.createElement('p');
  var carRatebox = document.createElement('p');
  carRatebox.style.display = 'flex';
  carRatebox.style.width = '100%';
  carRatebox.style.height = '10px';
  rateimg.src = `${cardata.car_data.rating.icon_url}`
  rateimg.style.width = '10px'
  rateimg.style.height = '10px'
  carRate.innerText = `${cardata.car_data.rating.text}`
  carRate.style.marginTop = '-4px';
  carRate.style.marginLeft = '4px';
  carRatebox.append(rateimg, carRate)
  carrightpart1.append(carname, carType, carRatebox);
  
  var carrightpart2 = document.createElement('div');
  var dist = document.createElement('p');
  dist.innerText = `${cardata.car_data.location.text}`
  dist.style.backgroundColor = 'rgb(242, 242, 242)'
  carrightpart2.append(dist);
  
  var carrightpart3 = document.createElement('div');
  carrightpart3.style.height = '100%'
  var pay = document.createElement('h1');
  pay.innerText = `${cardata.car_data.pricing.payable_amount}`
  var bookbtn = document.createElement('button');
  bookbtn.innerText = "BOOK NOW";
  bookbtn.style.marginTop = '40px'
  bookbtn.style.marginBottom = '10px'
  bookbtn.style.padding = '16px 32px'
  bookbtn.style.backgroundColor = 'white'
  bookbtn.style.border = '1px solid green'
  carrightpart3.append(pay, bookbtn);
  // console.log(cardata);
  bookbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    var carobj = {
      car_id: cardata.car_data.car_id,
      cargroup_id: cardata.car_data.cargroup_id,
      pricing_id: cardata.car_data.pricing.id,
      location_id: cardata.car_data.location.id,
      search_addr: cardata.car_data.location.text
    }
    
    // console.log(cardata.car_data.location.id);
    localStorage.setItem('carServiceObj', JSON.stringify(carobj));
    
    window.location.href = 'carBookingPage.html';
  })
  
  carright.append(carrightpart1, carrightpart2, carrightpart3);
  car.append(carleft, carright);
  document.querySelector('.book-overflow').append(car);
}

display(cardata);


document.querySelector('.book-5').addEventListener('click', ()=>{
  if(i == 0){
    document.querySelector('.book-5').style.backgroundColor = 'green'
    document.querySelector('.book-5').style.color = 'white'
    document.querySelector('.book-7').style.backgroundColor = 'white'
    document.querySelector('.book-7').style.color = 'black'
    document.querySelector('.book-overflow').innerHTML = "";
  }
  if(cardata.car_data?.accessories[2] == '5 Seats'){
    console.log(cardata.car_data?.accessories[2]);
    display(cardata);
  }
})
document.querySelector('.book-7').addEventListener('click', ()=>{
  if(i == 0){
    document.querySelector('.book-5').style.color = 'black'
    document.querySelector('.book-5').style.backgroundColor = 'white'
    document.querySelector('.book-7').style.backgroundColor = 'green'
    document.querySelector('.book-7').style.color = 'white'
    document.querySelector('.book-overflow').innerHTML = "";
  }
    if(cardata.car_data?.accessories[2] == '7 Seats'){
      console.log(cardata.car_data?.accessories[2]);
      display(cardata);
    }
})

document.querySelector('.book-ts-m').addEventListener('click', ()=>{
  if(i == 0){
    document.querySelector('.book-ts-m').style.backgroundColor = 'green'
    document.querySelector('.book-ts-m').style.color = 'white'
    document.querySelector('.book-ts-a').style.backgroundColor = 'white'
    document.querySelector('.book-ts-a').style.color = 'black'
    document.querySelector('.book-overflow').innerHTML = "";
  }
  if(cardata.car_data?.accessories[0] == 'Manual'){
    console.log(cardata.car_data?.accessories[2]);
    display(cardata);
  }
})

document.querySelector('.book-ts-a').addEventListener('click', ()=>{
  if(i == 0){
    document.querySelector('.book-ts-m').style.color = 'black'
    document.querySelector('.book-ts-m').style.backgroundColor = 'white'
    document.querySelector('.book-ts-a').style.backgroundColor = 'green'
    document.querySelector('.book-ts-a').style.color = 'white'
    document.querySelector('.book-overflow').innerHTML = "";
  }
    if(cardata.car_data?.accessories[0] == 'Automatic'){
      console.log(cardata.car_data?.accessories[2]);
      display(cardata);
    }
  })
  // console.log(cardata)

document.querySelector('.book-dt-hd').addEventListener('click', ()=>{
  if(i == 0){
    document.querySelector('.book-dt-hd').style.backgroundColor = 'green'
    document.querySelector('.book-dt-hd').style.color = 'white'
    document.querySelector('.book-dt-ap').style.backgroundColor = 'white'
    document.querySelector('.book-dt-ap').style.color = 'black'
    document.querySelector('.book-overflow').innerHTML = "";
  }
  if(cardata.car_data?.location?.distance <= 5){
    display(cardata);
  }
})

document.querySelector('.book-dt-ap').addEventListener('click', ()=>{
  if(i == 0){
    document.querySelector('.book-dt-hd').style.color = 'black'
    document.querySelector('.book-dt-hd').style.backgroundColor = 'white'
    document.querySelector('.book-dt-ap').style.backgroundColor = 'green'
    document.querySelector('.book-dt-ap').style.color = 'white'
    document.querySelector('.book-overflow').innerHTML = "";
  }
    if(cardata.car_data?.location?.distance > 5){
      display(cardata);
    }
})
document.querySelector('.book-dt-hd').addEventListener('click', ()=>{
  if(i == 0){
    document.querySelector('.book-dt-hd').style.backgroundColor = 'green'
    document.querySelector('.book-dt-hd').style.color = 'white'
    document.querySelector('.book-dt-ap').style.backgroundColor = 'white'
    document.querySelector('.book-dt-ap').style.color = 'black'
    document.querySelector('.book-overflow').innerHTML = "";
  }
  if(cardata.car_data?.location?.distance <= 5){
    display(cardata);
  }
})

document.querySelector('.book-carType-hb').addEventListener('click', ()=>{
  if(i == 0){
    document.querySelector('.book-carType-suv').style.color = 'black'
    document.querySelector('.book-carType-suv').style.backgroundColor = 'white'
    document.querySelector('.book-carType-s').style.color = 'black'
    document.querySelector('.book-carType-s').style.backgroundColor = 'white'
    document.querySelector('.book-carType-hb').style.backgroundColor = 'green'
    document.querySelector('.book-carType-hb').style.color = 'white'
    document.querySelector('.book-overflow').innerHTML = "";
  }
    if(cardata.car_data?.location?.distance > 15){
      display(cardata);
    }
})
document.querySelector('.book-carType-suv').addEventListener('click', ()=>{
  if(i == 0){
    document.querySelector('.book-carType-suv').style.backgroundColor = 'green'
    document.querySelector('.book-carType-suv').style.color = 'white'
    document.querySelector('.book-carType-hb').style.backgroundColor = 'white'
    document.querySelector('.book-carType-hb').style.color = 'black'
    document.querySelector('.book-carType-s').style.backgroundColor = 'white'
    document.querySelector('.book-carType-s').style.color = 'black'
    document.querySelector('.book-overflow').innerHTML = "";
  }
  if(cardata.car_data?.location?.distance <= 4){
    display(cardata);
  }
})

document.querySelector('.book-carType-s').addEventListener('click', ()=>{
  if(i == 0){
    document.querySelector('.book-carType-suv').style.color = 'black'
    document.querySelector('.book-carType-suv').style.backgroundColor = 'white'
    document.querySelector('.book-carType-hb').style.color = 'black'
    document.querySelector('.book-carType-hb').style.backgroundColor = 'white'
    document.querySelector('.book-carType-s').style.backgroundColor = 'green'
    document.querySelector('.book-carType-s').style.color = 'white'
    document.querySelector('.book-overflow').innerHTML = "";
  }
    if(cardata.car_data?.location?.distance > 5){
      display(cardata);
    }
})





})
);



  







fetch("https://api.zoomcar.com/v6/search?platform=web&version=2&device_id=000&device_name=000&starts_epoch=1656817200000&ends_epoch=1656846000000&city=bhopal&bracket=no_fuel&zap=true&type=round_trip&country_code=IND&locale=en&seater=7&lat=23.2599333&lng=77.412615", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://www.zoomcar.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
});