export const gender = {
    "boy": {label: "男生", src: require("@/assets/images/boy.png"),},
    "girl": {label: "女生", src: require("@/assets/images/girl.png")}
}

export const formInfo = {
    birthday: {type: "text", label: "出生年月", value: "2021-01-01"},
    address: {type: "text", label: "户籍地", value: "湖北省武汉市"},
    home: {type: "text", label: "所在地", value: "阳逻经济开发区"},
    school: {type: "text", label: "学历", value: "本科"},
    height: {type: "text", label: "身高(cm)", value: "179"},
    weight: {type: "text", label: "体重(Kg)", value: "77.5"},
    marriage: {type: "text", label: "婚姻状态", value: "未婚"},
    house: {type: "text", label: "住房情况", value: "有房有贷"},
    car: {type: "text", label: "是否有车", value: "有车"},
    work: {type: "text", label: "工作", value: "电力生产"},
    income: {type: "text", label: "年收入", value: "15W"},
    evaluation: {type: "textarea", label: "自我评价", value: "射手座男生，典型的乐观主义者，说话做事比较直接，喜欢美食，旅游，游泳和篮球"},
    requirements: {type: "textarea", label: "择偶要求", value: "有稳定工作，性格好三观正，热爱祖国 热爱生活，长相甜美可爱，好了，合适就是最重要的"},
}

export const curDate = () => {
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1
    const date = new Date().getDate()
    return `${year}.${month}.${date}`
}
