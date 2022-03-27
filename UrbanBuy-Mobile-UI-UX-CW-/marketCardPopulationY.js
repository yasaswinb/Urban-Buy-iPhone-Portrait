let favorites = ['1','3','5','6'];

let itemIdChosenToRate = 0;

//introductory page load
 setTimeout(function () {
   $("#Page1").ready(function () {
     $("body > div#Page1 > div.ui-content > a.ui-link")[0].click();

   // $("body > div#Page1 > div.ui-content > a.ui-link")[0].click();
   // console.log($('body > div#Page1 > div.ui-content > a.ui-link').children());
 });
 }, 1000);

// $(document).bind("mobileinit", function () {
//   // Make your jQuery Mobile framework configuration changes here!

//   $.mobile.allowCrossDomainPages = true;
// });

let marketPlaceCardDetails = [
  {
    id: 1,
    name: "PS4",
    imagePath: "images/market_place_icons/ps4.png",
    imagePath1: "images/playstationImages/ps4image1.png",
    imagePath2: "images/playstationImages/ps4image2.png",
    imagePath3: "images/playstationImages/ps4image3.png",
    price: 400,
    isFavourite: true,
    rating: 5,
    cssStyling: "",
    quantity: 0,
    curQuantity: 0,
    cartStat: false,
    pricePurchased: 400,
  },
  {
    id: 2,
    name: "TV",
    imagePath: "images/market_place_icons/tv.png",
    imagePath1: "images/tv/tv1.png",
    imagePath2: "images/tv/tv2.webp",
    imagePath3: "images/tv/tv3.png",
    price: 1200,
    isFavourite: false,
    rating: 4,
    cssStyling: "",
    quantity: 5,
    curQuantity: 0,
    cartStat: false,
    pricePurchased: 1200,
  },
  {
    id: 3,
    name: "Nintendo",
    imagePath: "images/market_place_icons/nintendo.png",
    imagePath1: "images/nintendo/nintendo1.png",
    imagePath2: "images/nintendo/nintendo2.png",
    imagePath3: "images/nintendo/nintendo3.png",
    price: 400,
    isFavourite: true,
    rating: 3,
    cssStyling: "",
    quantity: 6,
    curQuantity: 0,
    cartStat: false,
    pricePurchased: 400,
  },
  {
    id: 4,
    name: "iWatch",
    imagePath: "images/market_place_icons/Iwatch.png",
    imagePath1: "images/iWatch/iWatch1.png",
    imagePath2: "images/iWatch/iWatch2.png",
    imagePath3: "images/iWatch/iWatch3.png",
    price: 400,
    isFavourite: false,
    rating: 5,
    cssStyling: "",
    quantity: 7,
    curQuantity: 0,
    cartStat: false,
    pricePurchased: 400,
  },
  {
    id: 5,
    name: "MacBook",
    imagePath: "images/market_place_icons/mac.png",
    imagePath1: "images/macbook/macbook1.png",
    imagePath2: "images/macbook/macbook2.webp",
    imagePath3: "images/macbook/macbook3.png",
    price: 1200,
    isFavourite: true,
    rating: 3,
    cssStyling: "",
    quantity: 8,
    curQuantity: 1,
    cartStat: true,
    pricePurchased: 1200,
  },
  {
    id: 6,
    name: "Speakers",
    imagePath: "images/market_place_icons/speakers.png",
    imagePath1: "images/speakers/speakers1.png",
    imagePath2: "images/speakers/speakers2.png",
    imagePath3: "images/speakers/speakers3.png",
    price: 1500,
    isFavourite: false,
    rating: 3,
    cssStyling: "",
    quantity: 9,
    curQuantity: 0,
    cartStat: false,
    pricePurchased: 1500,
  },
];

// function myFunction(x) {
//         x.classList.toggle("bi bi-heart-fill");
//     }

// $(document).ready(function () {
//   $("i[id*=favProd]").click(function () {
//     // console.log($(this).attr('id'));

//     if ($(this).hasClass("bi-heart")) {
//       favorites.push($(this).attr("id"));
//       $(this).removeClass("bi-heart");
//       $(this).addClass("bi-heart-fill");
//     } else {
//       favorites.pop(favorites.indexOf($(this).attr("id")));
//       $(this).removeClass("bi-heart-fill");
//       $(this).addClass("bi-heart");
//     }

//     console.log(favorites);
//   });
// });

// select favourites on load
// $(window).on("load", function () {
//     console.log(favorites);
//   for (let favItem of favorites) {
//     $(`i#${favItem}`).removeClass("bi-heart");
//     $(`i#${favItem}`).addClass("bi-heart-fill");
//     console.log(favItem);
//   }
// });

//new

$(document).ready(function () {
  //market place
  // for(let i=1; i<=marketPlaceCardDetails.length; i++){
  let iterator = 0;
  let rowNumberToAppendCard = $(
    "div#Page3 > div.ui-content > div.container"
  ).children().length;
  // $("div#Page3 > div.ui-content > div.container > div.row:nth-child(3)").after(` <div class="row mt-4 px-1 text-center"> </div>`);
  for (let item of marketPlaceCardDetails) {
    if (iterator + 1 == 1) {
      rowNumberToAppendCard = $(
        "div#Page3 > div.ui-content > div.container"
      ).children().length;
      $(
        `div#Page3 > div.ui-content > div.container > div.row:nth-child(${rowNumberToAppendCard})`
      ).after(`
                <div class="row mt-4 px-1 text-center"> </div>
            `);
    }
    addMarketCardToRow(rowNumberToAppendCard + 1, item);
    //columns are decided
    iterator = (iterator + 1) % 2;
  }

  marketPlaceFavouriteToggle();

  // toggleColorOfFavouriteIconOfSpecificPoIPage();

  // ratingInOrderHistory();

  //   $("div#Page5").ready(function () {
  //     addCardsToCart();
  //     ratingInOrderHistory();
  //     checkWhichItemNeededToBeRated();
  //   });
});

