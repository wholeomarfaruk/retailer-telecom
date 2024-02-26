$(document).ready(function(){
// Siderbar Toggle
$('.sidebar-open-btn').on('click',function(){
    $("#header-section .sidebar").toggleClass('open');
});
$('#header-section .sidebar .close-btn').on('click',function(){

    var hasClass = $("#header-section .sidebar").hasClass('open');
    if (hasClass) {
        $("#header-section .sidebar").toggleClass('open');
    }
   
});

})