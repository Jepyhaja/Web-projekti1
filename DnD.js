$(document).ready(function () {

//draggables
    $("#GPU").draggable({
      stack: '#components',
      cursor: 'move',
      revert: true
});

    $("#CPU").draggable({
        stack: '#components',
        cursor: 'move',
        revert: true
});
    $("#RAM").draggable({
      stack: '#components',
      cursor: 'move',
      revert: true
});
    $("#PSU").draggable({
      stack: '#components',
      cursor: 'move',
      revert: true
});
    $("#HDD").draggable({
      stack: '#components',
      cursor: 'move',
      revert: true
});
    $("#SSD").draggable({
      stack: '#components',
      cursor: 'move',
      revert: true
});
    $("#TAH").draggable({
      stack: '#components',
      cursor: 'move',
      revert: true
});
    $("#TUU").draggable({
      stack: '#components',
      cursor: 'move',
      revert: true
});
    $("#MOBO").draggable({
      stack: '#components',
      cursor: 'move',
      revert: true
});

//DROP locations

     $("#GPUDROP").droppable({
            hoverClass: 'hovered',
            drop: handleDrop

        });
     $("#CPUDROP").droppable({
            hoverClass: 'hovered',
            drop: handleDrop

        });
     $("#RAMDROP").droppable({
            hoverClass: 'hovered',
            drop: handleDrop
            
        });
     $("#PSUDROP").droppable({
            accept: '#components',
            hoverClass: 'hovered',
            drop: handleDrop

        });
     $("#HDDDROP").droppable({
            hoverClass: 'hovered',
            drop: handleDrop

        });
     $("#SSDDROP").droppable({
            hoverClass: 'hovered',
            drop: handleDrop

        });
     $("#TAHDROP").droppable({
            hoverClass: 'hovered',
            drop: handleDrop

        });
     $("#TUUDROP").droppable({
            hoverClass: 'hovered',
            drop: handleDrop

        });
     $("#MOBODROP").droppable({
            hoverClass: 'hovered',
            drop: handleDrop

        });
    });

function handleDrop(event, ui) {
    var Drag_id = $(this).data('id');
    var Drop_id = ui.draggable.data('id');

    if(Drop_id == Drag_id){
        ui.draggable.addClass ('corect');
        ui.draggable.draggable('disable');
        $(this).droppable('disable');
        ui.draggable.position( { of: $(this), my: 'left top', at: 'left top'});
        ui.draggable.draggable('option', 'revert', false);
    }

}
