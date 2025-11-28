const friendlyConsole = require('../src/index');

console.log('🧪 Tests de Friendly Console\n');

// Test 1: Activation basique
console.log('Test 1: Activation basique');
const fc = friendlyConsole.enable({
  jokeFrequency: 1, // Force l'affichage pour le test
  quoteFrequency: 1
});
console.log('Ce message devrait avoir une blague et une citation au-dessus');
console.log('');

// Test 2: Erreur sympathique
console.log('Test 2: Message d\'erreur sympathique');
console.error('Ceci est une erreur de test');
console.log('');

// Test 3: Warning
console.log('Test 3: Warning sympathique');
console.warn('Ceci est un warning de test');
console.log('');

// Test 4: Méthodes manuelles
console.log('Test 4: Méthodes manuelles');
fc.joke();
fc.quote();
fc.motivate();
console.log('');

// Test 5: Restauration
console.log('Test 5: Restauration de la console normale');
fc.restore();
console.log('Ce message ne devrait PAS avoir de blagues');
console.error('Cette erreur devrait être normale');
console.log('');

// Test 6: Configuration personnalisée
console.log('Test 6: Blagues personnalisées');
const fc2 = friendlyConsole({
  jokeFrequency: 1,
  customJokes: ['🎯 MA BLAGUE PERSO !'],
  enableQuotes: false,
  enableFriendlyErrors: false
});
console.log('Test avec blague perso');
fc2.restore();
console.log('');

console.log('✅ Tous les tests visuels terminés !');
console.log('👀 Vérifie que les sorties correspondent aux attentes.');