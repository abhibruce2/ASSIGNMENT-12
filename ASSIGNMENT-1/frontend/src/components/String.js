/**
 * Is data Empty
 * @param data
 */
export const isEmpty = (string) => {
  if (string == 0) {
    return true;
  } else return null;
};

/**
 * Is data Empty
 * @param data
 */
export const isNotEmpty = (string) => {
  if (string != 0) {
    return true;
  } else return null;
};

class String {

  static replace = (data) => {
    if(data){
      return data.replace(/[^\w\s]/gi,"")
    }
   }
  };

  export default String;
