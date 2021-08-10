<template>
  <section class="wrapper">
    <section class="form" ref="form">
      <!--      <div><span>是否生成默认</span><input type="checkbox" name="defaultValue" checked="checked"/></div>-->
      <div>
        <span>性别</span>
        <input type="radio" name="sex" v-model="sex" value="boy" @change="sexChange">男
        <input type="radio" name="sex" v-model="sex" value="girl" @change="sexChange">女
      </div>

      <div v-for="(item, key, index) in formInfo" :key="index">
        <span>{{ item.label }}：</span>
        <input type="text" v-if="item.type === 'text'" :name="key" :value="item.value" :ref="key"
               @change="textChange($event, key)"/>
        <textarea v-if="item.type === 'textarea'" :name="key" @change="textareaChange"/>
      </div>
      <button class="formSubmit" @click="submit">提交</button>
    </section>

    <div class="mark" @click="markClick" v-show="markVisible">
      <canvas class="love" ref="love"></canvas>
      <img class="love-img" :src="loveImgData" alt="">
      <br>
      <button class="downImgBtn" @click.stop="downImg">下载图片</button>
    </div>

    <p class="form">{{ wxWrite }}</p>
  </section>
</template>

<script>
import {formInfo, gender, curDate} from "./staticValue"
import {breakLinesForCanvas, copy, downLoad} from "./utils"

