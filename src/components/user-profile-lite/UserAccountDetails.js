import React from "react";
// import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  // FormGroup,
  FormInput,
  // FormSelect,
  // FormTextarea,
  // Button
} from "shards-react";
import CallAPI from '../../utils/callAPI'
import {FormGroup,FormControlLabel,Switch} from '@material-ui/core';
import useStyles from './style'

export default function UserAccountDetails ({ data })  {
  console.log(data[0])
  const classes=useStyles()
  const [active,setActive]= React.useState(true);
  React.useEffect(()=>{
    if(data.length!==0){
      setActive(data[0].state===1?true:false);
    }
  },[data])
  const changeStateAcc = ()=>{
    setActive(!active);
    CallAPI(`change_state_user/${data[0].id}`,'POST',{active:!active}).then(res =>{
      console.log('Oke')
    }).catch(error=>
    {
      throw(error)
    })
  }
  return (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{'Account Details'}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">Full Name</label>
                  <FormInput
                    id="feFirstName"
                    placeholder=""
                    value={data.length===0?'':data[0].fullName}
                    onChange={() => {}}
                    disabled 
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Email</label>
                  <FormInput
                    id="feLastName"
                    placeholder=""
                    value={data.length===0?'':data[0].email}
                    onChange={() => {}}
                    disabled 
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Win Match</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder=""
                    value={data.length===0?'':data[0].winMatch}
                    onChange={() => {}}
                    disabled 

                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Lose Match</label>
                  <FormInput
                    id="fePassword"
                    placeholder=""
                    value={data.length===0?'':data[0].loseMatch}
                    onChange={() => {}}
                    disabled                     
                  />
                </Col>
              </Row>
              <Row form>
                {/* City */}
                <Col md="6" className="form-group">
                  <label htmlFor="feCity">Draw Match</label>
                  <FormInput
                    id="feCity"
                    placeholder="Draw Match"
                    value={data.length===0?'':data[0].drawMatch}
                    onChange={() => {}}
                    disabled 
                  />
                </Col>
                {/* State */}
                <Col md="6" className="form-group">
                  <label htmlFor="feInputState">Total Match</label>
                  <FormInput
                    id="feCity"
                    placeholder="City"
                    value={data.length===0 ? '': parseInt(data[0].drawMatch)+parseInt(data[0].loseMatch)+parseInt(data[0].winMatch)}
                    onChange={() => {}}
                    disabled 
                  />
                </Col>
              </Row>
            </Form>
            {/* data.length===0? '' : data[0].roleId === '2' ? classes.hidecls : '' */}
            <FormGroup className={data.length===0? '' : data[0].roleId.toString() === '2' ? classes.hidecls : ''}>
              <FormControlLabel
                control={<Switch checked={active} onChange={changeStateAcc}/>}
                label="Active"
              />
          </FormGroup>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
  )
};

// UserAccountDetails.propTypes = {
//   /**
//    * The component's title.
//    */
//   title: PropTypes.string
// };

// UserAccountDetails.defaultProps = {
//   title: "Account Details"
// };


