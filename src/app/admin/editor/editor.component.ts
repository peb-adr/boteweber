import { Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-balloon";

@Component({
  selector: 'app-admin-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class AdminEditorComponent implements OnInit {

  @Input()
  data = "";
  @Output()
  newDataEvent = new EventEmitter<string>();

  editor = ClassicEditor
  
  ckConfig = {
    toolbar: [
      'heading', '|',
      'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|',
      'imageUpload', 'blockQuote', 'mediaEmbed', '|',
      'undo', 'redo'
    ]
  }

  constructor() { }

  ngOnInit(): void { }

  onDataChange(event) {
    this.newDataEvent.emit(this.data)
  }
}