function addMarketCardToRow(rowNumber, item){
    $(`div#Page3 > div.ui-content > div.container > div.row:nth-child(${rowNumber})`).append(`

    <div class="col-6 card mx-1 shadow bg-white market-cards" style="width: 18rem;">
        <div class="card-body" style="padding: 7% 1% 1% 0%;">
            <div class="row text-center">
                <div class="col-12 text-right favouriteArea${item.id}">
                    </div>
            </div>
            <div class="row text-center" id="FavrtPOI${item.id}" itemId="${item.id}" onclick= "goToPage('#Page4', '')">
                <img src="${item.imagePath}" class="card-img-top mx-3 image-resolution" alt="...">
            </div>
            <h5 class="card-title" onclick="goToPage('#Page4', '')">${item.name}</h5>
                <div class="row text-center" onclick="goToPage('#Page4', '')">
                    <div class="col-5">
                        <p style="color: #707070;">$${item.price}</p>
                    </div>
                    <div class="col-7 ratingAreaOf${item.id}">
                    </div>
                </div>
        </div>
    </div>

    `);

    if(item.isFavourite == true){
        $(`div.favouriteArea${item.id}`).append(`
            <i id="hIcon${item.id}" class="bi bi-heart-fill" itemId="${item.id}"></i>
        `);
    }else{
        $(`div.favouriteArea${item.id}`).append(`
            <i id="hIcon${item.id}" class="bi bi-heart" itemId="${item.id}"></i>
        `);
    }

    for(let i=1; i<=5; i++){
        if(i<=item.rating){
            $(`div.ratingAreaOf${item.id}`).append(`
                <i class="bi bi-star-fill"></i>
            `);
        }else{
            $(`div.ratingAreaOf${item.id}`).append(`
                <i class="bi bi-star"></i>
            `);
        }

    }

}

function marketPlaceFavouriteToggle(){
    $('i[id*=hIcon]').click(function () {

        // console.log($(this).attr('id'));

        let itmId = $(this).attr("itemId");

        objIndex = marketPlaceCardDetails.findIndex((obj) => obj.id == itmId);

        if ($(this).hasClass('bi-heart')) {
            marketPlaceCardDetails[objIndex].isFavourite = true;
            // favorites.push($(this).attr("itemId"));
            $(this).removeClass('bi-heart');
            $(this).addClass('bi-heart-fill');
        } else {

              removeFavCards();
              marketPlaceCardDetails[objIndex].isFavourite = false;
              favlistCard();
            
            $(`i#hIcon${$(this).attr("itemId")}`).removeClass("bi-heart-fill");
            $(`i#hIcon${$(this).attr("itemId")}`).addClass("bi-heart");

            // favorites.pop(favorites.indexOf($(this).attr('itemId}"')))
            $(this).removeClass('bi-heart-fill');
            $(this).addClass('bi-heart');
        }

        // console.log(favorites);
    });
}

    $(document).ready(function () {
      //favorite list
      let iteratorFav = 0;
      let rowNumberToAppendCardFav = $("div#Page2 > div.ui-content > div.container").children().length;
      // $("div#Page2 > div.ui-content > div.container > div.row:nth-child(2)").after(`<div class="row mt-4 px-1 text-center"> </div>`);

        // console.log($("div#Page2 > div.ui-content > div.container").children().html());

      let favouritesCardPopulationArray = marketPlaceCardDetails.filter((itm) => itm.isFavourite == true);

      for (let itemFav of favouritesCardPopulationArray) {
        if (iteratorFav + 1 == 1) {
          rowNumberToAppendCardFav = $(
            "div#Page2 > div.ui-content > div.container"
          ).children().length;
          $(
            `div#Page2 > div.ui-content > div.container > div.row:nth-child(${rowNumberToAppendCardFav})`
          ).after(`
                    <div class="row mt-4 px-1 text-center"> </div>
                `);
        }
        addFavouriteCardToRow((rowNumberToAppendCardFav+1), itemFav);
        //columns are decided
        iteratorFav = (iteratorFav + 1) % 2;
      }
      favListFavouriteToggle();

      // toggleColorOfFavouriteIconOfSpecificPoIPage();

      // ratingInOrderHistory();

      //   $("div#Page5").ready(function () {
      //     addCardsToCart();
      //     ratingInOrderHistory();
      //     checkWhichItemNeededToBeRated();
      //   });
    });

    function favlistCard(){

        removeFavCards();

       //favorite list
       let iteratorFav = 0;
       let rowNumberToAppendCardFav = $("div#Page2 > div.ui-content > div.container").children().length;
      //  $("div#Page2 > div.ui-content > div.container > div.row:nth-child(2)").after(`<div class="row mt-4 px-1 text-center"> </div>`);

       let favouritesCardPopulationArray = marketPlaceCardDetails.filter(
         (itm) => itm.isFavourite == true
       );

       for (let itemFav of favouritesCardPopulationArray) {
         if (iteratorFav + 1 == 1) {
           rowNumberToAppendCardFav = $(
             "div#Page2 > div.ui-content > div.container"
           ).children().length;
           $(
             `div#Page2 > div.ui-content > div.container > div.row:nth-child(${rowNumberToAppendCardFav})`
           ).after(`
                    <div class="row mt-4 px-1 text-center"> </div>
                `);
         }
         
         addFavouriteCardToRow((rowNumberToAppendCardFav+1), itemFav);
         //columns are decided
         iteratorFav = (iteratorFav + 1) % 2;
       }
       favListFavouriteToggle();

      //  toggleColorOfFavouriteIconOfSpecificPoIPage();

       // ratingInOrderHistory();

       //   $("div#Page5").ready(function () {
       //     addCardsToCart();
       //     ratingInOrderHistory();
       //     checkWhichItemNeededToBeRated();
       //   });


}

