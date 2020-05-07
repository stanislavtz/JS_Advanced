function solve() {
   const cards = [...document.querySelectorAll('.cards img')];

   const spans = Array.from(document.querySelectorAll('#result span'));
   const history = document.querySelector('#history');

   const result = [];
   let counter = 1;

   let fCard;
   let sCard;
   let previouseCard;

   cards.forEach((card) => {
      card.addEventListener('click', (e) => {
         console.log(counter);
         if (counter > 1 && card.parentElement.id === previouseCard.parentElement.id) {
            return;
         }

         card.parentElement.id === "player1Div" ? fCard = card : sCard = card;
         card.src = "images/whiteCard.jpg";

         if (fCard) {
            spans[0].textContent = fCard.name;
         }

         if (sCard) {
            spans[2].textContent = sCard.name;
         }

         if (fCard && sCard) {
            if (+fCard.name > +sCard.name) {
               fCard.style.border = "2px solid green";
               sCard.style.border = "2px solid red";
            }
            else {
               fCard.style.border = "2px solid red";
               sCard.style.border = "2px solid green";
            }

            result.push(`[${fCard.name} vs ${sCard.name}] `)
         }

         if (counter % 2 === 0) {
            fCard = undefined;
            sCard = undefined;
         }
         
         counter++;
         previouseCard = card;
         history.textContent = result.join('');
      });
   })
}