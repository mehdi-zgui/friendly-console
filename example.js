// 🎉 Exemple d'utilisation de Friendly Console

// Méthode 1 : Activation ultra-simple
require('./src/index').enable();


// Logs normaux (peuvent avoir des blagues/citations aléatoires)
console.log('Chargement de l\'application...');
console.log('Connexion à la base de données...');
console.log('Serveur démarré sur le port 3000');

console.log('\n--- Simulation d\'erreurs ---\n');

// Erreurs sympathiques
try {
  throw new TypeError('La variable n\'est pas du bon type');
} catch (error) {
  console.error(error.message);
}

try {
  throw new ReferenceError('Variable non définie');
} catch (error) {
  console.error(error.message);
}

// Warnings
console.warn('La fonction est dépréciée, utilise la nouvelle version');

console.log('\n--- Méthodes manuelles ---\n');

// Récupère l'instance pour utiliser les méthodes
const friendlyConsole = require('./src/index');
const fc = friendlyConsole({
  jokeFrequency: 0.5,
  quoteFrequency: 0.3
});

// Affiche une blague quand tu veux
console.log('Besoin de rire ?');
fc.joke();

console.log('\nBesoin d\'inspiration ?');
fc.quote();

console.log('\nBesoin de motivation ?');
fc.motivate();

console.log('\n=== FIN DE LA DEMO ===');