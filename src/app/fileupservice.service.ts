import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileupserviceService {

  Server_url: string = "localhost:8000/api/";
  constructor(private http: HttpClient) { }



  postfile(filetoUp: File)
  {//return null}
    //console.log("postin");
  const formData: FormData = new FormData();
formData.append('Image', filetoUp, filetoUp.name);
//formData.append('ComponentId', componentId);                              //from DZone.com//made wait sign, nothgingelse
return this.http.post('/api/dashboard/UploadImage', formData, {reportProgress:true,observe:'events'}

);
  }


   //uploa(formData)
/*
  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData, { headers: yourHeadersConfig })
      .map(() => { return true; })
      .catch((e) => this.handleError(e));
}
*/
}
