const SCRABBLE = {
    1:["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2:["D", "G"],
    3:["B", "C", "M", "P"],
    4:["F", "H", "V", "W", "Y"],
    5:["K"],
    8:["J", "X"],
    10:["Q", "Z"]
}

const convertMapToObject = aMap => {
    const obj = {};
    aMap.forEach((v,k) => {
        obj[k] = v
    })
    return obj;
}

const format = (input) => {
    return Object.keys(input)
        .map(v => new Map(input[v].map(k => [k.toLowerCase(), parseInt(v.toString())])))
        .map(r => convertMapToObject(r))
        .reduce((prev, current) => ({
    ...prev,
    ...current
}), {})

}
const project = (score, allowed) => {
    return Object.keys(score)
    .filter(key => allowed.includes(key))
    .reduce((obj, key) => {
        obj[key] = score[key]
        return obj
    }, {})
}
export const transform = input => {
    const results = format(SCRABBLE)
    const values = [...Object.values(input)].flat().map(v => v.toLowerCase())
    const filtered = project(results, values)
    return {
        ...filtered
    }
}



