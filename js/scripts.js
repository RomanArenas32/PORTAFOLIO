const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-colors");

const rootStyles = document.documentElement.style; //seleccion de todas las variables de colores en css

//const flagsElement = document.getElementById("flags");

/*const changeLanguage = async language =>{
    const requestJson = await fetch(`../languages/${language}.json`)
    console.log(requestJson);
    const texts = await requestJson.json();

    
}

flagsElement.addEventListener("click", (e)=>{
    changeLanguage(e.target.parentElement.dataset.language);
})*/ 
//pendiente boton cambio de lenguaje

toggleTheme.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(toggleIcon.src.includes("moon.svg")){
        toggleIcon.src = "assets/icons/sun.svg";
        toggleText.textContent = "Ligth Mode";
        document.body.classList.add("ligth");
    } else{
        toggleIcon.src = "assets/icons/moon.svg";
        toggleText.textContent = "Dark Mode";
        document.body.classList.remove("ligth");
    }
});


toggleColors.addEventListener("click", (e)=>{
    rootStyles.setProperty("--primary-color", e.target.dataset.color); //envia la propiedad con el nuevo color a cambiar 
})