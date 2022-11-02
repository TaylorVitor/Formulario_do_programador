
function saveInfo() {
    let name = document.querySelector("input[name='name']").value
    let age = document.querySelector("input[name='age']").value
    let email = document.querySelector("input[name='email']").value
    let passwords = document.querySelector("input[name='passwords']").value
    let likeProgram = document.querySelector("input[name='like-program']:checked").value
    let jobBrowsing = document.querySelector("input[name='jobBrowsing']:checked").value
    let languagesDevelop = document.querySelectorAll("input[name='languages-develop']:checked")
    let college = document.querySelector("select[name='college'] option:checked").value
    let optionLanguages = []
    languagesDevelop.forEach(Element => {optionLanguages.push(Element.value)})
    let checkedOptions = optionLanguages.join(", ")

    alert("Seu nome é: " + name + "\nSua idade é: " + age + "\nSeu email: " + email + "\nSenha: " + "*********" +
    "\nGosta de programar? " + likeProgram + "\nEsta prcurando emprego? " + jobBrowsing + "\nLinguagens que você gosta: " + 
    checkedOptions + "\nNível escolar: " + college)
}