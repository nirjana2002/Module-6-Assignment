function checkAge(){
    const ageInput=document.getElementById('ageInput').value;
    const resultCard=document.getElementById('resultCard');

    if (ageInput >= 18) {
        alert('You are an adult');
        
      } else {
        alert('You are a child');
       
      }

      
    
      resultCard.style.display = 'block';
    
}