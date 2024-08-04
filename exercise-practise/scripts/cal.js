let totalvalue = localStorage.getItem('totalvalue')|| '';
  


    function selectkey(keyvalue){
        totalvalue+=keyvalue;
        display();
        localStorage.setItem('totalvalue',totalvalue);
    

    }


    function display(){
         
      document.querySelector('.text-type').innerHTML = totalvalue; 
       
    }

  