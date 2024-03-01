    //=====================================================================================
    // My Custom Library file
    //=====================================================================================
    
    //=====================================================================================
    // Dynamic Side Panel Modal Attribute Targeted for Unique START - #wholeomarfaruk - component01
    //=====================================================================================
    $(document).ready(function() {
        $('.toggle-side-panel-btn').click(function() {
            var targetModal = $(this).data('target'); // Get the target modal ID from data attribute
            $('#' + targetModal).toggleClass('open'); // Toggle the 'open' class on the target modal
        });
        
        $('.close-btn').click(function() {
            $(this).closest('.side-panel-modal').removeClass('open'); // Remove the 'open' class on click
        });
    });

    //=====================================================================================
    // Dynamic Side Panel Modal Attribute Targeted for Unique END - #wholeomarfaruk - component01
    //=====================================================================================
    
