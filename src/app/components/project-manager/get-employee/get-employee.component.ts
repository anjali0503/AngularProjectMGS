import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobDescriptionService } from 'src/app/services/job-description.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {

  constructor(private jobDescriptionService: JobDescriptionService,
    private router: Router) { }

  ngOnInit(): void {
  }

}
