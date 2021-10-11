javascript:
(function () { 
     
    let title, town, name, firstP; 
    let candidates = document.querySelectorAll('.views-row'); 
    for (let candidate of candidates) { 
        let cand1 = candidate.querySelector('.row'); 
         let allText= cand1.innerText.toLowerCase();
        town = cand1.querySelector('.hr-profile-current-location') && cand1.querySelector('.hr-profile-current-location').textContent.toLowerCase().trim(); 
        title = cand1.querySelector('.field-name-field-c-headline') && cand1.querySelector('.field-name-field-c-headline').textContent.toLowerCase().trim();
        name = cand1.querySelector('h3').textContent.trim();
        firstP = cand1.querySelector('div.col-md-9 p'); 

        if (firstP) { 

            /** последний опыт работы */
            let text=firstP.innerText.toLowerCase(); 
            /** текст с временем работы на последнем месте */
            let workP=firstP.querySelector('.date-period').innerText;
	    if ( !workP){candidate.remove(); continue;}//не указано время работы
            
            /*Отсеиваем фрилансеров и senior*/ 
            if ( text.includes('freela')  || text.includes('self-empl') || text.includes('senior') || text.includes('middle')){ 
                console.log(`${name} - удалили фрилансер)`);
                candidate.remove(); 
                continue;  
            } 
           

            /* Рабоатет меньше 8 месяцев на последней работе*/ 
             
            if ( !(/(year|рок|рiк)/u.test(workP)) && !(/(8|9|10|11)/.test(workP)) ) 
            { 
                console.log(`${name} - удалили -  меньше 8 месяцев (${workP})`);
                candidate.remove(); 
                continue; 
            } 
            /* работает больше 2-х лет middle*/
		    if ( ( /(рiк|рок)/u.test(workP) ) && !( /(1 рiк|2 рiк)/u.test(workP) ) )
               { 
                console.log(`${name} - работает больше 2-х лет middle (${workP})`);
                candidate.remove(); 
                continue; 
            } 

            
           }else{ 
            console.log(`${name} - не указан опыт`);
            candidate.remove(); 
                continue; 
        }
        
        if ( !( /(yii|zend)/.test(allText) ) && !allText.includes('php') && !( /(javascript|jquery|js|react)/u.test(allText) )  ){
            console.log(`${name} - удалили -  Не содержит yii или ПХП или JS `);
            candidate.remove(); 
            continue; 
        }
         
    } 
}) ();
