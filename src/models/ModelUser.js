import React from 'react';

class ModelUser extends React.Component {

constructor (
    uuid, firstName, lastName, avatar, task) {
        super();
        this.uuid=uuid;
        this.firstName=firstName;
        this.lastName=lastName;
        this.avatar=avatar;
        this.task=task;
        this.fullName=`${firstName} ${lastName}`;
    }
}

export default ModelUser;