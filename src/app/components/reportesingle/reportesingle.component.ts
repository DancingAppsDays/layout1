import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Obj } from '@popperjs/core';


//FOr graphs
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Constantes } from 'src/app/constantes';


@Component({
  selector: 'app-reportesingle',
  templateUrl: './reportesingle.component.html',
  styleUrls: ['./reportesingle.component.css']
})
export class ReportesingleComponent implements OnInit {

 url = Constantes.capiURL + "Reportem/";
  urlz: string = "http://127.0.0.1:8000/api/Reportem/";
  eqs: any;
  querid: any;
  id: string = '';
  arraytemp = [];   //Create at RUNTIME????
  arraytemp2 = [];
  arraytemp3 = [];
  arraytemp4 = [];
  arraytemp5 = [];

  //lineChartData: ChartDataSets[];

 // lineChartLabels: Label[] ;

  constructor(private http :HttpClient, private router: Router, private router2: ActivatedRoute) { }
  

  ngOnInit(): void {

    this.router2.queryParams.subscribe(async (params:Params)=>{
     
      this.querid=params; })


      this.http.get(this.url+ this.querid.id).subscribe(result => 
          {
          this.eqs = result;//data;
         
          console.log(this.eqs);

          //this.arraytemp = []; //refresh every time... maybe, con los otros no fue necesario, check nav

            //IF RESULT GOOD... obvious since last compoenent.

            
         
            //var obj = JSON.stringify(this.eqs); 
             
              this.eqs.forEach(element => {
               
                //console.log(element.azucar);   //FUNCIONAAAA
                     //DIRECTO DEL JSON:... bad practice??
              
                var $strink = element.fecha;
                var $strink2 = element.azucar;
                
                                        
                //this.lineChartData.push({data:$strink2.toString()});  //create 5 data sets....
                this.arraytemp.push($strink2.toString())
                this.arraytemp2.push(element.colesterol)
                this.arraytemp3.push(element.presionA)
                this.lineChartLabels.push($strink.toString()); //tosintrg()??
               //, label:"Somethingelse");
              });
                console.log("afterrr arrayedd");
                this.lineChartData = [    { data: this.arraytemp, label: 'Azucar' },  { data: this.arraytemp2, label: 'Colesterol' }, { data: this.arraytemp3, label: 'Presion' }  ];
          
        });

  }


  //GRAPG
  
  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Change on init' },
  ];

  lineChartLabels: Label[] = [];//'January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true//,
    //onClick: this.alertbox()  //did it activate on INIT??yes, and not much else
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  

   alertbox(): void {
      
      window.alert("ALERBOXXXX");
      console.log("ALERBOX")
    }


}
