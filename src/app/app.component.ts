import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  tasks: string[]; //declearing array of tasks to be added
  totalTask: number;
  completed: number;
  pending: number; 

  constructor(){
    this.tasks = [];
    this.totalTask = 0;
    this.completed = 0;
    this.pending = 0;
    
  }

  addTask(newTask){

    var duplicate = false;
    for(var i = 0; i<this.tasks.length; i++){

      if(this.tasks[i] == newTask){
        duplicate = true;
      }
    }


    if(!duplicate && (newTask.length > 0)){
        this.tasks.push(newTask); //pushing newTask(which is the value of input field) in our tasks array
        this.totalTask++;
        this.pending++;
    }else{

      if(duplicate)
      alert("Error!!! Duplicate Task.");
      else
      alert("Error!!! Empty Task.")  
  }
  }

  taskDone(status){
    if(status){
      this.completed++;
      this.pending--;
    }else{this.completed--;
          this.pending++;}
  }

  deleteTask(e, item, taskStatus){ //delete task method runs when a click event fires on the dlt button, it has two parameters 1) event obj 2) task to be deleted as string
    
      var listItems = document.querySelectorAll("#taskList li");
      var totListItems = listItems.length;
    
    if(totListItems == 1){
      e.target.parentNode.innerHTML = '';
      
      var index = this.tasks.indexOf(item);
      this.tasks.splice(index, 1);
      
    }else{
      
      var taskList = document.getElementById("taskList");
      taskList.removeChild(e.target.parentNode);
    
      var index = this.tasks.indexOf(item);
      this.tasks.splice(index, 1);
    
    }
    if(taskStatus){
      this.completed--;
    }else{
      this.pending--;
    }
      this.totalTask--;

  }

}