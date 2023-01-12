// let thambnailAll = document.querySelectorAll(".thambnail ul li");


// thambnailAll.forEach((thambnail) => {
//         thambnail.addEventListener("mouseenter", ()=> {
//             thambnail.parentElement.parentElement.parentElement.classList.add("alalalla")
//         })
//         thambnail.addEventListener("mouseleave", ()=> {
//             thambnail.parentElement.parentElement.parentElement.classList.remove("alalalla")
//         })
// })
        
    // let top_collection_itemAll = document.querySelectorAll(".top_collection_item");
    // let top_collection_itemArr = Array.from(top_collection_itemAll);

    // top_collection_itemArr.map(element => {
    //     element.addEventListener("mouseenter", ()=> {
    //         //save big images
    //     var $bigItem = $('.display img');
    //     //save small images
    //         var $smallItem = $('.thambnail ul li');
    //     //save color circles
    //         var $color = $('.colors span');
    //     //click and moseenter function on small image
    //     //you could delete one eventlistener
    //     $smallItem.on('click mouseenter', function () {
    //       //remove active class from all items
    //         $bigItem.removeClass('active');
    //         $smallItem.removeClass('active');
    //       //add active class to item as small item's index
    //         $bigItem.eq($(this).index()).addClass('active');
    //         $smallItem.eq($(this).index()).addClass('active');
    //         console.log($bigItem.eq($(this).index()));
    //     });
  
    //     $color.on('click', function () {
    //       //remove active class from all items
    //         $bigItem.removeClass('active');
    //         $smallItem.removeClass('active');
    //       //add active class to item as small item's index
    //         $bigItem.eq($(this).index()).addClass('active');
    //         $smallItem.eq($(this).index()).addClass('active');
    //     });
    //     })
    // });

// ========================
$(document).ready(function () {
    // Slider start
    $(".product_slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    })
    // Slider end
  
    var $bigItem_1 = $('.top_collection_item-1 .display img'); //save big images
    var $smallItem_1 = $('.top_collection_item-1 .thambnail ul li');//save small images
    
    var $bigItem_2 = $('.top_collection_item-2 .display img'); //save big images
    var $smallItem_2 = $('.top_collection_item-2 .thambnail ul li');//save small images
    
    var $bigItem_3 = $('.top_collection_item-3 .display img'); //save big images
    var $smallItem_3 = $('.top_collection_item-3 .thambnail ul li');//save small images
    
    var $bigItem_4 = $('.top_collection_item-4 .display img'); //save big images
    var $smallItem_4 = $('.top_collection_item-4 .thambnail ul li');//save small images
    //save small images
    //save color circles
    var $color_1 = $('.top_collection_item-1 .colors span');
    var $color_2 = $('.top_collection_item-2 .colors span');
    var $color_3 = $('.top_collection_item-3 .colors span');
    var $color_4 = $('.top_collection_item-4 .colors span');
    // ====================  Item 01 start  ========================//

    //click and moseenter function on small image
    //you could delete one eventlistener
      $smallItem_1.on('click mouseenter', function () {
        //remove active class from all items
          $bigItem_1.removeClass('active');
          $smallItem_1.removeClass('active');
        //add active class to item as small item's index
          $bigItem_1.eq($(this).index()).addClass('active');
          $smallItem_1.eq($(this).index()).addClass('active');
      });

      $color_1.on('click', function () {
        //remove active class from all items
          $bigItem_1.removeClass('active');
          $smallItem_1.removeClass('active');
        //add active class to item as small item's index
          $bigItem_1.eq($(this).index()).addClass('active');
          $smallItem_1.eq($(this).index()).addClass('active');
      });
      // ====================  Item 01 end  ========================//
  
    // ====================  Item 02 start  ========================//
    //you could delete one eventlistener
      $smallItem_2.on('click mouseenter', function () {
        //remove active class from all items
          $bigItem_2.removeClass('active');
          $smallItem_2.removeClass('active');
        //add active class to item as small item's index
          $bigItem_2.eq($(this).index()).addClass('active');
          $smallItem_2.eq($(this).index()).addClass('active');
      });

      $color_2.on('click', function () {
        //remove active class from all items
          $bigItem_2.removeClass('active');
          $smallItem_2.removeClass('active');
        //add active class to item as small item's index
          $bigItem_2.eq($(this).index()).addClass('active');
          $smallItem_2.eq($(this).index()).addClass('active');
      });
      // ====================  Item 01 end  ========================//
    
   });