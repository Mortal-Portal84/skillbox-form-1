const favoriteButtonList = document.querySelectorAll('.catalog-card__btn-like')

favoriteButtonList.forEach((button) => {
  button.addEventListener('click', () => {
    const catalogCard = button.closest('.catalog-card')

    if (catalogCard) {
      catalogCard.classList.toggle('catalog-card--favorite')
    }
  })
})
