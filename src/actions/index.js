// Types d'action
export const TOGGLE_MODALINSCRIPTION = 'TOGGLE_MODALINSCRIPTION';
export const TOGGLE_MODALCONNEXION = 'TOGGLE_MODALCONNEXION';
export const TOGGLE_BUTTON_PROFIL = "TOGGLE_BUTTON_PROFIL";
export const TOGGLE_ABOUT = "TOGGLE_ABOUT";

// Action creators

export const toggleInscriptionModal = () => ({
  type: TOGGLE_MODALINSCRIPTION,
  
});
export const toggleConnexionModal = () => ({
  type: TOGGLE_MODALCONNEXION,
  
});

export const toggleButtonProfil = () => ({
  type: TOGGLE_BUTTON_PROFIL
});

export const toggleAbout = () => ({
  type: TOGGLE_ABOUT
});
