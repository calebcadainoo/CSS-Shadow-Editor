document.querySelectorAll('input').forEach(input =>{
    input.addEventListener('input', inputChanged)
    console.log('input loaded')
})

function inputChanged(e){
    document.documentElement.style.setProperty(
        `--${e.target.name}`,
        e.target.value
    )
}