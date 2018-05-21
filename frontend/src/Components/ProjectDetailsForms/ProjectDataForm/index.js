import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';


import GenericForm from '../../GenericForm';
import { getProjectDetailsAction } from '../../../store/actions/getProjectDetailsAction';
import { postProjectDataAction } from '../../../store/actions/postProjectDataAction';
import { grabModifiedFields, getFetchBody, resetFormPayload } from '../helpers';

class ProjectDataForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPayload: {
        'form_settings': {type: 'project_data_form', },
        'name': {value: '', type: 'input', inputType: 'text', required: 'true', placeholder: 'Project Name'},
        'radar_portfolio': {value: {}, type: 'dropdown', required: 'false', placeholder: 'Radar oder Projektportfolio'},
        'business_proposal': {value: {}, type: 'dropdown', required: 'false', placeholder: 'Geschäftsantrag'},
        'project_type': {value: {}, type: 'dropdown', required: 'false', placeholder: 'Projekttyp'},
        'project_nature': {value: {}, type: 'dropdown', required: 'false', placeholder: 'Projekttart'},
        'strategic_importance': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Strategische Bedeutung'},
        'operational_urgency': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Operative Dringlichkeit'},
        'political_significance': {value: {}, type: 'dropdown', required: 'false', placeholder: 'Politische Bedeutung'},
        'project_priority': {value: {}, type: 'dropdown', required: 'false', placeholder: 'Projektpriorität'},
        'project_character': {value: {}, type: 'dropdown', required: 'false', placeholder: 'Projektcharakter (Projektbezogen)'},
        'control_cycle': {value: {}, type: 'dropdown', required: 'false', placeholder: 'Steuerungszyklus'},
        'risk_assessment': {value: {}, type: 'dropdown', required: 'false', placeholder: 'Projekt-Risikobeurteilung'},
        'project_goal': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Projektziel'},
        'project_handbook': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Projekthandbuch'},
        'project_handbook_file': {value: '', type: 'file', required: 'false', placeholder: 'Handbuch data'},
        'e3_number': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'E3-Nummer'},
        'business_category': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Geschäftskategorie'},
        'service_nature': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Leistungsart'},
        'invoiceability': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Verrechenbarkeit'},
        'business_number': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Geschäftsnummer'},
        'project_status_phase': {value: {}, type: 'dropdown', required: 'false', placeholder: 'Projektstatus/Projektphase'},
        'comment': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Bemerkung'},
      },
      
    };
  }

  componentDidMount = () => {
    const action = getProjectDetailsAction(this.props);
    this.props.dispatch(action);
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.project_data !== undefined && nextProps.project_finances !== null){
      const newState = Object.assign({}, prevState);
      Object.keys(prevState.formPayload).map(key => {
        if (key !== 'form_settings' && prevState.formPayload[key].value !== nextProps.project_data[key]){
          if (nextProps.project_data[key] !== null && nextProps.project_data[key] !== undefined ){
            newState.formPayload[key].value = nextProps.project_data[key];
          }
        }
        return key;
      })
        return newState;
    }
    return null;
  }

  handleChange = input_array => {
    this.state.formPayload[input_array[0]].value = input_array[1];
    this.state.formPayload[input_array[0]].modified = true;
  };

  handleSubmit = () => {
    let body = getFetchBody(grabModifiedFields(this.state.formPayload));
    const method = 'PATCH';
    if (Object.keys(body).length !== 0){
      resetFormPayload(this);
      const action = postProjectDataAction(this.props, body, method, this.props.project_id);
      this.props.dispatch(action);
    }

  }

  render() {
    return (
      <div className="project-data-form-wrapper">
        <GenericForm 
          title='Projectdaten'
          className='project-data-form'
          payload={ this.state.formPayload }
          onSubmit={ this.handleSubmit }
          updateParentState={ this.handleChange }
        />
      </div>
    )
    ;
  }
}

const mapStateToProps = (state, props) => {
  // console.log('PROJECT DATA', state);
  return {
    project_data: state.project_details,
  }
}

export default withRouter(connect(mapStateToProps)(ProjectDataForm));