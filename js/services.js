function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("services__tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    document.getElementById(tabName).style.color = "black";
    evt.currentTarget.className += " active";
}

document.querySelector('#rental-tab-link').addEventListener('click', (evt) => openTab(evt, 'rental'));
document.querySelector('#consulting-tab-link').addEventListener('click', (evt) => openTab(evt, 'consulting'));
document.querySelector('#accessories-tab-link').addEventListener('click', (evt) => openTab(evt, 'accessories'));
document.querySelector('#repair-tab-link').addEventListener('click', (evt) => openTab(evt, 'repair'));
