function change() {
    var ru = document.getElementById("ru")
    var eng = document.getElementById("eng")

    if (ru.checked) {
        document.getElementsByClassName('d4')[0].innerHTML = 'Болотова'
        document.getElementsByClassName('d5')[0].innerHTML = 'Елизавета'
        document.getElementsByClassName('d6')[0].innerHTML = 'Антоновна'
    }
    if (eng.checked) {
        document.getElementsByClassName('d4')[0].innerHTML = 'Bolotova'
        document.getElementsByClassName('d5')[0].innerHTML = 'Elizaveta'
        document.getElementsByClassName('d6')[0].innerHTML = 'Antonovna'
    }
}