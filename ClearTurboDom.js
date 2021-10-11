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
            

            /*Отсеиваем фрилансеров и джунов*/ 
            if ( text.includes('freela')  || text.includes('self-empl')){ 
                console.log(`${name} - удалили фрилансер)`);
                candidate.remove(); 
                continue;  
            } 
            /*В последнем опыте нету слова Java*/ 
            if ( !text.includes('java') && !title.includes('spring') ){ 
                console.log(`${name} - удалили не JAVA в последней работе или Тайтле)`);
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
            /* удалим джунов с опытом меньше 2лет*/
		    if ( !(/(year|рок|рiк)/u.test(workP)) && text.includes('junior') )
               { 
                console.log(`${name} - удалили - джун проработавший меньше года (${workP})`);
                candidate.remove(); 
                continue; 
            } 

            
            let allExpierence=  [...cand1.querySelectorAll('div.col-md-9 p')].map(element => element.textContent).join("<br>").toLowerCase(); 
            let regexpCompany = /n-ix|playtika|solve\.com|jupser|teamvoy|powercode|mindcraft|kernelics|freshlimesoft|rollncode|sloboda|massmedia\sgroup|beetroot/i; 
            if (regexpCompany.test(allExpierence)){ 
                console.log(`${name} - удалили - Запрещенная компания`);
                candidate.remove(); 
                continue; 
            } 


    /*В  тайтле или опте не указан Spring
             if (!title.includes('spring') && !allExpierence.includes('spring')) { 
                console.log(`${name} - удалили -  Не содержит спринг (должность - ${title.includes('spring')}, опыт - ${allExpierence.includes('spring')} )`);
                candidate.remove(); 
                continue; 
            }  
            */
        }else{ 
            console.log(`${name} - не указан опыт`);
            candidate.remove(); 
                continue; 
        }
        
        if (!allText.includes('spring')){
            console.log(`${name} - удалили -  Не содержит спринг `);
            candidate.remove(); 
            continue; 
        }
         
    } 
}) ();
