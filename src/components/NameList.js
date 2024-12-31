import React from 'react';
import Person from "./Person";

function NameList(props) {
    const names = ['Anil', 'Sunil', 'Prakash', 'Devesh'];
    const persons = [
        {
            id: 1,
            name: 'Anil',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Sunil',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Prakash',
            age: 22,
            skill: 'Vue'
        },
        {
            id: 4,
            name: 'Devesh',
            age: 28,
            skill: 'Node'
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return (
        <div>   
            {
                names.map(name => <h2 key={name}>{name}</h2>)
            }
            {personList}

        </div>
    );
}

export default NameList;