import React from 'react'


class Downloader extends React.Component{
    _downloadTxtFile = () => {
     var element = document.createElement("a");
     var file = new Blob([this.props.content], {type: 'text/plain'});
     element.href = URL.createObjectURL(file);
     const title = this.props.title + ".txt"
     element.download = title;
     element.click();
   }

   render() {
     return (
       <div>
         <button className="ui yellow button" onClick={this._downloadTxtFile}>Download .txt File</button>
       </div>
     );
   }
}

export default Downloader
