const jokes = require('./jokes');
const quotes = require('./quotes');
const { errorPrefixes, errorSuffixes, errorEmojis } = require('./errorMessages');

class FriendlyConsole {
  constructor(options = {}) {
    this.options = {
      enableJokes: options.enableJokes !== false,
      enableQuotes: options.enableQuotes !== false,
      enableFriendlyErrors: options.enableFriendlyErrors !== false,
      jokeFrequency: options.jokeFrequency || 0.3, // 30% chance
      quoteFrequency: options.quoteFrequency || 0.2, // 20% chance
      alwaysShowOriginal: options.alwaysShowOriginal !== false,
      customJokes: options.customJokes || [],
      customQuotes: options.customQuotes || [],
      ...options
    };

    this.allJokes = [...jokes, ...this.options.customJokes];
    this.allQuotes = [...quotes, ...this.options.customQuotes];

    // Sauvegarder les méthodes originales
    this.originalLog = console.log.bind(console);
    this.originalError = console.error.bind(console);
    this.originalWarn = console.warn.bind(console);
    this.originalInfo = console.info.bind(console);
  }

  getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  shouldInject(frequency) {
    return Math.random() < frequency;
  }

  init() {
    // Intercepter console.log
    console.log = (...args) => {
      if (this.options.enableJokes && this.shouldInject(this.options.jokeFrequency)) {
        this.originalLog('🎉', this.getRandomItem(this.allJokes));
      }
      
      if (this.options.enableQuotes && this.shouldInject(this.options.quoteFrequency)) {
        this.originalLog('💬', this.getRandomItem(this.allQuotes));
      }

      this.originalLog(...args);
    };

    // Intercepter console.error
    console.error = (...args) => {
      if (this.options.enableFriendlyErrors) {
        const prefix = this.getRandomItem(errorPrefixes);
        const suffix = this.getRandomItem(errorSuffixes);
        
        // Détecter le type d'erreur
        let errorType = 'Error';
        const errorString = args.join(' ');
        
        for (const type in errorEmojis) {
          if (errorString.includes(type)) {
            errorType = type;
            break;
          }
        }

        this.originalError('\n' + '='.repeat(60));
        this.originalError(prefix);
        this.originalError(errorEmojis[errorType], ...args);
        this.originalError(suffix);
        this.originalError('='.repeat(60) + '\n');
      } else {
        this.originalError(...args);
      }
    };

    // Intercepter console.warn
    console.warn = (...args) => {
      if (this.options.enableFriendlyErrors) {
        this.originalWarn('⚡ Hey, petit avertissement ici :', ...args);
      } else {
        this.originalWarn(...args);
      }
    };

    return this;
  }

  restore() {
    console.log = this.originalLog;
    console.error = this.originalError;
    console.warn = this.originalWarn;
    console.info = this.originalInfo;
  }

  // Méthode pour afficher une blague à la demande
  joke() {
    this.originalLog('🎉', this.getRandomItem(this.allJokes));
  }

  // Méthode pour afficher une citation à la demande
  quote() {
    this.originalLog('💬', this.getRandomItem(this.allQuotes));
  }

  // Méthode pour afficher une motivation
  motivate() {
    const motivation = [
      "💪 Tu peux le faire ! Continue comme ça !",
      "🚀 Ton code va déchirer !",
      "🌟 Tu es un(e) dev incroyable !",
      "🎯 Focus, tu es presque au bout !",
      "☕ Peut-être une pause café ? Tu le mérites !",
      "🧠 Ton cerveau est ton meilleur outil !",
      "🎨 Code is art, et tu es un(e) artiste !",
      "⚡ L'énergie est là, fonce !"
    ];
    this.originalLog(this.getRandomItem(motivation));
  }
}

// Export pour utilisation simple
function friendlyConsole(options) {
  const fc = new FriendlyConsole(options);
  fc.init();
  return fc;
}

// Méthode simple d'activation
friendlyConsole.enable = (options) => friendlyConsole(options);

module.exports = friendlyConsole;
module.exports.FriendlyConsole = FriendlyConsole;