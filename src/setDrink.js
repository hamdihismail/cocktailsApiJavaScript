const setDrink = (section) => {
  section.addEventListener('click', function (e) {
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    // JSON.stringify can be ommited here since its just numbers
    localStorage.setItem('drink', id);
  });
};

export default setDrink;
