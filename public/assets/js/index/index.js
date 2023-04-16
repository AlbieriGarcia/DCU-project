$(document).ready(function(){

  // Filtro
 $(".category-item").on("click", function(){
  var selectedCategories = [];
  $(".category-item:checked").each(function(){
    var cat = $(this).attr("category");
    selectedCategories.push(cat);
  });
  console.log(selectedCategories);

  // ocultar libros
  $('.book-item').hide();

  // mostrar categorías seleccionadas
  if (selectedCategories.length == 0) {
    $('.book-item').show();
  } else {
    selectedCategories.forEach(function(cat){
      $('.book-item[category="'+cat+'"]').show();
    });
  }
});

})

//arreglar esto