const fs = require('fs');

const files = ['app.js', 'server.js', 'terminos.html', 'index.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        // Replace corrupted 'Método' patterns
        content = content.replace(/M\ufffdtodo/g, 'Método');
        content = content.replace(/Mtodo/g, 'Método');
        // In case it's ANSI read as UTF-8 (which produces \ufffd for 0xe9)
        // Check for other common corruptions
        content = content.replace(/MÃ©todo/g, 'Método');
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed ${file}`);
    }
});