function removeFavCards(){

      //  console.log($("div#Page2 > div.ui-content > div.container").children().length);

        let rowSizeOfFavListSize = Number($("div#Page2 > div.ui-content > div.container").children().length);

        for (let i=2; i <= rowSizeOfFavListSize; i++){
            // console.log("remove row number" + i);
             $("div#Page2 > div.ui-content > div.container > div.row:nth-child(3)").remove();
        }
        
            setTimeout(function () {
                // $("div#Page2 > div.ui-content > div.container > div.row:nth-child(2)").remove();
            }, 200);

}

function addFavouriteCardToRow(rowNumber, item){
    $(`div#Page2 > div.ui-content > div.container > div.row:nth-child(${rowNumber})`).append(`

    <div class="col-6 card mx-1 shadow bg-white market-cards" style="width: 18rem;">
        <div class="card-body" style="padding: 7% 1% 1% 0%;">
            <div class="row text-center">
                <div class="col-12 text-right favouriteListArea${item.id}">
                    </div>
            </div>
            <div  class="row text-center" onclick="goToPOIFromFav('${item.id}')">
                <img src="${item.imagePath}" class="card-img-top mx-3 image-resolution" alt="...">
            </div>
            <h5 class="card-title" onclick="goToPOIFromFav('${item.id}')">${item.name}</h5>
                <div class="row text-center" onclick="goToPOIFromFav('${item.id}')">
                    <div class="col-5">
                        <p style="color: #707070;">$${item.price}</p>
                    </div>
                    <div class="col-7 ratingAreaOfFavList${item.id}">
                    </div>
                </div>
        </div>
    </div>

    `);

    if(item.isFavourite == true){
        $(`div.favouriteListArea${item.id}`).append(`
            <i id="hIconFavList${item.id}" class="bi bi-heart-fill" itemId="${item.id}"></i>
        `);
    }else{
        $(`div.favouriteListArea${item.id}`).append(`
            <i id="hIconFavList${item.id}" class="bi bi-heart" itemId="${item.id}"></i>
        `);
    }

    for(let i=1; i<=5; i++){
        if(i<=item.rating){
            $(`div.ratingAreaOfFavList${item.id}`).append(`
                <i class="bi bi-star-fill"></i>
            `);
        }else{
            $(`div.ratingAreaOfFavList${item.id}`).append(`
                <i class="bi bi-star"></i>
            `);
        }

    }
}

 function favListFavouriteToggle() {

   $("i[id*=hIconFavList]").click(function () {

     let itmId = $(this).attr("itemId");

     objIndex = marketPlaceCardDetails.findIndex((obj) => obj.id == itmId);

     if ($(this).hasClass("bi-heart")) {
       //if block triggers when toggle on none favourite icons

       //market place icon removing
       marketPlaceCardDetails[objIndex].isFavourite = true;
       $(`i#hIcon${$(this).attr("itemId")}`).removeClass("bi-heart");
       $(`i#hIcon${$(this).attr("itemId")}`).addClass("bi-heart-fill");

       $(this).removeClass("bi-heart");
       $(this).addClass("bi-heart-fill");
     } else {
       //else block triggers when toggle on favourite icons

       removeFavCards();
       marketPlaceCardDetails[objIndex].isFavourite = false;
       favlistCard();
        // $("div#Page2 > div.ui-content > div.container > div.row:nth-child(3)").remove();
       //   setTimeout(function () {
       //     favlistCard();
       //   }, 800);

       //market place icon removing
       $(`i#hIcon${$(this).attr("itemId")}`).removeClass("bi-heart-fill");
       $(`i#hIcon${$(this).attr("itemId")}`).addClass("bi-heart");

       $(this).removeClass("bi-heart-fill");
       $(this).addClass("bi-heart");
     }

   });
 }

 function emailFav(){
   
   let favouritelist = marketPlaceCardDetails.filter((itm) => itm.isFavourite == true);

   if(favouritelist.length > 0){
    $("body > div#Page2 >  div.ui-content > a[id=favEmailPopupTrigger].ui-link")[0].click();
   }else{
      // $("body > div#Page2 >  div.ui-content > a[id=favEmailSuccessPopupTrigger].ui-link")[0].click();
      // $("#msg").empty().prepend("Unsucessfull");
      
    $("body > div#Page2 >  div.ui-content > a[id=shareFavBtnFailPopupTrigger].ui-link")[0].click();
   }
  
 }

 function emailSubmit(email){  
   var favList = [];  

  let favouritelist = marketPlaceCardDetails.filter((itm) => itm.isFavourite == true);

  if (validateEmail(email) == true && email != '') {
    //formatting the favourite list
    for (let item of favouritelist) {
      let FavList = {
        PRODUCT: item.name,
        PRICE: item.price,
      };

      favList.push(FavList);
    }

    favList = JSON.stringify(favList, null, "\t");
    Email.send({
      Host: "smtp.gmail.com",
      Username: "urbanbuySriLanka@gmail.com",
      Password: "urbanbuySriLanka123",
      To: `${email}`,
      From: "urbanbuySriLanka@gmail.com",
      Subject: "Urbanbuy Favourite List",
      Body: `${favList}`,
    }).then((message) => {
      if (message.includes("OK")){
         $("div#Page2 > div#emailFavPopup-popup > div#emailFavPopup > a")[0].click();
        setTimeout(function () {
          $("body > div#Page2 >  div.ui-content > a[id=favEmailSuccessPopupTrigger].ui-link")[0].click();
        }, 200);
      }else{
        $("div#Page2 > div#emailFavPopup-popup > div#emailFavPopup > a")[0].click();
        setTimeout(function () {
          $("body > div#Page2 >  div.ui-content > a[id=eventFailMailPopupTrigger].ui-link")[0].click();
        }, 200);
      }
    //  console.log(message);
      $("#emailFav").val("");
    });
  } else {
    $("div#Page2 > div#emailFavPopup-popup > div#emailFavPopup > a")[0].click();
    setTimeout(function () {
      $("body > div#Page2 >  div.ui-content > a[id=eventFailPopupTrigger].ui-link")[0].click();
    }, 200);
    $("#emailFav").val("");
  }
 
 }

  function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
  }

