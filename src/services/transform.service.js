export class TransformService{
  static fbObjectToArray(fbData){
    /*========================
    Object.keys(fbData).forEach(key =>{
      // console.log(key);
      const item =fbData[key]
      // console.log(item);
      item.id = key
      console.log(item);
     =============================*/
     return Object.keys(fbData).map(key =>{
      // console.log(key);
      const item =fbData[key]
      // console.log(item);
      item.id = key
      // console.log(item);
      return item
    })
  }
}