export default {
  name: "home",
  data() {
    return {
      formInfo,
      gender,
      formValue: {},
      ctx: null,
      img: new Image(),
      sex: "boy",
      markVisible: false,
      loveImgData: "",
      wxWrite: ""
    }
  },
  mounted() {
    this.ctx = this.$refs.love.getContext("2d")
    this.sexChange()
  },
  methods: {
    submit() {
      Object.keys(formInfo).forEach(key => {
        const value = this.$refs.form.querySelector(`[name=${key}]`).value
        this.formValue[key] = {
          label: formInfo[key].label,
          value: value
        }
      })

      this.markVisible = true
      this.generateImg(this.sex, this.formValue, this.formInfo)
      copy(this.wxWrite)
      console.log(this.formValue)
    },

    generateImg(sex, formValue, formInfo) {
      this.img.src = gender[sex].src
      this.img.onload = () => {
        this.setCanvasDrawImg(this.img, this.img.width, this.img.height)
        this.appendDateText()
        this.appendContentText(formValue, formInfo)
        this.loveImgData = this.$refs.love.toDataURL("image/png")

      }
    },

    setCanvasDrawImg(img, width, height) {
      this.$refs.love.width = width
      this.$refs.love.height = height
      this.ctx.width = width
      this.ctx.height = height
      this.ctx.drawImage(img, 0, 0, width, height)
    },
    appendDateText() {
      this.ctx.font = "30px MicrosoftYaHei"
      const date = curDate()
      const x = this.ctx.width - 58 - this.ctx.measureText(date).width
      this.ctx.fillStyle = "#666"
      this.ctx.fillText(date, x, 58)
    },
    appendContentText(formValue, formInfo) {
      let origin = {
        x: 116,
        y: 328
      }
      let index = 0
      this.wxWrite = `${gender[this.sex].label}  `
      for (let i = 0; i < Object.keys(formInfo).length; i++) {
        const key = Object.keys(formInfo)[i]

        this.ctx.font = "40px MicrosoftYaHei"
        const label = formInfo[key].label
        const value = formValue[key].value
        const text = `${label}：${value}`
        if (!value) continue
        this.wxWrite += `${value} `
        this.ctx.fillStyle = "#666"
        const result = breakLinesForCanvas(text, 853, '40px MicrosoftYaHei', this.ctx);
        result.forEach((item, i) => {
          this.ctx.fillText(item, origin.x, origin.y + index * 60)
          if (result.length > 1 && i !== result.length - 1) {
            console.log(origin.y)
            origin.y = origin.y + 60
          }
        })
        index++
      }
    },

    downImg() {
      const url = this.$refs.love.toDataURL("image/png")
      const fileName = `${curDate()}-${gender[this.sex].label}-${this.formValue['baseInfo'].value}.png`
      downLoad(url, fileName)
    },
    markClick() {
      this.markVisible = false
    },
    textareaChange($event) {
      $event.target.value = $event.target.value.replace(/\s+/g, "")
    },
    sexChange() {
      console.log(1)
      this.setCondition()
    },

    textChange($event, key) {
      if ("baseInfo" === key) {
        this.setCondition()
      }
    },

    setCondition() {
      const age = Number(this.$refs.baseInfo[0].value)
      let house, cat, income
      let house1, house2, cat1, cat2, income1, income2, income3
      // 如果是男生
      if (this.sex === "boy") {
        // 如果没有填写基本信息
        house1 = 500
        house2 = 500
        cat1 = 400
        cat2 = 600
        income1 = 300
        income2 = 600
        income3 = 100
        if (age) {
          if (age > 25) {
            house1 = 700
            house2 = 300
            cat1 = 400
            cat2 = 600
            income1 = 200
            income2 = 700
            income3 = 100
          } else if (age > 30) {
            house1 = 850
            house2 = 150
            cat1 = 700
            cat2 = 300
            income1 = 500
            income2 = 750
            income3 = 200

          }
        }
      } else {
        house1 = 200
        house2 = 800
        cat1 = 200
        cat2 = 800
        income1 = 700
        income2 = 250
        income3 = 50
        if (age) {
          if (age > 25) {
            house1 = 200
            house2 = 800
            cat1 = 300
            cat2 = 700
            income1 = 700
            income2 = 250
            income3 = 50
          } else if (age > 30) {
            house1 = 200
            house2 = 800
            cat1 = 500
            cat2 = 500
            income1 = 700
            income2 = 250
            income3 = 50
          }
        }
      }

      house = [...new Array(house1).fill("已经购房"), ...new Array(house2).fill("暂时没有购房")]
      cat = [...new Array(cat1).fill("已经购车"), ...new Array(cat2).fill("暂时没有购车")]
      income = [
        ...new Array(income1).fill("").map(() => Math.floor(Math.random() * 8) + 8),
        ...new Array(income2).fill("").map(() => Math.floor(Math.random() * 5) + 15),
        ...new Array(income3).fill("").map(() => Math.floor(Math.random() * 30) + 20),
      ]

      setTimeout(() => {
        this.$refs.house[0].value = house[Math.floor(Math.random() * house.length)]
        this.$refs.car[0].value = cat[Math.floor(Math.random() * cat.length)]
        this.$refs.income[0].value = income[Math.floor(Math.random() * income.length)] + "W"
      })
    }
  }
}
</script>

<style scoped>
.form {
  padding: 8px;
  width: 600px;
  margin: 0 auto;
}

.form > div {
  margin: 10px 0;
  display: flex;
}

.form > div span {
  display: inline-block;
  width: 100px;
  text-align: right;
  margin-right: 10px;
}

input {
  flex: 1;
  height: 30px;
}

textarea {
  height: 100px;
  flex: 1;
}

input[name='sex'] {
  width: 21px;
  flex: unset;
  margin: -4px 10px 0;
}

button {
  display: block;
  width: 100%;
  border: unset;
  outline: none;
  color: #fff;
  background: rgba(255, 87, 34, .71);
  padding: 12px;
}

canvas, .love-img {
  width: 470px;
}

.love-img {
  position: absolute;
  top: 0;
  display: none;
}

.wrapper {
  position: relative;
  padding: 7px;
}

.mark {
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .7);
  text-align: center;
}

.mark button {
  width: 470px;
  display: inline-block;
}

@media screen and (max-width: 768px) {
  canvas {
    width: 100%;
  }

  .love-img {
    display: block;
    width: 100%;
  }

  .form {
    border: 1px dotted #a7a7a7;
    width: unset;
  }
}
</style>
