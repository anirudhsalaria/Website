from flask import Flask, render_template, url_for, request, redirect

app = Flask(__name__, static_folder="./static")

@app.route("/", methods=('GET', 'POST'))
def index():
    if request.method == 'POST':
        name = request.form["name"]
        print(name)
        return redirect('match.html')
        
    return render_template("index.html")


# FORM DATA
@app.route('/match', methods=('GET', 'POST'))
def create():
    if request.method == 'POST':
        name = request.form["name"]
        print(name)
        return render_template('match.html')