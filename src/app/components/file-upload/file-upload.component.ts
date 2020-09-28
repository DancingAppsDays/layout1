import { Component, OnInit } from '@angular/core';
import { FileupserviceService } from 'src/app/fileupservice.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {


   filetoUp: File = null;
  constructor(private fileserv: FileupserviceService) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList)
  {this.filetoUp = files.item(0)
  //console.log("handlefiler"); works
this.uploadfile();
    
  }     //only firs file

  uploadfile()
  {
    this.fileserv.postfile(this.filetoUp).subscribe(data =>
      {console.log(data);}, error =>{console.log(error);}
      );
  }

}
