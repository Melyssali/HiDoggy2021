/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} users - tous les users
 * @param {string} searchedSlug - le slug de la selection recherchée
 * @return {Object} - La liste trouvée
 */
export const filterUsers = (city, race, dog_gender) => {
  const filter = users.map((userSelected) => {
    return userSelected.slug === searchedSlug;
  });
  return filter;
}
