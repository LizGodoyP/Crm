$(document).ready(function(){
    

    $('div.pestañas a').click(function(){
        $('div.pestañas a').removeClass('active');
        $(this).addClass('active');
        
        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    })
});