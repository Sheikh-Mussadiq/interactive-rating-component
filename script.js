const form= document.getElementById('form');
const hidden = document.querySelectorAll('.hidden');
const container = document.querySelectorAll('.container');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    updateUI();
})
const updateUI = () => {
    const selected = document.querySelector('input[name="rating"]:checked').value;
    console.log('Selected:', selected);
    document.getElementById('rating').innerHTML = selected;
    container.forEach((el) => el.classList.toggle('hidden'));
}
