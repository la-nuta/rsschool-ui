import ReduxFormInput from 'components/ReduxFormInput';
import * as React from 'react';
import { Collapse, InputGroup, FormGroup, Label } from 'reactstrap';
import { Field } from 'redux-form';
import { NOTIFICATIONS, TIME_OPTIONS } from '../../reference-data';
import { classNames } from 'core/styles';

const cn = classNames(require('./index.scss'));

const index = Math.ceil(NOTIFICATIONS.length / 2);
const column1 = NOTIFICATIONS.slice(0, index);
const column2 = NOTIFICATIONS.slice(index);

class NotificationsForm extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { collapse: false };
    }

    hide = () => {
        this.setState({ collapse: false });
    };
    open = () => {
        this.setState({ collapse: true });
    };

    render() {
        return [
            <div key="0" className="row">
                <div className="col-md-12">
                    <Label>Do you want to receive notifications?</Label>
                </div>
                <FormGroup className="col-md-6">
                    <FormGroup check={true}>
                        <Label check={true}>
                            <Field
                                component={ReduxFormInput}
                                name="notifications.readyToReceive"
                                value="yes"
                                type="radio"
                                onChange={this.open}
                            />
                            Yes, please
                        </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup className="col-md-6">
                    <FormGroup check={true}>
                        <Label check={true}>
                            <Field
                                component={ReduxFormInput}
                                name="notifications.readyToReceive"
                                value=""
                                type="radio"
                                onChange={this.hide}
                            />
                            No, thanks
                        </Label>
                    </FormGroup>
                </FormGroup>
            </div>,
            <Collapse isOpen={this.state.collapse} key="1">
                <div className="row">
                    <FormGroup className="col-md-6">
                        <Label>Telegram username</Label>
                        <Field
                            name="notifications.telegramUserName"
                            type="text"
                            component={ReduxFormInput}
                            placeholder="Telegram username"
                        />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label>Time for notifications</Label>
                        <br />
                        <InputGroup className="col-md-14">
                            <Field
                                name="notifications.fromTime"
                                className={cn('inline-select')}
                                type="select"
                                component={ReduxFormInput}
                            >
                                <option value="">From: hh:mm</option>
                                {TIME_OPTIONS.map(el => <option key={el}>{el}</option>)}
                            </Field>
                            <Field name="notifications.toTime" type="select" component={ReduxFormInput}>
                                <option value="">To: hh:mm</option>
                                {TIME_OPTIONS.map(el => <option key={el}>{el}</option>)}
                            </Field>
                        </InputGroup>
                    </FormGroup>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Label>I want to recieve notifications about:</Label>
                    </div>
                    <FormGroup className="col-md-6">
                        {column1.map(item => {
                            const name = `notifications.${item.id}`;
                            return (
                                <FormGroup check={true} inline={true} className="col-md-12" key={item.id}>
                                    <Label>
                                        <Field component={ReduxFormInput} name={name} type="checkbox" />
                                        {item.text}
                                    </Label>
                                </FormGroup>
                            );
                        })}
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        {column2.map(item => {
                            const name = `notifications.${item.id}`;
                            return (
                                <FormGroup check={true} inline={true} className="col-md-12" key={item.id}>
                                    <Label>
                                        <Field component={ReduxFormInput} name={name} type="checkbox" />
                                        {item.text}
                                    </Label>
                                </FormGroup>
                            );
                        })}
                    </FormGroup>
                </div>
                ,
            </Collapse>,
        ];
    }
}

export default NotificationsForm;
