const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");
arrows.forEach((arrow, i) => {
    const itemNumber=movieList[i].querySelectorAll('img').length;
   let clickCounter=0;
   const ratio=Math.floor(window.innerWidth/270);
  arrow.addEventListener("click", () => {
      clickCounter++;
      if(itemNumber-(3+clickCounter)+(3-ratio)>=0){
    movieList[i].style.transform = `translateX(${
      movieList[i].computedStyleMap().get("transform")[0].x.value - 300
    }px)`;
}
else{
    movieList[i].style.transform= "translateX(0)";
    clickCounter=0;
}
  });
});
const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".container,.movie-list-title,.navbar,.navbar-container,.sidebar ,.left-menu-icon,.toggle,.toggle-ball ");
ball.addEventListener("click",()=>{
    items.forEach(item=>{
         item.classList.toggle("active");
    })
})
