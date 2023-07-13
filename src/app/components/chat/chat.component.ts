import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';
//import {Message, ChatService } from '../chat.service';
interface Message {
  author: string;
  content: string;
}
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  userInput: string = '';
  showChatbot: boolean = false;
  
 
  constructor(public chatService: ChatService) { }

  ngOnInit(): void {
  //   this.chatService.conversation.subscribe((val: any) => {
  //     this.messages = this.messages.concat(val);
  //   });
  // }
  // sendMessage() {
  //   this.chatService.getBotAnswer(this.value);
  //   this.value = '';
  // this.addVisibilityChangeListener();
 
  }

  handleUserInput() {
    const userMessage: Message = { author: 'user', content: this.userInput };
    this.messages.push(userMessage);
    this.userInput = '';

    const botMessage: Message = { author: 'bot', content: this.getBotMessage(userMessage.content) };
    setTimeout(() => {
      this.messages.push(botMessage);
    }, 1500);
    
  }

  getBotMessage(question: string) {
    const messageMap: { [key: string]: string } = {
      'Hi': 'Hello,How can I help you',
      'Hello': 'Hi,How can I help you',
      'Who are you': 'My name is Test Sat Bot',
      'What is your role': 'Just guide for the user',
      'Priyanka':'Darshanala'
    };
    return messageMap[question] || 'I can\'t understand your text. Can you please repeat?';
  }
  toggleChatbot() {
    this.showChatbot = !this.showChatbot;
   
  }
  closeChatbot() {
    this.showChatbot = false;
  }
 

}

