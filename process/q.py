import json


def clean_line(line):
    return line.replace('["', '').replace('"]', '').replace(u'\u201c', '"').replace(u'\u201d', '"').replace(u'\u2013', "-").replace(u'\u2014', "-").replace(u'\u2018', "'").replace(u'\u2019', "'").strip().split('", "')


collection = []

with open("q.txt") as file:
    for line in file:
        line = clean_line(line)
        collection.append({
            "author": line[1],
            "quote": line[0]
        })

with open("q.json", "w") as jsonFile:
    json.dump(collection, jsonFile)
