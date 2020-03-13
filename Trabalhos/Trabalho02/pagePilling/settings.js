$(document).ready(function() {

    /*
    * Plugin intialization
    */
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['home', 'inscricoes', 'cronograma', 'contato', 'mais_info'],
        sectionsColor: ['red', '#ee005a', '#39C', 'orange', 'green'],
        direction: 'vertical',
        verticalCentered: true,
        scrollingSpeed: 5,
        easing: 'linear',
        loopTop: false,
        loopBottom: false,
        navigation: {
            'textColor': 'red',
            'bulletsColor': '#000',
            'position': 'right',
               'tooltips': ['Home', 'Inscrições', 'Cronograma', 'Contato', 'Mais Informações']
           },
        afterRender: function(){
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function(anchorLink, index){
            if(index>1){
                $('#pp-nav').removeClass('custom');
            }else{
                $('#pp-nav').addClass('custom');
            }
        }
    });


    /*
    * Internal use of the demo website
    */
    $('#showExamples').click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $('#examplesList').toggle();
    });

    $('html').click(function(){
        $('#examplesList').hide();
    });
});