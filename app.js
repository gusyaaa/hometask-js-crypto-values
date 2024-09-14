const data = [
    { name: "Bitcoin", ticker: "BTC", value: "9685", change: "2.83%" },
    { name: "Ethereum", ticker: "ETH", value: "210.5", change: "6.17%" },
    { name: "Ripple", ticker: "XRP", value: "0.2812", change: "2.47%" },
    { name: "Bitcoin Cash", ticker: "BCH", value: "441.4", change: "5.01%" },
    { name: "Bitcoin SV", ticker: "BSV", value: "303.17", change: "5.53%" },
    { name: "Litecoin", ticker: "LTC", value: "74.935", change: "4.25%" },
    { name: "Tether", ticker: "USDT", value: "0.9994", change: "-1.7%" },
    { name: "EOS", ticker: "EOS", value: "4.6161", change: "3.15%" },
    { name: "Binance Coin", ticker: "BNB", value: "19.824", change: "-3.82%" },
    { name: "Cardano", ticker: "ADA", value: "0.060389", change: "2.93%" },
    { name: "Tezos", ticker: "XTZ", value: "2.1247", change: "6.12%" },
    { name: "Ethereum Classic", ticker: "ETC", value: "12.5988", change: "4.09%" },
    { name: "Stellar", ticker: "XLM", value: "0.07034", change: "-4.10%" },
    { name: "Monero", ticker: "XMR", value: "79.523", change: "3.45%" },
    { name: "TRON", ticker: "TRX", value: "0.020881", change: "5.21%" }
];

let body = document.querySelector("body");
let table = document.createElement("table");
let thead = document.createElement("thead");
let theadtr = document.createElement("tr");

table.style.borderCollapse = "collapse";

let headers = ["Название", "Тикер", "Цена", "Изменение за 24 часа"];

headers.forEach((headerText, i) => {
    let theadth = document.createElement("th");
    theadth.textContent = headerText; 
    theadtr.append(theadth); 
    theadth.style.border = "1px solid black";
    theadth.style.backgroundColor = "#884ce4";
    theadth.style.color = "white";
    if (i == 0) {
        theadth.style.padding = "10px";
    } else if (i == 1 || i == 2) {
        theadth.style.padding = "8px";
    }
});

thead.appendChild(theadtr); 
table.appendChild(thead); 
body.prepend(table);

let tbody = document.createElement("tbody");

data.forEach((item, index) => {
    let row = document.createElement("tr");
    if (index % 2 === 0) {
        row.style.backgroundColor = '#e8e4e4'; 
    }

    let nametd = document.createElement("td");
    nametd.style.border = '1px solid black';
    nametd.style.padding = '8px';
    nametd.textContent = item.name;
    row.append(nametd);

    let tickertd = document.createElement("td");
    tickertd.style.border = '1px solid black'; 
    tickertd.style.padding = '8px';
    tickertd.textContent = item.ticker;
    row.append(tickertd);

    let valuetd = document.createElement("td");
    valuetd.style.border = '1px solid black';
    valuetd.style.padding = '8px';
    valuetd.textContent = item.value;
    row.append(valuetd);

    let changetd = document.createElement("td");
    changetd.style.border = '1px solid black'; 
    changetd.style.padding = '8px';
    changetd.textContent = item.change;
    
    if (item.change.startsWith("-")) {
        changetd.style.color = "red";
    } else {
        changetd.style.color = "green";
    }

    row.append(changetd);
    tbody.append(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
