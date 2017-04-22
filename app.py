import os
from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def main():
    return render_template('index.html', env=os.environ['PYTHON_ENV'])


if __name__ == "__main__":
    print(__name__)
    app.run()
