/* CDN -> <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script> */

/* MOSTRAR INFORMACION DE PAQUETES */

$(".pck-grid-card").click(function(){
  if($(this).hasClass("pck-card-inactive")){
    $(".pck-card-active").toggleClass("pck-card-active pck-card-inactive");
    $(this).toggleClass("pck-card-active pck-card-inactive");
  } else{
  if($(this).hasClass("pck-card-active")){
    $(this).toggleClass("pck-card-active pck-card-inactive");
  };
};
});

