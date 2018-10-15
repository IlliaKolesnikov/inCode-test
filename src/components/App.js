import React, { Component } from 'react';
import {Menu, Grid, Label, Input, Image} from 'semantic-ui-react'
import Profile from './Profile'
import LoadingScreen from './LoadingScreen'
import '../App.css'
class App extends Component {

    componentDidMount(){
      this.props.getData()
    }

    state = { activeIndex: 0 }
    handleItemClick = (e, { name, index }) => this.setState({ activeIndex: index })
  render() {
    const { activeIndex } = this.state
    const { isFetching, filteredData } = this.props.profile
    if(isFetching === true){
        return <LoadingScreen />
    }
      else{
        console.log(this.props.profile)
    return (
     <Grid container >
        <Grid.Row columns={2}>
            <Grid.Column className="nopadding asider" width={4}>
                <Menu fluid vertical className="nomargin">
            {   /*console.log(data)*/}
               { filteredData.map((item, index) =>{
                return (
                <Menu.Item 
                key={index}
                index={index}
                active={activeIndex === index}
                onClick={this.handleItemClick}
                >
                <Grid className="middle aligned">
                    <Grid.Column width={4}>
                        <Image size="small"avatar src={item.general.avatar} />
                    </Grid.Column>
                    <Grid.Column className="nopadding" width={12}>
                        <span ><strong>{item.general.firstName} {item.general.lastName}</strong><br/>
                            {item.job.title}
                    </span>  
                    </Grid.Column>
                    </Grid>    
                </Menu.Item>)
            })  
            }
          </Menu> 
            </Grid.Column>
            <Grid.Column className="fullviewport nopadding" stretched width={12}>
            {filteredData/*.filter(this.isMatch)*/.length > 0 ?
           <Profile user={filteredData/*.filter(this.isMatch)*/[this.state.activeIndex]}/> : <div>No results found</div>
            }
        </Grid.Column>
        </Grid.Row>
     </Grid>
    );
      }
  }
}

export default App;
