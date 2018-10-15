import React from 'react'
import { Item, Grid, Image } from 'semantic-ui-react'
import '../App.css'

const Profile = (props) =>{
    return(
  <Grid className="center aligned"  >
    <Grid.Row>
    <Item.Group>
    <Item className="itemTo" >
        <Item.Image className="picSize" src={props.user.general.avatar} />
      <Item.Content className="middle aligned">
        <Item.Header as="h2">{props.user.general.firstName} {props.user.general.lastName}</Item.Header><br/>
        <Item.Header as="h3">{props.user.job.title} - {props.user.job.company}</Item.Header>
        <Item.Meta>Address: {props.user.address.country}, {props.user.address.city}, {props.user.address.street}, {props.user.address.zipCode}</Item.Meta>

        <Item.Description>
          Mail: {props.user.contact.email}, phone number: {props.user.contact.phone}
        </Item.Description>
      </Item.Content>

    </Item>
    </Item.Group>
    </Grid.Row>
  </Grid>


) }


export default Profile