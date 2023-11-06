import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Select } from 'antd';
function ShareProgram(){
    const [selectedPerson, setSelectedPerson] = useState({});
    function SelectPerson(){
        const onChange = (value) => {
            setSelectedPerson(value);
        };
        return(
            <Select
                showSearch
                placeholder="Select a student"
                onChange={onChange}
                options={[
                {
                    value: 'jack',
                    label: 'Jack',
                },
                {
                    value: 'lucy',
                    label: 'Lucy',
                },
                {
                    value: 'tom',
                    label: 'Tom',
                },
                ]}
            />
        );
    }
    
    function ShareButton(){
        const [isModalOpen, setIsModalOpen] = useState(false);

        const showModal = () => {
            setIsModalOpen(true);
        };
        
        const handleOk = () => {
            setIsModalOpen(false);
        };

        const handleCancel = () => {
            setIsModalOpen(false);
        };
        
        return (
            <>
            <Button type="primary" onClick={showModal}>
                Share
            </Button>
            <Modal title="Confirm Share Access" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Are you sure you wish to continue?</p>
            </Modal>
            </>
        );
    }
    function RemoveShareButton(){
        const [isModalOpen, setIsModalOpen] = useState(false);

        const showModal = () => {
            setIsModalOpen(true);
        };

        const handleOk = () => {
            setIsModalOpen(false);
        };

        const handleCancel = () => {
            setIsModalOpen(false);
        };

        return (
            <>
            <Button type="primary" onClick={showModal}>
                Remove Share
            </Button>
            <Modal title="Confirm Removal of Share Access" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Are you sure you wish to continue?</p>
            </Modal>
            </>
        );
    }

    return (
        
    );
}
export default ShareProgram;