
//$('input[type=TEXT]').each(function(){$(this).css('outline-style', 'groove')});

$("<h1 id='enCours'>Reformattage .... <br/> en cours....</h1>").prependTo($('body'));

//Marque certaines class comme info à conserver : 
$('.CSS-LibInfosZRP').each(function () {
    $(this).attr('xdata-niji', 'true');
});

$('.CSS-LibTexteGauche').each(function () {
    $(this).attr('xdata-niji', 'true');
});

$('.CSS-LibTitreZoneRepetee').each(function () {
    $(this).attr('xdata-niji', 'true');
});

$('.CSS-LibTitreJourZoneRepetee').each(function () {
    //Améliorer : tester si id contient 'JOUM' (jours mois)
    if ($(this).attr('id') != null && $(this).attr('id').indexOf('JOUM') != -1)
        $(this).attr('xdata-niji', 'true');
});

//supprime les éléments cachés
$('input.CSS-InvisibleZoneRepetee').each(function () {
    $(this).remove();
});

$('img').each(function () {
    $(this).remove();
});

//remplace tous les inputs 
$('input[type=TEXT]').replaceWith(function () {
    console.log($(this).val());
    if ($(this).val() == '' || $(this).val() == 'undefined')
        return $('<div />').attr('xdata-niji', 'true').append('0');
    else
        return $('<div />').attr('xdata-niji', 'true').append($(this).val().replace('.', ','));
});

$('table').each(function () {
    $(this).attr('border', 1);
});


$('td').each(function () {
    if ($(this).attr('xdata-niji') == 'true' || $(this).has('*[xdata-niji]').length > 0) {
        if ($(this).attr('colspan') > 1)
            $(this).attr('colspan', '1');
        if ($(this).attr('rowspan') > 1)
            $(this).attr('rowspan', '1');
    } else
        $(this).remove();
});

$('tr').each(function () {
    if ($(this).attr('xdata-niji') == 'true' || $(this).has('*[xdata-niji]').length > 0) {
        if ($(this).attr('colspan') > 1)
            $(this).attr('colspan', '1');
        if ($(this).attr('rowspan') > 1)
            $(this).attr('rowspan', '1');
    } else
        $(this).remove();
});

//reorder les tableaux
//$('#CEL_TITREZRP').prependTo('table table:first()');
$('#CEL_TITREZRP').prependTo('body');

//Noirci les zones blanches
$('.CSS-LibInfosZRP div').each(function () {
    $(this).css('color', 'black');
});

$("#enCours").remove();
