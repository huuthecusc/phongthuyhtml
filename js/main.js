$(document).ready(function(){
    $('.mtabs .tabnav').click(function(){
        if($(this).hasClass('tab1')){
            $('.mtabs .ctab').hide();
            $('.mtabs .ctab1').slideDown('slow');
        }
        else if($(this).hasClass('tab2')){
            $('.mtabs .ctab').hide();
            $('.mtabs .ctab2').slideDown('slow');
        }
    });
});

/* ------------------- Menu ------------------- */
function Menu(){
    $('.menu .menulist').attr('style','display:block');
}
function MenuClose(){
    $('.menu .menulist').attr('style','display:none');
}