



/* kelimeler */
var trk=[
    "ağaç", "bahçe", "ceviz", "dağ", "elma", 
    "fındık", "göl", "havuç", "ıhlamur", "ıspanak", 
    "jandarma", "kavun", "limon", "marul", "nehir", 
    "okul", "pancar", "radyo", "salatalık", "tarla", 
    "uçak", "vadi", "yağmur", "zeytin", "arı", 
    "beyaz", "çiçek", "dere", "esinti", "fırın", 
    "güneş", "halı", "ıtır", "ışık", "kitap", 
    "lahana", "mavi", "orman", "pembe", "sarı", 
    "şeftali", "şelale", "şehir", "toprak", "üzüm", 
    "ümit", "vazo", "yıldız", "zil", "yoğurt"
  ];


var rt=[
    "tree", "garden", "walnut", "mountain", "apple", 
    "hazelnut", "lake", "carrot", "linden", "spinach", 
    "gendarme", "melon", "lemon", "lettuce", "river", 
    "school", "beet", "radio", "cucumber", "field", 
    "airplane", "valley", "rain", "olive", "bee", 
    "white", "flower", "stream", "breeze", "oven", 
    "sun", "carpet", "geranium", "light", "book", 
    "cabbage", "blue", "forest", "pink", "yellow", 
    "peach", "waterfall", "city", "soil", "grape", 
    "hope", "vase", "star", "bell", "yogurt"
  ];

  var türkçe=document.getElementById("türkçe")
  var ingilizce=document.getElementById("ingilizce")



/* türkçe kelimeler */
for(var i=0;i<20;i++){

   var p=  document.createElement("button");
   p.id="turkkelimeleri"
 

     var karışık=(Math.floor(Math.random()*trk.length));
     var bır= p.innerHTML=trk[karışık];
     p.onclick=function(){

    var trr=  document.getElementById("turkkelimeleri").value;
    document.getElementById("kkk").innerHTML="kelimem:"+""+bır;
  
  

}
türkçe.appendChild(p);



/* ingilizce kelimeler */
  var ppp=document.createElement("button");
  
ppp.id="ingilizcekelimeler"
var ıkı= ppp.innerHTML=rt[karışık];
  ingilizce.appendChild(ppp);

  ppp.onclick=function(){

  var eng= document.getElementById("ingilizcekelimeler").value;
  
document.getElementById("ııı").innerHTML="kelimem:"+""+ ıkı;
  }


/* 
  
   if(bır===ıkı){
    console.log("doğru")
   }else{
    console.log("yanlış")
   }
  */

}

    


