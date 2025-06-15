// Funkcija, kas tiek izsaukta, kad tiek nospiesta konvertēšanas poga
function convert() {
  // Nolasa ievadīto vērtību no teksta lauka
  let inches = parseFloat(document.getElementById("inchesInput").value);

  // Pārbaude, vai ievade ir skaitlis
  if (isNaN(inches)) {
    document.getElementById("result").textContent = "Lūdzu, ievadiet derīgu skaitli!";
    return;
  }

  // Veic pārrēķinu no collām uz centimetriem
  let cm = inches * 2.54;

  // Formatē rezultātu un izvada to HTML lapā
  let resultText = `${inches} collas = ${cm.toFixed(2)} centimetri`;
  document.getElementById("result").textContent = resultText;
}

// Funkcija rezultāta lejupielādei kā tekstfailu
function lejupielade() {
  // Nolasa rezultātu no <p> elementa
  let result = document.getElementById("result").textContent;

  // Ja rezultāts nav tukšs, veido lejupielādi
  if (result) {
    // Izveido Blob (faila saturu)
    let blob = new Blob([result], { type: "text/plain" });

    // Izveido pagaidu lejupielādes saiti
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "konvertacijas_rezultats.txt";

    // Simulē klikšķi uz saites, lai sāktu lejupielādi
    link.click();
  } else {
    alert("Nav rezultāta, ko lejupielādēt.");
  }
}


window.onload = function() {
  // Atlasa visas navigācijas saites
  var navLinks = document.querySelectorAll('.topnav a');

  // Cauriet katru saiti
  navLinks.forEach(function(link) {

    // Noklikšķinot uz kādas saites
    link.addEventListener('click', function(event) {
      // Noņem 'active' no visām saitēm
      navLinks.forEach(function(otherLink) {
        otherLink.classList.remove('active');
      });

      // Pievieno 'active' tai saitei, kas tika nospiesta
      this.classList.add('active');
    });
  });
};



function atjaunotIetvaru(which) {
  document.getElementById('lapas_saturs').innerHTML = '<'+'object id="lapas" name="lapas" type="text/html" data=" '+ which.href +' "><\/object>';
}


 //zimetuzcanva();
 //alert("Sveiki, Tīģeri!");




function veiktDarbibu(operacija) {
  // Iegūst vārda lauka vērtību un noņem liekās atstarpes abās pusēs
  const vards = document.getElementById("vards").value.trim();

  // Iegūst pirmā skaitļa lauka vērtību un pārvērš par veselu skaitli
  const x = parseInt(document.getElementById("x").value);

  // Iegūst otrā skaitļa lauka vērtību un pārvērš par veselu skaitli
  const y = parseInt(document.getElementById("y").value);

  // Iegūst rezultāta elementu, kurā tiks rādīts rezultāts
  const rezultatsEl = document.getElementById("rezultats");

  // Regulārā izteiksme, kas pārbauda, vai vārds sākas ar lielo burtu un tālāk seko tikai mazie burti latviešu valodā
  const regex = /^[A-ZĀČĒĢĪĶĻŅŪŽ][a-zāčēģīķļņūž]+$/;

  // Ja vārds neatbilst šim paraugam, parāda brīdinājumu un pārtrauc funkcijas izpildi
  if (!regex.test(vards)) {
    alert("Ievadi vārdu ar lielo sākuma burtu, bez cipariem, atstarpēm vai simboliem!");
    return;
  }

  // Pārbauda, vai vārds nav tukšs vai skaitļi nav derīgi (nav skaitļi)
  if (vards === "" || isNaN(x) || isNaN(y)) {
    alert("Visām vērtībām jābūt ievadītām!");
    console.log("Ievadi vērtību!!!");
    return;
  }

  // Izveido mainīgo rezultātam
  let z;

  // Izvēlas operāciju atkarībā no funkcijas argumenta
  switch (operacija) {
    case "saskaitit":
      z = x + y; // Saskaitīšana
      break;
    case "atnemt":
      z = x - y; // Atņemšana
      break;
    case "reizinat":
      z = x * y; // Reizināšana
      break;
    case "dalit":
      // Papildu pārbaude, lai nedalītu ar nulli
      if (y === 0) {
        alert("Dalīt ar 0 nedrīkst!");
        return;
      }
      z = x / y; // Dalīšana
      break;
    default:
      alert("Nezināma darbība!"); // Ja saņem nezināmu operāciju, paziņo
      return;
  }

  // Izvada konsolē ievadītās vērtības un rezultātu
  console.log("Pirmā vērtība: " + x);
  console.log("Otrā vērtība: " + y);
  console.log("Rezultāts: " + z);

  // Attēlo rezultātu HTML elementā ar formatētu tekstu
  rezultatsEl.innerHTML = `<br><br><br>${vards}, tavs rezultāts ir: <strong>${z}</strong><br><br><br>`;
}

function notirit() {
  // Notīra vārda lauku
  document.getElementById("vards").value = "";

  // Notīra x vērtības lauku
  document.getElementById("x").value = "";

  // Notīra y vērtības lauku
  document.getElementById("y").value = "";

  // Atiestata rezultātu uz sākotnējo tekstu
  document.getElementById("rezultats").innerText = "Šeit būs rezultāts";

  // Notīra konsoles izvadus (pēc izvēles)
  console.clear();
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

let age =101;
console.log(age);
if (age <18) {
  console.log("Nepilngadīgs");
} else if (age >= 18 && age < 65) {
  console.log("Pilngadīgs");
} else {
  console.log("Pensionārs");
}

//for cilpa
for (let i=0; i < 5; i++){
  console.log(i);
}

//while cilpa
let j=0;
while (j < 5) {
  console.log(j);
  j++;
}

//Do-while cilpa
let n=0;
do {
  console.log(n);
  n++;
} while (n < 5);

let skaitli = [6,3,7,5,3,8,0];
let summa=0;
for (let i=0; i< skaitli.length; i++){
  summa = summa + skaitli[i];
  console.log(i + " vērtība = " + skaitli[i]);
}
console.log(summa);
console.log(skaitli);