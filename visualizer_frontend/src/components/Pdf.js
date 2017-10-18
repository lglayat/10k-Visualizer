import React from 'react'



class Pdf extends React.Component{


  render(){
    const data = ''
    var file = new Blob([data], {type: 'application/pdf'});
    var fileURL = URL.createObjectURL(file);
    window.open(fileURL);

    return(
      <div>
      hi
    </div>)

  }
}

export default Pdf
