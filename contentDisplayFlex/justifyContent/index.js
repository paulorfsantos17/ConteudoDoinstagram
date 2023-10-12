function handleToogleJustifyFlex(type) {
  const contentFlex = document.getElementById('contentFlex')
  const contentButton = document.getElementById('contentButton')

  const childrensContentButton = contentButton.children
  handleDisableButton(childrensContentButton)
  childrensContentButton[type].classList.add('active')


  const classListFlex = contentFlex.classList
  contentFlex.classList.remove(classListFlex[1])

  switch (type) {
    case '0':
      contentFlex.classList.add('justify-start')
      break;
    case '1':
      contentFlex.classList.add('justify-center')
      break;
    case '2':
      contentFlex.classList.add('justify-end')
      break;
    case '3':
      contentFlex.classList.add('justify-around')
      break;
    case '4':
      contentFlex.classList.add('justify-between')
      break;
    case '5':
      contentFlex.classList.add('justify-evenly')
      break;
  }
}

function handleDisableButton(arrayButton) {
  for (let i = 0; i < arrayButton.length; i++) {
    // Realize as ações desejadas com cada elemento filho
    const isActive= arrayButton[i].classList.contains("active")
    isActive ? arrayButton[i].classList.remove("active") : null
  }
}