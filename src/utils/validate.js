import Vue from 'vue'
import {
  extend,
  localize
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

import zhCN from 'vee-validate/dist/locale/zh_CN.json';

// 注册中文包
localize({
  zhCN
})

// 激活中文
localize('zhCN')

// Object.keys(rules) 返回一个对象的自身可枚举属性组成的数组
Object.keys(rules).forEach((val, index) => {
  extend(val, rules[val])
})

extend('phone', {
   validate: value => {
    const reg = /^1[35789]\d{9}$/
    return reg.test(value)
   },
   message: '{_field_}格式不正确'

})