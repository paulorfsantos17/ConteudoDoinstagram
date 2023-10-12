function handleToogleChange() {
  const formSignin = document.getElementById('formSingin')
  const buttontogle = document.getElementById('buttonToogle')

  const isActive = formSignin.classList.contains('active')

  if(isActive) {
    formSignin.classList.remove('active') 
    formSignin.classList.add('singin-disabled') 
    buttontogle.classList.remove('button-active')
  } else {
    formSignin.classList.add('active')
    formSignin.classList.remove('singin-disabled') 
    buttontogle.classList.add('button-active')

  }
  
} 