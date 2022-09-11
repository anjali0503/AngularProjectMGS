import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobDescriptionDetails } from 'src/app/domain/jobdescription';
import { JobDescriptionService } from 'src/app/services/job-description.service';

@Component({
  selector: 'app-update-job-status-by-pm',
  templateUrl: './update-job-status-by-pm.component.html',
  styleUrls: ['./update-job-status-by-pm.component.css']
})
export class UpdateJobStatusByPmComponent implements OnInit {
  jobdescription: JobDescriptionDetails = new JobDescriptionDetails();
  submitted:boolean=false;
  result :boolean=false;
  jobId:number=0;


  constructor(private jobDescriptionServices:JobDescriptionService,
    private router:Router,
    private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("in UpdateJobStatusByPmComponent");
    this.jobId=this.activateRoute.snapshot.params['jobId'];
//     this.jobDescriptionServices.getpendingrequests(this.jobId).subscribe(
//      data=> {
// this.jobdescription=data;
// console.log(this.jobdescription);

//     });
    
  }

  updateJobStatus(){
    this.jobDescriptionServices.updateJobStatus(this.jobdescription).subscribe(
     data=> {
          this.result=data;
          console.log(this.result);
          this.submitted=true;
          
      }
    );
  }
  backtohome(){
    this.router.navigate(["MenuPMpage"]);
  }

}
