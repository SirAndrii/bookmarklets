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
            
                 ){
                candidate.remove();
                continue; 
            }
            /*В последней работе не указан Spring*/
            if (!text.includes('spring')) {
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
            
            let allExpierence=  [...cand1.querySelectorAll('div.col-md-9 p')].map(element => element.textContent).join("<br>").toLowerCase();
            let regexpCompany = /jupser|teamvoy|powercode|mindcraft|kernelics|freshlimesoft|rollncode|sloboda|massmedia\sgroup|beetroot/i;
            if (regexpCompany.test(allExpierence)){
                candidate.remove();
                continue;
            }
        }else{
            candidate.remove();
                continue;
        }
    }
}) ();
