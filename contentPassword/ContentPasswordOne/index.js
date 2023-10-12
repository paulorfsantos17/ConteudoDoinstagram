function toogleTypeInput() {
  const inputPassword = document.getElementById('password') 
  const button  = document.getElementById('button')  
  
  if(inputPassword.type === 'password') {
      inputPassword.type = "text"
      button.classList.remove('isActive')
    } else {
      inputPassword.type = "password"
      button.classList.add('isActive')
    }
  }
