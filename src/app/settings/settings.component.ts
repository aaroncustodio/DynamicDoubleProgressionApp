import { Component, OnInit } from '@angular/core';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  selectedFile!: File;

  constructor(
    private _exerciseService: ExerciseService
  ) { }

  ngOnInit(): void {
  }

  onExportData(): void {
    let exercises = this._exerciseService.getExercises();

    var sJson = JSON.stringify(exercises);
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
    element.setAttribute('download', "dynamic-double-progression-data.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  
  onFileChanged(event: any) {
    debugger;
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, "UTF-8");
    fileReader.onload = () => {
      let result = fileReader.result?.toString();
      if (result != undefined) console.log(result);
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }
}
