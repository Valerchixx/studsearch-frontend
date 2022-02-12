import React, { useState } from "react";
import styles from './filters.module.css';
import FiltersBlock from "./component/Filter component/FiltersBLock";
import HeaderFilter from "./component/Filter component/Header";
import CheckFilters from "./component/Filter component/CheckFilters";
import arrowRight from './component/Filter component/svg/arrowUp.svg'
import BlindsFilter from "./component/Filter component/BlindsFilter";
import CheckTowns from "./component/Filter component/CheckTown";
import CheckForms from "./component/Filter component/CheckForms";
import FilterCheck from "./component/Filter component/FilterCheck";


const  Filters  = (props:any) =>{
    const [flag,setflag] = useState(false)
    const blinds = [
        {
            "id": 1,
            "name": "Освіта/Педагогіка",
            "emoji": "🎓",
            "specialities": [ {
                "code": 11,
                "name": "Освітні, педагогічні науки",
                "emoji": "🎓",
                "field_id": 1
            },
            {
                "code": 12,
                "name": "Дошкільна освіта",
                "emoji": "👦",
                "field_id": 1
            },
            {
                "code": 13,
                "name": "Початкова освіта",
                "emoji": "🏫",
                "field_id": 1
            },
            {
                "code": 14,
                "name": "Середня освіта",
                "emoji": "🧑‍🏫",
                "field_id": 1
            },
            {
                "code": 15,
                "name": "Професійна освіта",
                "emoji": "👨‍🏫",
                "field_id": 1
            },
            {
                "code": 16,
                "name": "Спеціальна освіта",
                "emoji": "🧑‍🎓",
                "field_id": 1
            },
            {
                "code": 17,
                "name": "Фізична культура і спорт",
                "emoji": "👟",
                "field_id": 1
            }]
        },
        {
            "id": 2,
            "name": "Культура і мистецтво",
            "emoji": "🎭",
            "specialities":[ {
                "code": 21,
                "name": "Аудіовізуальне мистецтво та виробництво",
                "emoji": "🔊",
                "field_id": 2
            },
            {
                "code": 22,
                "name": "Дизайн",
                "emoji": "✨",
                "field_id": 2
            },
            {
                "code": 23,
                "name": "Образотворче мистецтво, декоративне мистецтво, реставрація",
                "emoji": "🎨",
                "field_id": 2
            },
            {
                "code": 24,
                "name": "Хореографія",
                "emoji": "💃",
                "field_id": 2
            },
            {
                "code": 25,
                "name": "Музичне мистецтво",
                "emoji": "🎵",
                "field_id": 2
            },
            {
                "code": 26,
                "name": "Сценічне мистецтво",
                "emoji": "🎭",
                "field_id": 2
            },
            {
                "code": 27,
                "name": "Музеєзнавство, пам’яткознавство",
                "emoji": "🏛",
                "field_id": 2
            },
            {
                "code": 28,
                "name": "Менеджмент соціокультурної діяльності",
                "emoji": "💼",
                "field_id": 2
            },
            {
                "code": 29,
                "name": "Інформаційна, бібліотечна та архівна справа",
                "emoji": "📚",
                "field_id": 2
            }]


        },
        {
            "id": 3,
            "name": "Гуманітарні науки",
            "emoji": "📘",
            "specialities":[ {
                "code": 31,
                "name": "Релігієзнавство",
                "emoji": "🙏",
                "field_id": 3
            },
            {
                "code": 32,
                "name": "Історія та археологія",
                "emoji": "🏺",
                "field_id": 3
            },
            {
                "code": 33,
                "name": "Філософія",
                "emoji": "🌌",
                "field_id": 3
            },
            {
                "code": 34,
                "name": "Культурологія",
                "emoji": "🐉",
                "field_id": 3
            },
            {
                "code": 35,
                "name": "Філологія",
                "emoji": "🔤",
                "field_id": 3
            }
            ]
        },
        {
            "id": 4,
            "name": "Богослов'я",
            "emoji": "⛪",
            "specialities":[{
                "code": 41,
                "name": "Богослов’я",
                "emoji": "⛪",
                "field_id": 4
            }]
        },
        {
            "id": 5,
            "name": "Соціальні та поведінкові науки",
            "emoji": "🧑‍🤝‍🧑",
            "specialities":[{
                "code": 51,
                "name": "Економіка",
                "emoji": "📈",
                "field_id": 5
            },
            {
                "code": 52,
                "name": "Політологія",
                "emoji": "🗳️",
                "field_id": 5
            },
            {
                "code": 53,
                "name": "Психологія",
                "emoji": "🧠",
                "field_id": 5
            },
            {
                "code": 54,
                "name": "Соціологія",
                "emoji": "💬",
                "field_id": 5
            }]
        },
        {
            "id": 0o6,
            "name": "Журналістика",
            "emoji": "📰",
            "specialities":[{
                "code": 0o61,
                "name": "Журналістика",
                "emoji": "📰",
                "field_id": 6
            }]
        },
        {
            "id": 7,
            "name": "Управління та адміністрування",
            "emoji": "🏢",
            "specialities":[{
                "code": 71,
                "name": "Облік і оподаткування",
                "emoji": "🧾",
                "field_id": 7
            },
            {
                "code": 72,
                "name": "Фінанси, банківська справа та страхування",
                "emoji": "💰",
                "field_id": 7
            },
            {
                "code": 73,
                "name": "Менеджмент",
                "emoji": "💼",
                "field_id": 7
            },
            {
                "code": 75,
                "name": "Маркетинг",
                "emoji": "👨‍💼",
                "field_id": 7
            },
            {
                "code": 76,
                "name": "Підприємництво, торгівля та біржова діяльність",
                "emoji": "📈",
                "field_id": 7
            }]
        },
        {
            "id": 8,
            "name": "Право",
            "emoji": "⚖️",
            "specialities":[ {
                "code": 81,
                "name": "Право",
                "emoji": "⚖️",
                "field_id": 8
            }]
        },
        {
            "id": 9,
            "name": "Біологія",
            "emoji": "🧬",
            "specialities":[ {
                "code": 91,
                "name": "Біологія",
                "emoji": "🧬",
                "field_id": 9
            }]
        },
        {
            "id": 10,
            "name": "Природничі науки",
            "emoji": "🏞️",
            "specialities":[ {
                "code": 101,
                "name": "Екологія",
                "emoji": "🌿",
                "field_id": 10
            },
            {
                "code": 102,
                "name": "Хімія",
                "emoji": "🧪",
                "field_id": 10
            },
            {
                "code": 103,
                "name": "Науки про Землю",
                "emoji": "🌎",
                "field_id": 10
            },
            {
                "code": 104,
                "name": "Фізика та астрономія",
                "emoji": "🔭",
                "field_id": 10
            },
            {
                "code": 105,
                "name": "Прикладна фізика та наноматеріали",
                "emoji": "🔬",
                "field_id": 10
            },
            {
                "code": 106,
                "name": "Географія",
                "emoji": "🗺️",
                "field_id": 10
            }]
        },
        {
            "id": 11,
            "name": "Математика та статистика",
            "emoji": "➗",
            "specialities":[{
                "code": 111,
                "name": "Математика",
                "emoji": "➕",
                "field_id": 11
            },
            {
                "code": 112,
                "name": "Статистика",
                "emoji": "📊",
                "field_id": 11
            },
            {
                "code": 113,
                "name": "Прикладна математика",
                "emoji": "🧮",
                "field_id": 11
            }]
        },
        {
            "id": 12,
            "name": "Інформаційні технології",
            "emoji": "💻",
            "specialities":[{
                "code": 121,
                "name": "Інженерія програмного забезпечення",
                "emoji": "💾",
                "field_id": 12
            },
            {
                "code": 122,
                "name": "Комп'ютерні науки",
                "emoji": "💻",
                "field_id": 12
            },
            {
                "code": 123,
                "name": "Комп'ютерна інженерія",
                "emoji": "🖥️",
                "field_id": 12
            },
            {
                "code": 124,
                "name": "Системний аналіз",
                "emoji": "🔎",
                "field_id": 12
            },
            {
                "code": 125,
                "name": "Кібербезпека",
                "emoji": "🔐",
                "field_id": 12
            },
            {
                "code": 126,
                "name": "Інформаційні системи та технології",
                "emoji": "📂",
                "field_id": 12
            }]
        },
        {
            "id": 13,
            "name": "Механічна інженерія",
            "emoji": "🚂",
            "specialities":[{
                "code": 131,
                "name": "Прикладна механіка",
                "emoji": "🧑‍🔧",
                "field_id": 13
            },
            {
                "code": 132,
                "name": "Матеріалознавство",
                "emoji": "🧱",
                "field_id": 13
            },
            {
                "code": 133,
                "name": "Галузеве машинобудування",
                "emoji": "🛠",
                "field_id": 13
            },
            {
                "code": 134,
                "name": "Авіаційна та ракетно-космічна техніка",
                "emoji": "🚀",
                "field_id": 13
            },
            {
                "code": 135,
                "name": "Суднобудування",
                "emoji": "🚢",
                "field_id": 13
            },
            {
                "code": 136,
                "name": "Металургія",
                "emoji": "🪙",
                "field_id": 13
            }]
        },
        {
            "id": 14,
            "name": "Електрична інженерія",
            "emoji": "🔌",
            "specialities":[ {
                "code": 141,
                "name": "Електроенергетика, електротехніка та електромеханіка",
                "emoji": "🔌",
                "field_id": 14
            },
            {
                "code": 142,
                "name": "Енергетичне машинобудування",
                "emoji": "⚡",
                "field_id": 14
            },
            {
                "code": 143,
                "name": "Атомна енергетика",
                "emoji": "⚛️",
                "field_id": 14
            },
            {
                "code": 144,
                "name": "Теплоенергетика",
                "emoji": "🔥",
                "field_id": 14
            },
            {
                "code": 145,
                "name": "Гідроенергетика",
                "emoji": "🌊",
                "field_id": 14
            }]
        },
        {
            "id": 15,
            "name": "Автоматизація та приладобудування",
            "emoji": "🤖",
            "specialities":[{
                "code": 151,
                "name": "Автоматизація та комп’ютерно-інтегровані технології",
                "emoji": "🤖",
                "field_id": 15
            },
            {
                "code": 152,
                "name": "Метрологія та інформаційно-вимірювальна техніка",
                "emoji": "📏",
                "field_id": 15
            },
            {
                "code": 153,
                "name": "Мікро- та наносистемна техніка",
                "emoji": "🔬",
                "field_id": 15
            }]
        },
        {
            "id": 16,
            "name": "Хімічна та біоінженерія",
            "emoji": "🧪",
            "specialities":[ {
                "code": 161,
                "name": "Хімічні технології та інженерія",
                "emoji": "🧪",
                "field_id": 16
            },
            {
                "code": 162,
                "name": "Біотехнології та біоінженерія",
                "emoji": "🧬",
                "field_id": 16
            },
            {
                "code": 163,
                "name": "Біомедична інженерія",
                "emoji": "💉",
                "field_id": 16
            }]
        },
        {
            "id": 17,
            "name": "Електроніка та телекомунікації",
            "emoji": "💡",
            "specialities":[ {
                "code": 171,
                "name": "Електроніка",
                "emoji": "🔋",
                "field_id": 17
            },
            {
                "code": 172,
                "name": "Телекомунікації та радіотехніка",
                "emoji": "☎️",
                "field_id": 17
            },
            {
                "code": 173,
                "name": "Авіоніка",
                "emoji": "🛰️",
                "field_id": 17
            }]
        },
        {
            "id": 18,
            "name": "Виробництво та технології",
            "emoji": "🏭",
            "specialities":[ {
                "code": 181,
                "name": "Харчові технології",
                "emoji": "🍞",
                "field_id": 18
            },
            {
                "code": 182,
                "name": "Технології легкої промисловості",
                "emoji": "👕",
                "field_id": 18
            },
            {
                "code": 183,
                "name": "Технології захисту навколишнього середовища",
                "emoji": "🌿 ",
                "field_id": 18
            },
            {
                "code": 184,
                "name": "Гірництво",
                "emoji": "⛏",
                "field_id": 18
            },
            {
                "code": 185,
                "name": "Нафтогазова інженерія та технології",
                "emoji": "🛢️",
                "field_id": 18
            },
            {
                "code": 186,
                "name": "Видавництво та поліграфія",
                "emoji": "📚",
                "field_id": 18
            },
            {
                "code": 187,
                "name": "Деревообробні та меблеві технології",
                "emoji": "🪑",
                "field_id": 18
            }]
        },
        {
            "id": 19,
            "name": "Архітектура та будівництво",
            "emoji": "🏗️",
            "specialities":[{
                "code": 191,
                "name": "Архітектура та містобудування",
                "emoji": "🏬",
                "field_id": 19
            },
            {
                "code": 192,
                "name": "Будівництво та цивільна інженерія",
                "emoji": "🏠",
                "field_id": 19
            },
            {
                "code": 193,
                "name": "Геодезія та землеустрій",
                "emoji": "🌍",
                "field_id": 19
            },
            {
                "code": 194,
                "name": "Гідротехнічне будівництво, водна інженерія та водні технології",
                "emoji": "🌊",
                "field_id": 19
            }]
        },
        {
            "id": 20,
            "name": "Аграрні науки та продовольство",
            "emoji": "👨‍🌾",
            "specialities":[ {
                "code": 201,
                "name": "Агрономія",
                "emoji": "👨‍🌾",
                "field_id": 20
            },
            {
                "code": 202,
                "name": "Захист і карантин рослин",
                "emoji": "🌱",
                "field_id": 20
            },
            {
                "code": 203,
                "name": "Садівництво та виноградарство",
                "emoji": "🍇",
                "field_id": 20
            },
            {
                "code": 204,
                "name": "Технологія виробництва і переробки продукції тваринництва",
                "emoji": "🐄",
                "field_id": 20
            },
            {
                "code": 205,
                "name": "Лісове господарство",
                "emoji": "🌲",
                "field_id": 20
            },
            {
                "code": 206,
                "name": "Садово-паркове господарство",
                "emoji": "🌳",
                "field_id": 20
            },
            {
                "code": 207,
                "name": "Водні біоресурси та аквакультура",
                "emoji": "🌊",
                "field_id": 20
            },
            {
                "code": 208,
                "name": "Агроінженерія",
                "emoji": "🚜",
                "field_id": 20
            }]
        },
        {
            "id": 21,
            "name": "Ветеринарна медицина",
            "emoji": "🐕",
            "specialities":[ {
                "code": 211,
                "name": "Ветеринарна медицина",
                "emoji": "👩‍⚕️",
                "field_id": 21
            },
            {
                "code": 212,
                "name": "Ветеринарна гігієна, санітарія і експертиза",
                "emoji": "🐾",
                "field_id": 21
            }]
        },
        {
            "id": 22,
            "name": "Охорона здоров'я",
            "emoji": "❤️",
            "specialities":[ {
                "code": 221,
                "name": "Стоматологія",
                "emoji": "🦷",
                "field_id": 22
            },
            {
                "code": 222,
                "name": "Медицина",
                "emoji": "🏥",
                "field_id": 22
            },
            {
                "code": 223,
                "name": "Медсестринство",
                "emoji": "👩🏻‍⚕️",
                "field_id": 22
            },
            {
                "code": 224,
                "name": "Технології медичної діагностики та лікування",
                "emoji": "🩺",
                "field_id": 22
            },
            {
                "code": 225,
                "name": "Медична психологія",
                "emoji": "🧠",
                "field_id": 22
            },
            {
                "code": 226,
                "name": "Фармація, промислова фармація",
                "emoji": "💊",
                "field_id": 22
            },
            {
                "code": 227,
                "name": "Фізична терапія, ерготерапія",
                "emoji": "💆",
                "field_id": 22
            },
            {
                "code": 228,
                "name": "Педіатрія",
                "emoji": "👩‍🍼",
                "field_id": 22
            },
            {
                "code": 229,
                "name": "Громадське здоров`я",
                "emoji": "👨‍👩‍👦‍👦",
                "field_id": 22
            }]
        },
        {
            "id": 23,
            "name": "Соціальна робота",
            "emoji": "💁",
            "specialities":[{
                "code": 231,
                "name": "Соціальна робота",
                "emoji": "🙋",
                "field_id": 23
            },
            {
                "code": 232,
                "name": "Соціальне забезпечення",
                "emoji": "🤕",
                "field_id": 23
            }]
        },
        {
            "id": 24,
            "name": "Сфера обслуговування",
            "emoji": "🌇",
            "specialities":[{
                "code": 241,
                "name": "Готельно-ресторанна справа",
                "emoji": "🏨",
                "field_id": 24
            },
            {
                "code": 242,
                "name": "Туризм",
                "emoji": "🧳",
                "field_id": 24
            }]
        },
        {
            "id": 25,
            "name": "Воєнні науки, національна безпека, безпека державного кордону",
            "emoji": "🪖",
            "specialities":[{
                "code": 251,
                "name": "Державна безпека",
                "emoji": "🪖",
                "field_id": 25
            },
            {
                "code": 256,
                "name": "Національна безпека",
                "emoji": "🪖",
                "field_id": 25
            }]
        },
        {
            "id": 26,
            "name": "Цивільна безпека",
            "emoji": "👨‍💼",
            "specialities":[{
                "code": 261,
                "name": "Пожежна безпека",
                "emoji": "🧑‍🚒",
                "field_id": 26
            },
            {
                "code": 262,
                "name": "Правоохоронна діяльність",
                "emoji": "👮",
                "field_id": 26
            },
            {
                "code": 263,
                "name": "Цивільна безпека",
                "emoji": "👨‍💼",
                "field_id": 26
            }]
        },
        {
            "id": 27,
            "name": "Транспорт",
            "emoji": "🚚",
            "specialities":[{
                "code": 271,
                "name": "Річковий та морський транспорт",
                "emoji": "⛵",
                "field_id": 27
            },
            {
                "code": 272,
                "name": "Авіаційний транспорт",
                "emoji": "🛩️",
                "field_id": 27
            },
            {
                "code": 273,
                "name": "Залізничний транспорт",
                "emoji": "🚆",
                "field_id": 27
            },
            {
                "code": 274,
                "name": "Автомобільний транспорт",
                "emoji": "🚗",
                "field_id": 27
            },
            {
                "code": 275,
                "name": "Транспортні технології",
                "emoji": "🚐",
                "field_id": 27
            }]
        },
        {
            "id": 28,
            "name": "Публічне управління та адміністрування",
            "emoji": "📢",
            "specialities":[ {
                "code": 281,
                "name": "Публічне управління та адміністрування",
                "emoji": "📢",
                "field_id": 28
            }]
        },
        {
            "id": 29,
            "name": "Міжнародні відносини",
            "emoji": "🌍",
            "specialities":[{
                "code": 291,
                "name": "Міжнародні відносини, суспільні комунікації та регіональні студії",
                "emoji": "🌐",
                "field_id": 29
            },
            {
                "code": 292,
                "name": "Міжнародні економічні відносини",
                "emoji": "📈",
                "field_id": 29
            },
            {
                "code": 293,
                "name": "Міжнародне право",
                "emoji": "⚖️",
                "field_id": 29
            }]
        }
    ]
    const towns = ["м. Київ","Вінницька область","Волинська область","Дніпропетровська область","Донецька область","Житомирська область","Закарпатьська область","Закарпатьська область"];
    const forms = [
        {form: "Очна форма", descr:"Треба ходити на пари і лекції"},
        {form:"Заочна форма",descr:"Треба ходити на лекції раз за семестр"},
        {form:"Дистанційна",descr:"Нікуди ходити не треба"}
    ]
    const types = [
        {type: "За балами вступників (від вищих)", descr:"Де вчаться студенти з в середньому кращими балами ЗНО"},
        {type:"За балами вступників (від нищих)",descr:"Де вчаться студенти з в середньому гіршими балами ЗНО"},
        {type:"За шансами вступити з твоїми балами",descr:"Вираховуємо твій бал для кожної конкурсної пропозиції та порівнюємо з прохідними балами минулих років"}
    ]
    const [opens,setOpens] = useState({
        open1:true,
        open2:true,
        open3:true,
        open4:true,
        open5:true,
        open6:true,
    });


    function open(){
        setflag(true)
    }
    return(
        <div className={styles.wrapS}>
            <div className={styles.wrapHeader}>
            <div className={styles.wrap1}>
            <img src={arrowRight} alt="" />
            <h3 className={styles.header}>Фільтри</h3>
            </div>
            <div className={styles.wrap2}>
            <p className={styles.clear}>Очистити все</p>
            </div>
            </div>
           <FiltersBlock >
               <HeaderFilter title='Освітній рівень' open={() => setOpens({...opens, open1:!opens.open1})} />
               <div className={styles.wrapCheck}>
             { opens.open1 && <CheckFilters  />}
               </div>
           </FiltersBlock>
           <FiltersBlock>
             <HeaderFilter  title='Галузь та спеціальність' open={() => setOpens({...opens, open2:!opens.open2})}/>
            { opens.open2 && <div>
             {blinds.slice(0,12).map((item)=> <BlindsFilter  id={item.id} title={item.name} emoji={item.emoji} special={item.specialities}/>)}
            <div>{flag ? blinds.slice(12,29).map((item)=> <BlindsFilter id={item.id} emoji={item.emoji} special={item.specialities} title={item.name}/>):<h3 onClick={open} className={styles.viewMore }>Показати ще 17</h3>}</div>
                   </div>}
           </FiltersBlock>

           <FiltersBlock>
               <HeaderFilter title='Регіон' open={() => setOpens({...opens, open3:!opens.open3})} />
               { opens.open3 && towns.map((item) => <CheckTowns text={item}/>)}
           </FiltersBlock>
           <FiltersBlock>
               <HeaderFilter title='Форма навчання' open={() => setOpens({...opens, open4:!opens.open4})} />
               {opens.open4 &&  forms.map((item) => <CheckForms text={item.form} descr={item.descr}/>)}
           </FiltersBlock>
           <FiltersBlock>
               <HeaderFilter title='Бюджет чи контракт' open={() => setOpens({...opens, open5:!opens.open5})} />
              { opens.open5 && <FilterCheck text='Тільки бюджет'/>}
           </FiltersBlock>
           <FiltersBlock>
               <HeaderFilter title='Сортувати' open={() => setOpens({...opens, open6:!opens.open6})}/>
               <div>

                 { opens.open6 && <><div>
                        {types.map((item) => <CheckForms text={item.type} descr={item.descr} />)}
                    </div><div className={styles.btnWrap}>
                            <button className={styles.btn}>Ввести бали ЗНО та атестату</button>
                        </div></>}
               </div>
           </FiltersBlock>
           <div className={styles.whiteWrap}>
               <div className={styles.btnShowWrap}>
                   <button className={styles.btnShow}>Показати результати (100500)</button>
               </div>
           </div>
        </div>
    )
}

export default Filters