

function clickfunction(select){

  const button = document.querySelector(select);
    if(!button.classList.contains('is-toggled')){
      button.classList.add('is-toggled');
    }
    else{
      button.classList.remove('is-toggled');
    }
 
  }