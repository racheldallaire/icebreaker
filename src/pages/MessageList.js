import React, {Component} from 'react';
import Message from './Message.js';

export default class MessageList extends Component {

  //Cannot pass variables JQUERY//
//   $('.chat[data-chat=person2]').addClass('active-chat');
// $('.person[data-chat=person2]').addClass('active');

// $('.left .person').mousedown(function(){
//     if ($(this).hasClass('.active')) {
//         return false;
//     } else {
//         var findChat = $(this).attr('data-chat');
//         var personName = $(this).find('.name').text();
//         $('.right .top .name').html(personName);
//         $('.chat').removeClass('active-chat');
//         $('.left .person').removeClass('active');
//         $(this).addClass('active');
//         $('.chat[data-chat = '+findChat+']').addClass('active-chat');
//     }
// });
  render () {
    const messages = this.props.messages.map((message) => {
            return <Message message={message} key={message.key} />
    });


    return (
      <main className="messages">
        <div className="wrapper">
            <div className="container">
                <div className="left">
                    
                    <ul className="people">
                        <li className="person" data-chat="person1">
                            <img src="https://s13.postimg.org/ih41k9tqr/img1.jpg" alt="" />
                            <span className="name">Thomas Bangalter</span>
                            <span className="time">2:09 PM</span>
                            <span className="preview">I was wondering...</span>
                        </li>
                        <li className="person" data-chat="person2">
                            <img src="https://s3.postimg.org/yf86x7z1r/img2.jpg" alt="" />
                            <span className="name">Dog Woofson</span>
                            <span className="time">1:44 PM</span>
                            <span className="preview">I've forgotten how it felt before</span>
                        </li>
                        <li className="person" data-chat="person3">
                            <img src="https://s3.postimg.org/h9q4sm433/img3.jpg" alt="" />
                            <span className="name">Louis CK</span>
                            <span className="time">2:09 PM</span>
                            <span className="preview">But we’re probably gonna need a new carpet.</span>
                        </li>
                        <li className="person" data-chat="person4">
                            <img src="https://s3.postimg.org/quect8isv/img4.jpg" alt="" />
                            <span className="name">Bo Jackson</span>
                            <span className="time">2:09 PM</span>
                            <span className="preview">It’s not that bad...</span>
                        </li>
                        <li className="person" data-chat="person5">
                            <img src="https://s16.postimg.org/ete1l89z5/img5.jpg" alt="" />
                            <span className="name">Michael Jordan</span>
                            <span className="time">2:09 PM</span>
                            <span className="preview">Wasup for the third time like is 
        you bling bitch</span>
                        </li>
                        <li className="person" data-chat="person6">
                            <img src="https://s30.postimg.org/kwi7e42rh/img6.jpg" alt="" />
                            <span className="name">Drake</span>
                            <span className="time">2:09 PM</span>
                            <span className="preview">howdoyoudoaspace</span>
                        </li>
                    </ul>
                </div>

                <div className="right">
                    <div className="top"><span>To: <span className="name">Dog Woofson</span></span></div>
                    <div className="chat" data-chat="person1">
                        <div className="conversation-start">
                            <span>Today, 6:48 AM</span>
                        </div>
                        <div className="bubble you">
                            Hello,
                        </div>
                        <div className="bubble you">
                            it's me.
                        </div>
                        <div className="bubble you">
                            I was wondering...
                        </div>
                    </div>
                    <div className="chat" data-chat="person2">
                        <div className="conversation-start">
                            <span>Today, 5:38 PM</span>
                        </div>
                        <div className="bubble you">
                            Hello, can you hear me?
                        </div>
                        <div className="bubble you">
                            I'm in California dreaming
                        </div>
                        <div className="bubble me">
                            ... about who we used to be.
                        </div>
                        <div className="bubble me">
                            Are you serious?
                        </div>
                        <div className="bubble you">
                            When we were younger and free...
                        </div>
                        <div className="bubble you">
                            I've forgotten how it felt before
                        </div>
                    </div>
                    <div className="chat" data-chat="person3">
                        <div className="conversation-start">
                            <span>Today, 3:38 AM</span>
                        </div>
                        <div className="bubble you">
                            Hey human!
                        </div>
                        <div className="bubble you">
                            Umm... Someone took a shit in the hallway.
                        </div>
                        <div className="bubble me">
                            ... what.
                        </div>
                        <div className="bubble me">
                            Are you serious?
                        </div>
                        <div className="bubble you">
                            I mean...
                        </div>
                        <div className="bubble you">
                            It’s not that bad...
                        </div>
                        <div className="bubble you">
                            But we’re probably gonna need a new carpet.
                        </div>
                    </div>
                    <div className="chat" data-chat="person4">
                        <div className="conversation-start">
                            <span>Yesterday, 4:20 PM</span>
                        </div>
                        <div className="bubble me">
                            Hey human!
                        </div>
                        <div className="bubble me">
                            Umm... Someone took a shit in the hallway.
                        </div>
                        <div className="bubble you">
                            ... what.
                        </div>
                        <div className="bubble you">
                            Are you serious?
                        </div>
                        <div className="bubble me">
                            I mean...
                        </div>
                        <div className="bubble me">
                            It’s not that bad...
                        </div>
                    </div>
                    <div className="chat" data-chat="person5">
                        <div className="conversation-start">
                            <span>Today, 6:28 AM</span>
                        </div>
                        <div className="bubble you">
                            Wasup
                        </div>
                        <div className="bubble you">
                            Wasup
                        </div>
                        <div className="bubble you">
                            Wasup for the third time like is <br />you blind bitch
                        </div>

                    </div>
                    <div className="chat" data-chat="person6">
                        <div className="conversation-start">
                            <span>Monday, 1:27 PM</span>
                        </div>
                        <div className="bubble you">
                            So, how's your new phone?
                        </div>
                        <div className="bubble you">
                            You finally have a smartphone :D
                        </div>
                        <div className="bubble me">
                            Drake?
                        </div>
                        <div className="bubble me">
                            Why aren't you answering?
                        </div>
                        <div className="bubble you">
                            howdoyoudoaspace
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    )
  }
}


