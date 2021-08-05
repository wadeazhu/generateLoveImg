export function breakLinesForCanvas(text, width, font, ctx) {
    const context = ctx;
    const result = [];
    let breakPoint = 0;

    if (font) {
        context.font = font;
    }

    while ((breakPoint = findBreakPoint(text, width, context)) !== -1) {
        result.push(text.substr(0, breakPoint));
        text = text.substr(breakPoint);
    }

    if (text) {
        result.push(text);
    }

    return result;
}

//寻找切换断点
export function findBreakPoint(text, width, context) {
    let min = 0;
    let max = text.length - 1;

    while (min <= max) {
        const middle = Math.floor((min + max) / 2);
        const middleWidth = context.measureText(text.substr(0, middle)).width;
        const oneCharWiderThanMiddleWidth = context.measureText(text.substr(0, middle + 1)).width;
        if (middleWidth <= width && oneCharWiderThanMiddleWidth > width) {
            return middle;
        }
        if (middleWidth < width) {
            min = middle + 1;
        }else {
            max = middle - 1;
        }
    }

    return -1;
}

export function downLoad(url, fileName){
    const oA = document.createElement("a");
    oA.download = fileName;// 设置下载的文件名，默认是'下载'
    oA.href = url;
    document.body.appendChild(oA);
    oA.click();
    oA.remove(); // 下载之后把创建的元素删除
}
