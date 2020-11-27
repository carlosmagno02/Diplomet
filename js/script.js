$(function(){
    $('.mobile').on('click', function(){
        var listamenu = $('nav.mobile ul');
        //Abrir menu atraves do fadein
        /*if(listamenu.is(':hidden') == true)
        listamenu.fadeIn();
        else
        listamenu.fadeOut();*/

        //abrir e fechar menu sem efeitos
        /*if(listamenu.is(':hidden') == true)
        listamenu.show();
        else
        listamenu.hide();*/
        
        if(listamenu.is(':hidden') == true){
        var icone = $('.botao-menu-mobile').find('i');
        icone.removeClass('fa-bars');
        icone.addClass('fa-times')
        listamenu.slideToggle();
        }else{
        var icone = $('.botao-menu-mobile').find('i');
        listamenu.slideToggle();
        icone.removeClass('fa-times');
        icone.addClass('fa-bars')
        }
    })
})