
export const cadets = {
    phase1: {},
    phase2: {},
    phase3: {},
    support: {},
}
/**
 * @typedef {Object} CadetData
 * @property {string} last_name
 * @property {string} first_name
 * @property {'OC' | 'AC' | 'LC' | 'MC' | 'PO2' | 'PO1' | 'CPO2' | 'CPO1' } rank_en
 * @property {'cdt3' | 'cdt2' | 'cdt1' | 'cdtc' | 'm2' | 'm1' | 'pm2' | 'pm1' } [rank_fr]
 * 
 */

const englishFrenchRank = {
    'OC': 'cdt3',
    'AC': 'cdt2',
    'LC': 'cdt1',
    'MC': 'cdtc',
    'PO2': 'm2',
    'PO1': 'm1',
    'CPO2': 'pm2',
    'CPO1': 'pm1'
}
class Cadets {
    /**
     * 
     * @param {CadetData[]} allCadetsData 
     */
    constructor(allCadetsData) {
        for (let i = 0; i < allCadetsData.length; i++) {
            this.value[i] = allCadetsData[i]
            this.value[i].rank_fr = englishFrenchRank[allCadetsData[i].rank_en]
        }
    }
    /** @type {CadetData[]} */
    value = []
}

const phase3HuronData = JSON.parse(`
[{"last_name":"Boisclair","first_name":"Yuri","rank_en":"OC"},{"last_name":"Cao","first_name":"Siyuan","rank_en":"OC"},{"last_name":"Lai","first_name":"Joanna","rank_en":"MC"},{"last_name":"Li","first_name":"Mo Han Jeremy","rank_en":"MC"},{"last_name":"Vincelli","first_name":"Alba","rank_en":"OC"},{"last_name":"Wang","first_name":"Merridy","rank_en":"OC"},{"last_name":"Wei","first_name":"Erqi","rank_en":"MC"},{"last_name":"Xia","first_name":"Michael","rank_en":"MC"},{"last_name":"Xu","first_name":"Haoyan","rank_en":"MC"},{"last_name":"Yang","first_name":"Victor-Yang","rank_en":"MC"},{"last_name":"You","first_name":"Dun Yi","rank_en":"OC"},{"last_name":"Zhan","first_name":"Allen","rank_en":"MC"}]
`)

const phase3NanaimoData = JSON.parse(`
[{"last_name":"Dam","first_name":"Jassie","rank_en":"OC"},{"last_name":"Fanmi","first_name":"Astrid","rank_en":"AC"},{"last_name":"Han","first_name":"Yumo","rank_en":"LC"},{"last_name":"Huang","first_name":"Linxi","rank_en":"LC"},{"last_name":"Huang","first_name":"Xian Da Henry","rank_en":"MC"},{"last_name":"Liu","first_name":"Yihan","rank_en":"MC"},{"last_name":"Mederos Homem","first_name":"Joao Paulo","rank_en":"OC"},{"last_name":"Nan","first_name":"Hélène","rank_en":"MC"},{"last_name":"Sagna","first_name":"Henriette Marie Lourdes Safi","rank_en":"MC"},{"last_name":"Shao","first_name":"Yichen Cally","rank_en":"MC"},{"last_name":"Sun","first_name":"Weiqi Eric","rank_en":"LC"},{"last_name":"Zhang","first_name":"Shaohang","rank_en":"MC"},{"last_name":"Xu","first_name":"Cecilia","rank_en":"MC"},{"last_name":"Xu","first_name":"Yike","rank_en":"MC"},{"last_name":"Xu","first_name":"Chenfei","rank_en":"MC"},{"last_name":"Xue","first_name":"Jing Wu","rank_en":"MC"},{"last_name":"Zhu","first_name":"Yuchen","rank_en":"MC"}]
`)

const phase3HuronStaff = [
    {
        last_name: 'Xiang',
        first_name: 'Helen',
        rank_en: 'PO1',
        rank_fr: 'm1'
    },
    {
        last_name: 'Chen',
        first_name: 'Alexia',
        rank_en: 'PO2',
        rank_fr: 'm2'
    },
    {
        last_name: 'Zhu',
        first_name: 'Shiwei',
        rank_en: 'PO2',
        rank_fr: 'm2'
    },
    
]

const phase3NanaimoStaff = [
    {
        last_name: 'Haouzi',
        first_name: 'Nada',
        rank_en: 'PO1',
        rank_fr: 'm1'
    },

    {
        last_name: 'Sengupta',
        first_name: 'Rohan',
        rank_en: 'PO2',
        rank_fr: 'm2'
    },
    {
        last_name: 'Xia-Wong',
        first_name: 'Helene',
        rank_en: 'PO2',
        rank_fr: 'm2'
    },
    
]


cadets.phase3 = {
    huron: {},
    nanaimo: {},
}

cadets.phase3.huron = {
    cdt: new Cadets(phase3HuronData),
    seniorCdt: new Cadets(phase3HuronStaff),
}

cadets.phase3.nanaimo = {
    cdt: new Cadets(phase3NanaimoData),
    seniorCdt: new Cadets(phase3NanaimoStaff),
}
