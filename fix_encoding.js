const fs = require('fs');
let data = fs.readFileSync('app.js', 'utf8');

// Replace the weird string before "Sinais de alerta"
data = data.replace(/<div class="resultado-alert-title">.*?Sinais de alerta identificados:<\/div>/g, '<div class="resultado-alert-title">🚨 Sinais de alerta identificados:</div>');
// Replace the weird stars string
data = data.replace(/<div class="stars text-center mt-1" style="font-size: 0\.9rem;">.*?<\/div>/g, '<div class="stars text-center mt-1" style="font-size: 0.9rem;">⭐⭐⭐⭐⭐</div>');

fs.writeFileSync('app.js', data, 'utf8');
console.log('Fixed app.js emojis!');
