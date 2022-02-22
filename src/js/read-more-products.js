const allButtons = document.querySelectorAll('.Btn');

    allButtons.forEach(function(btn){
        btn.addEventListener('click', myFunction);
    });
    
    function myFunction(){
        const allBtns = document.querySelectorAll(".Btn");
        const allMin = document.querySelectorAll(".min");
        const allMax = document.querySelectorAll(".max");

        const BtnText = allBtns[[...allBtns].indexOf(this)];
        const min = allMin[[...allBtns].indexOf(this)];
        const maxText = allMax[[...allBtns].indexOf(this)];

        if(min.style.display === "none"){
            min.style.display = "inline";
            maxText.style.display = "none";
        } else{
            min.style.display = "none";
            maxText.style.display = "inline";
        }  
    }