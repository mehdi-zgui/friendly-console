# 🎉 Friendly Console

Transforme tes logs ennuyeux en moments de joie ! Ajoute des blagues, citations motivantes et messages d'erreur sympathiques à ta console. Parce que développer doit rester fun ! 😄

## ✨ Fonctionnalités

- 🎭 **Blagues aléatoires** injectées dans tes logs
- 💬 **Citations inspirantes** pour rester motivé
- 🚨 **Messages d'erreur sympathiques** et constructifs
- ⚙️ **Totalement configurable**
- 🎨 **Ajoute tes propres blagues et citations**
- 🔧 **Facile à activer/désactiver**

## 📦 Installation

```bash
npm install @zguigou-elmehdi/friendly-console
```

## 🚀 Utilisation rapide

```javascript
// Active tout en une ligne !
require('@zguigou-elmehdi/friendly-console').enable();

// Utilise console.log normalement
console.log('Hello World');
// Peut afficher une blague ou citation aléatoire avant ton message !

// Les erreurs deviennent sympathiques
console.error('Something went wrong');
// 🚨 Oups ! Houston, nous avons un problème :
// ❌ Something went wrong
// Respire, tu vas y arriver ! 💪
```

## 🎯 Configuration avancée

```javascript
const friendlyConsole = require('@zguigou-elmehdi/friendly-console');

const fc = friendlyConsole({
  enableJokes: true,           // Activer les blagues
  enableQuotes: true,           // Activer les citations
  enableFriendlyErrors: true,   // Activer les erreurs sympathiques
  jokeFrequency: 0.3,           // 30% de chance (0 à 1)
  quoteFrequency: 0.2,          // 20% de chance (0 à 1)
  
  // Ajoute tes propres blagues !
  customJokes: [
    "Ma propre blague de dev ! 😄"
  ],
  
  // Ajoute tes propres citations !
  customQuotes: [
    "« Ma citation préférée » - Moi"
  ]
});

// Affiche une blague à la demande
fc.joke();

// Affiche une citation à la demande
fc.quote();

// Besoin de motivation ?
fc.motivate();

// Désactiver quand tu veux
fc.restore();
```

## 🎮 Méthodes disponibles

### `friendlyConsole.enable(options)`
Active le friendly console avec options optionnelles.

### `joke()`
Affiche une blague aléatoire immédiatement.

### `quote()`
Affiche une citation aléatoire immédiatement.

### `motivate()`
Affiche un message de motivation.

### `restore()`
Restaure le console.log original.

## 🎨 Exemples

### Mode développement seulement

```javascript
if (process.env.NODE_ENV === 'development') {
  require('@zguigou-elmehdi/friendly-console').enable({
    jokeFrequency: 0.5  // Plus de blagues en dev !
  });
}
```

### Uniquement les erreurs sympathiques

```javascript
require('@zguigou-elmehdi/friendly-console').enable({
  enableJokes: false,
  enableQuotes: false,
  enableFriendlyErrors: true
});
```

### Blagues personnalisées

```javascript
require('@zguigou-elmehdi/friendly-console').enable({
  customJokes: [
    "Mon équipe a 10 développeurs : moi et 9 Stack Overflow tabs ! 😂",
    "Je code en production le vendredi, je vis dangereusement ! 🔥"
  ]
});
```

## 🤝 Contribuer

Les contributions sont les bienvenues ! N'hésite pas à :
- Ajouter plus de blagues
- Ajouter plus de citations
- Améliorer les messages d'erreur
- Corriger des bugs

## 📝 License

MIT

## ❤️ Pourquoi ce package ?

Parce que développer peut être stressant, et un peu d'humour fait du bien ! Ce package est là pour te faire sourire pendant tes longues sessions de code. 

Happy coding! 🚀✨