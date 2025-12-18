import React from 'react';
import {Link} from "@tanstack/react-router";
import {type GroupResponse} from '../../../APIs';
import GroupIcon from '../../assets/settings_group.svg';

interface GroupListItem {
    groupData: GroupResponse
}

const GroupListItem: React.FC<GroupListItem> = ({groupData}) => {
    return (
        <li className='group-item'>
            <Link
                className='group-item__anchor'
                to={'/groups/$groupId'}
                params={{groupId: groupData.id ?? ''}}
            >
                <div className="group-item__wrapper">
                    {
                        groupData.imageUrl
                            ?
                            <img
                                className='group-item__logo'
                                src={groupData.imageUrl}
                                alt={`${groupData.name}`}
                            />
                            :
                            <div className='group-item__logo-placeholder'>
                                <img src={GroupIcon} alt="Group icon placeholder"/>
                            </div>
                    }
                    <div className='group-item__text'>
                        <h6>
                            {groupData.name}
                        </h6>
                        <span>
                            {groupData.description}
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default GroupListItem;