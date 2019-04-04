import React from 'react';
import { Card, Icon,Segment ,Header,Button,Label} from 'semantic-ui-react';
const list=[{icon:'user md',
desc:'Not sure whats wrong? A diagnostic will fully test your item.',
title:'DIAGNOSTIC'},
{icon:'server',
desc:'Send your machine to us, working or not, and we can transfer your data.',
title:'DATA TRANSFER'},
{icon:'print',
desc:'Same as the Diagnostic, a full inspection, with the added Insurance Report at the end.',
title:'AMC REPORT'},
{icon:'bug',
desc:'Running slow? Think you have a virus? This option will sort it out!',
title:'HEALTHCHECK / VIRUS REMOVAL'},
{icon:'wrench',
desc:'Set your machine back to brand new with a fresh installation.',
title:'REBUILD / OS REPAIR'},
{icon:'save',
desc:'Set your machine back to brand new while still keeping all your personal data.',
title:'BACK-UP & REBUILD'},
{icon:'sync',
desc:'Machine getting hot? Making noises? Don\'t worry, it just needs a good clean out!',
title:'INTERNAL CLEAN-UP'},
{icon:'dolly',
desc:'Like a diagnostic, we will take apart and test the hardware and quote for any parts.',
title:'QUOTE FOR PARTS'},
]
class RepairMains extends React.Component{
    constructor(props){
        super(props);
        console.log('props')
    }
renderCard(){
  return  list.map((el,idx)=>{
       return <Card key={idx}>
                    <Card.Content  as='h1' className='bg-info text-white'>
                        <Icon name={el.icon} />
                        {el.title}
                    </Card.Content>
                    <Card.Content description={el.desc} />                    
                </Card>
    })
}

    render(){
        
        return(
            <div className='container'>
                <Segment clearing inverted color='yellow'  raised>
                <Header as='h2' floated='left'>
                    <Icon name='settings' />
                    <Header.Content>
                    Repair Services
                    <Header.Subheader>Choose the service you need,still confuse Select Diagnostic</Header.Subheader>
                    </Header.Content>
                </Header>
                <Header floated='right' as='h2'>
                <Button as='div' labelPosition='right'>
                    <Button color='red'>
                        <Icon name='call' />
                        Call
                    </Button>
                    <Label as='a' basic color='red' pointing='left'>
                        9874561230
                    </Label>
                    </Button>
                </Header>
                </Segment>
                <Card.Group stackable itemsPerRow={4}>
                    {this.renderCard()}
                </Card.Group>
            </div>
        );
    }
}

export default RepairMains;