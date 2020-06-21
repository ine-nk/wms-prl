export class Validators {
  static required(value = '') {
    return value && value.trim()
  }

  //? чтобы достать значения из полей и связать их с нашим установленной длиной поля применияем замыкания - возвращаем значение value которое не 
  static minLength(length) {
    
    return value => {
      return value.length >= length
    }
  }


}