//  POI favourite functionalities
   $(document).ready(function () {

    //the clicked item from market place trigger
    $('div[id*=FavrtPOI]').click(function () {
      // window.location.href = "#Page4";

        setTimeout(function () {
           window.scrollTo(0, 0);
        }, 800);
     
      // console.log($(this).attr("itemId"));
      let fvitmId = $(this).attr("itemId");

      toggleColorOfFavouriteIconOfSpecificPoIPage(fvitmId);

      sessionStorage.setItem("currentPOIItem", fvitmId);
    })

  });

function toggleColorOfFavouriteIconOfSpecificPoIPage(POIItemID){
  
  $(document).ready(function () {

    // POI specific details loading
    objIndex = marketPlaceCardDetails.findIndex((obj) => obj.id == POIItemID);

    let name = marketPlaceCardDetails[objIndex].name;
    $(`div#POIName`).empty().prepend(`${name}`);

    let imagePath1 = marketPlaceCardDetails[objIndex].imagePath1;
    let imagePath2 = marketPlaceCardDetails[objIndex].imagePath2;
    let imagePath3 = marketPlaceCardDetails[objIndex].imagePath3;
    $("#imagePath1").attr("src", `${imagePath1}`);
    $("#imagePath2").attr("src", `${imagePath2}`);
    $("#imagePath3").attr("src", `${imagePath3}`);

    let price = marketPlaceCardDetails[objIndex].price;
    $("#POIPrice").empty().prepend(`${price}$`);

    let rating = marketPlaceCardDetails[objIndex].rating;

    let quantity = marketPlaceCardDetails[objIndex].quantity;
    $("#POIQunatity").empty().prepend(`${quantity} items`);

    // initial load of POI heart Icon
    $("i#POIFav").removeClass("bi-heart-fill");
    $("i#POIFav").removeClass("bi-heart");

    if (marketPlaceCardDetails[objIndex].isFavourite == true) {
      $("i#POIFav").addClass("bi-heart-fill");
    } else {
      $("i#POIFav").addClass("bi-heart");
    }

    $("div#specificPoIFavouriteIcon > i").unbind().click(function () {
        if ($("i#POIFav").hasClass("bi-heart")) {
          marketPlaceCardDetails[objIndex].isFavourite = true;

          $(`i#hIcon${POIItemID}`).removeClass("bi-heart");
          $(`i#hIcon${POIItemID}`).addClass("bi-heart-fill");

          $("i#POIFav").removeClass("bi-heart");
          $("i#POIFav").addClass("bi-heart-fill");
        } else {
          marketPlaceCardDetails[objIndex].isFavourite = false;
          //market place icon removing
          $(`i#hIcon${POIItemID}`).removeClass("bi-heart-fill");
          $(`i#hIcon${POIItemID}`).addClass("bi-heart");

          $("i#POIFav").removeClass("bi-heart-fill");
          $("i#POIFav").addClass("bi-heart");
        }
      });
  });
}

