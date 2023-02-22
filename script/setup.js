import { getLocationParm } from "./urlparser.js"
const API_URL = "https://script.google.com/macros/s/AKfycbxzA8lVK1Qn8Tbv4jxmYehvxkN5LoP_zYFIboY1Pu0G_rXgHsIh4KYN-O5Tku0X1Duq/exec";

/**
 * @param {HTMLTableElement} table_tag 
 * @param {string[][]} array 
 * @param {boolean} noheader 
 */
function arr2table(table_tag, array, noheader) {
    if (noheader == undefined) noheader = false;

    array.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(text => {
            if (!noheader) {
                const th = document.createElement("th");
                th.innerHTML = text;
                tr.appendChild(th);
            } else {
                const td = document.createElement("td");
                td.innerHTML = text;
                tr.appendChild(td);
            }
        });
        
        table_tag.appendChild(tr);
        if (!noheader) noheader = true;
    });
}

async function main() {
    var chara = getLocationParm()['chara'];
    if (chara == undefined) chara = "タルタリヤ";
    var res = await (await fetch(API_URL + '?chara=' + chara)).json();
    const d = res["charas"][chara];
    const items = [
        "モラ",          // 0
        d["BOSS素材"],   // 1
        d["強敵素材"],   // 2
        "大英雄の経験",  // 3
        "冒険家の経験",  // 4
        "流浪者の経験",  // 5
        d["宝石1"],      // 6
        d["宝石2"],      // 7
        d["宝石3"],      // 8
        d["宝石4"],      // 9
        d["特産素材"],   // 10
        d["魔物素材1"],  // 11
        d["魔物素材2"],  // 12
        d["魔物素材3"],  // 13
        "「" + d["天賦素材"] + "」の教え",  // 14
        "「" + d["天賦素材"] + "」の導き",  // 15
        "「" + d["天賦素材"] + "」の哲学",  // 16
        "知恵の冠"       // 17
    ];
    res = await (await fetch(API_URL + '?item=' + encodeURIComponent(items.join(',')))).json();
    const i = res["items"]

    const talent_table = document.getElementById("talent-table");
    const talent_data = [
        [
            "天賦",
            "<img src=\"img/Item_Mora.webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[11]]["画像id(HoneyImpact)"] + ".webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[12]]["画像id(HoneyImpact)"] + ".webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[13]]["画像id(HoneyImpact)"] + ".webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[14]]["画像id(HoneyImpact)"] + ".webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[15]]["画像id(HoneyImpact)"] + ".webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[16]]["画像id(HoneyImpact)"] + ".webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[2]]["画像id(HoneyImpact)"] + ".webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/i_491.webp\">"
        ],
        [    "2",   "13k", "6",   "",   "", "3",   "",   "",  "", "" ],
        [    "3",   "30k", "6",  "3",   "", "3",  "2",   "",  "", "" ],
        [    "4",   "55k", "6",  "7",   "", "3",  "6",   "",  "", "" ],
        [    "5",   "85k", "6", "13",   "", "3", "12",   "",  "", "" ],
        [    "6",  "123k", "6", "22",   "", "3", "21",   "",  "", "" ],
        [    "7",  "243k", "6", "22",  "4", "3", "21",  "4", "1", "" ],
        [    "8",  "503k", "6", "22", "10", "3", "21", "10", "2", "" ],
        [    "9",  "953k", "6", "22", "19", "3", "21", "22", "4", "" ],
        [   "10", "1.65M", "6", "22", "31", "3", "21", "38", "6", "1"]
    ];
    arr2table(talent_table, talent_data);
    
    const ascension_table = document.getElementById("ascension-table")
    const ascension_data = [
        [
            "突破",
            "<img src=\"img/Item_Mora.webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[6]]["画像id(HoneyImpact)"] + ".webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[7]]["画像id(HoneyImpact)"] + ".webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[8]]["画像id(HoneyImpact)"] + ".webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[9]]["画像id(HoneyImpact)"] + ".webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[11]]["画像id(HoneyImpact)"] + ".webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[12]]["画像id(HoneyImpact)"] + ".webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[13]]["画像id(HoneyImpact)"] + ".webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[10]]["画像id(HoneyImpact)"] + ".webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[1]]["画像id(HoneyImpact)"] + ".webp\">"
        ],
        ["20",  "20k", "1",  "",  "",  "",  "3",  "",    "",   "3",   ""],
        ["40",  "60k", "1", "3",  "",  "", "18",  "",    "",  "13",  "2"],
        ["50", "120k", "1", "9",  "",  "", "18", "12",   "",  "33",  "6"],
        ["60", "200k", "1", "9", "3",  "", "18", "30",   "",  "63", "14"],
        ["70", "300k", "1", "9", "9",  "", "18", "30", "12", "108", "26"],
        ["80", "420k", "1", "9", "9", "6", "18", "30", "36", "168", "46"]
    ];
    arr2table(ascension_table, ascension_data);
    
    const levelup_table = document.getElementById("levelup-table")
    const levelup_data = [
        [
            "レベル",
            "<img src=\"img/Item_Mora.webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[3]]["画像id(HoneyImpact)"] + ".webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[4]]["画像id(HoneyImpact)"] + ".webp\">",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[5]]["画像id(HoneyImpact)"] + ".webp\">",
        ],
        ["20",   "24k",   "6",  "0",  "1"],
        ["40",  "140k",  "34",  "3",  "5"],
        ["50",  "256k",  "62",  "6", "10"],
        ["60",  "427k", "104",  "8", "15"],
        ["70",  "666k", "163", "11", "16"],
        ["80",  "989k", "243", "13", "18"],
        ["85", "1.23M", "304", "13", "21"],
        ["90", "1.67M", "414", "13", "22"]
    ];
    arr2table(levelup_table, levelup_data);
    
    const resource_table = document.getElementById("resource-table")
    const resource_data = [
        [
            "<img src=\"img/Item_Mora.webp\">",
            "7050900",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[3]]["画像id(HoneyImpact)"] + ".webp\">",
            "414"
        ],
        [
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[11]]["画像id(HoneyImpact)"] + ".webp\">",
            "36",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[4]]["画像id(HoneyImpact)"] + ".webp\">",
            "13"
        ],
        [
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[12]]["画像id(HoneyImpact)"] + ".webp\">",
            "96",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[5]]["画像id(HoneyImpact)"] + ".webp\">",
            "22"
        ],
        [
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[13]]["画像id(HoneyImpact)"] + ".webp\">",
            "129",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[10]]["画像id(HoneyImpact)"] + ".webp\">",
            "168"
        ],
        [
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[14]]["画像id(HoneyImpact)"] + ".webp\">",
            "9",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[1]]["画像id(HoneyImpact)"] + ".webp\">",
            "46"
        ],
        [
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[15]]["画像id(HoneyImpact)"] + ".webp\">",
            "63",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[6]]["画像id(HoneyImpact)"] + ".webp\">",
            "1"
        ],
        [
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[16]]["画像id(HoneyImpact)"] + ".webp\">",
            "114",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[7]]["画像id(HoneyImpact)"] + ".webp\">",
            "9"
        ],
        [
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[2]]["画像id(HoneyImpact)"] + ".webp\">",
            "18",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[8]]["画像id(HoneyImpact)"] + ".webp\">",
            "9"
        ],
        [
            "<img src=\"https://genshin.honeyhunterworld.com/img/i_491.webp\">",
            "3",
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[9]]["画像id(HoneyImpact)"] + ".webp\">",
            "6"
        ],
    ];
    arr2table(resource_table, resource_data, true);
    
    const location_table = document.getElementById("location-table")
    const location_data = [
        [
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[16]]["画像id(HoneyImpact)"] + ".webp\">",
            d["曜日"]
        ],
        [
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[1]]["画像id(HoneyImpact)"] + ".webp\">",
            d["BOSS"]
        ],
        [
            "<img src=\"https://genshin.honeyhunterworld.com/img/" + i[items[2]]["画像id(HoneyImpact)"] + ".webp\">",
            d["強敵"]
        ],
    ];
    arr2table(location_table, location_data, true);

    const chara_splash = document.getElementById("chara");
    chara_splash.src = "https://genshin.honeyhunterworld.com/img/" + d["HoneyImpactID"] + "_gacha_splash.webp"

    const background_image = document.querySelector("img.background");
    switch (d["元素"]) {
        case "なし":
            background_image.src = "img/bg_none.png"
            break
        case "炎":
            background_image.src = "img/bg_pyro.png"
            break
        case "水":
            background_image.src = "img/bg_hydro.png"
            break
        case "風":
            background_image.src = "img/bg_anemo.png"
            break
        case "雷":
            background_image.src = "img/bg_electro.png"
            break
        case "草":
            background_image.src = "img/bg_dendro.png"
            break
        case "氷":
            background_image.src = "img/bg_cyro.png"
            break
        case "岩":
            background_image.src = "img/bg_geo.png"
            break
    }
    
    const title = document.getElementById("title");
    title.innerHTML = d["名前"] + "<br>Lv.・天賦MAX 必要素材"

    document.title = d["名前"] + "の育成素材"
}

document.addEventListener("DOMContentLoaded", e => {
    main();
})