/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace()
}())


$('#folderBtn').click(()=>{
  let navbarBrand = $('#navbarBrand');
  let sidebar = $('#sidebarMenu');
  let mainContenct = $("#mainContenct");
  if(sidebar.hasClass('fold-side-bar')){
      // 展开
      sidebar.removeClass('fold-side-bar');
      //
      navbarBrand.removeClass('fold-side-bar');
      navbarBrand.addClass('col-md-2 ');
      //
      mainContenct.removeClass('col-md-11 col-md-offset-2');
      mainContenct.addClass('col-md-10');
      //
  }else{
      // 收拢
      sidebar.addClass('fold-side-bar');
      //
      navbarBrand.removeClass('col-md-2');
      navbarBrand.addClass('fold-side-bar');
      //
      mainContenct.removeClass('col-md-10');
      mainContenct.addClass('col-md-11 col-md-offset-2');
      //
  }
});