import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/domain/employee';
import { JobDescriptionDetails } from 'src/app/domain/jobdescription';
import { Login } from 'src/app/domain/login';
import { ProjectDetails } from 'src/app/domain/project';
import { GetLoginDetailsService } from 'src/app/services/get-login-details.service';
import { JobDescriptionService } from 'src/app/services/job-description.service';

@Component({
  selector: 'app-pm-jd',
  templateUrl: './pm-jd.component.html',
  styleUrls: ['./pm-jd.component.css']
})
export class PmJdComponent implements OnInit {

  employee: EmployeeDetails = new EmployeeDetails();
  login: Login = new Login();
  allJobDescriptionPM: JobDescriptionDetails[] = [];
  projectDetails : ProjectDetails =new ProjectDetails();
  jobDescription:JobDescriptionDetails=new JobDescriptionDetails();


  constructor(private jobDescriptionService: JobDescriptionService,
    private getLoginDetails: GetLoginDetailsService,
    private router: Router ) { }

  ngOnInit(): void {
    this.login = JSON.parse(sessionStorage.getItem('login') || '{}');
    this.getLoginDetails.getEmployeeDetails(this.login.loginId).subscribe(data => {
      this.employee = data;
      console.log(this.employee);
      
      this.jobDescriptionService.getpendingrequests(this.employee.projectDetails.projectId).subscribe(
        data => {
          console.log("in reload data");

          // this.allJobDescriptionPM = data;
          
          
          console.log(this.allJobDescriptionPM);


        }
      );
    });

  }

  reloadData(){
    this.jobDescriptionService.getAllJobDescription(this.employee.employeeId).subscribe(
      data=> {
        this.allJobDescriptionPM=data;
        console.log(this.allJobDescriptionPM);
        
      }
    );
    
  }
  }
 
