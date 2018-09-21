import _ from 'lodash';

import React, { Component } from 'react';

import { 
  ListView, 
  ScrollView } from 'react-native';

import { connect } from 'react-redux';

import { tarlalarListData } from '../actions';

import ListItemMaliyet from './ListItemMaliyet';

class tarlaListMaliyet extends Component {

  componentWillMount() {
    this.props.tarlalarListData();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ tarlaArray }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(tarlaArray);
  }

  renderRow(tarla) {
    return <ListItemMaliyet tarla={tarla}/>;
  }

  render() {
    return (
      <ScrollView>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}/>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ tarlaDataResponse }) => {
  const tarlaArray = _.map(tarlaDataResponse, (val, uid) => {
    return { ...val, uid };
  });
    return { tarlaArray };
};
export default connect(mapStateToProps, { tarlalarListData })(TarlalarList);
