function newButton(text,callback){
    const $body = document.querySelector('body')
    const $button = document.createElement('button')
    $button.textContent = text

    callback()
    
    $body.insertAdjacentElement("beforeend", $button)
}

newButton('login',(button) => {
    console.log('Olá!')
})
