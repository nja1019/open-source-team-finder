import React from 'react';
import {getChatData} from '../../server';
import {getInboxData} from '../../server';


export default class Inbox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      contents:[]
    };

  }

  refresh(){
    getChatData(this.props.chatId, (chatData)=>{
      this.setState(chatData);
    });
  }

  componentWillMount(){
   this.refresh();
  }

  handleClickChat(clickEvent){
    clickEvent.preventDefault();
    if (clickEvent.button === 0) {
    var callbackFunction = (newColor, newCurr) =>{
      this.setState({color: "read"});
      this.setState({curr: "message-current panel panel-default"});
    };
     getChatData(this.props.chatId,callbackFunction);

   }

  }



  render() {
    return (
      <div className= {this.state.curr}>

        <a href="#" onClick={(e) => this.handleClickChat(e)}>
          <div className= "panel-body">
            <div className= "col-md-10 chat-name">
              <b>{this.state.name}</b>
            </div>
            <div className= "col-md-2">
              <span className={this.state.color}>●</span>
            </div>
          </div>
        </a>

      </div>
    )
  }
}
