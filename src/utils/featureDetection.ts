function getBrowser() {        
  try {
      let e;
      let f = e.width;
  } catch(e) {
      var err = e.toString();
      if (err.indexOf("not an object") !== -1) {
          return "safari";
      } else if (err.indexOf("Cannot read") !== -1) {
          return "chrome";
      } else if (err.indexOf("e is undefined") !== -1) {
          return "firefox";
      } else if (err.indexOf("Unable to get property 'width' of undefined or null reference") !== -1) {
        //   if (!(false || !!document.documentMode) && !!window.StyleMedia) {
        //       return "edge";
        //   } else {
        //       return "IE";
        //   }
      } else if (err.indexOf("cannot convert e into object") !== -1) {
          return "opera";
      } else {
          return undefined;
      }
  }
  return;
};