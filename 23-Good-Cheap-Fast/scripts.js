const toggles = document.querySelectorAll('.toggle')
const good = document.querySelectorAll('#good')
const cheap = document.querySelectorAll('#cheap')
const fast = document.querySelectorAll('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne){
    if(good.checked && cheap.checked && fast.checked){
        if(good == theClickedOne){
            fast.checked = false
        }
        if(cheap === theClickedOne){
            good.checked = false
        }
        if(fast === theClickedOne){
            cheap.checked = false
        }
    }
}
