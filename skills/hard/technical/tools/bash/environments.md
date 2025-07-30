# 🌐 Entorno modular por proyecto con `.env` y `.bashrc`

Este esquema permite definir y activar contextos técnicos personalizados por repositorio, integrando versiones de herramientas, propósitos y narrativas estratégicas.

---

## 📁 Archivo `.env.dev` en cada repositorio

```ini
# Entorno general
env=frontend
mode=dev

# Versiones técnicas
node=24.4.1
python=3.13.3

# Herramientas opcionales
cli=true
docker=false
```

Este archivo debe estar ubicado en la raíz del proyecto y representa su identidad operativa. Puede crecer con variables como `identity`, `purpose`, o incluso `features`.

---

## 🛠️ Fragmento de `.bashrc` para lectura automática de `.env`

```bash
### PYENV CONFIG ###
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

### NVM CONFIG ###
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

### 🔁 DETECCIÓN DE ENTORNO ACTIVO ###
if [ -f "$PWD/.env" ]; then
  source "$PWD/.env"
  export NODE_VERSION=$node
  export PYTHON_VERSION=$python

  # Activación condicional de versiones si están instaladas
  if pyenv versions | grep -q "$PYTHON_VERSION"; then
    pyenv local "$PYTHON_VERSION"
  else
    echo "🚫 Python $PYTHON_VERSION no instalado. Usa: pyenv install $PYTHON_VERSION"
  fi

  if nvm ls | grep -q "v$NODE_VERSION"; then
    nvm use "$NODE_VERSION"
  else
    echo "🚫 Node.js v$NODE_VERSION no instalado. Usa: nvm install $NODE_VERSION"
  fi

  echo "✅ Entorno activado: $env ($mode)"
fi
```

---

## 🎯 Ventajas

- Modularidad por proyecto 🧩
- Activación automática según carpeta 🔁
- Trazabilidad técnica y narrativa 🧠
- Escalabilidad sin conflicto entre entornos ⚙️

---

## 🔮 Siguientes pasos opcionales

- Integrar logs por sesión (`~/.skill_log`)
- Autogenerar `env.js` para frontends
- Validar presencia mínima de variables
- Sincronizar con modelos como `Orbit5`, `Skill Tree` o `Trayectoria Resonante`

---