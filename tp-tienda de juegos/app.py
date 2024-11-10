from flask import Flask, render_template, request, redirect, url_for
import sqlite3

app = Flask(__name__)  # Flask busca por defecto las plantillas en la carpeta "templates"

# Configuración de la base de datos
def init_db():
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    username TEXT NOT NULL,
                    password TEXT NOT NULL
                )''')
    conn.commit()
    conn.close()

# Ruta para la página de inicio
@app.route('/')
def index():
    return redirect(url_for('registro'))  # Redirige a la página de registro

# Ruta para mostrar y procesar el formulario de registro
@app.route('/registro', methods=['GET', 'POST'])
def registro():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        # Guardar usuario en la base de datos
        conn = sqlite3.connect('users.db')
        c = conn.cursor()
        c.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, password))
        conn.commit()
        conn.close()
        
        return redirect(url_for('registro_exitoso'))
    
    return render_template('registro.html')  # Aquí Flask busca "registro.html" en la carpeta "templates"

# Ruta para mostrar un mensaje de éxito
@app.route('/registro_exitoso')
def registro_exitoso():
    return "¡Registro exitoso!"

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
