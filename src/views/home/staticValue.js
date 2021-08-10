export const gender = {
    "boy": {label: "男生", src: require("@/assets/img/boy.png"),},
    "girl": {label: "女生", src: require("@/assets/img/girl.png")}
}

const workArea = ["江岸区", "江汉区", "硚口区", "汉阳区", "武昌区", "青山区", "洪山区", "蔡甸区", "江夏区", "黄陂区", "新洲区", "东西湖区", "汉南区"]

const area = ["武汉市", "黄石市", "十堰市", "宜昌市", "襄阳市", "鄂州市", "荆门市", "孝感市", "荆州市", "黄冈市", "咸宁市", "随州市", "恩施州", "天门市", "潜江市", "仙桃市"]

export const formInfo = {
    // birthday: {type: "text", label: "出生年月", value: "2021-01-01"},
    // address: {type: "text", label: "户籍地", value: "湖北省武汉市"},
    // home: {type: "text", label: "所在地", value: "阳逻经济开发区"},
    // school: {type: "text", label: "学历", value: "本科"},
    // height: {type: "text", label: "身高(cm)", value: "179"},
    // weight: {type: "text", label: "体重(Kg)", value: "77.5"},
    // marriage: {type: "text", label: "婚姻状态", value: "未婚"},
    // house: {type: "text", label: "住房情况", value: "有房有贷"},
    // car: {type: "text", label: "是否有车", value: "有车"},
    // work: {type: "text", label: "工作", value: "电力生产"},
    // income: {type: "text", label: "年收入", value: "15W"},
    // evaluation: {type: "textarea", label: "自我评价", value: "射手座男生，典型的乐观主义者，说话做事比较直接，喜欢美食，旅游，游泳和篮球"},
    // requirements: {type: "textarea", label: "择偶要求", value: "有稳定工作，性格好三观正，热爱祖国 热爱生活，长相甜美可爱，好了，合适就是最重要的"},

    baseInfo: {type: "text", label: "基本信息", value: ""},
    register: {type: "text", label: "户籍", value: area[Math.floor(Math.random() * area.length)]},
    workplace: {type: "text", label: "工作地", value: workArea[Math.floor(Math.random() * workArea.length)]},
    house: {type: "text", label: "住房情况", value: ""},
    car: {type: "text", label: "是否有车", value: ""},
    income: {type: "text", label: "年收入", value: ""},
    evaluation: {type: "textarea", label: "自我评价", value: ""},
    family: {type: "textarea", label: "家庭介绍", value: ""},
    hobby: {type: "textarea", label: "爱好", value: ""},
    inner: {type: "textarea", label: "内心独白", value: ""},
    requirements: {type: "textarea", label: "择偶要求", value: ""},
}

export const curDate = () => {
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1
    const date = new Date().getDate()
    return `${year}.${month}.${date}`
}




























