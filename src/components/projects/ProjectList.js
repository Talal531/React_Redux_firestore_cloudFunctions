import React, {Component} from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ProjectList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { projects, userId } = this.props;
    if(!projects){
      return(
        <div className="preloader-wrapper small active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
      )
    }
    console.log("==", projects)
    return (
      <div className="project-list section">
      {/* condition - if we do have projects then run the map function otherwise not */}
        { projects && projects.map(project => {
          return (
            <Link key={project.id} to={`/project/${project.id}`}>
              <ProjectSummary project={project}/>
            </Link>
          )
        })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state.firebase.auth.uid)
  return {
    userId: state.firebase.auth.uid
  }
}

export default connect(mapStateToProps)(ProjectList);
