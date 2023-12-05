import React from 'react';

export default function StudentLoginForm(props) {
    const setStudentOptions = () => {
        let options = [];
        for (let i = 0; i < props.studentList.length; i++) {
            options.push(
                <option
                    key={i + 1}
                    value={props.studentList[i].id}
                    disabled={props.studentIds.includes(props.studentList[i].id)}
                >
                    {props.studentList[i].name}
                </option>
            );
        }
        return options;
    };

    const setAnimalOptions = () => {
        let options = [];
        for (let i = 0; i < props.animalList.length; i++) {
            options.push(
                <option key={i + 1} value={props.animalList[i]}>
                    {props.animalList[i]}
                </option>
            );
        }
        return options;
    };

    return (
        <div
            id={props.authFail ? 'box-auth-fail' : 'box'}
            onKeyPress={(e) => {
                if (e.key === 'Enter') props.handleLogin();
            }}
        >
            <div id='select-label'>Student {props.entryNum} Name:</div>
            <select
                name='student'
                defaultValue='default'
                onChange={(e) =>
                    props.updateStudentUsers(e.target.value, props.entryNum)
                }
            >
                <option key={0} value='default' disabled id='disabled-option'>
                    Student Name
                </option>
                {setStudentOptions()}
            </select>

            <div id='select-label'>Student {props.entryNum} Animal:</div>
            <select
                name='animal'
                defaultValue='default'
                onChange={(e) =>
                    props.updateStudentAnimals(e.target.value, props.entryNum)
                }
            >
                <option key={0} value='default' disabled id='disabled-option'>
                    Student Animal
                </option>
                {setAnimalOptions()}
            </select>

            {/* Password input field */}
            <div id='select-label'>Student {props.entryNum} Password:</div>
            <input
                type="password"
                name="password"
                placeholder="Secondary Password"
                onChange={(e) => props.updateStudentPassword(e.target.value, props.entryNum)}
                disabled={!props.hasSecondaryPassword}
            />
        </div>
    );
}
