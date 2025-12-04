import React, {useMemo} from 'react';


interface ProfileIconComponent {
    url: string | null | undefined;
    name: string;
    lastName: string;
    maxSize: number
}

const ProfileIconComponent:React.FC<ProfileIconComponent> = ({url, name, lastName, maxSize}) => {


    const initials = useMemo(() => {
        return `${name[0]}${lastName[0]}`
    }, [name, lastName])

    if (url && url !== '') return (
        <img src={url} alt={`${initials} profile`} style={{height: maxSize, width: maxSize}}/>
    ); else return (
            <div className="profile-pic-placeholder" style={{height: maxSize, width: maxSize}}>
                <span>
                    {initials}
                </span>
            </div>
    );
};

export default ProfileIconComponent;