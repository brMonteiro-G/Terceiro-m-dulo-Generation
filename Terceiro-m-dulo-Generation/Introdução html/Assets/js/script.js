let nome = window.document.querySelector("#nome")
let email = window.document.querySelector("#email")
let assunto = window.document.querySelector("#assunto")
let map = window.document.querySelector("#map")
let nomeOK = false
let emailOK = false
let assuntoOK = false

function nameValidation() {
    let nameValidation = window.document.querySelector("#nameValidation")
    if (nome.value.length == 0) {
        nameValidation.style.display = "none"

    } else if (nome.value.length < 3) {
        nameValidation.innerHTML = "Nome inválido"
        nameValidation.style.color = "red"

    } else {
        nameValidation.innerHTML = "Nome válido"
        nameValidation.style.color = "green"
    }

}

function emailValidation() {
    let emailValidation = window.document.querySelector("#emailValidation")
    if (email.value.indexOf("@") == -1 && email.value.indexOf(".") == -1) {
        emailValidation.innerHTML = "Email inválido"
        emailValidation.style.color = "red"
    } else {
        emailValidation.innerHTML = "Email válido"
        emailValidation.style.color = "green"
    }

}
function subject() {
    let subjectValidation = window.document.querySelector("#subjectValidation")
    if (assunto.value.length >= 100) {
        subjectValidation.innerHTML = "Seu texto é muito grande, digite no máximo 99 caracteres"
        subjectValidation.style.color = "red"
        subjectValidation.style.display = "block"
        assuntoOK = false
    } else {
        subjectValidation.style.display = "none"
        assuntoOk = true
    }
}
function submit() {
    if (nomeOK == true && emailOK == true && assunto == true) {
        alert("Formulário enviado com sucesso")
    } else {
        alert("Preencha o formulário corretamente")
    }

}

function zoomMap() {
    map.style.width = "700px"
    map.style.height = "550px"

}

function normalMap() {
    map.style.width = "500px"
    map.style.height = "350px"
}
function subject() {
    let subjectValidation = window.document.querySelector("#subjectValidation")
    if (assunto.value.length >= 100) {
        subjectValidation.innerHTML = "Seu texto é muito grande, digite no máximo 99 caracteres"
        subjectValidation.style.color = "red"
        subjectValidation.style.display = "block"
        assuntoOK = false
    } else {
        subjectValidation.style.display = "none"
        assuntoOk = false
    }
}
function submit() {
    if (nomeOK == true && emailOK == true && assunto == true) {
        alert("Formulário enviado com sucesso")
    } else {
        alert("Preencha o formulário corretamente")
    }

}

function zoomMap() {
    map.style.width = "600px"
    map.style.height = "750px"


}

function normalMap() {
    map.style.width = "500px"
    map.style.height = "350px"
}

