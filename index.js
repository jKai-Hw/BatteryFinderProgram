const battery =
    [{
        "batteryName": "WKL-78",
        "capacityAh": 2.3,
        "voltage": 14.4,
        "maxDraw": 3.2,
        "endVoltage": 10,
    },
    {
        "batteryName": "WKL-140",
        "capacityAh": 4.5,
        "voltage": 14.4,
        "maxDraw": 9.2,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-78",
        "capacityAh": 2.5,
        "voltage": 14.5,
        "maxDraw": 10,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-140",
        "capacityAh": 3.6,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 5,
    },
    {
        "batteryName": "IOP-E78",
        "capacityAh": 6.6,
        "voltage": 14.4,
        "maxDraw": 10.5,
        "endVoltage": 8,
    },
    {
        "batteryName": "IOP-E140",
        "capacityAh": 9.9,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 10,
    },
    {
        "batteryName": "IOP-E188",
        "capacityAh": 13.2,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C65",
        "capacityAh": 4.9,
        "voltage": 14.8,
        "maxDraw": 4.9,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C85",
        "capacityAh": 6.3,
        "voltage": 14.4,
        "maxDraw": 6.3,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C140",
        "capacityAh": 9.8,
        "voltage": 14.8,
        "maxDraw": 10,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C290",
        "capacityAh": 19.8,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 12,
    }]
;

// バッテリーの並び替え
battery.sort(function(a,b){
    if(a.batteryName > b.batteryName) return 1;
    else return -1;
});


const camera =
    [{
        "brand": "Cakon",
        "model": "ABC 3000M",
        "powerConsumptionWh": 35.5,
    },
    {
        "brand": "Cakon",
        "model": "ABC 5000M",
        "powerConsumptionWh": 37.2,
    },
    {
        "brand": "Cakon",
        "model": "ABC 7000M",
        "powerConsumptionWh": 39.7,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9000M",
        "powerConsumptionWh": 10.9,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9900M",
        "powerConsumptionWh": 15.7,
    },
    {
        "brand": "Go MN",
        "model": "UIK 110C",
        "powerConsumptionWh": 62.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 210C",
        "powerConsumptionWh": 64.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 230C",
        "powerConsumptionWh": 26.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 250C",
        "powerConsumptionWh": 15.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 270C",
        "powerConsumptionWh": 20.3,
    },
    {
        "brand": "VANY",
        "model": "CEV 1100P",
        "powerConsumptionWh": 22,
    },
    {
        "brand": "VANY",
        "model": "CEV 1300P",
        "powerConsumptionWh": 23,
    },
    {
        "brand": "VANY",
        "model": "CEV 1500P",
        "powerConsumptionWh": 24,
    },
    {
        "brand": "VANY",
        "model": "CEV 1700P",
        "powerConsumptionWh": 25,
    },
    {
        "brand": "VANY",
        "model": "CEV 1900P",
        "powerConsumptionWh": 26,
    }]
;




//HTMLの作成
//Step1パート
//ブランドのリストをbrandsに格納
let brands = [];
function makeBrandList (cameraArr) {
    for (let i = 0; i < cameraArr.length; i++) {
        let brandName = cameraArr[i]["brand"];
        if (brands.indexOf(brandName) == -1) brands.push(brandName);
    }
}
makeBrandList(camera);
//Step1のHTML作成
let brandsList = document.getElementById("brandsList");
function htmlBrandList(brands) {
    for (let i = 0; i < brands.length; i++) {
        let brand =  document.createElement("option");
        brand.value = brands[i];
        brand.innerHTML = brands[i];
        brandsList.append(brand);
    }
}
htmlBrandList(brands);


//Step2パート
//ブランドごとにcamera[]のindexをmodelに格納 = {"brand":[(camera[i]), (i+1), ...]};
let model = {};
function makeModelList(brandsArr, cameraArr) {
    for (let i = 0; i < brandsArr.length; i++) {
        let brand = brandsArr[i];
        let models = [];
        for (let j = 0; j < cameraArr.length; j++) {
            if (brand == cameraArr[j]["brand"]) models.push(j);
        }
        model[brand] = models;
    }
}
makeModelList(brands, camera);
//Step2のHTML作成
let modelList = document.getElementById("modelList");
//選択肢を作成する関数 仮引き数はmodel{}のvalueである配列
function makeModels(modelArr, cameraArr) {
    for (let i = 0; i < modelArr.length; i++) {
        let option = document.createElement("option");
        option.value = cameraArr[modelArr[i]]["model"];
        option.innerHTML = cameraArr[modelArr[i]]["model"];
        option.setAttribute("data-Wh", cameraArr[modelArr[i]]["powerConsumptionWh"]);
        modelList.append(option);
    }
}
//初期選択肢を作成
makeModels(model["Cakon"], camera);

//ブランドが選択されたらモデル選択肢を変更する
brandsList.addEventListener("change", (event) => {
    modelList.innerHTML = "";
    makeModels(model[`${event.target.value}`], camera);
});


//Step4パート
const step4 = document.getElementById("step4");

const cameraPCWh = {};
function makeCameraPCWh(cameraArr) {
    for (let i = 0; i < cameraArr.length; i++) {
        cameraPCWh[cameraArr[i]["model"]] = cameraArr[i]["powerConsumptionWh"];
    }
}
makeCameraPCWh(camera);

//selectableBatteries[bNameAndPp] → bNameAndPp = {"name":"batteryName","wPerHr":wPerHr}
//モデル名からWhをとる
function makeStep4Div(batteryArr) {
    let selectableBatteries = [];
    let powerConsumption = cameraPCWh[modelList.value] + parseInt(inputNum.value);

    for (let i = 0; i < batteryArr.length; i++) {
        let endVoltage = batteryArr[i]["endVoltage"] * batteryArr[i]["maxDraw"];

        if (powerConsumption <= endVoltage) {
            let wPerHr = battery[i]["capacityAh"] * battery[i]["voltage"];
            let bNameAndPp = {};
            bNameAndPp["name"] = batteryArr[i]["batteryName"];
            bNameAndPp["wPerHr"] = wPerHr;
            selectableBatteries.push(bNameAndPp);
        }
    }

//HTML作成
    for (let i = 0; i < selectableBatteries.length; i++) {
        let div = document.createElement("div");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");

        div.classList.add("w-100", "bg-light", "border", "border-secondary", "d-flex", "justify-content-between", "align-items-center");
        p1.classList.add("pl-2", "py-2", "m-0");
        p2.classList.add("pl-2", "py-2", "m-0");

        p1.innerHTML = selectableBatteries[i]["name"];
        let batteryAvailability = Math.floor((selectableBatteries[i]["wPerHr"] / powerConsumption) * 10) / 10;
        p2.innerHTML = "Estimate " + batteryAvailability + " hours";

        div.append(p1);
        div.append(p2);
        step4.append(div);
    }
}

makeStep4Div(battery);

modelList.addEventListener("change", (event) => {
    step4.innerHTML = "";
    let step4P = document.createElement("p");
    step4P.innerHTML = "Step:4 Choose your battery";
    step4P.classList.add("mb-0");
    makeStep4Div(battery);
});

inputNum.addEventListener("change", (event) => {
    step4.innerHTML = "";
    let step4P = document.createElement("p");
    step4P.innerHTML = "Step:4 Choose your battery";
    step4P.classList.add("mb-0");
    makeStep4Div(battery);
});
