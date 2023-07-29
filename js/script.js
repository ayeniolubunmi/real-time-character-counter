const textArea1 = document.getElementById('textArea');
const totalCounterE1 = document.getElementById('total-counter');
const remainingCounterE1 = document.getElementById('remaining-counter')

textArea1.addEventListener('keyup',()=>{
    updateCounter()
})

function updateCounter(){
    totalCounterE1.textContent = textArea1.value.length
    remainingCounterE1.textContent = textArea1.getAttribute("maxlength")-textArea1.value.length;
}
