import React, { Component } from 'react';


export default class FileInput extends Component{
    UploadFile(e)
    {
     console.log(e.target.files);
    }
     render(){
         return(
             <div>
                 <h2>{this.props.textValue} </h2>
                 <div>
                 <input id="upload" ref="upload" multiple type="file" accept="image/*" onChange={this.UploadFile} />
               </div>
             </div>
         )
     }
}