 function makeCures() {
    str = "[";
    str += '{ "name": "супрастин", "symp": "аллерг" }'
    str += ', { "name": "дротаверин", "symp": "гастрит" }'
    str += ', { "name": "мезим", "symp": "живот" }'
    str += ', { "name": "линекс", "symp": "тошн" }'
    str += ', { "name": "гастал", "symp": "изжога" }'
    str += ', { "name": "риофлора", "symp": "понос" }'
    str += ']'
    return JSON.parse(str);
}