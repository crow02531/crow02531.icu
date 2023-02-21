class MemAA {

    static #DATABASE = [
        ["甘氨酸", "Gly", "G"],
        ["丙氨酸", "Ala", "A"],
        ["缬氨酸", "Val", "V"],
        ["亮氨酸", "Leu", "L"],
        ["异亮氨酸", "Ile", "I"],
        ["苯丙氨酸", "Phe", "F"],
        ["甲硫氨酸", "Met", "M"],
        ["脯氨酸", "Pro", "P"],
        ["色氨酸", "Trp", "W"],
        ["丝氨酸", "Ser", "S"],
        ["苏氨酸", "Thr", "T"],
        ["天冬酰胺", "Asn", "N"],
        ["谷氨酰胺", "Gln", "Q"],
        ["酪氨酸", "Tyr", "Y"],
        ["半胱氨酸", "Cys", "C"],
        ["天冬氨酸", "Asp", "D"],
        ["谷氨酸", "Glu", "E"],
        ["组氨酸", "His", "H"],
        ["赖氨酸", "Lys", "K"],
        ["精氨酸", "Arg", "R"]
    ]

    #url_template

    #question
    #question_i
    #options
    #answer

    constructor(urlTemplate) {
        this.#url_template = urlTemplate
    }

    static #rndInt(x) {
        return Math.floor(Math.random() * x)
    }

    static #genRawOpts(answer, i) {
        const l = MemAA.#DATABASE.length
        let r = [answer]

        while(true) {
            let s = MemAA.#rndInt(l)
            if(!r.includes(s) && r.push(s) == 4) break
        }

        r[0] = r[i]
        r[i] = answer

        return r
    }

    question() {
        return this.#question
    }

    options() {
        return this.#options
    }

    answer() {
        return this.#answer
    }

    next() {
        const db = MemAA.#DATABASE
        let new_q_i, new_q_t, new_q, new_opts, new_a

        do {
            new_q_i = MemAA.#rndInt(db.length)
        } while(new_q_i == this.#question_i)
        new_q_t = MemAA.#rndInt(4)
        new_a = MemAA.#rndInt(4)
        new_opts = MemAA.#genRawOpts(new_q_i, new_a)

        if(new_q_t == 3) {
            new_q = `<img src=\"${this.#url_template.replace("?", db[new_q_i][1].toLowerCase())}\"><br>名叫`
            new_opts.forEach((e, i) => {
                new_opts[i] = db[e][MemAA.#rndInt(3)]
            })
        } else {
            new_q = db[new_q_i][new_q_t]

            if(MemAA.#rndInt(2) == 0) {
                new_q += "的结构是"
                new_opts.forEach((e, i) => {
                    new_opts[i] = `<img src=\"${this.#url_template.replace("?", db[e][1].toLowerCase())}\">`
                })
            } else {
                new_q += "又称"
                new_opts.forEach((e, i) => {
                    new_opts[i] = db[e][(MemAA.#rndInt(2) + 1 + new_q_t) % 3]
                })
            }
        }

        this.#question = new_q
        this.#question_i = new_q_i
        this.#options = Object.freeze(new_opts)
        this.#answer = new_a
    }
}