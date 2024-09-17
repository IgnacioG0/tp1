const addInfo = (event) => {
    event.preventDefault();

    let listStudents = getInfoFromStorage();

    const nextNumber = listStudents.length > 0 ? listStudents.length + 1 : 1;

    const student = {
        number: nextNumber,
        name: document.getElementById('name').value,
        lastName: document.getElementById('lastName').value
    };

    listStudents = getInfoFromStorage();
    
    listStudents.push(student);

    localStorage.setItem('listStudents', JSON.stringify(listStudents));

    document.getElementById('name').value = null;
    document.getElementById('lastName').value = null;

    window.location.href = 'alumnos.html';
};