


var carBookingData = JSON.parse(localStorage.getItem('carServiceObj'));

console.log(carBookingData);

fetch(`https://api.zoomcar.com/v5/bookings/checkout?platform=web&version=2&device_id=000&device_name=000&country_code=IND&locale=en&city=bhopal`, {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "auth-token": "as5QZXLrW39JZxCDAHgL",
      "content-type": "application/json",
      "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site"
    },
    "referrer": "https://www.zoomcar.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `{\"booking_params\":{\"car_id\":${carBookingData.car_id},\"cargroup_id\":${carBookingData.cargroup_id},\"pricing_id\":\"${carBookingData.pricing_id}\",\"search_experiments\":[\"UNLIMITED_KMS\",\"FOMO_MESSAGE\",\"STRIKETHROUGH\"],\"lat\":23.221885,\"lng\":77.438338,\"city\":\"bhopal\",\"location_id\":\"${carBookingData.location_id}\",\"starts\":1656817200000,\"ends\":1656846000000,\"addon_params\":{},\"searched_address\":\"${carBookingData.search_addr}\",\"first_call\":true}}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  }).then(res => res.json()).then(data =>{
    
    {

    
    console.log(data)
    console.log(data.trip_details.car.car_info)
    
    
    
    var carmaindiv = document.createElement('div');
    carmaindiv.classList ='carmaindiv';

    var carnamediv = document.createElement('div');
    carnamediv.classList = 'carnamediv';

    var carnameh3 = document.createElement('h3');
    carnameh3.innerText = data.trip_details.car.car_name;
    
    var carnamebox = document.createElement('div');
    carnamebox.classList = 'carnamebox';

    var carnameinfobox1 = document.createElement('p');
    var carnameinfobox2 = document.createElement('p');
    var carnameinfo1 = document.createElement('p');
    var carnameinfo2 = document.createElement('p');
    var carimginfo1 = document.createElement('img');
    var carimginfo2 = document.createElement('img');
    
    carnamebox.style.display = 'flex';
    carnamebox.style.width = '100%';
    carnamebox.style.height = '10px';
    carnameinfobox1.style.display = 'flex';
    carnameinfobox1.style.width = '100%';
    carnameinfobox1.style.height = '10px';
    carnameinfobox2.style.display = 'flex';
    carnameinfobox2.style.width = '100%';
    carnameinfobox2.style.height = '10px';
    
    carimginfo1.src = `${data.trip_details.car.car_info[0].img}`
    carimginfo1.style.width = '18px'
    carimginfo1.style.height = '18px'
    
    carimginfo2.src = `${data.trip_details.car.car_info[1].img}`
    carimginfo2.style.width = '18px'
    carimginfo2.style.height = '18px'
    
    carnameinfo1.innerText = `${data.trip_details.car.car_info[0].name}`
    carnameinfo2.innerText = `${data.trip_details.car.car_info[1].name}`
    
    carnameinfo1.style.marginTop = '-4px';
    carnameinfo1.style.marginLeft = '4px';
    carnameinfo2.style.marginTop = '-4px';
    carnameinfo2.style.marginLeft = '4px';
    
    carnameinfobox1.append(carimginfo1, carnameinfo1);
    carnameinfobox2.append(carimginfo2, carnameinfo2);
    carnameinfobox1.classList = "ads"
    carnameinfobox2.classList = "sd"
    carnamebox.append(carnameinfobox1, carnameinfobox2);
    carnamediv.append(carnameh3, carnamebox);
    
    
    
    var carimgdiv = document.createElement('div');
    carimgdiv.classList = "carimgdiv";
    var img = document.createElement('img');
    img.src = data.trip_details.car.car_img;
    img.style.width = '100%'
    carimgdiv.append(img);
    
    carmaindiv.append(carnamediv, carimgdiv);
    document.querySelector('.car-checkout-main').append(carmaindiv);
  }

  {
    
    var newDate1 = new Date(data.trip_details.trip.pickup_date);
    var newDate2 = new Date(data.trip_details.trip.dropoff_date);
    var date1 = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'medium' }).format(newDate1)
    var date2 = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'medium' }).format(newDate2)


    document.querySelector('.car-checkout-main').addEventListener('scroll', function dada(){

      var carheaddiv = document.createElement('div');
      carheaddiv.classList = 'carheaddiv';
      var carheadh4 = document.createElement('h4');
      carheadh4.innerText = carnameh3.innerText;
      var carheadp1 = document.createElement('p');
      carheadp1.innerText = "🔵" + date1 +" 🔴" + date2;
      // var carheadp2 = document.createElement('p');
      // carheadp2.innerText = "🔴" + date2;
      carheaddiv.append(carheadh4, carheadp1);
      document.querySelector('.car-checkout-nav').append(carheaddiv);
      console.log(carnameh3.innerText)
      document.querySelector('.car-checkout-main').removeEventListener("scroll", dada, false)
    });


    var cartimediv = document.createElement('div');
    cartimediv.classList = 'cartimediv';
    var cartimediv1 = document.createElement('div');
    cartimediv1.classList = 'cartimediv1'
    var cartimep1 = document.createElement('p');
    cartimep1.innerText = '.🔵. ' + date1;
    // cartimep1.style.color = 'green'
    var carnagarp1 = document.createElement('p');
    carnagarp1.innerText = data.trip_details.trip.pickup_location;
    carnagarp1.style.fontSize = '16px'
    carnagarp1.style.color = 'gray'
    cartimediv1.append(cartimep1, carnagarp1)
    
    var cartimediv2 = document.createElement('div');
    cartimediv2.classList = 'cartimediv2'
    var cartimep2 = document.createElement('p');
    cartimep2.innerText = '.🔴.   '+ date2;
    // cartimep2.style.color = 'red'
    var carnagarp2 = document.createElement('p');
    carnagarp2.innerText = data.trip_details.trip.dropoff_location;
    carnagarp2.style.fontSize = '16px'
    carnagarp2.style.color = 'gray'

    
    var cartimediv3 = document.createElement('div');
    cartimediv3.classList = 'cartimediv3'
    var cartimep3 = document.createElement('p');
    cartimep3.innerText = data.trip_details.trip.trip_info[0].header;
    var carimgp3 = document.createElement('img');
    carimgp3.src = data.trip_details.trip.trip_info[0].img;
    carimgp3.style.width = '25px'
    cartimediv3.append(carimgp3 , cartimep3)

    var cartimediv4 = document.createElement('div');
    cartimediv4.classList = 'cartimediv4'
    var cartimep4 = document.createElement('p');
    cartimep4.innerText = data.trip_details.trip.trip_info[1].header;
    var carimgp4 = document.createElement('img');
    carimgp4.src = data.trip_details.trip.trip_info[1].img;
    carimgp4.style.width = '25px'
    cartimediv4.append(carimgp4 , cartimep4)
    
    var cartimediv5 = document.createElement('div');
    cartimediv5.innerText = data.trip_details.trip.location_disclaimer;
    cartimediv5.classList = 'cartimediv5';


    cartimediv2.append(cartimep2, carnagarp2, cartimediv3, cartimediv4, cartimediv5)

  }
  
  
  {

  
  var carprotectdiv =document.createElement('div');
  carprotectdiv.classList = 'carprotectdiv';

  var carprotecth1 =document.createElement('h3');
  carprotecth1.innerText = data.sections[0].header;

  var carprotectdiv2 =document.createElement('div');
  carprotectdiv2.classList = 'carprotectdiv2'

  var carstanderdiv1 = document.createElement('div');
  carstanderdiv1.classList = 'carstanderdiv1';

  var carstanderimg = document.createElement('img');
  carstanderimg.src = data.sections[0].items[0].img;
  carstanderimg.style.width = '30px'
  carstanderimg.style.height = '30px'
  var carstanderpay = document.createElement('div');
  var carstanderp1 = document.createElement('p');
  carstanderp1.innerText = data.sections[0].items[0].header;
  var carstanderp2 = document.createElement('p');
  carstanderp2.innerText = data.sections[0].items[0].sub_header
  var carstanderh5 = document.createElement('h5');
  carstanderh5.innerText = data.sections[0].items[0].tag;
  carstanderpay.append(carstanderp1, carstanderp2, carstanderh5);

  carstanderdiv1.append(carstanderimg, carstanderpay);

  // var carstanderdiv2 = document.createElement('div');
  var carstanderinput = document.createElement('input');
  // carstanderinput.value = false;
  carstanderinput.setAttribute('type', 'radio');

  carprotectdiv2.append(carstanderdiv1, carstanderinput);

  }


