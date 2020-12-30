import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter} from '@angular/core';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-balloon";

@Component({
  selector: 'app-admin-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class AdminEditorComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  data = "";
  @Output()
  newDataEvent = new EventEmitter<string>();

  private initialized = false;
  // hold the promise instead of the editor instance so every operation can be sure it has been intitialized
  private editorCreatePromise = null;
  
  private ckConfig = {
    toolbar: [
      'heading', '|',
      'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|',
      'imageUpload', 'blockQuote', 'mediaEmbed', '|',
      'undo', 'redo'
    ]
  }

  constructor() { }

  ngOnInit(): void {
    console.log("create")
    // initiate editor creation
    this.editorCreatePromise = ClassicEditor
      .create(document.querySelector('#editor'), this.ckConfig)
    // queue event listener attachment
    this.editorCreatePromise
      .then(editor => {
        editor.model.document.on('change:data', this.onDataChange.bind(this))
      })
    this.updateData();
    this.initialized = true;
  }

  ngOnDestroy() {
    this.editorCreatePromise
      .then(editor => {
        editor.destroy()
          .catch(error => {
            console.log(error)
          });
      })
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (this.initialized && changes.data.currentValue) {
      this.updateData();
    }
  }
  
  updateData() {
    this.editorCreatePromise
      .then(editor => {
        editor.setData(this.data);
        console.log(this.data)
      })
  }

  onDataChange() {
    if (!this.initialized) {
      return;
    }

    this.editorCreatePromise
    .then(editor => {
      this.data = editor.getData();
    })
    .then(() => {
        this.newDataEvent.emit(this.data)
      })
  }
  
}
