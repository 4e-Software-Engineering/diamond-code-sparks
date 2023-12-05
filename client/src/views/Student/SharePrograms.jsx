import React, { useEffect, useState } from 'react';
import { Button, Modal, Select } from 'antd';
import { getClassroom, getSession, getSessions, getSessionsWithFilter, getStudent, getStudents, setSessionsToStudent } from '../../Utils/requests';



const ShareProgram = () => {
  let first = 0;
  let session_names = [];
  let submission_names = [];
  let saves_names = [];
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedPerson, setSelectedPerson] = useState();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isRemoveShareModalOpen, setIsRemoveShareModalOpen] = useState(false);
  const [sessionList, setSessionIds] = useState([]);
  const [submissionList, setSubmissions] = useState([]);
  const [savesList, setSaves] = useState();
  let student_id = JSON.parse(sessionStorage.getItem('user'));
  const[studentList, setStudentList] = useState(getStudent(student_id).classroom);
  const [listOfPrograms, setPrograms] = useState([]);
  //console.log(getStudent(student_id).classroom);
  const inputRef = React.useRef();
  useEffect(() => {
    let programs = []
    if(first <= 10){
      getStudent(student_id).then((res) => {
        //console.log(res.data);
        if(res.data) {
          res.data.sessions.forEach((session) => {
            getSession(session.id).then((result) => {
              //console.log(result.data);
              programs.push(result.data);
              setPrograms(programs);
              session_names.push(result.data);
              setSessionIds(session_names);
            });
          });
          console.log(sessionList);
         
          for(let i = 0; i < sessionList.length; i++){
            for(let j = 0; j < sessionList[i].saves.length;j++){
              saves_names.push(sessionList[i].saves[j]);
              setSaves(saves_names);
              console.log(savesList);
            }
            for(let j = 0; j < sessionList[i].submissions.length;j++){
              submission_names.push(sessionList[i].submissions[j]);
              setSubmissions(submission_names);
            }
          }
              
            
          getStudents(res.data.classroom.code).then((result) => {
            
            let temp = result.data
            for(let i = 0; i < result.data.length ;i++){
              if (result.data[i].id == student_id){
                  temp.splice(i,1);
              }
            }
            setStudentList(temp);
            //console.log(studentList);
          });
          
        } else {
          message.error(res.err);
        }
        
      });
      
      console.log(savesList);
      
      
      first += 1;
      if (inputRef.current){
        inputRef.current.focus();
      }
    }
  }, [inputRef]);
  //console.log(sessionList);

  
  const ShareButton = ({ onOpen }) => (
    <>
      <Button type="primary" onClick={onOpen} size = "large">
        Share
      </Button>
    </>
  );
  const RemoveShareButton = ({ onOpen }) => (
    <>
      <Button type="primary" onClick={onOpen} size="large">
        Remove Share
      </Button>
    </>
  );

  const showModal = (modalType) => {
    if(selectedPerson && selectedProgram){
      if (modalType === 'share') {
        if(selectProgram && selectedPerson){
          setIsShareModalOpen(true);
        }
        else{

        }
      } else if (modalType === 'removeShare') {
        setIsRemoveShareModalOpen(true);
      }
    }
  };
  const handleOk = (modalType) => {
    if (modalType === 'share') {
      setIsShareModalOpen(false);
      
        /**getSession(selectedProgram.session).then((result) => {
          
          getStudent(selectedPerson.id).then((res) => {
            let tempSess = res.data.sessions;
            console.log(tempSess);
            tempSess.push(result.data);
            console.log(tempSess);
            console.log(selectedPerson.id);
            setSessionsToStudent(selectedPerson.id,tempSess);
          });
        });**/
    } else if (modalType === 'removeShare') {
      setIsRemoveShareModalOpen(false);
    }
    //if ok pressed do something
  };
  const handleCancel = (modalType) => {
    if (modalType === 'share') {
      setIsShareModalOpen(false);
    } else if (modalType === 'removeShare') {
      setIsRemoveShareModalOpen(false);
    }
  };
  const selectProgram = (modalType) => {
    if (modalType === 'share') {
      setIsShareModalOpen(false);
    } else if (modalType === 'removeShare') {
      setIsRemoveShareModalOpen(false);
    }
  };

  return (
    <div>
        <div>
            <h2>Select a Program to Share:</h2>
        </div>
        <div>
        <ul>
          {savesList ? (
            savesList
              .map((activity) => (
                <div
                  key={activity.id}
                  id='list-item-wrapper'
                  onClick={() => setSelectedProgram(activity)}
                >
                  <li>{`${activity.activity}: Session ${activity.session}`}</li>
                </div>
              ))
          ) : (
            <div>
              <p>There is currently no submissions.</p>
              <p>
                When you submit a program, it will appear here.
              </p>
            </div>
          )}
        </ul>
        {selectedProgram ? (
            <h3>Selected Program: {selectedProgram.activity}</h3>
          ) : (
            <h3>Select a program.</h3>
          )}
        </div>
        <div>
            <h1> </h1>
            <h1> </h1>
            <h2>Select a Student to Change {selectedProgram.activity} Sharing Access:</h2>
        </div>
        <div>
        <ul>
          {studentList ? (
            studentList
              .map((name) => (
                <div
                  key={name.id}
                  id='share-item-wrapper'
                  onClick={() => setSelectedPerson(name)}
                >
                  <li>{`${name.name}`}</li>
                </div>
              ))
          ) : (
            <div>
              <p>There are no students.</p>
            </div>
          )}
        </ul>
        </div>
        <div>
        {selectedPerson ? (
            <h3>Selected Person: {selectedPerson.name}</h3>
          ) : (
            <h3>Select a person to manage their access.</h3>
          )}
        
        <ShareButton onOpen={() => showModal('share')} />
        
        <Modal
            title="Confirm Share Access"
            open={isShareModalOpen}
            onOk={() => handleOk('share')}
            onCancel={() => handleCancel('share')}
        >
            <p>Are you sure you wish to continue?</p>
        </Modal>
        <RemoveShareButton onOpen={() => showModal('removeShare')} />
        <Modal
            title="Confirm Removal of Share Access"
            open={isRemoveShareModalOpen}
            onOk={() => handleOk('removeShare')}
            onCancel={() => handleCancel('removeShare')}
        >
            <p>Are you sure you wish to continue?</p>
        </Modal>
        </div>
      
    </div>
  );
};
export default ShareProgram;