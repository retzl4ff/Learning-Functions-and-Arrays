function newButton(text, callback){
    const $body = document.querySelector('body')
    const $button = document.createElement('button')
    $button.textContent = text

    callback($button)

    $body.insertAdjacentElement('beforeend', $button)

    return $button
}

newButton('Login', (button) => {
    button.style.cssText = `
        font-size: 100px
    `
})
newButton('Signup',() => {
    console.log('Funcionou!, estamos dentro da função newButton - Sign Up')
})
