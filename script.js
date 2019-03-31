$(document).ready(function() {
  // setTimeout(() => {
  //   $($('#logos').children()[0]).fadeIn();
  // }, 5000);

  newRow();
  $('#start').click(function() {
    $(this).fadeOut('normal', function() {
      $('#logos').fadeIn();
      $($('#logos').children()[0]).fadeIn();
    });
    end = false;
  });

  // $('#end').click(function(event) {
  //   // hier kommt eine algorithums hin der das aktuelle ergebins mit dem richtigem vergleicht.
  //   // etwa so, dass jede spalte durchlaufen wird und geprueft wird ob das logo dort reingehoert.
  // });
});

let logoDiv = $('#logos').children();
let tBody = $('#table > tbody');
let logoNr = 0;
let logoAmount = 26;
let end = true;

function setIt(col) {
  if (logoNr < logoAmount && !end) {
    let children = tBody.children();
    for (let i = 0; i < children.length; i++) {
      let ch = $($(children[i]).children()[col]);
      if (ch.children().length == 0) {
        let img = document.createElement('img');
        img.setAttribute('src', 'logos/' + logoNr + '.png');
        $(ch).append(img);
        nextLogo();
        break;
      }
    }
    if (logoNr >= logoAmount) {
      $('#end').fadeIn();
      end = true;
    }
  }
    newRow();
}

  function newRow() {
    let tmpRow = $(document.createElement('tr'));
    for (let i = 0; i < 8; i++) {
      tmpRow.append(document.createElement('td'));
    }
    tBody.append(tmpRow[0]);
  }

  function nextLogo() {
    $(logoDiv[logoNr++]).fadeOut('normal', function() {
      $(logoDiv[logoNr]).fadeIn();
    });
  }
