
//---------------------------------  menu is active  -------------------------------------
  var menu = $(".menu td");

menu.click(function() {
    menu.removeClass("highlight");
    $(this).addClass("highlight");
});

//------------------------------------- ancor ---------------------------------------------
  // Cache selectors
var lastId,
 topMenu = $(".menu"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("highlight")
         .end().filter("[href='#"+id+"']").parent().addClass("highlight");
   }                   
});

//----------------------------------- text info ----------------------------------------


var more;

function readF() {
  if (more) {
    $(more).css("display", "none");
  }
  more = document.getElementsByClassName("more-" + arguments[0]);

  //let moreInfo = document.getElementsByClassName("more-info-" +  arguments[0]);
    if ($(more).css('display') === 'none') {
      $(more).css("display", "block");
    }

  }

//-------------------------------- lang ---------------------------------------------

$(document).ready(function(){
  $('.select').change(function(){
    window.location.href = $(this).val();
  });
});