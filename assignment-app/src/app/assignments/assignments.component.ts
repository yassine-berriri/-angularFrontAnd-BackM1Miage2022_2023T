import { Component, OnInit } from '@angular/core';
import {Assignment} from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre = "mon app sur les assignments !"
  formVisible=false;
  assignementSelectionne?:Assignment;
  page: number=1;
  limit: number=10;
  totalDocs: number;
  totalPages: number;
  hasPrevPage: boolean;
  prevPage: number;
  hasNextPage: boolean;
  nextPage: number;
 
 
  ajoutActive = false;
  assignments?:Assignment[];
 
  
  constructor (private assignmentService:AssignmentsService) {

    
   }

   

  ngOnInit(): void {
    /*setTimeout(() =>{
      this.ajoutActive = true;
    },2000);*/
    //this.assignments = this.assignmentService.getAssignments();
   /* this.assignmentService.getAssignments()
    .subscribe(assignments => this.assignments = assignments);
    */
   this.getAssignments();
   
  }
 
  assignmentClique(assignment:Assignment) {
    this.assignementSelectionne = assignment;
   
  }
  onAddAssignmentBtnClick(){
   this.formVisible=!this.formVisible;
   console.log(" this.formVisible", this.formVisible);
  }
/*
  onNouvelAssignment(event:Assignment){
    //this.assignments?.push(event);
   this.assignmentService.addAssignment(event)
    .subscribe(message => console.log(message));
    this.formVisible = true;
  }
  */
  onDeletedAssignment(event:Assignment){
 
    
/*for( const assignment of this.assignments){
  if(assignment.nom == event.nom){
   this.assignments?.splice(this.assignments.indexOf(assignment),1);
  }
  
}*/

    
   
    
  }

getAssignments(){
 /* this.assignmentService.getAssignments()
  .subscribe(assignments => this.assignments = assignments);*/
  this.assignmentService.getAssignmentPagine(this.page, this.limit)
  .subscribe(data => {
    this.assignments = data.docs;
    this.page = data.page;
    this.limit = data.limit;
    this.totalDocs = data.totalDocs;
    this.totalPages = data.totalPages;
    this.hasPrevPage = data.hasPrevPage;
    this.prevPage = data.prevPage;
    this.hasNextPage = data.hasNextPage;
    this.nextPage = data.nextPage;
    console.log("données reçues");
  });

}

pageSuivante(){
  if(this.hasNextPage){
    this.page = this.nextPage;
    this.getAssignments();
  }
}

  pagePrecedente(){
    if(this.hasPrevPage){
      this.page = this.prevPage;
      this.getAssignments();
    }
  }

  premierePage(){
    this.page = 1;
    this.getAssignments(); 
  }

  dernierePage(){
    this.page = this.totalPages;
    this.getAssignments();

  }





}