// cart functionalities (all time loading document ready)
  $(document).ready(function () {
    
      // initial load of people also buy heart Icon
      $("i#hIconFavPeopList1").removeClass("bi-heart-fill");
      $("i#hIconFavPeopList1").removeClass("bi-heart");

      if (marketPlaceCardDetails[0].isFavourite == true) {
        $("i#hIconFavPeopList1").addClass("bi-heart-fill");
      } else {
        $("i#hIconFavPeopList1").addClass("bi-heart");
      }

      // initial load of POI heart Icon
      $("i#hIconFavPeopList2").removeClass("bi-heart-fill");
      $("i#hIconFavPeopList2").removeClass("bi-heart");

      if (marketPlaceCardDetails[1].isFavourite == true) {
        $("i#hIconFavPeopList2").addClass("bi-heart-fill");
      } else {
        $("i#hIconFavPeopList2").addClass("bi-heart");
      }

      favListPepopToggle();
      addCardsToCart();
      cartCalculations();

// click function for cart
    $("div[id*=cartPg]").click(function () {

      // console.log(orderHistory);

      // console.log(marketPlaceCardDetails);

      window.location.href = "#Page5";

      // initial load of people also buy heart Icon
      $("i#hIconFavPeopList1").removeClass("bi-heart-fill");
      $("i#hIconFavPeopList1").removeClass("bi-heart");

      if (marketPlaceCardDetails[0].isFavourite == true) {
        $("i#hIconFavPeopList1").addClass("bi-heart-fill");
      } else {
        $("i#hIconFavPeopList1").addClass("bi-heart");
      }

      // initial load of POI heart Icon
      $("i#hIconFavPeopList2").removeClass("bi-heart-fill");
      $("i#hIconFavPeopList2").removeClass("bi-heart");

      if (marketPlaceCardDetails[1].isFavourite == true) {
        $("i#hIconFavPeopList2").addClass("bi-heart-fill");
      } else {
        $("i#hIconFavPeopList2").addClass("bi-heart");
      }

      favListPepopToggle();

      cartCalculations();

      window.scrollTo(0, 0);

      // addCardsToCart();
    });
  });

 function favListPepopToggle() {
   
   $("i[id*=hIconFavPeopList]").unbind().click(function () {
     let itmId = $(this).attr("itemId");
     objIndex = marketPlaceCardDetails.findIndex((obj) => obj.id == itmId);

     if ($(this).hasClass("bi-heart")) {
       //if block triggers when toggle on none favourite icons

       //market place icon removing
       marketPlaceCardDetails[objIndex].isFavourite = true;
       $(`i#hIcon${$(this).attr("itemId")}`).removeClass("bi-heart");
       $(`i#hIcon${$(this).attr("itemId")}`).addClass("bi-heart-fill");

       $(this).removeClass("bi-heart");
       $(this).addClass("bi-heart-fill");
     } else {
       //else block triggers when toggle on favourite icons
       marketPlaceCardDetails[objIndex].isFavourite = false;

       //market place icon removing
       $(`i#hIcon${$(this).attr("itemId")}`).removeClass("bi-heart-fill");
       $(`i#hIcon${$(this).attr("itemId")}`).addClass("bi-heart");

       $(this).removeClass("bi-heart-fill");
       $(this).addClass("bi-heart");
     }
   });
 }

function goToPage(link, item) {
  //remove #Page4 onclick items
    window.location.href = link;
    window.scrollTo(0, 0);
  //console.log(JSON.parse(decodeURIComponent(item)));
}

function goToPOIFromFav(itemId){

    let fvitmId = itemId;

    toggleColorOfFavouriteIconOfSpecificPoIPage(fvitmId);

    sessionStorage.setItem("currentPOIItem", fvitmId);

     window.location.href = "#Page4";

     setTimeout(function () {
       window.scrollTo(0, 0);
     }, 800);
}

function goToPagePeopleAlsoBuy(link, item) {
  window.location.href = link;
  window.scrollTo(0, 0);
  toggleColorOfFavouriteIconOfSpecificPoIPage(item);
}

