import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../state';


interface Props {
}

interface State {
}


class Chat extends React.PureComponent<Props, State> {
  render(): JSX.Element {
    return (
      <div className="container app">
        <div className="row app-one">
          <div className="col-sm-4 side">
            <div className="side-one">
              <div className="row heading">
                <div className="col-sm-3 col-xs-3 heading-avatar">
                  <div className="heading-avatar-icon">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                  </div>
                </div>
                <div className="col-sm-1 col-xs-1 heading-dot pull-right">
                  <i className="fa fa-ellipsis-v fa-2x pull-right" aria-hidden="true"/>
                </div>
                <div className="col-sm-2 col-xs-2 heading-compose pull-right">
                  <i
                    className="fa fa-comments fa-2x pull-right" aria-hidden="true"/>
                </div>
              </div>
              <div className="row searchBox">
                <div className="col-sm-12 searchBox-inner">
                  <div className="form-group has-feedback">
                    <input id="searchText" type="text" className="form-control"
                           name="searchText" placeholder="Search"/>
                    <span
                      className="glyphicon glyphicon-search form-control-feedback"/>
                  </div>
                </div>
              </div>
              <div className="row sideBar">
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar2.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar4.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar5.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar2.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar4.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="side-two">
              <div className="row newMessage-heading">
                <div className="row newMessage-main">
                  <div className="col-sm-2 col-xs-2 newMessage-back">
                    <i className="fa fa-arrow-left"
                       aria-hidden="true"/>
                  </div>
                  <div className="col-sm-10 col-xs-10 newMessage-title"> New Chat</div>
                </div>
              </div>
              <div className="row composeBox">
                <div className="col-sm-12 composeBox-inner">
                  <div className="form-group has-feedback">
                    <input id="composeText" type="text"
                           className="form-control" name="searchText"
                           placeholder="Search People"/>
                    <span
                      className="glyphicon glyphicon-search form-control-feedback"/>
                  </div>
                </div>
              </div>
              <div className="row compose-sideBar">
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar2.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar4.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar5.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar2.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar4.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar5.png"/>
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
										<span
                      className="time-meta pull-right">18:18 </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8 conversation">
            <div className="row heading">
              <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                <div className="heading-avatar-icon">
                  <img src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
                </div>
              </div>
              <div className="col-sm-8 col-xs-7 heading-name">
                <a className="heading-name-meta">John Doe </a>
                <span
                  className="heading-online">Online</span>
              </div>
              <div className="col-sm-1 col-xs-1 heading-dot pull-right">
                <i
                  className="fa fa-ellipsis-v fa-2x pull-right" aria-hidden="true"/>
              </div>
            </div>
            <div className="row message" id="conversation">
              <div className="row message-previous">
                <div className="col-sm-12 previous">
                  <a> Show Previous Message! </a>
                </div>
              </div>
              <div className="row message-body">
                <div className="col-sm-12 message-main-receiver">
                  <div className="receiver">
                    <div className="message-text"> Hi, what are you doing?!</div>
                    <span className="message-time pull-right"> Sun </span>
                  </div>
                </div>
              </div>
              <div className="row message-body">
                <div className="col-sm-12 message-main-sender">
                  <div className="sender">
                    <div className="message-text"> I am doing nothing man!</div>
                    <span className="message-time pull-right"> Sun </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row reply">
              <div className="col-sm-1 col-xs-1 reply-emojis">
                <i className="far fa-smile fa-2x"/>
              </div>
              <div className="col-sm-9 col-xs-9 reply-main">
						<textarea className="form-control" rows={1}
                      id="comment"/>
              </div>
              <div className="col-sm-1 col-xs-1 reply-recording">
                <i className="fa fa-microphone fa-2x"
                   aria-hidden="true"/>
              </div>
              <div className="col-sm-1 col-xs-1 reply-send">
                <i className="fa fa-paper-plane fa-2x"
                   aria-hidden="true"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state: AppState) => {
  return {};
};

export default connect(
  mapStateToProps,
)(Chat);
