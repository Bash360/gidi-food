import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'gidi-food';
  processDetail:string=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Vivamus egestas feugiat felis. Mauris lobortis nisl nec mi convallis finibus. 
  Nulla facilisi. Donec urna orci, placerat vestibulum sapien eget, laoreet egestas elit.`;
  feedback:string= `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget justo justo.
   Ut vehicula nisl at nisl finibus, in fermentum dui ultricies. Aenean magna lectus, tempus nec 
   augue at, laoreet viverra nunc. Nunc efficitur arcu eget nulla hendrerit, sed ultricies risus 
   pharetra. In tristique pellentesque urna, in rutrum purus imperdiet malesuada. Sed facilisis,
    eros sit amet dignissim molestie, enim nisi placerat elit, pretium dapibus dui lorem id libero.
     Quisque quis neque id est tincidunt fringilla. Nunc pretium tellus a sodales elementum.
      Donec ipsum nisl, bibendum sit amet feugiat quis, porta quis mi. Quisque luctus tortor
       accumsan ligula pulvinar pellentesque. Maecenas erat orci, imperdiet in leo a, molestie
        commodo mauris. Sed auctor mi et metus consectetur, ac varius mi placerat. Morbi tincidunt
  finibus dolor, ac interdum nibh dignissim vel. Nam aliquet tincidunt felis eu convallis. Integer
  hendrerit facilisis diam, eu congue leo. Sed vestibulum, arcu a rhoncus pulvinar, elit dolor hendrerit dolor,
  tristique pharetra dolor nulla mattis justo. Duis erat lorem, scelerisque in mauris eu, pretium sagittis sem.
  Praesent in tortor nisl. Maecenas nulla eros, vulputate sit amet consequat dignissim, finibus in dolor. Fusce sed lectus suscipit est ultricies ullamcorper varius 
  in turpis. Sed tincidunt, velit vitae vestibulum porta, enim nunc vulputate est, quis egestas mauris mauris sed quam. 
  Mauris dapibus enim non nisl efficitur commodo. Pellentesque cursus a purus quis hendrerit. Mauris pharetra lacinia auctor.`;
  handleSubmit(event):void{
  event.preventdefault();
  }
}
