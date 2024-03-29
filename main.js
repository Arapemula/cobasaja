$(window).on("scroll", muncul);

function muncul() {
  let elements = $(".konten");
  for (let i = 0; i < elements.length; i++) {
    let tinggilayar = window.innerHeight;
    let jarakatas = elements[i].getBoundingClientRect().top;
    let ukuranscroll = 150;

    if (jarakatas < tinggilayar - ukuranscroll) {
      elements[i].classList.add("visible");
    } else {
      elements[i].classList.remove("visible");
    }
  }
}

$(document).ready(function() {
  var pictures = $(".materi .picture");
  var currentPictureIndex = 0;
  pictures.not(":first").hide(); // sembunyikan semua elemen .picture kecuali yang pertama

  $(".next").on("click", function() {
      $(pictures[currentPictureIndex]).animate({left: '-100%'}, 500, 'linear', function() {
          $(this).hide();
      }); // sembunyikan elemen .picture saat ini dengan animasi slide
      currentPictureIndex++; // pindah ke elemen .picture berikutnya
      $(pictures[currentPictureIndex]).show().css('left', '100%').animate({left: '0'}, 500, 'linear'); // tampilkan elemen .picture berikutnya dengan animasi slide
      updateButtons();
  });

  $(".before").on("click", function() {
      $(pictures[currentPictureIndex]).animate({left: '100%'}, 500, 'linear', function() {
          $(this).hide();
      }); // sembunyikan elemen .picture saat ini dengan animasi slide
      currentPictureIndex--; // pindah ke elemen .picture sebelumnya
      $(pictures[currentPictureIndex]).show().css('left', '-100%').animate({left: '0'}, 500, 'linear'); // tampilkan elemen .picture sebelumnya dengan animasi slide
      updateButtons();
  });

  function updateButtons() {
      $(".before").toggle(currentPictureIndex > 0); // sembunyikan tombol "before" jika ini adalah gambar pertama
      $(".next").toggle(currentPictureIndex < pictures.length - 1); // sembunyikan tombol "next" jika ini adalah gambar terakhir
  }

  updateButtons();
});


const coba = $("#isi");
const side = $(".btn-navbar");

side.click(function(){
  if(coba.css("width") == "0px"){
    coba.css('display','block')
    coba.animate({
      width: '25vw' 
    }, "slow");
  }else{
    coba.animate({
      width: 'toggle' 
    }, "slow");
  }

})




