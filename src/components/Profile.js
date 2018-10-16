import React from 'react'
import { Item, Grid} from 'semantic-ui-react'
import '../App.css'

const Profile = (props) =>{
    return(
  <Grid className="center aligned"  >
    <Grid.Row>
    <Item.Group>
    <Item className="itemTo" >
        <Item.Image className="picSize" src={props.client.general.avatar} />
      <Item.Content className="middle aligned">
        <Item.Header as="h2">{props.client.general.firstName} {props.client.general.lastName}</Item.Header><br/>
        <Item.Header as="h3">{props.client.job.title} - {props.client.job.company}</Item.Header>
        <Item.Meta>Address: {props.client.address.country}, {props.client.address.city}, {props.client.address.street}, {props.client.address.zipCode}</Item.Meta>

        <Item.Description>
          Mail: {props.client.contact.email}, phone number: {props.client.contact.phone}
        </Item.Description>
      </Item.Content>

    </Item>
    </Item.Group>
    </Grid.Row>
  </Grid>


) }


export default Profile