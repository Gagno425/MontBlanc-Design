var degCount =-75;
var container = document.getElementById('textHead');
var charText= 'motorcycle montblanc'
for( var i = 0; i < charText.length ; i++){
    var charTextChild = '<span style = "transform: rotate('+degCount+'deg)">';
    charTextChild+=charText[i];
    degCount+=17;
    charTextChild+='</span>';
    container.innerHTML+=charTextChild;
}