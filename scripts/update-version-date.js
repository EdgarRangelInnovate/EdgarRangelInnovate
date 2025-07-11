const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packageJsonPath = path.resolve(__dirname, '../package.json');
const versionInfoPath = path.resolve(__dirname, '../version-info.json');

try {
  // 1. Obtener la versión de package.json
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const projectVersion = packageJson.version;

  // 2. Obtener la fecha del último commit (timestamp actual como respaldo o para pre-commit)
  // Usaremos el timestamp actual para la filosofía de "redundancia local" y evitar fetch-depth issues
  const lastUpdateDate = new Date().toISOString().slice(0, 10); // Formato YYYY-MM-DD

  // 3. Crear o actualizar version-info.json
  const versionInfo = {
    version: projectVersion,
    last_update: lastUpdateDate
  };

  fs.writeFileSync(versionInfoPath, JSON.stringify(versionInfo, null, 2) + '\n');
  console.log(`[pre-commit] Updated version-info.json to v${projectVersion} (Date: ${lastUpdateDate})`);

  // 4. Añadir version-info.json al stage para que sea parte del commit actual
  // Esto es crucial para que el archivo actualizado se incluya en el commit
  execSync(`git add ${versionInfoPath}`);
  console.log(`[pre-commit] Added ${path.basename(versionInfoPath)} to git stage.`);

} catch (error) {
  console.error('[pre-commit] Error updating version-info.json:', error);
  // Opcional: Puedes decidir si quieres que el commit falle si esto falla
  process.exit(1);
}