const elements = document.querySelectorAll('.elemento');

elements.forEach(element=>{
    element.addEventListener('click',()=>{
        let command = element.dataset['element']
        document.execCommand(command,false,null);
    });
});