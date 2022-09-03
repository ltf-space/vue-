import Vue from "vue";

let vue;

class Store{
  constructor(option = {}){
    // this.state = option.state //此操作会使state中的变量不具有响应式

    // 此方法具有响应式，通过设置访问类获取syaye
    this.temp = new Vue({
      data(){
        return { state:option.state }
      }
    })

    // 实现getters

    // 拿到传进来的getters
    let getters = option.getters
    this.getters = {}
    // 便利getters对象，将getters对象里的方法全部放到this.getters中
    Object.keys(getters).forEach((getterName) => {
      // 第一个参数为操作的对象，第二个参数是属性名，第三个参数是属性值
      Object.defineProperty(this.getters,getterName,{
        get:() => {
          return getters[getterName](this.state)
        }
      })
    })


    // 实现mutations

    // 拿到传进来的mutations
    let mutations = option.mutations
    this.mutations = {}
    // 遍历mutations，将mutations里的方法全部放到this.mutations中，payload为参数
    Object.keys(mutations).forEach((getterName) => {
      this.mutations[getterName] = (payload) => {
        mutations[getterName](this.state,payload)
      }
    })
  }
  // 设置访问类，使后续可以通过store.state访问
  get state(){
    return this.temp.state
  }
  // 实现commit方法
  commit = (getterName,payload) => {
    this.mutations[getterName](payload)
  }
}
// 自己写的插件需用到install方法
const install = (_vue) => {
  vue = _vue
  vue.mixin({
    // 将store混入到vue中
    beforeCreate() {
      // console.log(this)//this指vue根实例
      // 判断$option是否存在，存在的话将其挂到根实例上以便后边通过thi.$store使用
      if(this.$options && this.$options.store){
        this.$store = this.$options.store
      }else {
        // 子实例
        this.$store = this.$parent && this.$parent.$store
      }
    },
  })
}
export default {
  install,
  Store
}