
const jumpToPage = page => {
  [...document.getElementsByTagName('section')].forEach(
    el => el.classList.add("hidden")
  );
  console.log(`.${page.toLowerCase()}`)
  document.querySelector(`.${page.toLowerCase()}`).classList.remove("hidden");
}

const handleClick = e => {
  if( e.target.matches('.listItem') )
    jumpToPage(e.target.innerText);
}

const init = () => {
  setTimeout(removeLoading, 850);

  jumpToPage('landing');

  document.addEventListener('click', handleClick, false);
  
  function removeLoading(){
    document.querySelector('.loading').style.top = "-100vh";
    console.log(document.querySelector('.loading'))
  }
  
}

onload = init;