document.querySelectorAll('.skillImg1H, .skillImg2H, .skillImg3H').forEach((element) => {
    element.addEventListener('click', () => {
        element.classList.add('hidden');
    });
});
