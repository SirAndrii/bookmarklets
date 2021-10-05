javascript:(function () {
    
    let title, town;
    let candidates = document.querySelectorAll('.views-row');
    for (let candidate of candidates) {
        let cand1 = candidate.querySelector('.row');
        
        town = cand1.querySelector('.hr-profile-current-location') && cand1.querySelector('.hr-profile-current-location').textContent.trim();

        let firstP = cand1.querySelector('div.col-md-9 p');

        
        if (firstP) {
            let text=firstP.innerText.toLowerCase();
            /*Отсеиваем фрилансеров и джунов*/
            if ( text.includes('freelance') 
                || text.includes('junior')
                || text.includes('native')
                 ){
                candidate.remove();
                continue; 
            }
            /*В последней работе не указан Реакт*/
            if (!text.includes('react')) {
                candidate.remove();
                continue;
            }
            let workP=firstP.querySelector('.date-period').innerText;
            /* Рабоатет меньше 8 месяцев на последней работе*/
            console.log(workP);
            if ( !(workP.includes("year")) && !(/(8|9|10|11)/.test(workP)) )
            {
                candidate.remove();
                continue;
            }
            
        }else{
            candidate.remove();
                continue;
        }
    }
}) ();
