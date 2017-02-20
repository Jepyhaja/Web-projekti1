

// wait for document to load before running script
 $(document).ready(function(){
        $("#GPU").draggable();
        $("#GPUDROP").droppable({
            drop: function(event, ui) {
                $(this).find("#GPUDROP");
                $(this).append("GPU");
                $("#GPU").remove();
            }
        });
            
    });

