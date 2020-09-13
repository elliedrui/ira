import React from 'react'
import {connect} from 'react-redux'
import {fetchMembers} from '../actions/fetchMembers'
import {Card} from 'react-bootstrap';
import Members from '../components/Members'
import MemberInput from '../components/MemberInput'
class MembersContainer extends React.Component {
  
  componentDidMount(props) {
    this.props.fetchMembers()
  }
  render() {
    return(
      <div class="mx-auto" style={{ width: '600px' }}>
        
        <Card class="mx-auto" style={{ width: '700px' }}>
          <Members/><br/>
        </Card>
        <br/>
        <Card class="mx-auto" style={{ width: '700px' }}>
          <MemberInput/><br/>
        </Card>
      </div>
    )
  }
  
}

const mapStateToProps = state => {
  return {
    members: state.members
  }
  
}

export default connect(mapStateToProps, {fetchMembers})(MembersContainer)