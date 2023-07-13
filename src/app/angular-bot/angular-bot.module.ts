import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { ChatComponent } from '../components/chat/chat.component';
import { ChatService } from '../chat.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule
  ], providers: [ChatService],
})
export class AngularBotModule { }