{
  var carprotectdiv3 =document.createElement('div');
  carprotectdiv3.classList = 'carprotectdiv3'
  var carminddiv1 = document.createElement('div');
  carminddiv1.classList = 'carminddiv1';
  var carmindimg = document.createElement('img');
  carmindimg.src = data.sections[0].items[1].img;
  carmindimg.style.width = '30px';
  carmindimg.style.height = '30px';
  var carmindpay = document.createElement('div');
  var carmindp1 = document.createElement('p');
  carmindp1.innerText = data.sections[0].items[1].header;
  var carmindp2 = document.createElement('p');
  carmindp2.innerText = data.sections[0].items[1].sub_header
  carmindpay.append(carmindp1, carmindp2);

  carminddiv1.append(carmindimg, carmindpay);
  var carmindinput = document.createElement('input');
  carmindinput.setAttribute('type', 'radio');
  carprotectdiv3.append(carminddiv1, carmindinput);
  carprotectdiv.append(carprotecth1 ,carprotectdiv2, carprotectdiv3)

}
  
{
  var carworkdiv = document.createElement('div');
  carworkdiv.classList = 'carworkdiv';
  var carworkheading = document.createElement('h5');
  carworkheading.innerText = data.sections[0].items[2].header;
  var carworkp = document.createElement('p');
  carworkp.innerText =data.sections[0].items[2].sub_header;
  carworkdiv.append(carworkheading, carworkp);

}



