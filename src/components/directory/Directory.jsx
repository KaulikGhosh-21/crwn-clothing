import { connect } from "react-redux";
import "./Directory.scss";

import {selectSections} from "../redux/directory/directorySelectors"

import MenuItem from "../menu-item/MenuItem";

const Directory = ({sections}) => {
  return(
    <div className="directory-menu">
        {sections.map(({title, imageUrl, id, linkUrl}) => <MenuItem 
        key={id}
        title={title.toUpperCase()}
        imgUrl={imageUrl}
        linkUrl={linkUrl}
        />)}
    </div>
  )
} 

const mapStateToProps = state => {
  return{
    sections : selectSections(state)
  }
}
  

export default connect(mapStateToProps)(Directory);