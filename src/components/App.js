import React, { Component } from 'react';
import {Menu, Grid, Label, Input} from 'semantic-ui-react'
import Profile from './Profile'

class App extends Component {

    componentDidMount(){
      this.props.getData()
    }

     state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem} = this.state
    const { /*data,*/ isFetching, isSearching, filteredData } = this.props.profile
    if(isFetching === true){
        return <div>Loading</div>
    }
      else{
        console.log(this.props.profile)
    return (
     <Grid container className="">
        <Grid.Row columns={2}>
            <Grid.Column className=""width={4}>
                <Menu vertical>
        <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
          <Label color='teal'>1</Label>
          Inbox
        </Menu.Item>

        <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
          <Label>51</Label>
          Spam
        </Menu.Item>

        <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
          <Label>1</Label>
          Updates
        </Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search mail...' />
        </Menu.Item>
      </Menu>
            </Grid.Column>
            <Grid.Column className="" width={12}>
                <Profile />
            </Grid.Column>
        </Grid.Row>
     </Grid>
    );
      }
  }
}

export default App;
