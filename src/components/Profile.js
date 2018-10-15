import React from 'react'
import { Item, Grid, Image } from 'semantic-ui-react'

const Profile = (props) =>{
    return(
  <Grid className="center aligned"  >
    <Grid.Row>
    <Item.Group>
    <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>Header</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
          <Image src='/images/wireframe/short-paragraph.png' />
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>

    
  </Item.Group>
    </Grid.Row>
  </Grid>


) }

export default Profile