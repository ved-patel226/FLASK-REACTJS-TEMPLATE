from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello_world():
    return "Hello, World!"


@app.route("/api/members")
def members():
    return jsonify(["member1", "member2", "member3"])


if __name__ == "__main__":
    app.run(debug=True)