var carpolicidiv = document.createElement('div');
carpolicidiv.classList = 'carpolicidiv';
var carkeeph5 =  document.createElement('h3');
// carkeeph5.style.
carkeeph5.innerText = data.sections[1].header;

var carlicensediv =  document.createElement('div');
carlicensediv.classList = 'carlicensediv';
var carlicenseimg =  document.createElement('img');
carlicenseimg.src = data.sections[1].items[0].img;
carlicenseimg.style.width = '33px'
carlicenseimg.style.height = '33px'
var carlicensetext =  document.createElement('p');
carlicensetext.innerText = data.sections[1].items[0].header;
carlicensediv.append(carlicenseimg, carlicensetext);
carpolicidiv.append(carkeeph5, carlicensediv)

cartimediv.append(cartimediv1, cartimediv2);
document.querySelector('.car-checkout-main').append(cartimediv, carprotectdiv, carworkdiv, carpolicidiv);


var carallpolicy = data.sections[1].items.map((newdata, i) =>{
  console.log(newdata)
  if(i==0){
    return ;
  }
  var carpolicidiv1 =  document.createElement('div');
  carpolicidiv1.classList = 'carpolicidiv1';
  var carpoliciimg =  document.createElement('img');
  carpoliciimg.src = newdata.img;
  carpoliciimg.style.width = '33px'
  carpoliciimg.style.height = '33px'
  var carpolicibox =  document.createElement('div');
  var carpoliciheading =  document.createElement('p');
  carpoliciheading.innerText = newdata.header;
  var carpolicip =  document.createElement('p');
  carpolicip.innerText = newdata.sub_header;
  var carpolicia =  document.createElement('a');
  carpolicia.innerText = newdata.info.text;
  carpolicia.href = newdata.info.metadata.url;
  carpolicibox.append(carpoliciheading, carpolicip, carpolicia);
  carpolicidiv1.append(carpoliciimg, carpolicibox);
  carpolicidiv.append(carpolicidiv1);
  carpolicidiv.style.marginTop = '60px'
  document.querySelector('.car-checkout-main').append(carpolicidiv);
})
var divdiv = document.createElement('div');
divdiv.style.height = "280px"
document.querySelector('.car-checkout-main').append(divdiv);

});

console.log("Yes Final");


























// fetch("https://api.zoomcar.com/v5/bookings/checkout?platform=web&version=2&device_id=000&device_name=000&country_code=IND&locale=en&city=bhopal", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-US,en;q=0.9",
//     "auth-token": "as5QZXLrW39JZxCDAHgL",
//     "content-type": "application/json",
//     "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-site"
//   },
//   "referrer": "https://www.zoomcar.com/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body":`{\"booking_params\":{\"car_id\":${carBookingData.car_id},\"cargroup_id\":${carBookingData.cargroup_id},\"pricing_id\":\"${carBookingData.pricing_id}\",\"search_experiments\":[\"UNLIMITED_KMS\",\"FOMO_MESSAGE\",\"STRIKETHROUGH\"],\"lat\":\"23.2599333\",\"lng\":\"77.412615\",\"city\":\"bhopal\",\"location_id\":\"${carBookingData.location_id}\",\"starts\":1656817200000,\"ends\":1656846000000,\"addon_params\":{},\"searched_address\":\"${carBookingData.search_addr}\",\"first_call\":true}}`,
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "omit"
// }).then(res => res.json()).then(data => console.log(data));