function addCardsToCart(){
    let childPositionIncrementer = 2;

    for(let item of marketPlaceCardDetails){

      if(item.cartStat == true){

        $(
          `div#Page5 > div.ui-content > div.container > div:nth-child(${childPositionIncrementer})`
        ).after(`
            <div class="row my-2" style="padding: 0% 4% 0% 4%;">
                <div class="col-12 card shadow-sm cart-cards">
                    <div class="card-body row">
                        <div class="col-4">
                            <img class="w-100" src="${item.imagePath}" alt="">
                        </div>
                        <div class="col-8">
                        
                         <div class="row">
                            <div class="col-6 text-left" style="padding-left: 3%;"><h5>${item.name}</h5></div>
                             </div>

                            <div class="row mt-1">
                                <div class="col-6 text-left" style="font-size: initial;">Quantity <br>
                                <div class="row">
                                  <img src="./images/Cart/plusIcon.png" alt="" style="height: 15%; margin-top: 4%;" onclick="increase(${item.id})"> <span class="mx-4" style="margin-top:3%">${item.curQuantity}</span> <img src="./images/Cart/minusIcon.png" alt=""  onclick="decrease(${item.id})">
                                 </div>
                                </div>
                                <div class="col-6"></div>
                            </div>
                            <div class="row mt-1">
                                <div class="col-5 text-right" style="font-size: large;">${item.price}$</div>
                                <div class="col-2 text-center" style="font-size: x-large;"><b>|</b></div>
                                <div class="col-5 text-left" style="font-size: large; color: #00C569;" onclick ="removeCartItem(${item.id})">Remove</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
        childPositionIncrementer++;
      }
    }

}

function removeCartItem(itemId){

  objIndex = marketPlaceCardDetails.findIndex((obj) => obj.id == itemId);

  marketPlaceCardDetails[objIndex].cartStat = false;
  marketPlaceCardDetails[objIndex].curQuantity = 0;

  // console.log(marketPlaceCardDetails);

  let cartLength = $(`div#Page5 > div.ui-content > div.container`).children().length;

  for(let i = 1; i<= Number(cartLength-6); i++){
    $(`div#Page5 > div.ui-content > div.container > div:nth-child(3)`).remove();
  }

  addCardsToCart();
  cartCalculations();
  
}

function removeFullCart(){

  let cartLength = $(`div#Page5 > div.ui-content > div.container`).children().length;

  for(let i = 1; i<= Number(cartLength-6); i++){
    $(`div#Page5 > div.ui-content > div.container > div:nth-child(3)`).remove();
  }
  
}

function addCartItem(){
  let currentPOI = sessionStorage.getItem("currentPOIItem");
   objIndex = marketPlaceCardDetails.findIndex((obj) => obj.id == currentPOI);
   if (marketPlaceCardDetails[objIndex].quantity >0){
      marketPlaceCardDetails[objIndex].cartStat = true;
      marketPlaceCardDetails[objIndex].curQuantity = 1;
      // console.log(marketPlaceCardDetails);
      removeFullCart();
      addCardsToCart();
      cartCalculations();
      window.scrollTo(0, 0);
      $("body > div#Page4 >  div.ui-content > a[id=cartSuccessPopupTrigger].ui-link")[0].click();
   }else{
     $("body > div#Page4 >  div.ui-content > a[id=cartUnSuccessPopupTrigger].ui-link")[0].click();
   }
  

}

function addCartItemPOI(){
  let currentPOI = sessionStorage.getItem("currentPOIItem");
   objIndex = marketPlaceCardDetails.findIndex((obj) => obj.id == currentPOI);
   if (marketPlaceCardDetails[objIndex].quantity > 0) {
     marketPlaceCardDetails[objIndex].cartStat = true;
     marketPlaceCardDetails[objIndex].curQuantity = 1;
    //  console.log(marketPlaceCardDetails);
     removeFullCart();
     addCardsToCart();
     cartCalculations();

     window.location.href = "#Page5";
     //scroll on top of the page
     window.scrollTo(0, 0);
   } else {
     $("body > div#Page4 >  div.ui-content > a[id=cartUnSuccessPopupTrigger].ui-link")[0].click();
   }
  
}

  function increase(id) {

    objIndex = marketPlaceCardDetails.findIndex((obj) => obj.id == id);

     let curQuantity = marketPlaceCardDetails[objIndex].curQuantity;

     if(Number(curQuantity) !=0 && (Number(curQuantity) < Number(marketPlaceCardDetails[objIndex].quantity))){
      curQuantity = Number(curQuantity) + 1;
      marketPlaceCardDetails[objIndex].curQuantity = curQuantity;

      marketPlaceCardDetails[objIndex].pricePurchased = Number(curQuantity) * Number(marketPlaceCardDetails[objIndex].price);
     }else{
        $("body > div#Page5 >  div.ui-content > a[id=eventFailCartPopupTrigger].ui-link")[0].click();
     }

     removeFullCart();
     addCardsToCart();
     cartCalculations();
  }

  function decrease(id) {

    objIndex = marketPlaceCardDetails.findIndex((obj) => obj.id == id);

     let curQuantity = marketPlaceCardDetails[objIndex].curQuantity;

     if(Number(curQuantity) !=0 && Number(curQuantity) > 1){
      curQuantity = Number(curQuantity) - 1;
      marketPlaceCardDetails[objIndex].curQuantity = curQuantity;

      marketPlaceCardDetails[objIndex].pricePurchased = Number(curQuantity) * Number(marketPlaceCardDetails[objIndex].price);
     }else{
       $("body > div#Page5 >  div.ui-content > a[id=eventFailCartPopupTrigger].ui-link")[0].click();
      //  alert("exceed the limit");
     }

     removeFullCart();
     addCardsToCart();
     cartCalculations();
  }

function cartCalculations(){
  //according to additions and cart added status the calculations will be done here
    let totalPrc = 0;
    let counter = 0;
  for(let item of marketPlaceCardDetails){
    // marketPlaceCardDetails.filter((itm) => itm.isFavourite == true);
    if(item.cartStat == true){
     totalPrc = totalPrc + Number(item.curQuantity)*Number(item.price);
     counter++;
    }
  }

   $(`div#TotalPrc > h4`).empty().prepend(`${totalPrc}$`);

  let deliveryCharge = 15;
  let discountPerc = 10;
  if(counter == 0){
    deliveryCharge = 0;
    discountPerc = 0;
  }


  $(`div#deliverChg > h4`).empty().prepend(`${deliveryCharge}$`);

 
  $(`div#discountPerc > h4`).empty().prepend(`${discountPerc}%`);

  let FinalPrice = Number(totalPrc) -(Number(totalPrc) * (Number(discountPerc)/100)) + Number(deliveryCharge);
  //storing in session storage
  sessionStorage.setItem("finalPrice", FinalPrice);
  sessionStorage.setItem("deliveryCharge", deliveryCharge);
  sessionStorage.setItem("discountPerc", discountPerc);
  $(`div#FinalPrc > h4`).empty().prepend(`${FinalPrice}$`);
}

function cartCalculationsOrderHistory(){
  //according to additions and cart added status the calculations will be done here
    let totalPrc = 0;
    let counter = 0;
  for(let item of marketPlaceCardDetails){
    // marketPlaceCardDetails.filter((itm) => itm.isFavourite == true);
    if(item.cartStat == true){
     totalPrc = totalPrc + Number(item.curQuantity)*Number(item.price);
     counter++;
    }
  }

   $(`div#TotalPrcHistory > h4`).empty().prepend(`${totalPrc}$`);

  let deliveryCharge = 15;
  let discountPerc = 10;
  if(counter == 0){
    deliveryCharge = 0;
    discountPerc = 0;
  }


  $(`div#deliverChgHistory > h4`).empty().prepend(`${deliveryCharge}$`);

 
  $(`div#discountPercHistory > h4`).empty().prepend(`${discountPerc}%`);

  let FinalPrice = Number(totalPrc) -(Number(totalPrc) * (Number(discountPerc)/100)) + Number(deliveryCharge);
  $(`div#FinalPrcHistory > h4`).empty().prepend(`${FinalPrice}$`);
}

function checkout(){

  window.location.href = "#Page7";
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 800);
  
}

 jQuery(function ($) {
   
   //this will grab booking form
   var $form = $("#chkForm");
   //iniialise checkout form
   var handler = StripeCheckout.configure({
     key: "pk_test_cp21BcECf4kMMUbSlRlZlsMo",
     token: function (token) {
       // Use the token to create the charge with a server-side script.
       // You can access the token ID with `token.id`

       //This will be printed when the transaction is successful. To charge, server side scripting is required.
       if (token.id) {

        //after purchase is success
         cartCalculationsOrderHistory();

          let cartList = marketPlaceCardDetails.filter((itm) => itm.cartStat == true);
          orderHistory.length = 0;

          for (let item of cartList) {

             let orderHistoryItem = {
               itemId: `${item.id}`,
               imagePath: `${item.imagePath}`,
               itemName: `${item.name}`,
               pricePurchased: `${item.pricePurchased}`,
               quantity: `${item.curQuantity}`,
               comments: [],
               ratingGiven: 0,
             };

             orderHistory.push(orderHistoryItem);

            objIndex = marketPlaceCardDetails.findIndex((obj) => obj.id == item.id);
            let qty = Number(marketPlaceCardDetails[objIndex].quantity);
            marketPlaceCardDetails[objIndex].quantity = qty - Number(marketPlaceCardDetails[objIndex].curQuantity);
            marketPlaceCardDetails[objIndex].cartStat = false;
            marketPlaceCardDetails[objIndex].curQuantity = 0;
           
          }

          removeFullOrderHistory();
          addCardsToOrderHistory();

           removeFullCart();
           addCardsToCart();

           ratingInOrderHistory();
           checkWhichItemNeededToBeRated();

          handler.close();
         $("body > div#Page7 >  div.ui-content > .container > a[id=checkoutSuccessPopupTrigger].ui-link")[0].click();
         $("#chkForm").trigger("reset");
         
       }
     },
   });

   $("#customButton").on("click", function (e) {

    let string_validations = /^[a-zA-Z ]*$/;
    let mobileNumber_validation = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    let zip_validation = /[0-9]*/;
     
    if ($('input[name="rb"]:checked').val() == "card"){
      if (
        $("input#user_name").val() != "" &&
        $("input#address_ln1").val() != "" &&
        $("input#address_ln2").val() != "" &&
        $("input#address_ln3").val() != "" &&
        $("input#mobileNum").val() != "" &&
        $("input#zip").val() != "" &&
        $('input[name="rb"]:checked').val() == "card" &&
        string_validations.test($("input#user_name").val()) &&
        mobileNumber_validation.test($("input#mobileNum").val()) &&
        zip_validation.test($("input#zip").val())
      ) {
        // Code Section B  Open Checkout with further options
        let lastPrice = sessionStorage.getItem("finalPrice");
        handler.open({
          name: "Enter your details",
          currency: "usd",
          //  description: $("#user_name").val(),
          amount: Number(`${lastPrice}`) * 100,
        });
        handler.close();
      } else {
        $("body > div#Page7 >  div.ui-content > .container > a[id=checkoutFailPopupTrigger].ui-link")[0].click();
      }
    }
    else if($('input[name="rb"]:checked').val() == "cash"){
       if (
        $("input#user_name").val() != "" &&
        $("input#address_ln1").val() != "" &&
        $("input#address_ln2").val() != "" &&
        $("input#address_ln3").val() != "" &&
        $("input#mobileNum").val() != "" &&
        $("input#zip").val() != "" &&
        $('input[name="rb"]:checked').val() == "cash"&&
        string_validations.test($("input#user_name").val()) &&
        mobileNumber_validation.test($("input#mobileNum").val()) &&
        zip_validation.test($("input#zip").val())
      ) {

         //after purchase is success
          cartCalculationsOrderHistory();

          let cartList = marketPlaceCardDetails.filter((itm) => itm.cartStat == true);
          orderHistory.length = 0;

          for (let item of cartList) {

             let orderHistoryItem = {
               itemId: `${item.id}`,
               imagePath: `${item.imagePath}`,
               itemName: `${item.name}`,
               pricePurchased: `${item.pricePurchased}`,
               quantity: `${item.curQuantity}`,
               comments: [],
               ratingGiven: 0,
             };

             orderHistory.push(orderHistoryItem);

            objIndex = marketPlaceCardDetails.findIndex((obj) => obj.id == item.id);
            let qty = Number(marketPlaceCardDetails[objIndex].quantity);
            marketPlaceCardDetails[objIndex].quantity = qty - Number(marketPlaceCardDetails[objIndex].curQuantity);
            marketPlaceCardDetails[objIndex].cartStat = false;
            marketPlaceCardDetails[objIndex].curQuantity = 0;
           
          }

          removeFullOrderHistory();
          addCardsToOrderHistory();

           removeFullCart();
           addCardsToCart();

           ratingInOrderHistory();
           checkWhichItemNeededToBeRated();

        $("body > div#Page7 >  div.ui-content > .container > a[id=checkoutSuccessPopupTrigger].ui-link")[0].click();
         $("#chkForm").trigger("reset");

        // console.log(marketPlaceCardDetails);
        
      } else {
        $("body > div#Page7 >  div.ui-content > .container > a[id=checkoutFailPopupTrigger].ui-link")[0].click();
      }
    }
     e.preventDefault();
   });

   // Code Section C  Close Checkout on page navigation
   $(window).on("popstate", function () {
     handler.close();
   });
 });

//Order history

$("#Page8").ready(function () {
  cartCalculationsOrderHistory();
  addCardsToOrderHistory();
});

let orderHistory = [
  {
      itemId:5,
      imagePath:'images/market_place_icons/mac.png',
      itemName:'MacBook',
      pricePurchased:1200,
      quantity:1,
      comments:[],
      ratingGiven:0
  }
];


function ratingInOrderHistory() {
  $("i[id^=rating]").click(function () {
    let noOfStarsRated = $(this).attr("value");

    for (let i = 1; i <= 5; i++) {
      if (i <= noOfStarsRated) {
        if ($(`i#rating${i}`).hasClass("bi-star")) {
          $(`i#rating${i}`).removeClass("bi-star");
          $(`i#rating${i}`).addClass("bi-star-fill");
        }
      } else {
        if ($(`i#rating${i}`).hasClass("bi-star-fill")) {
          $(`i#rating${i}`).removeClass("bi-star-fill");
          $(`i#rating${i}`).addClass("bi-star");
        }
      }
    }
  });
}

function addCardsToOrderHistory() {
  let childPositionIncrementer = 2;
  for (let item of orderHistory) {
    $(
      `div#Page8 > div.ui-content > div.container > div:nth-child(${childPositionIncrementer})`
    ).after(`
            <div class="row my-2" style="padding: 0% 4% 0% 4%;">
                <div class="col-12 card shadow-sm cart-cards">
                    <div class="card-body row">
                        <div class="col-4">
                            <img class="w-100" src="${item.imagePath}" alt="">
                        </div>
                        <div class="col-8">
                        
                         <div class="row">
                            <div class="col-6 text-left" style="padding-left: 3%;"><h5>${item.itemName}</h5></div>
                             <div class="col-6 text-right" style="font-size: larger;">
                                <a href="#ratingPopup" id="orderHistoryItem${item.itemId}" itemId="${item.itemId}" data-rel="popup" data-position-to="window" data-transition="fade" style="color: #00C569; font-weight: unset;">Rate</a>
                            </div>
                          </div>

                            <div class="row mt-1">
                                <div class="col-6 text-left" style="font-size: initial;">Quantity <br>
                                <p class="text-center">${item.quantity}</p>
                                </div>
                                <div class="col-6"></div>
                            </div>
                            <div class="row mt-1">
                                <div class="col-5 text-right" style="font-size: large;">${item.pricePurchased}$</div>
                                <div class="col-2 text-center" style="font-size: x-large;"><b>|</b></div>
                                <div class="col-5 text-left" style="font-size: large; color: #00C569; padding-right: 1%;">Comment</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    childPositionIncrementer++;
  }
}

function removeFullOrderHistory(){

  let cartLength = $(`div#Page8 > div.ui-content > div.container`).children().length;

  for(let i = 1; i<= Number(cartLength-5); i++){
    $(`div#Page8 > div.ui-content > div.container > div:nth-child(3)`).remove();
  }
  
}

function checkWhichItemNeededToBeRated() {
  $("a[id*=orderHistoryItem]").click(function () {
    itemIdChosenToRate = $(this).attr("itemId");
  });
}

function onRateSubmit() {
  let ratingCount = 0;
  for (let i = 1; i <= 5; i++) {
    if ($(`i#rating${i}`).hasClass("bi-star-fill")) {
      ratingCount++;
    }
  }

  //Find index of specific object using findIndex method.
  objIndex = orderHistory.findIndex((obj) => obj.itemId == itemIdChosenToRate);

  orderHistory[objIndex].ratingGiven = ratingCount;

  // console.log("ratingGiven : "+orderHistory[objIndex].ratingGiven);

  $("div#Page5 > div#ratingPopup-popup > div#ratingPopup > a")[0].click();

  setTimeout(function () {
    $("div#Page5 > a[id=ratingSuccessPopupTrigger].ui-link")[0].click();
    resetCurrentRating();
    // console.log($('div#Page5 > a.ui-link').html());
  }, 200);
}  