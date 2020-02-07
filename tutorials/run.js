onload = () => {

    const cards = [ ... document.getElementsByClassName("w3-card") ];
    
    cards.forEach( card => {
      
      let button = document.createElement("button");
      
      button.innerText = "RUN";
      
      card.style.position = "relative";
      
      button.style.position = "absolute";
      
      button.style.top = "1em";
      
      button.style.right = "1em";
      
      button.onclick = () => {
      
        output.innerText = "";
      
        let snippet = card.getElementsByClassName("w3-code")[0].innerText;
        
        new Function(snippet)();
      
      }
      
      card.appendChild(button);
      
    });
  
  }
