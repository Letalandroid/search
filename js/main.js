const contentToSearch = document.getElementById("contentToSearch"),
      search = document.getElementById("search");

let espacio = true;

const buscar = () => {

    for (let i = 0; i < contentToSearch.value.length; i++) {

        if (contentToSearch.value[i] == " ") {

            contentToSearch.value[i] = "+";
            espacio = true;

        } else {

            window.location = `https://www.google.com/search?q=${contentToSearch.value}&sxsrf=APq-WBt7h3MlfLUCIuuy-ErwAId9mgJQ-A%3A1647297808866&source=hp&ei=EMUvYvDpMvuOwbkPz-Wt2Ao&iflsig=AHkkrS4AAAAAYi_TIOjET4cLtQDALntzagp70qr1GctH&ved=0ahUKEwjwsfDF1sb2AhV7RzABHc9yC6sQ4dUDCAc&uact=5&oq=&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECdQtAZYswhgjAloAHAAeACAAc8FiAHPBZIBAzYtMZgBAKABAbABCg&sclient=gws-wiz`;

        }

    }

}

search.addEventListener("click", buscar);
document.addEventListener("keypress", (e) => { if (e.key == "Enter") { buscar() } });