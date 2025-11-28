const errorPrefixes = [
    "🚨 Oups ! Houston, nous avons un problème :",
    "💥 Attention, un bug sauvage apparaît :",
    "🔥 Ça chauffe par ici ! Erreur détectée :",
    "⚠️ Alerte rouge ! Quelque chose ne va pas :",
    "🐛 Un petit malin s'est glissé dans le code :",
    "❌ Echec critique (mais on reste zen) :",
    "🤦 Même les meilleurs font des erreurs :",
    "💔 Ton code a besoin d'un câlin... et d'un fix :",
    "🎯 Raté ! Mais c'est pas grave, on réessaie :",
    "🚧 Travaux en cours... ou plutôt, erreur en cours :",
    "🎪 Le cirque du code présente : UNE ERREUR !",
    "🌪️ Tempête détectée dans le code :",
    "🎲 Mauvais lancer de dés... Erreur :",
    "📛 Badge d'erreur débloqué :",
    "🎬 CUT ! Il y a une erreur dans cette scène :"
  ];
  
  const errorSuffixes = [
    "Prends un café et réessaie ! ☕",
    "Ctrl+Z est ton ami. 🔄",
    "Respire, tu vas y arriver ! 💪",
    "Stack Overflow saura sûrement... 🔍",
    "C'est l'occasion de briller ! ✨",
    "Chaque erreur est une leçon. 📚",
    "Tu es à un console.log de la solution ! 🎯",
    "Courage, le débogage c'est 90% du métier ! 🛠️",
    "Pense à commit avant de tout casser... oh wait. 💾",
    "N'oublie pas : même Google a des bugs ! 🌐"
  ];
  
  const errorEmojis = {
    TypeError: "🔤",
    ReferenceError: "🔍",
    SyntaxError: "📝",
    RangeError: "📊",
    URIError: "🌐",
    EvalError: "⚠️",
    Error: "❗"
  };
  
  module.exports = {
    errorPrefixes,
    errorSuffixes,
    errorEmojis
  };