import React from 'react';
import { Container,Grid} from 'semantic-ui-react'

import Mains from './main';
import LeftFilter from './leftFilter';
function Mainindex(){
return (<Container fluid >        
          <Grid centered>
           <Grid.Row stretched>           
            <Grid.Column mobile={16} tablet={4} computer={4}>
              <LeftFilter/>
            </Grid.Column >
              <Grid.Column mobile={16} tablet={12} computer={12}>                
                <Mains/>
              </Grid.Column>
            </Grid.Row>
          </Grid>           
        </Container>)
}

export default Mainindex;