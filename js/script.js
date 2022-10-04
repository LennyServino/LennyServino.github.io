let menuVisible = false;
//Funcio para mostrar y ocultar el menu
function mostrarOcultarMenu() 
{
    if(menuVisible)
    {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }
    else
    {
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}