import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-balloon";

@Component({
  selector: 'app-admin-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class AdminEditorComponent implements OnInit {

  @Input()
  data = "";
  @Input()
  placeholder = "";
  @Output()
  newDataEvent = new EventEmitter<string>();

  editor = ClassicEditor
  
  ckConfig = {
    placeholder: this.placeholder,
    toolbar: [
      'heading', '|',
      'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|',
      'imageUpload', 'blockQuote', 'mediaEmbed', '|',
      'undo', 'redo'
    ]
  }

  constructor() { }

  ngOnInit(): void {
    this.ckConfig.placeholder = this.placeholder
  }

  onDataChange(event) {
    this.newDataEvent.emit(this.data)
  }
}
