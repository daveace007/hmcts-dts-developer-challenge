
export const CurrentTask = () => {
    return (
        // <div>

        //     <span>Dev Ops</span>
        //     <br />
        //     <p>
        //         Automating the build, test, and deployment process using tools like Jenkins, 
        //         GitHub Actions, or GitLab CI to ensure fast and reliable software releases.
        //         Defining and provisioning infrastructure using code with tools like Terraform, 
        //         Ansible, or AWS CloudFormation — making environments reproducible and version-controlled.
        //     </p>
        //     <br />
        //     <div>
        //         <span>Status:</span>
        //         <span>To do</span>
        //     </div>
        //     <div>
        //         <span>Due Date/Time:</span>
        //         <span>2025-06-25 01:30:00</span>
        //     </div>

        // </div>
        <div className='card' style={{ width: '18rem' }}>
            <div className='card-body'>
                <h5 className='card-title'>Dev Ops</h5>
                <p className='card-text'>
                    Automating the build, test, and deployment process using tools like Jenkins,
                    GitHub Actions, or GitLab CI to ensure fast and reliable software releases.
                    Defining and provisioning infrastructure using code with tools like Terraform,
                    Ansible, or AWS CloudFormation — making environments reproducible and version-controlled.
                </p>
            </div>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                    <span>Status:</span>
                    <span>To do</span>
                </li>
                <li className='list-group-item'>
                    <span>Due Date/Time:</span>
                    <span>2025-06-25 01:30:00</span>
                </li>
            </ul>
        </div>

    );
}