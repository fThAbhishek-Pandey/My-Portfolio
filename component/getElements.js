function get(selection){
    console.log('helo , I am get element ',selection);
      const element= document.querySelector(selection);
      if(element) return element;
      else {
        throw new Error(`plese check your class ${selection}`);
      }
}
export default get;