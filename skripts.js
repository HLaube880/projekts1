window.onload = function() {
  zimetuzcanva();
}

function zimetuzcanva() {
  const kanva = document.getElementById("zimejums"); //Iegūt kanvas elementu pēc ID
  const konteksts = kanva.getContext('2d'); //Iegūt 2D zīmēšanu


//zīmēt aizpildītu taisnstūri
konteksts.fillStyle = "yellow"; //nosaka aizpildijuma krāsu
konteksts.fillRect(20, 20, 150, 100); //zīmē aizpildītu taisnstūri (x, y, platums, augstums)

//zīmē taisnstūra kontūru
konteksts.strokeStyle = 'ŗed'; //nosaka kontūras krāsu
konteksts.strokeRect(20, 20, 150, 100); //zīmē taisnstūra kontūru (x, y, platums, augstums)


//Zīmēt apli
konteksts.beginPath(); //sāk jaunu ceļu
konteksts.arc(100, 100, 50, 0, Math.PI * 2); //zīmē apli (x, y, rādiuss, sākuma lenķis, beigu lenķis)
konteksts.fillStyle = 'red'; // nosaka aizpildijuma krāsu
konteksts.fill(); //aizpilda apli ar krāsu
}