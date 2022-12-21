import React from 'react';
import './FormCard.css';

import { FormData } from '../Form/Form';

interface FormCardProps {
  dataList: FormData;
}

export default class FormCart extends React.Component<FormCardProps> {
  render() {
    return (
      <div className="form-card">
        <h4 className="form-card_name">{this.props.dataList?.name}</h4>
        <p className="form-card_email">Email: {this.props.dataList?.email}</p>
        <p className="form-card_date">Birthday: {this.props.dataList?.birthday}</p>
        <p className="form-card_image">Image: {this.props.dataList?.picture?.[0].name}</p>
        <p className="form-card_genre">Genre: {this.props.dataList?.genre}</p>
        <p className="form-card_notifications">
          Notifications: {this.props.dataList?.notifications ? 'on' : 'off'}
        </p>
        <p className="form-card_id">Id: {this.props.dataList?.id}</p>
      </div>
    );
  }
}
