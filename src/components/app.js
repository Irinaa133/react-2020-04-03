import React, { PureComponent } from 'react';
import Restaurants from './restaurants';

export default class App extends PureComponent {
  render() {
    return (
      <div style={{ padding: '24px' }}>
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}
