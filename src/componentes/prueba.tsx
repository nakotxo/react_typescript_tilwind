import React, { Component } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

class MyComponent extends Component<IProps, IState> {

  render() {
    return <div>{this.props.t('home.presentacion')}</div>
  }
}

interface IProps extends WithTranslation {
  prop: any;
}

interface IState {
  state: any;
}

export default withTranslation()(MyComponent);