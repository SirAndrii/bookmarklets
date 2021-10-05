javascript:(function () {
    let string = "";
    let name, title, town, expierence, email, skype, phone, linkedin, yoe;
    let candidates = document.querySelectorAll('.views-row');
    for (let candidate of candidates) {
        let cand1 = candidate.querySelector('.row');
        let cand2 = cand1.nextElementSibling;

        name = cand1.querySelector('h3').textContent.trim();
        title = cand1.querySelector('.field-name-field-c-headline') && cand1.querySelector('.field-name-field-c-headline').textContent.trim();
        town = cand1.querySelector('.hr-profile-current-location') && cand1.querySelector('.hr-profile-current-location').textContent.trim();

        let firstP = cand1.querySelector('div.col-md-9 p');

        /*Отсеиваем фрилансеров*/
        if (firstP && firstP.innerText.toLowerCase().includes('freelance')) continue;
        if (firstP && !firstP.innerText.toLowerCase().includes('react')) continue;
        /*Получаем Опыт*/
        yoe = firstP.closest('div').previousElementSibling.innerText;

        expierence = firstP && [...cand1.querySelectorAll('div.col-md-9 p')].map(element => element.textContent).join("<br>");

        email = cand2.querySelector('i.fa-envelope') && cand2.querySelector('i.fa-envelope').closest('span').getAttribute('title').trim();
        skype = cand2.querySelector('i.fa-skype') && cand2.querySelector('i.fa-skype').closest('span').getAttribute('title').trim();
        phone = cand2.querySelector('i.fa-phone') && cand2.querySelector('i.fa-phone').closest('span').getAttribute('title').trim();


        if (cand2.querySelector('i.fa-linkedin')) {
            const regexp = /https.*www/gi;

            linkedin = cand2.querySelector('i.fa-linkedin').closest('a').href.trim();
            linkedin = linkedin.replaceAll("252F", "2F");
            linkedin = linkedin.replaceAll("253A", "3A");
            linkedin = linkedin.replace(regexp, "www");

        }

        let array = [name, title, yoe, town, expierence, email, skype, phone, linkedin];
        string += "<tr>";
        for (let el of array) {
            string += "<td>";
            string += !el ? "" : el;
            string += "</td>";
        }
        string = string.slice(0, -1) + "<br>";
        string += "</tr>";

        /*console.log(string); */

    };
    let newWin = window.open("", "Copy it to table");
    newWin.document.body.innerHTML = "<table>" + string + "</table>";
    newWin.getSelection().selectAllChildren(newWin.document.body);
})();
