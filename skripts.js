window.onload = function() {
  zimetuzcanva();
}

function zimetuzcanva() {
  const kanva = document.getElementById("zimejums"); //Iegūt kanvas elementu pēc ID
  const konteksts = kanva.getContext('2d'); //Iegūt 2D zīmēšanu
}


function taisnsturis() {
  const kanva = document.getElementById("zimejums"); //Iegūt kanvas elementu pēc ID
  const konteksts = kanva.getContext('2d'); //Iegūt 2D zīmēšanu
    //zīmēt aizpildītu taisnstūri
  konteksts.fillStyle = "yellow"; //nosaka aizpildijuma krāsu
  konteksts.fillRect(20, 20, 250, 100); //zīmē aizpildītu taisnstūri (x, y, platums, augstums)
  //zīmē taisnstūra kontūru
  konteksts.strokeStyle = 'ŗed'; //nosaka kontūras krāsu
  konteksts.strokeRect(20, 20, 250, 100); //zīmē taisnstūra kontūru (x, y, platums, augstums)
  }

function aplis() {
  const kanva = document.getElementById("zimejums"); //Iegūt kanvas elementu pēc ID
  const konteksts = kanva.getContext('2d'); //Iegūt 2D zīmēšanu
    //Zīmēt apli
  konteksts.beginPath(); //sāk jaunu ceļu
  konteksts.arc(100, 200, 50, 0, Math.PI * 2); //zīmē apli (x, y, rādiuss, sākuma lenķis, beigu lenķis)
  konteksts.fillStyle = 'red'; // nosaka aizpildijuma krāsu
  konteksts.fill(); //aizpilda apli ar krāsu
  konteksts.lineWidth = 5;
  konteksts.strokeStyle = 'black';
  konteksts.stroke();
  }

function teksts() {
    const kanva = document.getElementById("zimejums"); //Iegūt kanvas elementu pēc ID
    const konteksts = kanva.getContext('2d'); //Iegūt 2D zīmēšanu
    //zīmēt tekstu
    konteksts.font='30px Arial'; //Nosaka fontu un tā izmēru
    konteksts.fillStyle='orange' //nosaka aizpildijuma krāsu
    konteksts.fillText('Sveicieni!', 300, 50); //Zīmē aizpildītu tekstu (teksts, x, y)
    konteksts.font='30px Arial'; //Nosaka fontu un tā izmēru vēlreiz, lai kont\uru zīmēšanai būtu vienāds ar aizpildīto tekstu
    konteksts.strokeStyle='zils'; //Nosaka kontūras krāsu zilu
    konteksts.strokeText('Sveicieni!', 300, 50); //zīmē teksta kontūru (teksts, x, y)
  }
  
function linija() {
  const kanva = document.getElementById("zimejums"); //Iegūt kanvas elementu pēc ID
  const konteksts = kanva.getContext('2d'); //Iegūt 2D zīmēšanu
    //Izveidot līniju
  konteksts.beginPath(); // Sāk jaunu ceļu (zīmējuma kontūru). Tas nozīmē, ka zīmēšana sāksies no jauna – iepriekšējie ceļi netiks ietekmēti.
  konteksts.moveTo(330, 200); // Novieto "zīmuli" uz koordinātu (300, 220), nenovelkot līniju. Tas ir sākuma punkts nākamajai līnijai.
  konteksts.lineTo(200, -400); // Uzzīmē taisnu līniju no iepriekšējā punkta (220, 220) uz jauno punktu (200, 400).
  konteksts.lineWidth = 10; // Iestata līnijas biezumu uz 15 pikseļiem.
  konteksts.strokeStyle = 'orange'; // Iestata līnijas krāsu uz oranžu.
  konteksts.stroke(); // Uzzīmē iepriekš definēto līniju uz kanva (canvas), izmantojot noteikto biezumu un krāsu.
  }

function clerall() {  
  var canvas = document.getElementById("zimejums"); // Atrod <canvas> elementu ar id "zimejums" 
  var konteksts = canvas.getContext('2d');  // Iegūst 2D zīmēšanas kontekstu, ar kuru var zīmēt uz canvas
  konteksts.clearRect(0, 0, canvas.width, canvas.height);  // Notīra visu zīmēšanas laukumu (sākot no 0,0 līdz pilnam platumam un augstumam)
}

