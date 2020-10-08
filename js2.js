'use stric'
var app = new Vue({
    el: "#app",
    data: {
        numeros: "",
        numeros2: "",
        operador: "",
        result: ""
    },
    methods: {
      putNumber(number){
        if(this.operador){
          this.numeros2 += number
        }else{
          this.numeros += number
        }
      },
      putSymbol(operator){
        this.operador = operator
      },
      putResult(){
        if(this.operador === "+"){
          this.result = parseInt(this.numeros) + parseInt(this.numeros2)
        }
        if(this.operador === "-"){
          this.result = parseInt(this.numeros) - parseInt(this.numeros2)
        }
        if(this.operador === "*"){
          this.result = parseInt(this.numeros) * parseInt(this.numeros2)
        }
        if(this.operador === "/"){
          this.result = parseInt(this.numeros) / parseInt(this.numeros2)
        }
      },
      reset(){
        this.numeros= "",
        this.numeros2= "",
        this.operador= "",
        this.result= ""
      }
    },
    created(){
    }
  })