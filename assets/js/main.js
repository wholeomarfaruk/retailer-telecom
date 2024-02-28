$(document).ready(function () {
    // home page load after document is ready
    $.ajax({
        type: "GET",
        url: "pages/home.php",
        // data: "text",
        dataType: "text",
        success: function (response) {
            $('#content-area .page').html(response);
        }
    });
    


    // Sidebar Toggle
    $('.sidebar-open-btn').on('click', function () {
        $("#header-section .sidebar").toggleClass('open');
    });

    // Close main sidebar
    $('#header-section .sidebar .main-sidebar-close-btn').on('click', function () {
        $("#header-section .sidebar").removeClass('open');
    });

    // Open submenu
    $('#header-section .sidebar .sidebar-menu > ul > li').on('click', function () {
        $(this).find('.sidebar-submenu-area').addClass('open');
    });

    // Close submenu
    $('#header-section .sidebar .sidebar-submenu-area .sub-menu-close-btn').on('click', function (event) {
        event.stopPropagation(); // Prevent event from bubbling up to parent li
        var $submenuArea = $(this).closest('.sidebar-submenu-area');
        $submenuArea.removeClass('open');
    });

    $('.balance-area').on('click', function() {
        var $balanceShow = $('.balance-area > .balance-show'); // Target the specific balance show element
        
        // Show loader if needed
        // Balance show 
        $balanceShow.addClass('show-on-top');
        // Balance show for 5 seconds
        setTimeout(() => {
            $balanceShow.removeClass('show-on-top'); // Remove class from the targeted element
        }, 5000); // 5000 milliseconds = 5 seconds
    });




    // calling individual page on index page
    $('#main_menu > ul >li > a').on('click',function(event){
        event.stopPropagation(); // Prevent event from bubbling up to parent li
        var $page_Name= $(this).attr('calling-page');
        console.log($page_Name);
        if($page_Name !=undefined){
            var $page_Url="pages/"+$page_Name+".php";
            $.ajax({
                type: "Get",
                url: ""+$page_Url+"",
                dataType: "text",
                success: function (response) {
                    $('#content-area .page').html(response);
                }
            });
        }
    });

    
});
