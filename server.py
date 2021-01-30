#!flask/bin/python
import json

from flask import Flask, jsonify
from flask import request
import sqlite3
app = Flask(__name__)


@app.route('/data', methods=['GET'])
def get_tasks():
    offset = int(request.args.get('offset', '0'))
    limit = int(request.args.get('limit', '1'))
    con = sqlite3.connect('identifier.sqlite')
    cur = con.cursor()
    cur.execute('SELECT * FROM feeds')
    data = cur.fetchmany(limit)
    response = []
    for i, line in enumerate(data):
        response.append({})
        response[i]['id'] = line[0]
        for key, val in json.load(open('marked/' + line[-1])).items():
            response[i][key] = val
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)